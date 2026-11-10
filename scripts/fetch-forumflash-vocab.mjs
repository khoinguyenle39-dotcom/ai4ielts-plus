import fs from "node:fs";
import path from "node:path";

const V = "àáảãạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵđ";
const k = V + V.toUpperCase();
let N = null;

function C(e, t) {
  let n = "",
    i = [];
  for (let r = 0; r < e.length; r += 1) {
    let s = e.charCodeAt(r);
    i.push(s < 7936 ? t[s] : s);
    if (4096 === i.length) {
      n += String.fromCharCode.apply(null, i);
      i.length = 0;
    }
  }
  return n + String.fromCharCode.apply(null, i);
}

function getTables() {
  if (N) return N;
  let e = new Uint16Array(7936),
    t = new Uint16Array(7936);
  for (let n = 0; n < 7936; n += 1) (e[n] = n), (t[n] = n);
  for (let [n, i] of [
    ["0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", 0x46464c41],
    [k, 0x56494554],
  ]) {
    let r = [...n];
    let s = (function (e, t) {
      let n = [...e],
        i = t >>> 0,
        r = () => {
          let e = (i = (i + 0x6d2b79f5) >>> 0);
          e = Math.imul(e ^ (e >>> 15), 1 | e);
          return (((e ^= e + Math.imul(e ^ (e >>> 7), 61 | e)) ^ (e >>> 14)) >>> 0) / 0x100000000;
        };
      for (let e = n.length - 1; e > 0; e -= 1) {
        let t = Math.floor(r() * (e + 1));
        [n[e], n[t]] = [n[t], n[e]];
      }
      return n;
    })(n, i);
    r.forEach((n, i) => {
      let r = n.charCodeAt(0),
        a = s[i].charCodeAt(0);
      e[r] = a;
      t[a] = r;
    });
  }
  return (N = { forward: e, backward: t });
}

function decodePayload(e) {
  return e && typeof e === "object" && e.x === 1
    ? (function recurse(t, n) {
        if (typeof t === "string") return C(t, n);
        if (Array.isArray(t)) return t.map((item) => recurse(item, n));
        if (t && typeof t === "object") {
          let i = {};
          for (let [r, s] of Object.entries(t)) i[C(r, n)] = recurse(s, n);
          return i;
        }
        return t;
      })(e.d, getTables().backward)
    : e;
}

async function main() {
  const baseUrl = "https://www.forumflashstudy.com";
  const webpackRes = await fetch(
    `${baseUrl}/_next/static/chunks/webpack-6a0bab7af3a25b74.js`
  );
  const webpackText = await webpackRes.text();

  const hashStart = webpackText.indexOf("{38:");
  const hashEnd = webpackText.indexOf("})[e]", hashStart) + 1;
  const chunkHashes = eval("(" + webpackText.slice(hashStart, hashEnd) + ")");

  const pageRes = await fetch(
    `${baseUrl}/_next/static/chunks/app/page-efa6d54a5e3e5a89.js`
  );
  const pageText = await pageRes.text();

  // Extract main JSON (worlds, placement, topics)
  const jsonStart = pageText.indexOf("JSON.parse('");
  const jsonEnd = pageText.indexOf("')", jsonStart) + 2;
  const mainData = eval(pageText.slice(jsonStart, jsonEnd));

  // Extract module 8905 (vocab items) and module 5942 (context sentences)
  const idx8905 = pageText.indexOf("8905:(e,t,n)=>{var i={");
  const start8905 = pageText.indexOf("{", idx8905 + 20);
  const end8905 = pageText.indexOf("};", start8905) + 1;
  const vocabChunkMap = eval("(" + pageText.slice(start8905, end8905) + ")");

  const idx5942 = pageText.indexOf("5942:(e,t,n)=>{var i={");
  const start5942 = pageText.indexOf("{", idx5942 + 20);
  const end5942 = pageText.indexOf("};", start5942) + 1;
  const contextChunkMap = eval("(" + pageText.slice(start5942, end5942) + ")");

  const outDir = path.join(process.cwd(), "public", "vocab-data");
  fs.mkdirSync(outDir, { recursive: true });

  console.log("Found", mainData.topics.length, "topics. Downloading and decoding...");

  let totalWords = 0;

  for (const topic of mainData.topics) {
    const key = `./${topic.id}.json`;
    const vocabChunkId = vocabChunkMap[key]?.[1];
    const contextChunkId = contextChunkMap[key]?.[1];

    if (!vocabChunkId || !chunkHashes[vocabChunkId]) {
      console.warn("Missing vocab chunk for", topic.id);
      continue;
    }

    const vocabUrl = `${baseUrl}/_next/static/chunks/${
      vocabChunkId === 4803 ? "adda3502" : vocabChunkId
    }.${chunkHashes[vocabChunkId]}.js`;

    const vocabChunkText = await (await fetch(vocabUrl)).text();
    const vStart = vocabChunkText.indexOf("JSON.parse('");
    const vEnd = vocabChunkText.lastIndexOf("')") + 2;
    const rawVocab = eval(vocabChunkText.slice(vStart, vEnd));
    const decodedVocab = decodePayload(rawVocab);

    let decodedContext = null;
    if (contextChunkId && chunkHashes[contextChunkId]) {
      const ctxUrl = `${baseUrl}/_next/static/chunks/${
        contextChunkId === 4803 ? "adda3502" : contextChunkId
      }.${chunkHashes[contextChunkId]}.js`;
      try {
        const ctxChunkText = await (await fetch(ctxUrl)).text();
        const cStart = ctxChunkText.indexOf("JSON.parse('");
        const cEnd = ctxChunkText.lastIndexOf("')") + 2;
        const rawCtx = eval(ctxChunkText.slice(cStart, cEnd));
        decodedContext = decodePayload(rawCtx);
      } catch (err) {
        console.warn("Could not decode context for", topic.id, err.message);
      }
    }

    const classes = decodedVocab.classes || [];
    const translations = decodedVocab.translations || {};
    const wordsCtx = decodedContext?.words || {};

    const items = (decodedVocab.rows || []).map((row, idx) => {
      const [term, definition, pattern, examples, phonetic, classIdx, variant] = row;
      const [label, partOfSpeech] = classes[classIdx] || ["Từ vựng · IELTS", "Từ vựng"];
      const normKey = String(term || "").trim().toLowerCase();
      const ctxEntry = wordsCtx[normKey] || null;

      return {
        id: `${topic.id}-item-${idx + 1}`,
        term,
        definition,
        pattern: pattern || "",
        examples: (examples || []).map((ex) => ({
          en: ex,
          vi: translations[ex] || "",
        })),
        phonetic: phonetic || "",
        label,
        partOfSpeech,
        ...(variant ? { variant } : {}),
        ...(ctxEntry
          ? {
              shortContexts: (ctxEntry.s || []).slice(0, 4).map((x) => x[0]),
              longContexts: (ctxEntry.l || []).slice(0, 2).map((x) => x[0]),
            }
          : {}),
      };
    });

    totalWords += items.length;

    const topicFile = path.join(outDir, `${topic.id}.json`);
    fs.writeFileSync(
      topicFile,
      JSON.stringify({
        id: topic.id,
        title: topic.title,
        eyebrow: topic.eyebrow,
        description: topic.description,
        cefr: Boolean(topic.cefr),
        count: items.length,
        items,
      })
    );
    console.log(`✓ Saved ${topic.id}.json (${items.length} words)`);
  }

  // Save topics metadata to src/data/vocabTopics.ts
  const tsContent = `// Dữ liệu 31 Chủ đề Từ vựng IELTS & CEFR A1-C2 (9.922 mục từ học thuật, Collocations, Phrasal Verbs & Idioms)
export interface VocabTopicMeta {
  id: string;
  eyebrow: string;
  title: string;
  accent: "blue" | "mint" | "coral" | "yellow";
  description: string;
  cefr?: boolean;
  cardLabel?: string;
  count: number;
}

export interface VocabExamplePair {
  en: string;
  vi: string;
}

export interface VocabItem {
  id: string;
  term: string;
  definition: string;
  pattern: string;
  examples: VocabExamplePair[];
  phonetic: string;
  label: string;
  partOfSpeech: string;
  variant?: string;
  shortContexts?: string[];
  longContexts?: string[];
}

export interface VocabTopicData {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  cefr: boolean;
  count: number;
  items: VocabItem[];
}

export const VOCAB_TOPICS: VocabTopicMeta[] = ${JSON.stringify(mainData.topics, null, 2)};
`;

  fs.writeFileSync(path.join(process.cwd(), "src", "data", "vocabTopics.ts"), tsContent);
  console.log(`=== DONE! Total words saved across 31 topics: ${totalWords} ===`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
