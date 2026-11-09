// Comprehensive Series Catalog: All 28 Official IELTS Books (271 Authentic Tests)
// Sourced from DOL Tự Học (/hoc-tap & /luyen-thi-ielts/free-ielts-online-test)

import allBooksCatalogJson from "./allBooksCatalog.json";

export type BookSeriesCategory =
  | "REAL_FORECAST"
  | "CAMBRIDGE"
  | "ACTUAL_TEST"
  | "PLUS"
  | "OFFICIAL_TRAINER";

export interface CatalogTestItem {
  testNumber: number;
  id: string;
  title: string;
  skill: "READING" | "LISTENING";
  previewItems: string[]; // Passages for Reading, Parts for Listening
  questionsCount: number;
  durationMinutes: number;
}

export interface CambridgeBookSeries {
  seriesId: string;
  bookId: string;
  bookNum: number;
  title: string;
  category: BookSeriesCategory;
  badge: string;
  plays: string;
  description: string;
  readingTests: CatalogTestItem[];
  listeningTests: CatalogTestItem[];
}

interface RawBookCatalogEntry {
  seriesId: string;
  bookId: string;
  title: string;
  category: BookSeriesCategory;
  badge: string;
  plays: string;
  views?: number;
  reading: Array<{
    testNumber: number;
    id: string;
    title: string;
    questionsCount?: number;
    passages: string[];
  }>;
  listening: Array<{
    testNumber: number;
    id: string;
    title: string;
    questionsCount?: number;
    parts: string[];
  }>;
}

const rawCatalog = allBooksCatalogJson as Record<string, RawBookCatalogEntry>;

function buildDescription(raw: RawBookCatalogEntry): string {
  const rCount = raw.reading?.length || 0;
  const lCount = raw.listening?.length || 0;
  const firstPassages = raw.reading?.[0]?.passages?.slice(0, 3)?.join(", ") || raw.listening?.[0]?.parts?.slice(0, 3)?.join(", ") || "";
  const prefix = firstPassages ? `Chủ đề nổi bật: ${firstPassages}. ` : "";
  return `${prefix}Trọn bộ ${rCount + lCount} bài thi (${rCount} Reading • ${lCount} Listening) kèm audio chuẩn, transcript và giải thích 4 bước Linearthinking.`;
}

function mapRawToSeries(raw: RawBookCatalogEntry): CambridgeBookSeries {
  const numMatch = raw.title.match(/\d+/);
  const bookNum = numMatch ? parseInt(numMatch[0], 10) : 0;

  const readingTests: CatalogTestItem[] = (raw.reading || []).map((r) => ({
    testNumber: r.testNumber,
    id: r.id,
    title: r.title,
    skill: "READING",
    previewItems: (r.passages || []).filter(Boolean),
    questionsCount: r.questionsCount || 40,
    durationMinutes: 60,
  }));

  const listeningTests: CatalogTestItem[] = (raw.listening || []).map((l) => ({
    testNumber: l.testNumber,
    id: l.id,
    title: l.title,
    skill: "LISTENING",
    previewItems: (l.parts || []).filter(Boolean),
    questionsCount: l.questionsCount || 40,
    durationMinutes: 30,
  }));

  return {
    seriesId: raw.seriesId,
    bookId: raw.bookId,
    bookNum,
    title: raw.title,
    category: raw.category,
    badge: raw.badge,
    plays: raw.plays,
    description: buildDescription(raw),
    readingTests,
    listeningTests,
  };
}

export const ALL_SERIES_CATALOG: CambridgeBookSeries[] = Object.values(rawCatalog).map(mapRawToSeries);

export const REAL_TEST_SERIES_CATALOG: CambridgeBookSeries[] = ALL_SERIES_CATALOG.filter(
  (s) => s.category === "REAL_FORECAST"
);

export const CAMBRIDGE_SERIES_CATALOG: CambridgeBookSeries[] = ALL_SERIES_CATALOG.filter(
  (s) => s.category === "CAMBRIDGE"
);

export const ACTUAL_TEST_SERIES_CATALOG: CambridgeBookSeries[] = ALL_SERIES_CATALOG.filter(
  (s) => s.category === "ACTUAL_TEST"
);

export const PLUS_SERIES_CATALOG: CambridgeBookSeries[] = ALL_SERIES_CATALOG.filter(
  (s) => s.category === "PLUS"
);

export const OFFICIAL_TRAINER_SERIES_CATALOG: CambridgeBookSeries[] = ALL_SERIES_CATALOG.filter(
  (s) => s.category === "OFFICIAL_TRAINER"
);

const SERIES_ALIASES: Record<string, string> = {
  "rt-2026-q1": "real-test-2026-q1",
  "rt-2026-q2": "real-test-2026-q2",
  "fc-2026-q1": "forecast-test-2026-q1",
  "fc-2026-q2": "forecast-test-2026-q2",
  "ielts-practice-test-plus-1": "plus-1",
  "ielts-practice-test-plus-2": "plus-2",
  "ielts-practice-test-plus-3": "plus-3",
};

export function getSeriesById(seriesId: string): CambridgeBookSeries | undefined {
  const targetId = SERIES_ALIASES[seriesId] || seriesId;
  return ALL_SERIES_CATALOG.find((s) => s.seriesId === targetId);
}

export function getAllSeries(): CambridgeBookSeries[] {
  return ALL_SERIES_CATALOG;
}
