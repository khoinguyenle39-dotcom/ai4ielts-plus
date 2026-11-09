import { NextRequest, NextResponse } from "next/server";

export interface DictionaryDefinitionItem {
  en: string;
  vi: string;
  example?: string;
  synonyms?: string[];
}

export interface DictionaryMeaningGroup {
  partOfSpeech: string;
  partOfSpeechVi: string;
  viTerms: string[];
  definitions: DictionaryDefinitionItem[];
  synonyms: string[];
  antonyms: string[];
}

export interface CambridgeLookupResponse {
  word: string;
  phoneticUk: string;
  phoneticUs: string;
  audioUk: string;
  audioUs: string;
  primaryVi: string;
  meanings: DictionaryMeaningGroup[];
  cambridgeEnViUrl: string;
  cambridgeEnUrl: string;
}

const POS_VI_MAP: Record<string, string> = {
  noun: "Danh từ (n)",
  verb: "Động từ (v)",
  adjective: "Tính từ (adj)",
  adverb: "Trạng từ (adv)",
  preposition: "Giới từ (prep)",
  conjunction: "Liên từ (conj)",
  pronoun: "Đại từ (pron)",
  interjection: "Thán từ (interj)",
  idiom: "Thành ngữ / Cụm từ",
};

async function translateBatchToVi(texts: string[]): Promise<string[]> {
  if (texts.length === 0) return [];
  try {
    const joined = texts.join("\n ||| \n");
    const url =
      "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=vi&dt=t&dj=1&q=" +
      encodeURIComponent(joined);
    const res = await fetch(url, { cache: "force-cache" });
    if (!res.ok) return texts.map(() => "");
    const data = await res.json();
    const fullTrans: string = (data.sentences || [])
      .map((s: any) => s.trans || "")
      .join("");
    return fullTrans.split(/\s*\|\|\|\s*/).map((s) => s.trim());
  } catch {
    return texts.map(() => "");
  }
}

export async function GET(req: NextRequest) {
  const rawQuery = req.nextUrl.searchParams.get("q") || "";
  const query = rawQuery.trim().toLowerCase();

  if (!query) {
    return NextResponse.json({ error: "Missing query" }, { status: 400 });
  }

  try {
    // 1. Gọi song song Free Dictionary API (IPA, UK/US Audio, Meanings) và Google GTX Dictionary (Nghĩa Việt, Từ loại Việt, Ví dụ)
    const [dictRes, gtxRes] = await Promise.allSettled([
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(query)}`, {
        next: { revalidate: 86400 },
      }),
      fetch(
        `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=vi&dt=t&dt=bd&dt=md&dt=ex&dt=ss&dt=rm&dj=1&q=${encodeURIComponent(
          query
        )}`,
        { next: { revalidate: 86400 } }
      ),
    ]);

    let dictEntries: any[] = [];
    if (dictRes.status === "fulfilled" && dictRes.value.ok) {
      const parsed = await dictRes.value.json();
      if (Array.isArray(parsed)) dictEntries = parsed;
    }

    let gtxData: any = {};
    if (gtxRes.status === "fulfilled" && gtxRes.value.ok) {
      gtxData = await gtxRes.value.json();
    }

    // 2. Trích xuất IPA & Audio UK / US
    let phoneticUk = "";
    let phoneticUs = "";
    let audioUk = "";
    let audioUs = "";

    const firstEntry = dictEntries[0];
    if (firstEntry) {
      const defaultPhonetic = firstEntry.phonetic || "";
      const phonetics: any[] = firstEntry.phonetics || [];
      for (const p of phonetics) {
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

    if (!phoneticUk) {
      const translit = (gtxData.sentences || []).find((s: any) => s.src_translit)?.src_translit;
      if (translit) {
        phoneticUk = `/${translit}/`;
        phoneticUs = `/${translit}/`;
      }
    }

    // 3. Nghĩa tiếng Việt chính & Bảng từ loại tiếng Việt từ GTX
    const primaryVi: string =
      (gtxData.sentences || [])
        .map((s: any) => s.trans || "")
        .join("")
        .trim() || "";

    const gtxDictMap: Record<string, string[]> = {};
    if (Array.isArray(gtxData.dict)) {
      for (const d of gtxData.dict) {
        const pos = (d.pos || "").toLowerCase();
        if (pos && Array.isArray(d.terms)) {
          gtxDictMap[pos] = d.terms.slice(0, 8);
        }
      }
    }

    // 4. Tổng hợp danh sách nhóm nghĩa (Meanings)
    const rawGroups: {
      partOfSpeech: string;
      viTerms: string[];
      defs: { en: string; example?: string; synonyms?: string[] }[];
      synonyms: string[];
      antonyms: string[];
    }[] = [];

    if (dictEntries.length > 0) {
      const byPos = new Map<string, (typeof rawGroups)[number]>();

      for (const entry of dictEntries) {
        for (const m of entry.meanings || []) {
          const pos = (m.partOfSpeech || "noun").toLowerCase();
          if (!byPos.has(pos)) {
            byPos.set(pos, {
              partOfSpeech: pos,
              viTerms: gtxDictMap[pos] || [],
              defs: [],
              synonyms: [],
              antonyms: [],
            });
          }
          const group = byPos.get(pos)!;
          if (Array.isArray(m.synonyms)) {
            for (const s of m.synonyms) {
              if (!group.synonyms.includes(s)) group.synonyms.push(s);
            }
          }
          if (Array.isArray(m.antonyms)) {
            for (const a of m.antonyms) {
              if (!group.antonyms.includes(a)) group.antonyms.push(a);
            }
          }
          for (const def of (m.definitions || []).slice(0, 4)) {
            if (group.defs.length < 5 && def.definition) {
              group.defs.push({
                en: def.definition,
                example: def.example,
                synonyms: (def.synonyms || []).slice(0, 4),
              });
            }
          }
        }
      }

      rawGroups.push(...byPos.values());
    } else if (Array.isArray(gtxData.definitions)) {
      // Fallback sang definitions của GTX nếu từ ghép / cụm từ
      for (const d of gtxData.definitions) {
        const pos = (d.pos || "idiom").toLowerCase();
        rawGroups.push({
          partOfSpeech: pos,
          viTerms: gtxDictMap[pos] || [],
          defs: (d.entry || []).slice(0, 4).map((e: any) => ({
            en: e.gloss || "",
            example: e.example,
          })),
          synonyms: [],
          antonyms: [],
        });
      }
    }

    // Nếu vẫn chưa có group nào (ví dụ người dùng tra một cụm dài), tạo 1 nhóm mặc định
    if (rawGroups.length === 0 && primaryVi) {
      rawGroups.push({
        partOfSpeech: "idiom",
        viTerms: Object.values(gtxDictMap).flat().slice(0, 8),
        defs: [],
        synonyms: [],
        antonyms: [],
      });
    }

    // 5. Dịch tất cả câu định nghĩa tiếng Anh sang tiếng Việt trong 1 lần gọi batch duy nhất
    const allEnDefs: string[] = [];
    for (const g of rawGroups) {
      for (const d of g.defs) {
        allEnDefs.push(d.en);
      }
    }

    const translatedDefs = await translateBatchToVi(allEnDefs);
    let idx = 0;

    const meanings: DictionaryMeaningGroup[] = rawGroups.map((g) => ({
      partOfSpeech: g.partOfSpeech,
      partOfSpeechVi: POS_VI_MAP[g.partOfSpeech] || g.partOfSpeech,
      viTerms: g.viTerms,
      definitions: g.defs.map((d) => ({
        en: d.en,
        vi: translatedDefs[idx++] || "",
        example: d.example,
        synonyms: d.synonyms,
      })),
      synonyms: g.synonyms.slice(0, 8),
      antonyms: g.antonyms.slice(0, 6),
    }));

    const slug = encodeURIComponent(query.replace(/\s+/g, "-"));
    const result: CambridgeLookupResponse = {
      word: firstEntry?.word || query,
      phoneticUk,
      phoneticUs,
      audioUk,
      audioUs,
      primaryVi,
      meanings,
      cambridgeEnViUrl: `https://dictionary.cambridge.org/vi/dictionary/english-vietnamese/${slug}`,
      cambridgeEnUrl: `https://dictionary.cambridge.org/vi/dictionary/english/${slug}`,
    };

    return NextResponse.json(result);
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || "Failed to lookup dictionary" },
      { status: 500 }
    );
  }
}
