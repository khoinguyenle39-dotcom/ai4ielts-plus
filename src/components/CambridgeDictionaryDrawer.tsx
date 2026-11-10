"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  BookOpen,
  Search,
  Volume2,
  X,
  Bookmark,
  BookmarkCheck,
  History,
  ExternalLink,
  Sparkles,
  Loader2,
  ArrowRight,
  Trash2,
  Layers,
  Compass,
  Quote,
  GitCompare,
} from "lucide-react";
import { COLLOCATIONS, Collocation } from "@/data/collocations";
import type {
  CambridgeLookupResponse,
  DictionaryMeaningGroup,
} from "@/app/api/dictionary/route";

const HISTORY_STORAGE_KEY = "ai4ielts_cambridge_history_v1";
const SAVED_STORAGE_KEY = "ai4ielts_cambridge_saved_v1";

const SUGGESTED_IELTS_WORDS = [
  "gate",
  "sustainable",
  "consensus",
  "deterrent",
  "alleviate",
  "detrimental",
  "inevitable",
  "ubiquitous",
];

const POS_VI_FALLBACK: Record<string, string> = {
  noun: "Danh từ (Noun)",
  verb: "Động từ (Verb)",
  adjective: "Tính từ (Adjective)",
  adverb: "Trạng từ (Adverb)",
  preposition: "Giới từ (Preposition)",
  conjunction: "Liên từ (Conjunction)",
  pronoun: "Đại từ (Pronoun)",
  idiom: "Thành ngữ / Cụm từ",
};

interface SavedWordItem {
  word: string;
  phonetic: string;
  vi: string;
  savedAt: number;
}

/**
 * Fallback trực tiếp từ trình duyệt người dùng (IP cá nhân không bao giờ bị chặn bởi Cloudflare/Google)
 * nếu API serverless bị giới hạn băng thông hoặc trả về rỗng.
 */
async function clientSideFallbackLookup(word: string): Promise<CambridgeLookupResponse> {
  const clean = word.trim().toLowerCase();
  const [fdaRes, dmDefRes, dmSynRes, dmColRes, gtxRes] = await Promise.allSettled([
    fetch(`https://freedictionaryapi.com/api/v1/entries/en/${encodeURIComponent(clean)}`),
    fetch(`https://api.datamuse.com/words?sp=${encodeURIComponent(clean)}&qe=sp&md=dpfr&max=1`),
    fetch(`https://api.datamuse.com/words?ml=${encodeURIComponent(clean)}&max=14`),
    fetch(`https://api.datamuse.com/words?rel_bgb=${encodeURIComponent(clean)}&max=8`),
    fetch(
      `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=vi&dt=t&dt=bd&dj=1&q=${encodeURIComponent(
        clean
      )}`
    ),
  ]);

  const fda =
    fdaRes.status === "fulfilled" && fdaRes.value.ok ? await fdaRes.value.json() : null;
  const dmDef =
    dmDefRes.status === "fulfilled" && dmDefRes.value.ok ? await dmDefRes.value.json() : [];
  const dmSyn =
    dmSynRes.status === "fulfilled" && dmSynRes.value.ok ? await dmSynRes.value.json() : [];
  const dmCol =
    dmColRes.status === "fulfilled" && dmColRes.value.ok ? await dmColRes.value.json() : [];
  const gtx =
    gtxRes.status === "fulfilled" && gtxRes.value.ok ? await gtxRes.value.json() : {};

  const primaryVi =
    (gtx.sentences || [])
      .map((s: any) => s.trans || "")
      .join("")
      .trim() || "";

  const gtxDictMap: Record<string, string[]> = {};
  if (Array.isArray(gtx.dict)) {
    for (const d of gtx.dict) {
      const pos = String(d.pos || "noun").toLowerCase();
      if (Array.isArray(d.terms)) gtxDictMap[pos] = d.terms.slice(0, 6);
    }
  }

  const allSynonyms: string[] = Array.isArray(dmSyn)
    ? dmSyn
        .map((x: any) => String(x.word || "").trim())
        .filter((w) => w && w.toLowerCase() !== clean && !w.includes(" "))
        .slice(0, 12)
    : [];

  const commonPhrases: string[] = Array.isArray(dmCol)
    ? dmCol
        .map((x: any) => String(x.word || "").trim().toLowerCase())
        .filter((w) => w.length > 2 && !["the", "and", "for", "with"].includes(w))
        .slice(0, 6)
        .map((w) => `${w} ${clean}`)
    : [];

  let phoneticUk = "";
  const enEntries = (fda?.entries || []).filter((e: any) => e.language?.code === "en");
  for (const e of enEntries) {
    for (const p of e.pronunciations || []) {
      if (p.type === "ipa" && p.text && !phoneticUk) {
        phoneticUk = p.text;
      }
    }
  }

  const meanings: DictionaryMeaningGroup[] = [];
  for (const e of enEntries) {
    const pos = String(e.partOfSpeech || "noun").toLowerCase();
    const senses = (e.senses || []).slice(0, 4);
    if (senses.length === 0) continue;

    meanings.push({
      partOfSpeech: pos,
      partOfSpeechVi: POS_VI_FALLBACK[pos] || pos,
      contextSummary:
        pos === "noun"
          ? "Danh từ đếm được / không đếm được trong câu"
          : pos === "verb"
          ? "Động từ chỉ hành động / trạng thái"
          : "Ngữ cảnh giao tiếp & học thuật IELTS",
      viTerms: gtxDictMap[pos] || (primaryVi ? [primaryVi] : []),
      definitions: senses.map((s: any) => ({
        en: String(s.definition || ""),
        vi: primaryVi,
        context:
          Array.isArray(s.tags) && s.tags.length > 0
            ? s.tags.join(" • ")
            : "Thông dụng & Học thuật",
        example:
          (Array.isArray(s.examples) && s.examples[0]) ||
          (Array.isArray(s.quotes) && s.quotes[0]?.text) ||
          `The term "${clean}" is widely used in this context.`,
        synonyms: (s.synonyms || []).slice(0, 4),
      })),
      synonyms: allSynonyms.slice(0, 8),
      antonyms: [],
    });
  }

  if (meanings.length === 0 && Array.isArray(dmDef?.[0]?.defs)) {
    const defs = dmDef[0].defs.slice(0, 4).map((line: string) => {
      const [p, ...rest] = line.split("\t");
      return { pos: p, en: rest.join(" ") };
    });
    meanings.push({
      partOfSpeech: "noun",
      partOfSpeechVi: "Danh từ / Từ vựng",
      contextSummary: "Ngữ cảnh thông dụng & học thuật",
      viTerms: primaryVi ? [primaryVi] : [],
      definitions: defs.map((d: any) => ({
        en: d.en,
        vi: primaryVi,
        context: "Ngữ cảnh học thuật & đời sống",
        example: `This example illustrates how "${clean}" is used in context.`,
        synonyms: allSynonyms.slice(0, 4),
      })),
      synonyms: allSynonyms.slice(0, 8),
      antonyms: [],
    });
  }

  const slug = encodeURIComponent(clean.replace(/\s+/g, "-"));
  return {
    word: clean,
    phoneticUk,
    phoneticUs: phoneticUk,
    audioUk: "",
    audioUs: "",
    primaryVi,
    contexts: ["Giao tiếp & Học thuật IELTS"],
    commonPhrases,
    allSynonyms,
    allAntonyms: [],
    meanings,
    cambridgeEnViUrl: `https://dictionary.cambridge.org/vi/dictionary/english-vietnamese/${slug}`,
    cambridgeEnUrl: `https://dictionary.cambridge.org/vi/dictionary/english/${slug}`,
  };
}

export default function CambridgeDictionaryDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"lookup" | "saved" | "history">("lookup");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<CambridgeLookupResponse | null>(null);

  const [history, setHistory] = useState<string[]>([]);
  const [savedWords, setSavedWords] = useState<SavedWordItem[]>([]);
  const [selectedPageText, setSelectedPageText] = useState<string>("");

  const inputRef = useRef<HTMLInputElement | null>(null);

  // Load history & saved words from localStorage
  useEffect(() => {
    try {
      const h = localStorage.getItem(HISTORY_STORAGE_KEY);
      if (h) setHistory(JSON.parse(h));
      const s = localStorage.getItem(SAVED_STORAGE_KEY);
      if (s) setSavedWords(JSON.parse(s));
    } catch {
      // ignore
    }
  }, []);

  const lookupWord = useCallback(async (targetWord: string) => {
    const clean = targetWord.trim().replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
    if (!clean) return;

    setQuery(clean);
    setActiveTab("lookup");
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`/api/dictionary?q=${encodeURIComponent(clean)}`, {
        cache: "no-store",
      });
      let data: CambridgeLookupResponse | null = null;
      if (res.ok) {
        data = await res.json();
      }

      // Nếu server trả về thiếu meanings (do bị rate-limit trên cloud), tự động gọi trực tiếp từ trình duyệt
      if (!data || !Array.isArray(data.meanings) || data.meanings.length === 0) {
        data = await clientSideFallbackLookup(clean);
      }

      if (!data || (data.meanings.length === 0 && !data.primaryVi)) {
        throw new Error("Không tìm thấy từ này");
      }

      setResult(data);

      // Lưu vào lịch sử tra từ
      setHistory((prev) => {
        const next = [
          clean.toLowerCase(),
          ...prev.filter((w) => w.toLowerCase() !== clean.toLowerCase()),
        ].slice(0, 25);
        try {
          localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(next));
        } catch {}
        return next;
      });
    } catch {
      setError(`Không tìm thấy dữ liệu cho "${clean}". Hãy kiểm tra lại chính tả.`);
    } finally {
      setLoading(false);
    }
  }, []);

  // Tự động tra từ mặc định lần đầu mở nếu chưa có kết quả
  useEffect(() => {
    if (isOpen && !result && !loading && !query) {
      lookupWord("gate");
    }
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 120);
    }
  }, [isOpen, result, loading, query, lookupWord]);

  // Bắt sự kiện bôi đen từ tiếng Anh trên trang để cho phép tra nhanh 1-click
  useEffect(() => {
    const handleSelectionChange = () => {
      const sel = window.getSelection()?.toString().trim() || "";
      const cleaned = sel.replace(/^[^a-zA-Z]+|[^a-zA-Z]+$/g, "");
      if (
        cleaned.length >= 2 &&
        cleaned.length <= 35 &&
        /^[a-zA-Z\s\-']+$/.test(cleaned) &&
        cleaned.split(/\s+/).length <= 4
      ) {
        setSelectedPageText(cleaned);
      } else {
        setSelectedPageText("");
      }
    };

    document.addEventListener("mouseup", handleSelectionChange);
    document.addEventListener("keyup", handleSelectionChange);
    return () => {
      document.removeEventListener("mouseup", handleSelectionChange);
      document.removeEventListener("keyup", handleSelectionChange);
    };
  }, []);

  const playAudio = (audioUrl: string, fallbackText: string, lang: "en-GB" | "en-US") => {
    if (audioUrl) {
      const audio = new Audio(audioUrl);
      audio.play().catch(() => speakFallback(fallbackText, lang));
      return;
    }
    speakFallback(fallbackText, lang);
  };

  const speakFallback = (text: string, lang: "en-GB" | "en-US") => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang;
    u.rate = 0.92;
    window.speechSynthesis.speak(u);
  };

  const isWordSaved = (w: string) =>
    savedWords.some((item) => item.word.toLowerCase() === w.toLowerCase());

  const toggleSaveWord = (entry: CambridgeLookupResponse) => {
    setSavedWords((prev) => {
      const exists = prev.some((i) => i.word.toLowerCase() === entry.word.toLowerCase());
      const next = exists
        ? prev.filter((i) => i.word.toLowerCase() !== entry.word.toLowerCase())
        : [
            {
              word: entry.word,
              phonetic: entry.phoneticUk || entry.phoneticUs || "",
              vi: entry.primaryVi,
              savedAt: Date.now(),
            },
            ...prev,
          ];
      try {
        localStorage.setItem(SAVED_STORAGE_KEY, JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  // Tìm các cụm Collocation IELTS trong kho 108 cụm có chứa từ đang tra
  const matchingCollocations: Collocation[] = result
    ? COLLOCATIONS.filter((c) => {
        const w = result.word.toLowerCase();
        return (
          c.left.toLowerCase().includes(w) ||
          c.right.toLowerCase().includes(w) ||
          (c.alt && c.alt.some((a) => a.toLowerCase() === w))
        );
      }).slice(0, 5)
    : [];

  return (
    <>
      {/* Nút Cuốn Sách Từ Điển Cambridge luôn cố định bên phải màn hình */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[60] flex flex-col items-end gap-2">
        {/* Gợi ý tra nhanh khi người dùng bôi đen 1 từ trên màn hình */}
        {selectedPageText && !isOpen && (
          <button
            onClick={() => {
              setIsOpen(true);
              lookupWord(selectedPageText);
              setSelectedPageText("");
            }}
            className="mr-2 px-3.5 py-2 rounded-2xl bg-[#1d2a57] text-white text-xs font-bold shadow-xl border border-amber-300/60 flex items-center gap-2 hover:bg-[#141e40] transition animate-in fade-in slide-in-from-right-3"
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-300 shrink-0" />
            <span>
              Tra từ điển: <b className="text-amber-300">“{selectedPageText}”</b>
            </span>
          </button>
        )}

        <button
          onClick={() => {
            setIsOpen((prev) => !prev);
            if (!isOpen && selectedPageText) {
              lookupWord(selectedPageText);
              setSelectedPageText("");
            }
          }}
          aria-label="Mở Từ điển Cambridge"
          title="Tra Từ điển Đa Tầng (Cambridge • Wiktionary • WordNet)"
          className="group flex items-center gap-2.5 pl-3.5 pr-3 py-3.5 rounded-l-2xl bg-[#1d2a57] hover:bg-[#141e40] text-white shadow-xl border-y border-l border-white/20 transition-all duration-200 hover:pr-5"
        >
          <div className="relative w-9 h-9 rounded-xl bg-[#e11b22] flex items-center justify-center shadow-md shrink-0 group-hover:scale-105 transition">
            <BookOpen className="w-5 h-5 text-white" />
            {savedWords.length > 0 && (
              <span className="absolute -top-1.5 -left-1.5 min-w-4 h-4 px-1 rounded-full bg-amber-400 text-[#1d2a57] text-[10px] font-black flex items-center justify-center">
                {savedWords.length}
              </span>
            )}
          </div>
          <div className="text-left leading-tight">
            <div className="text-[10px] font-extrabold uppercase tracking-wider text-amber-300">
              Cambridge
            </div>
            <div className="text-xs font-black text-white whitespace-nowrap">
              Từ điển
            </div>
          </div>
        </button>
      </div>

      {/* Lớp nền mờ khi mở ngăn kéo trên màn hình nhỏ */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-slate-900/30 backdrop-blur-[1px] z-[65] sm:hidden"
        />
      )}

      {/* Ngăn kéo Từ điển Cambridge bên phải màn hình */}
      <aside
        className={`fixed top-0 right-0 h-full w-full sm:w-[450px] bg-white border-l border-slate-200 shadow-2xl z-[70] flex flex-col transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
      >
        {/* Header chuẩn phong cách Cambridge Dictionary */}
        <div className="bg-[#1d2a57] text-white p-4 space-y-3 shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#e11b22] flex items-center justify-center shadow">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h2 className="font-black text-base tracking-tight text-white">
                    Cambridge Dictionary
                  </h2>
                  <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-amber-400 text-[#1d2a57]">
                    PRO MULTI-API
                  </span>
                </div>
                <p className="text-[11px] text-slate-300">
                  Từ loại • Ngữ cảnh • Câu mẫu song ngữ • Từ đồng nghĩa
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition"
              title="Đóng từ điển"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Ô tìm kiếm từ vựng */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              lookupWord(query);
            }}
            className="relative flex items-center"
          >
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Nhập bất kỳ từ tiếng Anh nào (VD: gate, alleviate)..."
              className="w-full pl-9 pr-20 py-2.5 rounded-xl bg-white text-slate-900 placeholder:text-slate-400 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="absolute right-14 text-slate-400 hover:text-slate-600 p-1"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
            <button
              type="submit"
              className="absolute right-1.5 px-3 py-1.5 rounded-lg bg-[#e11b22] hover:bg-[#b91c1c] text-white text-xs font-bold transition"
            >
              Tra
            </button>
          </form>

          {/* Thanh chuyển Tab */}
          <div className="flex items-center gap-1.5 pt-0.5">
            <button
              onClick={() => setActiveTab("lookup")}
              className={`flex-1 py-1.5 px-2.5 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                activeTab === "lookup"
                  ? "bg-white text-[#1d2a57]"
                  : "bg-white/10 text-slate-200 hover:bg-white/20"
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              Nghĩa & Cách dùng
            </button>
            <button
              onClick={() => setActiveTab("saved")}
              className={`flex-1 py-1.5 px-2.5 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                activeTab === "saved"
                  ? "bg-white text-[#1d2a57]"
                  : "bg-white/10 text-slate-200 hover:bg-white/20"
              }`}
            >
              <Bookmark className="w-3.5 h-3.5" />
              Đã lưu ({savedWords.length})
            </button>
            <button
              onClick={() => setActiveTab("history")}
              className={`flex-1 py-1.5 px-2.5 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                activeTab === "history"
                  ? "bg-white text-[#1d2a57]"
                  : "bg-white/10 text-slate-200 hover:bg-white/20"
              }`}
            >
              <History className="w-3.5 h-3.5" />
              Lịch sử ({history.length})
            </button>
          </div>
        </div>

        {/* Nội dung chính của Từ điển */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
          {/* Gợi ý từ vựng IELTS phổ biến */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            <span className="text-[11px] font-bold text-slate-400 shrink-0">Gợi ý:</span>
            {SUGGESTED_IELTS_WORDS.map((w) => (
              <button
                key={w}
                onClick={() => lookupWord(w)}
                className="px-2.5 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#1d2a57] hover:text-[#1d2a57] shrink-0 transition"
              >
                {w}
              </button>
            ))}
          </div>

          {activeTab === "saved" ? (
            <div className="space-y-2.5">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Sổ từ vựng đã lưu ({savedWords.length})
              </div>
              {savedWords.length === 0 ? (
                <div className="p-8 rounded-2xl bg-white border border-slate-200 text-center text-sm text-slate-500">
                  Chưa có từ nào được lưu. Bấm biểu tượng đánh dấu ở mỗi từ để lưu ôn tập!
                </div>
              ) : (
                savedWords.map((item) => (
                  <div
                    key={item.word}
                    className="p-3.5 rounded-2xl bg-white border border-slate-200 flex items-center justify-between gap-2 hover:border-[#1d2a57] transition"
                  >
                    <button
                      onClick={() => lookupWord(item.word)}
                      className="text-left flex-1"
                    >
                      <div className="font-black text-slate-900 text-sm">
                        {item.word}{" "}
                        {item.phonetic && (
                          <span className="font-mono text-xs font-normal text-slate-500">
                            {item.phonetic}
                          </span>
                        )}
                      </div>
                      <div className="text-xs font-semibold text-[#e11b22]">{item.vi}</div>
                    </button>
                    <button
                      onClick={() =>
                        setSavedWords((prev) => {
                          const next = prev.filter((x) => x.word !== item.word);
                          localStorage.setItem(SAVED_STORAGE_KEY, JSON.stringify(next));
                          return next;
                        })
                      }
                      className="p-2 text-slate-400 hover:text-red-600"
                      title="Xóa khỏi sổ từ"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>
          ) : activeTab === "history" ? (
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Từ đã tra gần đây ({history.length})
                </span>
                {history.length > 0 && (
                  <button
                    onClick={() => {
                      setHistory([]);
                      localStorage.removeItem(HISTORY_STORAGE_KEY);
                    }}
                    className="text-xs font-bold text-red-600 hover:underline"
                  >
                    Xóa lịch sử
                  </button>
                )}
              </div>
              {history.length === 0 ? (
                <div className="p-8 rounded-2xl bg-white border border-slate-200 text-center text-sm text-slate-500">
                  Chưa có lịch sử tra từ.
                </div>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {history.map((w) => (
                    <button
                      key={w}
                      onClick={() => lookupWord(w)}
                      className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-sm font-bold text-slate-800 hover:border-[#1d2a57] hover:text-[#1d2a57] transition"
                    >
                      {w}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : loading ? (
            <div className="p-12 rounded-2xl bg-white border border-slate-200 flex flex-col items-center justify-center gap-3 text-slate-500">
              <Loader2 className="w-7 h-7 animate-spin text-[#1d2a57]" />
              <span className="text-sm font-semibold">
                Đang tổng hợp dữ liệu từ Cambridge, Wiktionary & WordNet...
              </span>
            </div>
          ) : error ? (
            <div className="p-5 rounded-2xl bg-white border border-red-200 space-y-3 text-center">
              <div className="text-sm font-bold text-red-700">{error}</div>
              {query && (
                <a
                  href={`https://dictionary.cambridge.org/vi/dictionary/english-vietnamese/${encodeURIComponent(
                    query.trim()
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#1d2a57] text-white text-xs font-bold"
                >
                  Tra trực tiếp trên Cambridge.org <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          ) : result ? (
            <div className="space-y-4">
              {/* 1. Thẻ từ chính: Headword, Nghĩa chính, Từ loại tổng quan, IPA UK/US */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-2xl font-black text-[#1d2a57] tracking-tight">
                        {result.word}
                      </h3>
                      {result.baseWord && result.baseWord !== result.word && (
                        <button
                          onClick={() => lookupWord(result.baseWord!)}
                          className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200 hover:bg-amber-100"
                        >
                          Nguyên mẫu: {result.baseWord}
                        </button>
                      )}
                    </div>
                    {result.primaryVi && (
                      <div className="text-base font-extrabold text-[#e11b22]">
                        {result.primaryVi}
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => toggleSaveWord(result)}
                    className={`p-2 rounded-xl border transition shrink-0 ${
                      isWordSaved(result.word)
                        ? "bg-amber-50 border-amber-300 text-amber-600"
                        : "bg-slate-50 border-slate-200 text-slate-500 hover:text-[#1d2a57]"
                    }`}
                    title={isWordSaved(result.word) ? "Đã lưu vào sổ từ" : "Lưu từ này"}
                  >
                    {isWordSaved(result.word) ? (
                      <BookmarkCheck className="w-5 h-5 fill-amber-400" />
                    ) : (
                      <Bookmark className="w-5 h-5" />
                    )}
                  </button>
                </div>

                {/* Tóm tắt nhanh các Từ loại (Part of Speech) của từ này */}
                {result.meanings.length > 0 && (
                  <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-500">
                      <Layers className="w-3.5 h-3.5 text-[#1d2a57]" />
                      Từ loại:
                    </span>
                    {result.meanings.map((m, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-slate-100 text-[#1d2a57] text-[11px] font-bold"
                      >
                        {m.partOfSpeechVi}
                      </span>
                    ))}
                  </div>
                )}

                {/* Các dạng biến thể từ (Word Forms) nếu có */}
                {result.wordForms && result.wordForms.length > 0 && (
                  <div className="text-[11px] text-slate-600 bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-100">
                    <b className="text-slate-700">Biến thể từ:</b>{" "}
                    {result.wordForms.join(" • ")}
                  </div>
                )}

                {/* Phiên âm & Nút nghe UK / US chuẩn Cambridge */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <button
                    onClick={() => playAudio(result.audioUk, result.word, "en-GB")}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#1d2a57] text-white text-xs font-bold hover:bg-[#141e40] transition"
                  >
                    <Volume2 className="w-3.5 h-3.5 text-amber-300" />
                    <span>UK</span>
                    {result.phoneticUk && (
                      <span className="font-mono font-normal text-slate-200">
                        {result.phoneticUk}
                      </span>
                    )}
                  </button>

                  <button
                    onClick={() => playAudio(result.audioUs, result.word, "en-US")}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#e11b22] text-white text-xs font-bold hover:bg-[#b91c1c] transition"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>US</span>
                    {result.phoneticUs && (
                      <span className="font-mono font-normal text-red-100">
                        {result.phoneticUs}
                      </span>
                    )}
                  </button>
                </div>
              </div>

              {/* 2. Khung Ngữ cảnh sử dụng & Cụm từ đi kèm (Context & Collocations) */}
              {((result.contexts && result.contexts.length > 0) ||
                (result.commonPhrases && result.commonPhrases.length > 0)) && (
                <div className="p-3.5 rounded-2xl bg-indigo-50/70 border border-indigo-200/80 space-y-2.5">
                  <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#1d2a57]">
                    <Compass className="w-4 h-4 text-indigo-600" />
                    Ngữ cảnh sử dụng & Cụm từ đi kèm
                  </div>

                  {result.contexts && result.contexts.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {result.contexts.map((ctx, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-white border border-indigo-200 text-indigo-950 text-xs font-semibold"
                        >
                          {ctx}
                        </span>
                      ))}
                    </div>
                  )}

                  {result.commonPhrases && result.commonPhrases.length > 0 && (
                    <div className="space-y-1">
                      <div className="text-[11px] font-bold text-slate-600">
                        Cụm từ ghép phổ biến trong tiếng Anh (Collocations):
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {result.commonPhrases.map((phrase) => (
                          <span
                            key={phrase}
                            className="px-2.5 py-1 rounded-lg bg-white/90 border border-slate-200 text-xs font-bold text-[#1d2a57]"
                          >
                            {phrase}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* 3. Các nhóm nghĩa chi tiết theo từng Từ loại (Từ loại + Ngữ cảnh + Định nghĩa + Câu mẫu + Đồng nghĩa) */}
              {result.meanings.map((group, gIdx) => (
                <div
                  key={gIdx}
                  className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3.5"
                >
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 gap-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2.5 py-1 rounded-lg bg-[#1d2a57] text-white text-xs font-bold">
                        {group.partOfSpeechVi}
                      </span>
                      {group.contextSummary && (
                        <span className="text-[11px] font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-100">
                          {group.contextSummary}
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] font-semibold text-slate-400 uppercase shrink-0">
                      {group.partOfSpeech}
                    </span>
                  </div>

                  {/* Các từ nghĩa tiếng Việt nhanh theo từ loại */}
                  {group.viTerms.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {group.viTerms.map((term) => (
                        <span
                          key={term}
                          className="px-2.5 py-1 rounded-lg bg-red-50 text-[#e11b22] border border-red-200 text-xs font-bold"
                        >
                          {term}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Định nghĩa chi tiết Anh - Việt, Ngữ cảnh từng nghĩa & Câu mẫu */}
                  <div className="space-y-3.5">
                    {group.definitions.map((def, dIdx) => (
                      <div
                        key={dIdx}
                        className="pl-3 border-l-2 border-[#1d2a57] space-y-1.5"
                      >
                        {def.context && (
                          <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-bold">
                            Ngữ cảnh: {def.context}
                          </div>
                        )}

                        <div className="text-sm font-bold text-slate-900 leading-snug">
                          {def.en}
                        </div>

                        {def.vi && (
                          <div className="text-xs font-bold text-[#e11b22]">
                            → Nghĩa: {def.vi}
                          </div>
                        )}

                        {def.example && (
                          <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/80 space-y-1">
                            <button
                              onClick={() => speakFallback(def.example!, "en-GB")}
                              className="flex items-start gap-1.5 text-left text-xs italic font-semibold text-slate-800 hover:text-[#1d2a57] transition w-full"
                              title="Bấm để nghe câu mẫu"
                            >
                              <Quote className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                              <span>
                                <b>Câu mẫu:</b> “{def.example}” 🔊
                              </span>
                            </button>
                            {def.exampleVi && (
                              <div className="text-[11px] text-slate-600 pl-5">
                                ≈ {def.exampleVi}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Từ đồng nghĩa của từ loại này */}
                  {group.synonyms.length > 0 && (
                    <div className="pt-2 border-t border-slate-100 space-y-1.5">
                      <div className="flex items-center gap-1 text-[11px] font-bold text-slate-500">
                        <GitCompare className="w-3.5 h-3.5 text-emerald-600" />
                        Từ đồng nghĩa ({group.partOfSpeechVi}):
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {group.synonyms.map((syn) => (
                          <button
                            key={syn}
                            onClick={() => lookupWord(syn)}
                            className="text-xs font-bold px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-[#1d2a57] hover:text-white hover:border-[#1d2a57] transition"
                          >
                            {syn}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Từ trái nghĩa nếu có */}
                  {group.antonyms && group.antonyms.length > 0 && (
                    <div className="pt-1.5 flex flex-wrap items-center gap-1.5">
                      <span className="text-[11px] font-bold text-slate-400">
                        Trái nghĩa:
                      </span>
                      {group.antonyms.map((ant) => (
                        <button
                          key={ant}
                          onClick={() => lookupWord(ant)}
                          className="text-xs font-semibold px-2 py-0.5 rounded bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-600 hover:text-white transition"
                        >
                          {ant}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* 4. Tổng hợp Mở rộng Từ đồng nghĩa (Synonyms) & Trái nghĩa (Antonyms) */}
              {result.allSynonyms && result.allSynonyms.length > 0 && (
                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2.5">
                  <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-emerald-950">
                    <GitCompare className="w-4 h-4 text-emerald-600" />
                    Kho từ đồng nghĩa & Paraphrase IELTS ({result.allSynonyms.length})
                  </div>
                  <p className="text-[11px] text-slate-600">
                    Bấm vào bất kỳ từ đồng nghĩa nào bên dưới để tra nghĩa và cách dùng ngay:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {result.allSynonyms.map((syn) => (
                      <button
                        key={syn}
                        onClick={() => lookupWord(syn)}
                        className="px-2.5 py-1 rounded-xl bg-white border border-emerald-300 text-xs font-bold text-emerald-900 hover:bg-[#1d2a57] hover:text-white hover:border-[#1d2a57] transition shadow-2xs"
                      >
                        {syn}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Các cụm Collocation IELTS học thuật có chứa từ này */}
              {matchingCollocations.length > 0 && (
                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-3">
                  <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#1d2a57]">
                    <Sparkles className="w-4 h-4 text-[#e11b22]" />
                    Cụm Collocation IELTS với “{result.word}”
                  </div>
                  {matchingCollocations.map((col) => (
                    <div
                      key={col.id}
                      className="p-3 rounded-xl bg-white border border-amber-200 space-y-1.5 text-xs"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-black text-sm text-slate-900">
                          {col.left} {col.right}
                        </span>
                        <span className="font-bold text-[#e11b22]">{col.vi}</span>
                      </div>
                      <div className="text-slate-700">
                        <b>Cách dùng:</b> {col.usage}
                      </div>
                      <div className="text-slate-700">
                        <b>Ngữ cảnh:</b> {col.context}
                      </div>
                      {col.examples[0] && (
                        <div className="italic text-slate-600">
                          VD: “{col.examples[0]}”
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Liên kết mở trang Cambridge Dictionary gốc */}
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200 flex flex-col gap-2">
                <div className="text-[11px] font-bold text-slate-400 uppercase">
                  Xem trực tiếp trên Cambridge.org
                </div>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={result.cambridgeEnViUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#1d2a57] text-white text-xs font-bold hover:bg-[#141e40] transition"
                  >
                    Cambridge Anh – Việt <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={result.cambridgeEnUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold hover:bg-slate-200 transition"
                  >
                    Cambridge Anh – Anh <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </aside>
    </>
  );
}
