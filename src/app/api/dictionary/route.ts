import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

export interface DictionaryDefinitionItem {
  en: string;
  vi: string;
  context?: string;
  example?: string;
  exampleVi?: string;
  synonyms?: string[];
}

export interface DictionaryMeaningGroup {
  partOfSpeech: string;
  partOfSpeechVi: string;
  contextSummary?: string;
  viTerms: string[];
  definitions: DictionaryDefinitionItem[];
  synonyms: string[];
  antonyms: string[];
}

export interface CambridgeLookupResponse {
  word: string;
  baseWord?: string;
  wordForms?: string[];
  phoneticUk: string;
  phoneticUs: string;
  audioUk: string;
  audioUs: string;
  primaryVi: string;
  contexts: string[];
  commonPhrases: string[];
  allSynonyms: string[];
  allAntonyms: string[];
  meanings: DictionaryMeaningGroup[];
  cambridgeEnViUrl: string;
  cambridgeEnUrl: string;
}

const POS_VI_MAP: Record<string, string> = {
  noun: "Danh từ (Noun)",
  verb: "Động từ (Verb)",
  adjective: "Tính từ (Adjective)",
  adverb: "Trạng từ (Adverb)",
  preposition: "Giới từ (Preposition)",
  conjunction: "Liên từ (Conjunction)",
  pronoun: "Đại từ (Pronoun)",
  interjection: "Thán từ (Interjection)",
  determiner: "Từ hạn định (Determiner)",
  article: "Mạo từ (Article)",
  numeral: "Số từ (Numeral)",
  phrase: "Cụm từ (Phrase)",
  idiom: "Thành ngữ / Cụm từ (Idiom)",
  "phrasal verb": "Cụm động từ (Phrasal Verb)",
};

const TAG_VI_MAP: Record<string, string> = {
  transitive: "Ngoại động từ (có tân ngữ)",
  intransitive: "Nội động từ (không tân ngữ)",
  countable: "Danh từ đếm được",
  uncountable: "Danh từ không đếm được",
  plural: "Số nhiều",
  singular: "Số ít",
  formal: "Trang trọng / Học thuật (Formal)",
  informal: "Thân mật / Giao tiếp (Informal)",
  slang: "Tiếng lóng (Slang)",
  figurative: "Nghĩa bóng / Ẩn dụ",
  figuratively: "Nghĩa bóng / Ẩn dụ",
  literal: "Nghĩa đen",
  idiomatic: "Thành ngữ",
  computing: "Công nghệ / Máy tính",
  internet: "Mạng / Internet",
  law: "Pháp luật",
  legal: "Pháp lý",
  medicine: "Y học / Sức khỏe",
  medical: "Y khoa",
  business: "Kinh doanh / Thương mại",
  finance: "Tài chính",
  economics: "Kinh tế học",
  politics: "Chính trị",
  science: "Khoa học",
  biology: "Sinh học",
  physics: "Vật lý",
  chemistry: "Hóa học",
  engineering: "Kỹ thuật",
  architecture: "Kiến trúc",
  music: "Âm nhạc",
  sports: "Thể thao",
  education: "Giáo dục",
  military: "Quân sự",
  aviation: "Hàng không",
  british: "Anh - Anh (UK)",
  uk: "Anh - Anh (UK)",
  us: "Anh - Mỹ (US)",
  american: "Anh - Mỹ (US)",
};

const BROWSER_HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
  Accept: "application/json, text/plain, */*",
  "Accept-Language": "en-US,en;q=0.9,vi;q=0.8",
};

interface LocalVocabEntry {
  term: string;
  definition: string;
  pattern: string;
  phonetic: string;
  partOfSpeech: string;
  label: string;
  topicTitle: string;
  examples: { en: string; vi: string }[];
  shortContexts: string[];
}

let cachedLocalVocabMap: Map<string, LocalVocabEntry[]> | null = null;

function getLocalVocabMap(): Map<string, LocalVocabEntry[]> {
  if (cachedLocalVocabMap) return cachedLocalVocabMap;
  const map = new Map<string, LocalVocabEntry[]>();
  try {
    const dir = path.join(process.cwd(), "public", "vocab-data");
    if (fs.existsSync(dir)) {
      const files = fs.readdirSync(dir).filter((f) => f.endsWith(".json"));
      for (const file of files) {
        const raw = fs.readFileSync(path.join(dir, file), "utf8");
        const parsed = JSON.parse(raw);
        const topicTitle = parsed.title || "";
        for (const item of parsed.items || []) {
          if (!item?.term) continue;
          const key = String(item.term).trim().toLowerCase();
          const list = map.get(key) || [];
          list.push({
            term: item.term,
            definition: item.definition || "",
            pattern: item.pattern || "",
            phonetic: item.phonetic || "",
            partOfSpeech: item.partOfSpeech || "",
            label: item.label || "",
            topicTitle,
            examples: Array.isArray(item.examples) ? item.examples : [],
            shortContexts: Array.isArray(item.shortContexts) ? item.shortContexts : [],
          });
          map.set(key, list);
        }
      }
    }
  } catch {
    // ignore fs read errors
  }
  cachedLocalVocabMap = map;
  return map;
}

function normalizePos(rawPos: string): string {
  const p = rawPos.trim().toLowerCase();
  if (p === "n" || p.includes("danh từ") || p === "noun") return "noun";
  if (p === "v" || p.includes("động từ") || p === "verb") return "verb";
  if (p === "adj" || p.includes("tính từ") || p === "adjective" || p === "a") return "adjective";
  if (p === "adv" || p.includes("trạng từ") || p.includes("phó từ") || p === "adverb") return "adverb";
  if (p === "prep" || p.includes("giới từ") || p === "preposition") return "preposition";
  if (p === "conj" || p.includes("liên từ") || p === "conjunction") return "conjunction";
  if (p === "pron" || p.includes("đại từ") || p === "pronoun") return "pronoun";
  if (p.includes("thành ngữ") || p.includes("cụm") || p === "idiom" || p === "phrase") return "idiom";
  return p || "noun";
}

function formatTagsToViContext(tags: string[], defText: string): string {
  const found: string[] = [];
  for (const t of tags) {
    const low = t.toLowerCase().trim();
    if (
      low === "dated" ||
      low === "obsolete" ||
      low === "archaic" ||
      low === "historical" ||
      low === "rare"
    ) {
      continue;
    }
    const mapped = TAG_VI_MAP[low];
    if (mapped && !found.includes(mapped)) {
      found.push(mapped);
    }
  }

  // Also check parenthetical context at start of definition: e.g. "(transitive, computing) ..."
  const parenMatch = defText.match(/^\(([^)]+)\)/);
  if (parenMatch) {
    const parts = parenMatch[1].split(/[,;]/).map((s) => s.trim().toLowerCase());
    for (const part of parts) {
      const mapped = TAG_VI_MAP[part];
      if (mapped && !found.includes(mapped)) {
        found.push(mapped);
      } else if (
        part.length > 2 &&
        part.length < 28 &&
        !["dated", "obsolete", "archaic", "historical", "rare"].includes(part) &&
        found.length < 2
      ) {
        const cap = part.charAt(0).toUpperCase() + part.slice(1);
        if (!found.includes(cap)) found.push(cap);
      }
    }
  }

  return found.slice(0, 3).join(" • ");
}

function cleanWikiMarkup(raw: string): { text: string; context: string } {
  let context = "";
  const ctxMatches = [...raw.matchAll(/\{\{(?:term|context|lb)\|(?:\w+\|)?([^}]+)\}\}/gi)];
  if (ctxMatches.length > 0) {
    context = ctxMatches
      .map((m) => m[1].replace(/\|/g, ", ").trim())
      .filter(Boolean)
      .map((c) => TAG_VI_MAP[c.toLowerCase()] || c)
      .join(" • ");
  }

  const text = raw
    .replace(/\{\{(?:term|context|lb)\|[^}]+\}\}/gi, "")
    .replace(/\{\{[^}]+\}\}/g, "")
    .replace(/\[\[(?:[^|\]]+\|)?([^\]]+)\]\]/g, "$1")
    .replace(/'''+/g, "")
    .replace(/''+/g, "")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();

  return { text, context };
}

interface ViWiktionaryParsed {
  phonetic: string;
  byPos: Record<
    string,
    {
      viDefs: { vi: string; context?: string; exampleEn?: string; exampleVi?: string }[];
      synonyms: string[];
      antonyms: string[];
    }
  >;
  idioms: { phrase: string; vi: string }[];
}

function parseViWiktionary(wikitext: string): ViWiktionaryParsed {
  const result: ViWiktionaryParsed = {
    phonetic: "",
    byPos: {},
    idioms: [],
  };
  if (!wikitext) return result;

  const lines = wikitext.split(/\r?\n/);
  let inEng = false;
  let curPos = "noun";
  let curPosContext = "";
  let lastDefObj: { vi: string; context?: string; exampleEn?: string; exampleVi?: string } | null =
    null;

  // Check if there is an explicit English section marker
  const hasExplicitEng = lines.some((l) =>
    /^\{\{-eng-\}\}|^==\s*\{\{langname\|en\}\}\s*==|^==\s*Tiếng Anh\s*==/i.test(l.trim())
  );
  if (!hasExplicitEng) {
    inEng = true;
  }

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) continue;

    if (/^\{\{-eng-\}\}|^==\s*\{\{langname\|en\}\}\s*==|^==\s*Tiếng Anh\s*==/i.test(line)) {
      inEng = true;
      continue;
    }

    if (
      inEng &&
      hasExplicitEng &&
      (/^\{\{-(?:vie|fra|ger|spa|ita|rus|zho|jpn|kor|lat|por|nld)-\}\}/i.test(line) ||
        /^==\s*\{\{langname\|(?!en\b)/i.test(line))
    ) {
      break;
    }

    if (!inEng) continue;

    // Extract IPA if present
    if (!result.phonetic) {
      const ipaMatch = line.match(/\/[^/\s]+\//);
      if (ipaMatch) {
        result.phonetic = ipaMatch[0];
      }
    }

    if (/\{\{-noun-\}\}|\{\{section\|n\}\}/i.test(line)) {
      curPos = "noun";
      curPosContext = "Danh từ";
      lastDefObj = null;
      continue;
    }
    if (/\{\{-trverb-\}\}/i.test(line)) {
      curPos = "verb";
      curPosContext = "Ngoại động từ (Transitive)";
      lastDefObj = null;
      continue;
    }
    if (/\{\{-intrverb-\}\}/i.test(line)) {
      curPos = "verb";
      curPosContext = "Nội động từ (Intransitive)";
      lastDefObj = null;
      continue;
    }
    if (/\{\{-verb-\}\}|\{\{section\|v\}\}/i.test(line)) {
      curPos = "verb";
      curPosContext = "Động từ";
      lastDefObj = null;
      continue;
    }
    if (/\{\{-adj-\}\}|\{\{section\|adj\}\}/i.test(line)) {
      curPos = "adjective";
      curPosContext = "Tính từ";
      lastDefObj = null;
      continue;
    }
    if (/\{\{-adv-\}\}|\{\{section\|adv\}\}/i.test(line)) {
      curPos = "adverb";
      curPosContext = "Trạng từ";
      lastDefObj = null;
      continue;
    }
    if (/\{\{-prep-\}\}|\{\{section\|prep\}\}/i.test(line)) {
      curPos = "preposition";
      curPosContext = "Giới từ";
      lastDefObj = null;
      continue;
    }
    if (/\{\{-conj-\}\}|\{\{section\|conj\}\}/i.test(line)) {
      curPos = "conjunction";
      curPosContext = "Liên từ";
      lastDefObj = null;
      continue;
    }
    if (/\{\{-expr-\}\}/i.test(line)) {
      curPos = "idiom";
      curPosContext = "Thành ngữ / Cụm từ";
      lastDefObj = null;
      continue;
    }

    if (!result.byPos[curPos]) {
      result.byPos[curPos] = { viDefs: [], synonyms: [], antonyms: [] };
    }

    // Parse synonyms / antonyms templates: {{syn|en|w1|w2...}}
    const synMatch = line.match(/\{\{syn\|en\|([^}]+)\}\}/i);
    if (synMatch) {
      const words = synMatch[1]
        .split("|")
        .map((w) => w.trim())
        .filter((w) => w && !w.includes("="));
      result.byPos[curPos].synonyms.push(...words);
      continue;
    }
    const antMatch = line.match(/\{\{ant\|en\|([^}]+)\}\}/i);
    if (antMatch) {
      const words = antMatch[1]
        .split("|")
        .map((w) => w.trim())
        .filter((w) => w && !w.includes("="));
      result.byPos[curPos].antonyms.push(...words);
      continue;
    }

    if (line.startsWith("# ")) {
      const { text, context } = cleanWikiMarkup(line.slice(2));
      if (text && text.length > 1) {
        const mergedCtx = [curPosContext, context].filter(Boolean).join(" • ");
        lastDefObj = {
          vi: text.replace(/\.$/, ""),
          context: mergedCtx || undefined,
        };
        result.byPos[curPos].viDefs.push(lastDefObj);
      }
    } else if (line.startsWith("#:") && lastDefObj) {
      const exRaw = line.replace(/^#:\s*/, "");
      const parts = exRaw.split(/\s*(?:—|–|-|:)\s*/);
      if (parts.length >= 2) {
        const enEx = cleanWikiMarkup(parts[0]).text;
        const viEx = cleanWikiMarkup(parts.slice(1).join(" - ")).text;
        if (enEx && !lastDefObj.exampleEn) {
          lastDefObj.exampleEn = enEx;
          lastDefObj.exampleVi = viEx;
        }
      }
    } else if (curPos === "idiom" && line.startsWith("*")) {
      const rawIdiom = line.replace(/^\*+\s*/, "");
      const parts = rawIdiom.split(/\s*(?:—|–|:)\s*/);
      if (parts.length >= 2) {
        const phrase = cleanWikiMarkup(parts[0]).text;
        const vi = cleanWikiMarkup(parts.slice(1).join(": ")).text;
        if (phrase && vi) {
          result.idioms.push({ phrase, vi });
        }
      }
    }
  }

  return result;
}

async function fetchWithTimeout(url: string, timeoutMs = 4500): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, {
      headers: BROWSER_HEADERS,
      cache: "no-store",
      signal: controller.signal,
    });
  } finally {
    clearTimeout(timer);
  }
}

async function translateBatchToVi(texts: string[]): Promise<string[]> {
  if (texts.length === 0) return [];
  const cleanedTexts = texts.map((t) => t.replace(/\s+/g, " ").trim());

  // Tier 1: Google Translate GTX / dict-chrome-ex with Browser User-Agent
  for (const clientName of ["dict-chrome-ex", "gtx"]) {
    try {
      const joined = cleanedTexts.join("\n ||| \n");
      const url =
        `https://translate.googleapis.com/translate_a/single?client=${clientName}&sl=en&tl=vi&dt=t&dj=1&q=` +
        encodeURIComponent(joined);
      const res = await fetchWithTimeout(url, 4000);
      if (res.ok) {
        const data = await res.json();
        const fullTrans: string = (data.sentences || [])
          .map((s: any) => s.trans || "")
          .join("");
        if (fullTrans.trim()) {
          const split = fullTrans.split(/\s*\|\|\|\s*/).map((s) => s.trim());
          if (split.length === cleanedTexts.length) {
            return split;
          }
        }
      }
    } catch {
      // try next tier
    }
  }

  // Tier 2: clients5.google.com
  try {
    const joined = cleanedTexts.join(" ||| ");
    const url =
      "https://clients5.google.com/translate_a/t?client=dict-chrome-ex&sl=en&tl=vi&q=" +
      encodeURIComponent(joined);
    const res = await fetchWithTimeout(url, 4000);
    if (res.ok) {
      const data = await res.json();
      const raw = Array.isArray(data) ? (Array.isArray(data[0]) ? data[0][0] : data[0]) : "";
      if (typeof raw === "string" && raw.trim()) {
        return raw.split(/\s*\|\|\|\s*/).map((s) => s.trim());
      }
    }
  } catch {
    // try next tier
  }

  // Tier 3: MyMemory API for top items
  try {
    const firstFew = cleanedTexts.slice(0, 5);
    const results = await Promise.all(
      firstFew.map(async (txt) => {
        try {
          const r = await fetchWithTimeout(
            `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
              txt.slice(0, 350)
            )}&langpair=en|vi`,
            3000
          );
          if (!r.ok) return "";
          const j = await r.json();
          return j?.responseData?.translatedText || "";
        } catch {
          return "";
        }
      })
    );
    return cleanedTexts.map((_, i) => results[i] || "");
  } catch {
    return cleanedTexts.map(() => "");
  }
}

function guessLemmaFromFda(entries: any[], query: string): string | null {
  for (const e of entries) {
    for (const s of e.senses || []) {
      const def = String(s.definition || "");
      const m = def.match(
        /\b(?:plural|present|past|participle|comparative|superlative|indicative|gerund|form|inflection|spelling)\s+of\s+([a-zA-Z\-']+)[.!]?$/i
      );
      if (m && m[1] && m[1].toLowerCase() !== query.toLowerCase()) {
        return m[1].toLowerCase();
      }
    }
  }
  return null;
}

function buildFallbackExample(word: string, pos: string, commonPhrases: string[]): string {
  const cleanPhrase = commonPhrases.find(
    (p) =>
      p.toLowerCase().includes(word.toLowerCase()) &&
      !/^(the|a|an|and|or|of|to|in)\b/i.test(p)
  );
  if (cleanPhrase) {
    return `In academic and everyday contexts, the expression "${cleanPhrase}" is frequently used.`;
  }
  if (pos === "verb") {
    return `Organizations need effective strategies to ${word} effectively in modern society.`;
  }
  if (pos === "adjective") {
    return `This remains a ${word} factor when evaluating long-term outcomes.`;
  }
  if (pos === "adverb") {
    return `The policy was implemented ${word} across several regions.`;
  }
  return `The concept of "${word}" plays an important role in this context.`;
}

// In-memory cache of valid non-empty responses
const validResultCache = new Map<string, { data: CambridgeLookupResponse; expiresAt: number }>();

export async function GET(req: NextRequest) {
  const rawQuery = req.nextUrl.searchParams.get("q") || "";
  const query = rawQuery
    .trim()
    .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "")
    .toLowerCase();

  if (!query) {
    return NextResponse.json({ error: "Missing query" }, { status: 400 });
  }

  const cached = validResultCache.get(query);
  if (cached && cached.expiresAt > Date.now() && cached.data.meanings.length > 0) {
    return NextResponse.json(cached.data);
  }

  try {
    // 1. Check Local 9,922 IELTS/CEFR Vocab Database first
    const localVocabMap = getLocalVocabMap();
    const localMatches = localVocabMap.get(query) || [];

    // 2. Call 6 external APIs in parallel so even if 1 or 2 are slow/blocked, we ALWAYS have full data
    const [fdaRes, viWikRes, dmDefRes, dmSynRes, dmAntRes, dmColBeforeRes, dmColAfterRes, dictDevRes, gtxRes] =
      await Promise.allSettled([
        fetchWithTimeout(`https://freedictionaryapi.com/api/v1/entries/en/${encodeURIComponent(query)}`),
        fetchWithTimeout(
          `https://vi.wiktionary.org/w/api.php?action=parse&page=${encodeURIComponent(
            query
          )}&prop=wikitext&format=json`
        ),
        fetchWithTimeout(
          `https://api.datamuse.com/words?sp=${encodeURIComponent(query)}&qe=sp&md=dpfr&max=1`
        ),
        fetchWithTimeout(`https://api.datamuse.com/words?ml=${encodeURIComponent(query)}&max=18`),
        fetchWithTimeout(`https://api.datamuse.com/words?rel_ant=${encodeURIComponent(query)}&max=10`),
        fetchWithTimeout(`https://api.datamuse.com/words?rel_bgb=${encodeURIComponent(query)}&max=10`),
        fetchWithTimeout(`https://api.datamuse.com/words?rel_bga=${encodeURIComponent(query)}&max=10`),
        fetchWithTimeout(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(query)}`),
        fetchWithTimeout(
          `https://translate.googleapis.com/translate_a/single?client=dict-chrome-ex&sl=en&tl=vi&dt=t&dt=bd&dt=md&dt=ex&dt=ss&dt=rm&dj=1&q=${encodeURIComponent(
            query
          )}`
        ),
      ]);

    let fdaData: any = null;
    if (fdaRes.status === "fulfilled" && fdaRes.value.ok) {
      fdaData = await fdaRes.value.json();
    }

    let viWikParsed: ViWiktionaryParsed = { phonetic: "", byPos: {}, idioms: [] };
    if (viWikRes.status === "fulfilled" && viWikRes.value.ok) {
      const vj = await viWikRes.value.json();
      viWikParsed = parseViWiktionary(vj?.parse?.wikitext?.["*"] || "");
    }

    let dmDefItem: any = null;
    if (dmDefRes.status === "fulfilled" && dmDefRes.value.ok) {
      const dj = await dmDefRes.value.json();
      if (Array.isArray(dj) && dj[0]) dmDefItem = dj[0];
    }

    let dmSyns: string[] = [];
    if (dmSynRes.status === "fulfilled" && dmSynRes.value.ok) {
      const sj = await dmSynRes.value.json();
      if (Array.isArray(sj)) {
        dmSyns = sj
          .map((x: any) => String(x.word || "").trim())
          .filter((w) => w && w.toLowerCase() !== query && !w.includes(" "));
      }
    }

    let dmAnts: string[] = [];
    if (dmAntRes.status === "fulfilled" && dmAntRes.value.ok) {
      const aj = await dmAntRes.value.json();
      if (Array.isArray(aj)) {
        dmAnts = aj.map((x: any) => String(x.word || "").trim()).filter(Boolean);
      }
    }

    const commonPhrases: string[] = [];
    const STOP_COLLOC = new Set([
      "the",
      "a",
      "an",
      "and",
      "or",
      "of",
      "to",
      "in",
      "for",
      "with",
      "on",
      "at",
      "by",
      "from",
      "is",
      "are",
      "was",
      "were",
      "be",
      "been",
      "this",
      "that",
      "these",
      "those",
      "his",
      "her",
      "their",
      "our",
      "your",
      "my",
      "its",
      "not",
      "no",
    ]);
    if (dmColBeforeRes.status === "fulfilled" && dmColBeforeRes.value.ok) {
      const cj = await dmColBeforeRes.value.json();
      if (Array.isArray(cj)) {
        for (const item of cj) {
          const w = String(item.word || "").trim().toLowerCase();
          if (w && w.length > 2 && !STOP_COLLOC.has(w)) {
            commonPhrases.push(`${w} ${query}`);
          }
        }
      }
    }
    if (dmColAfterRes.status === "fulfilled" && dmColAfterRes.value.ok) {
      const cj = await dmColAfterRes.value.json();
      if (Array.isArray(cj)) {
        for (const item of cj) {
          const w = String(item.word || "").trim().toLowerCase();
          if (w && w.length > 2 && !STOP_COLLOC.has(w)) {
            commonPhrases.push(`${query} ${w}`);
          }
        }
      }
    }

    let dictDevEntries: any[] = [];
    if (dictDevRes.status === "fulfilled" && dictDevRes.value.ok) {
      const parsed = await dictDevRes.value.json();
      if (Array.isArray(parsed)) dictDevEntries = parsed;
    }

    let gtxData: any = {};
    if (gtxRes.status === "fulfilled" && gtxRes.value.ok) {
      gtxData = await gtxRes.value.json();
    }

    // 3. Check if the queried word is an inflected form (e.g., "gates" -> "gate", "went" -> "go")
    let fdaEntries: any[] = (fdaData?.entries || []).filter(
      (e: any) => e.language?.code === "en"
    );
    let baseWord: string | undefined;
    const detectedLemma = guessLemmaFromFda(fdaEntries, query);
    if (detectedLemma) {
      baseWord = detectedLemma;
      const [lemmaFdaRes, lemmaViWikRes] = await Promise.allSettled([
        fetchWithTimeout(
          `https://freedictionaryapi.com/api/v1/entries/en/${encodeURIComponent(detectedLemma)}`
        ),
        Object.keys(viWikParsed.byPos).length === 0
          ? fetchWithTimeout(
              `https://vi.wiktionary.org/w/api.php?action=parse&page=${encodeURIComponent(
                detectedLemma
              )}&prop=wikitext&format=json`
            )
          : Promise.resolve(null),
      ]);
      if (lemmaFdaRes.status === "fulfilled" && lemmaFdaRes.value?.ok) {
        const lemmaJson = await lemmaFdaRes.value.json();
        const lemmaEn = (lemmaJson?.entries || []).filter((e: any) => e.language?.code === "en");
        fdaEntries = [...fdaEntries, ...lemmaEn];
      }
      if (
        lemmaViWikRes.status === "fulfilled" &&
        lemmaViWikRes.value &&
        lemmaViWikRes.value.ok
      ) {
        const lvj = await lemmaViWikRes.value.json();
        viWikParsed = parseViWiktionary(lvj?.parse?.wikitext?.["*"] || "");
      }
    }

    // 4. Extract Phonetics (UK / US) & Audio URLs
    let phoneticUk = "";
    let phoneticUs = "";
    let audioUk = "";
    let audioUs = "";
    const wordForms: string[] = [];

    if (dictDevEntries[0]) {
      const first = dictDevEntries[0];
      const defaultPhonetic = first.phonetic || "";
      for (const p of first.phonetics || []) {
        if (p.text && !phoneticUk) phoneticUk = p.text;
        if (p.text && !phoneticUs) phoneticUs = p.text;
        if (typeof p.audio === "string" && p.audio) {
          if (p.audio.includes("-uk")) {
            audioUk = p.audio;
            if (p.text) phoneticUk = p.text;
          } else if (p.audio.includes("-us")) {
            audioUs = p.audio;
            if (p.text) phoneticUs = p.text;
          } else if (!audioUk) {
            audioUk = p.audio;
          }
        }
      }
      if (!phoneticUk && defaultPhonetic) phoneticUk = defaultPhonetic;
      if (!phoneticUs && phoneticUk) phoneticUs = phoneticUk;
      if (!audioUs && audioUk) audioUs = audioUk;
    }

    for (const entry of fdaEntries) {
      for (const pron of entry.pronunciations || []) {
        if (pron.type === "ipa" && pron.text) {
          const tags = (pron.tags || []).map((t: string) => t.toLowerCase());
          if (!phoneticUk && (tags.some((t: string) => t.includes("uk") || t.includes("received")) || !phoneticUs)) {
            phoneticUk = pron.text;
          }
          if (!phoneticUs && (tags.some((t: string) => t.includes("us") || t.includes("general american")) || !phoneticUk)) {
            phoneticUs = pron.text;
          }
        }
      }
      for (const form of entry.forms || []) {
        const fw = String(form.word || "").trim();
        const ftags = (form.tags || []).join(", ");
        if (fw && fw.toLowerCase() !== query && wordForms.length < 6 && !ftags.includes("alternative")) {
          const label = ftags ? `${fw} (${ftags})` : fw;
          if (!wordForms.includes(label)) wordForms.push(label);
        }
      }
    }

    if (!phoneticUk && localMatches[0]?.phonetic) {
      const lp = localMatches[0].phonetic;
      phoneticUk = lp.startsWith("/") ? lp : `/${lp}/`;
    }
    if (!phoneticUk && viWikParsed.phonetic) {
      phoneticUk = viWikParsed.phonetic;
    }
    if (!phoneticUk && Array.isArray(dmDefItem?.tags)) {
      const ipaTag = dmDefItem.tags.find((t: string) => t.startsWith("ipa_pron:"));
      if (ipaTag) {
        phoneticUk = `/${ipaTag.replace("ipa_pron:", "")}/`;
      }
    }
    if (!phoneticUs && phoneticUk) phoneticUs = phoneticUk;
    if (!phoneticUk && phoneticUs) phoneticUk = phoneticUs;

    // 5. Extract GTX Vietnamese dictionary terms & primary Vietnamese meaning
    const gtxDictMap: Record<string, string[]> = {};
    if (Array.isArray(gtxData.dict)) {
      for (const d of gtxData.dict) {
        const pos = normalizePos(d.pos || "");
        if (pos && Array.isArray(d.terms)) {
          gtxDictMap[pos] = d.terms.slice(0, 8);
        }
      }
    }

    let primaryVi: string =
      localMatches[0]?.definition ||
      (gtxData.sentences || [])
        .map((s: any) => s.trans || "")
        .join("")
        .trim() ||
      "";

    if (!primaryVi) {
      const firstViWikGroup = Object.values(viWikParsed.byPos)[0];
      if (firstViWikGroup?.viDefs[0]?.vi) {
        primaryVi = firstViWikGroup.viDefs[0].vi;
      }
    }

    // 6. Build Rich Meaning Groups by Part of Speech
    interface RawGroupBuilder {
      partOfSpeech: string;
      contexts: Set<string>;
      viTerms: Set<string>;
      defs: {
        en: string;
        vi?: string;
        context?: string;
        example?: string;
        exampleVi?: string;
        synonyms: string[];
      }[];
      synonyms: Set<string>;
      antonyms: Set<string>;
    }

    const byPos = new Map<string, RawGroupBuilder>();
    const ensurePosGroup = (rawPos: string): RawGroupBuilder => {
      const pos = normalizePos(rawPos);
      if (!byPos.has(pos)) {
        const initialViTerms = new Set<string>(gtxDictMap[pos] || []);
        const viWikGroup = viWikParsed.byPos[pos];
        if (viWikGroup) {
          for (const vd of viWikGroup.viDefs.slice(0, 5)) {
            if (vd.vi.length <= 45) initialViTerms.add(vd.vi);
          }
        }
        byPos.set(pos, {
          partOfSpeech: pos,
          contexts: new Set<string>(),
          viTerms: initialViTerms,
          defs: [],
          synonyms: new Set<string>(viWikGroup?.synonyms || []),
          antonyms: new Set<string>(viWikGroup?.antonyms || []),
        });
      }
      return byPos.get(pos)!;
    };

    // 6A. Populate from Local 9,922 IELTS/CEFR Vocab Database
    for (const lm of localMatches) {
      const group = ensurePosGroup(lm.partOfSpeech || "noun");
      if (lm.definition) group.viTerms.add(lm.definition);
      if (lm.pattern) group.contexts.add(lm.pattern);
      if (lm.topicTitle) group.contexts.add(`Chủ đề IELTS: ${lm.topicTitle}`);
      const ex0 = lm.examples[0] || (lm.shortContexts[0] ? { en: lm.shortContexts[0].replace("___", lm.term), vi: "" } : undefined);
      group.defs.push({
        en: `${lm.term} (${lm.label || "IELTS Academic"})`,
        vi: lm.definition,
        context: lm.pattern || `Chủ đề: ${lm.topicTitle}`,
        example: ex0?.en,
        exampleVi: ex0?.vi,
        synonyms: [],
      });
    }

    // 6B. Populate from FreeDictionaryAPI.com (Wiktionary structured JSON)
    for (const entry of fdaEntries) {
      const group = ensurePosGroup(entry.partOfSpeech || "noun");
      for (const s of entry.synonyms || []) {
        if (typeof s === "string") group.synonyms.add(s);
      }
      for (const a of entry.antonyms || []) {
        if (typeof a === "string") group.antonyms.add(a);
      }

      const allSenses: any[] = [];
      for (const s of entry.senses || []) {
        allSenses.push(s);
        if (Array.isArray(s.subsenses)) {
          allSenses.push(...s.subsenses);
        }
      }

      // Sort senses so non-obsolete senses with examples/tags come first
      const goodSenses = allSenses.filter((s) => {
        const def = String(s.definition || "").trim();
        if (!def) return false;
        const tags = (s.tags || []).map((t: string) => t.toLowerCase());
        if (tags.some((t: string) => ["obsolete", "archaic"].includes(t)) && allSenses.length > 2) {
          return false;
        }
        return true;
      });

      for (const s of goodSenses) {
        if (group.defs.length >= 5) break;
        const rawDef = String(s.definition || "").trim();
        const ctx = formatTagsToViContext(s.tags || [], rawDef);
        if (ctx) group.contexts.add(ctx);

        const cleanDef = rawDef.replace(/^\([^)]+\)\s*/, "").trim() || rawDef;
        if (group.defs.some((d) => d.en.toLowerCase() === cleanDef.toLowerCase())) continue;

        let example = "";
        if (Array.isArray(s.examples) && s.examples.length > 0) {
          // Prefer full sentence examples if available
          example =
            s.examples.find((ex: string) => ex.split(/\s+/).length >= 4) || s.examples[0] || "";
        }
        if (!example && Array.isArray(s.quotes) && s.quotes[0]?.text) {
          const qt = String(s.quotes[0].text).trim();
          if (qt.length <= 180) example = qt;
        }

        const senseSyns: string[] = [];
        for (const syn of s.synonyms || []) {
          if (typeof syn === "string" && syn.length < 30) {
            senseSyns.push(syn);
            group.synonyms.add(syn);
          }
        }
        for (const ant of s.antonyms || []) {
          if (typeof ant === "string" && ant.length < 30) {
            group.antonyms.add(ant);
          }
        }

        group.defs.push({
          en: cleanDef,
          context: ctx || undefined,
          example: example || undefined,
          synonyms: senseSyns.slice(0, 5),
        });
      }
    }

    // 6C. Enrich with api.dictionaryapi.dev (often has very clean learner examples & synonyms)
    for (const entry of dictDevEntries) {
      for (const m of entry.meanings || []) {
        const group = ensurePosGroup(m.partOfSpeech || "noun");
        for (const s of m.synonyms || []) group.synonyms.add(s);
        for (const a of m.antonyms || []) group.antonyms.add(a);

        for (const d of m.definitions || []) {
          const defText = String(d.definition || "").trim();
          if (!defText) continue;

          // Attach example to existing definition without example, or add new definition
          const existingWithoutEx = group.defs.find((item) => !item.example);
          if (d.example && existingWithoutEx) {
            existingWithoutEx.example = d.example;
          } else if (
            group.defs.length < 5 &&
            !group.defs.some((item) => item.en.toLowerCase() === defText.toLowerCase())
          ) {
            group.defs.push({
              en: defText,
              example: d.example,
              synonyms: (d.synonyms || []).slice(0, 4),
            });
          }
        }
      }
    }

    // 6D. Fallback / Supplement from Datamuse WordNet definitions (`dmDefItem.defs`)
    if (Array.isArray(dmDefItem?.defs)) {
      for (const rawDefLine of dmDefItem.defs) {
        const [posAbbr, ...rest] = String(rawDefLine).split("\t");
        const defText = rest.join(" ").trim();
        if (!defText) continue;
        const group = ensurePosGroup(posAbbr || "n");
        if (
          group.defs.length < 4 &&
          !group.defs.some((item) => item.en.toLowerCase() === defText.toLowerCase())
        ) {
          group.defs.push({
            en: defText,
            synonyms: [],
          });
        }
      }
    }

    // 6E. Merge Vietnamese Wiktionary definitions & bilingual examples into groups
    for (const [pos, vwGroup] of Object.entries(viWikParsed.byPos)) {
      const group = ensurePosGroup(pos);
      vwGroup.synonyms.forEach((s) => group.synonyms.add(s));
      vwGroup.antonyms.forEach((a) => group.antonyms.add(a));

      for (let i = 0; i < vwGroup.viDefs.length; i++) {
        const vd = vwGroup.viDefs[i];
        if (vd.context) group.contexts.add(vd.context);
        if (group.defs[i]) {
          if (!group.defs[i].vi) group.defs[i].vi = vd.vi;
          if (!group.defs[i].context && vd.context) group.defs[i].context = vd.context;
          if (!group.defs[i].example && vd.exampleEn) {
            group.defs[i].example = vd.exampleEn;
            group.defs[i].exampleVi = vd.exampleVi;
          }
        } else if (group.defs.length < 5) {
          group.defs.push({
            en: vd.exampleEn || `${query} (${POS_VI_MAP[pos] || pos})`,
            vi: vd.vi,
            context: vd.context,
            example: vd.exampleEn,
            exampleVi: vd.exampleVi,
            synonyms: [],
          });
        }
      }
    }

    // 6F. Distribute Datamuse synonyms & antonyms so EVERY group has synonyms
    for (const group of byPos.values()) {
      if (group.synonyms.size < 6) {
        for (const s of dmSyns) {
          if (group.synonyms.size >= 10) break;
          group.synonyms.add(s);
        }
      }
      if (group.antonyms.size < 4) {
        for (const a of dmAnts) {
          if (group.antonyms.size >= 6) break;
          group.antonyms.add(a);
        }
      }

      // Ensure at least 1 example sentence in every part of speech group
      const hasAnyExample = group.defs.some((d) => Boolean(d.example));
      if (!hasAnyExample && group.defs[0]) {
        group.defs[0].example = buildFallbackExample(query, group.partOfSpeech, commonPhrases);
      }

      // Ensure context on each definition
      const defaultPosCtx =
        group.partOfSpeech === "noun"
          ? "Danh từ thông dụng & học thuật"
          : group.partOfSpeech === "verb"
          ? "Động từ hành động / trạng thái"
          : group.partOfSpeech === "adjective"
          ? "Tính từ bổ nghĩa danh từ / chủ ngữ"
          : group.partOfSpeech === "adverb"
          ? "Trạng từ bổ nghĩa động từ / tính từ"
          : "Ngữ cảnh giao tiếp & học thuật IELTS";

      for (const d of group.defs) {
        if (!d.context) {
          d.context = Array.from(group.contexts)[0] || defaultPosCtx;
        }
      }
    }

    // If still no groups at all (e.g. a very rare phrase), create a fallback group
    if (byPos.size === 0) {
      const g = ensurePosGroup("phrase");
      g.defs.push({
        en: `Meaning and usage of "${query}" in English.`,
        context: "Cụm từ / Từ vựng tiếng Anh",
        example: buildFallbackExample(query, "noun", commonPhrases),
        synonyms: dmSyns.slice(0, 6),
      });
      dmSyns.slice(0, 8).forEach((s) => g.synonyms.add(s));
    }

    // 7. Batch-translate any missing Vietnamese definitions + primaryVi + example sentences
    const textsToTranslate: string[] = [];
    const needPrimaryVi = !primaryVi;
    if (needPrimaryVi) {
      textsToTranslate.push(query);
    }

    const defTargetIndices: { group: RawGroupBuilder; defIdx: number }[] = [];
    const exTargetIndices: { group: RawGroupBuilder; defIdx: number }[] = [];

    for (const group of byPos.values()) {
      group.defs.forEach((d, idx) => {
        if (!d.vi) {
          defTargetIndices.push({ group, defIdx: idx });
          textsToTranslate.push(d.en);
        }
        if (d.example && !d.exampleVi && exTargetIndices.length < 6) {
          exTargetIndices.push({ group, defIdx: idx });
          textsToTranslate.push(d.example);
        }
      });
    }

    const translatedList = await translateBatchToVi(textsToTranslate);
    let tCursor = 0;

    if (needPrimaryVi) {
      primaryVi = translatedList[tCursor++] || "";
    }
    for (const item of defTargetIndices) {
      item.group.defs[item.defIdx].vi = translatedList[tCursor++] || "";
    }
    for (const item of exTargetIndices) {
      item.group.defs[item.defIdx].exampleVi = translatedList[tCursor++] || "";
    }

    if (!primaryVi) {
      const firstGroup = Array.from(byPos.values())[0];
      primaryVi =
        Array.from(firstGroup?.viTerms || [])[0] ||
        firstGroup?.defs[0]?.vi ||
        "";
    }

    // 8. Assemble Final Response
    const allSynonymsSet = new Set<string>(dmSyns);
    const allAntonymsSet = new Set<string>(dmAnts);
    const allContextsSet = new Set<string>();

    const meanings: DictionaryMeaningGroup[] = Array.from(byPos.values()).map((g) => {
      g.synonyms.forEach((s) => allSynonymsSet.add(s));
      g.antonyms.forEach((a) => allAntonymsSet.add(a));
      g.contexts.forEach((c) => allContextsSet.add(c));

      const viTermsArr = Array.from(g.viTerms).filter(Boolean).slice(0, 8);
      if (viTermsArr.length === 0 && g.defs[0]?.vi) {
        viTermsArr.push(g.defs[0].vi);
      }

      return {
        partOfSpeech: g.partOfSpeech,
        partOfSpeechVi: POS_VI_MAP[g.partOfSpeech] || g.partOfSpeech,
        contextSummary:
          Array.from(g.contexts).slice(0, 3).join(" • ") ||
          (g.partOfSpeech === "noun"
            ? "Dùng làm chủ ngữ / tân ngữ trong câu"
            : g.partOfSpeech === "verb"
            ? "Diễn tả hành động hoặc trạng thái"
            : g.partOfSpeech === "adjective"
            ? "Đứng trước danh từ hoặc sau động từ nối (be, become, seem)"
            : "Ngữ cảnh học thuật & giao tiếp"),
        viTerms: viTermsArr,
        definitions: g.defs.map((d) => ({
          en: d.en,
          vi: d.vi || primaryVi,
          context: d.context,
          example: d.example,
          exampleVi: d.exampleVi,
          synonyms: d.synonyms?.slice(0, 5),
        })),
        synonyms: Array.from(g.synonyms).slice(0, 10),
        antonyms: Array.from(g.antonyms).slice(0, 6),
      };
    });

    const slug = encodeURIComponent(query.replace(/\s+/g, "-"));
    const result: CambridgeLookupResponse = {
      word: query,
      baseWord,
      wordForms: wordForms.slice(0, 6),
      phoneticUk,
      phoneticUs,
      audioUk,
      audioUs,
      primaryVi,
      contexts: Array.from(allContextsSet).slice(0, 6),
      commonPhrases: commonPhrases.slice(0, 8),
      allSynonyms: Array.from(allSynonymsSet).slice(0, 14),
      allAntonyms: Array.from(allAntonymsSet).slice(0, 8),
      meanings,
      cambridgeEnViUrl: `https://dictionary.cambridge.org/vi/dictionary/english-vietnamese/${slug}`,
      cambridgeEnUrl: `https://dictionary.cambridge.org/vi/dictionary/english/${slug}`,
    };

    if (result.meanings.length > 0 && result.primaryVi) {
      validResultCache.set(query, {
        data: result,
        expiresAt: Date.now() + 1000 * 60 * 60 * 12,
      });
    }

    return NextResponse.json(result);
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || "Failed to lookup dictionary" },
      { status: 500 }
    );
  }
}
