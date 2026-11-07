// Comprehensive Series Catalog: Cambridge IELTS (09-21), Real Tests (2026 Q1/Q2), Practice Test Plus (1-3)
// 18 Series Collections • 160 Authentic Tests (Reading & Listening)
// Sourced from DOL Tự Học & Cambridge IELTS Official Standards

export interface CatalogTestItem {
  testNumber: number;
  id: string;
  title: string;
  skill: "READING" | "LISTENING";
  previewItems: string[]; // Passages for Reading, Parts for Listening
  questionsCount: number;
  durationMinutes: number;
  url?: string;
}

export interface CambridgeBookSeries {
  seriesId: string;
  bookNum: number;
  title: string;
  badge: string;
  plays: string;
  description: string;
  readingTests: CatalogTestItem[];
  listeningTests: CatalogTestItem[];
}

import camCatalogJson from "../../scripts/cam-full-catalog.json";
import realPlusCatalogJson from "../../scripts/real-plus-catalog.json";

interface RawSeriesItem {
  seriesId: string;
  title: string;
  badge?: string;
  plays?: string;
  views?: number;
  reading: Array<{
    testNumber: number;
    id: string;
    title: string;
    url?: string;
    passages: string[];
  }>;
  listening: Array<{
    testNumber: number;
    id: string;
    title: string;
    url?: string;
    parts: string[];
  }>;
}

const rawCamCatalog = camCatalogJson as Record<string, RawSeriesItem>;
const rawRealPlusCatalog = realPlusCatalogJson as Record<string, RawSeriesItem>;

function getCamBadge(seriesId: string): string {
  if (seriesId === "cam-21") return "Mới nhất 2026";
  if (seriesId === "cam-20") return "Phổ biến nhất";
  if (seriesId === "cam-19" || seriesId === "cam-18") return "Hot Cambridge";
  return "Chuẩn Cambridge";
}

function getPlays(views?: number, seriesId?: string): string {
  if (views && views > 1000) return `${Math.round(views / 1000)}K`;
  const defaultMap: Record<string, string> = {
    "cam-21": "154K",
    "cam-20": "421K",
    "cam-19": "217K",
    "cam-18": "233K",
    "cam-17": "271K",
    "cam-16": "330K",
    "cam-15": "204K",
    "cam-14": "163K",
    "cam-13": "101K",
    "cam-12": "85K",
    "cam-11": "81K",
    "cam-10": "101K",
    "cam-09": "127K",
    "real-test-2026-q1": "142K",
    "real-test-2026-q2": "118K",
    "plus-1": "280K",
    "plus-2": "310K",
    "plus-3": "390K",
  };
  return defaultMap[seriesId || ""] || "120K";
}

function mapRawToSeries(seriesId: string, raw: RawSeriesItem, defaultDesc: string): CambridgeBookSeries {
  const numMatch = raw.title.match(/\d+/);
  const bookNum = numMatch ? parseInt(numMatch[0], 10) : 0;

  const readingTests: CatalogTestItem[] = (raw.reading || []).map((r) => ({
    testNumber: r.testNumber,
    id: r.id,
    title: r.title,
    skill: "READING",
    previewItems: (r.passages || []).filter(Boolean),
    questionsCount: 40,
    durationMinutes: 60,
    url: r.url,
  }));

  const listeningTests: CatalogTestItem[] = (raw.listening || []).map((l) => ({
    testNumber: l.testNumber,
    id: l.id,
    title: l.title,
    skill: "LISTENING",
    previewItems: (l.parts || []).filter(Boolean),
    questionsCount: 40,
    durationMinutes: 30,
    url: l.url,
  }));

  return {
    seriesId,
    bookNum,
    title: raw.title,
    badge: raw.badge || getCamBadge(seriesId),
    plays: raw.plays || getPlays(raw.views, seriesId),
    description: defaultDesc,
    readingTests,
    listeningTests,
  };
}

export const CAMBRIDGE_SERIES_CATALOG: CambridgeBookSeries[] = Object.keys(rawCamCatalog).map((seriesId) =>
  mapRawToSeries(
    seriesId,
    rawCamCatalog[seriesId],
    `Trọn bộ 8 bài tests chuẩn Cambridge (4 Reading • 4 Listening) kèm audio, transcript và giải thích 4 bước Linearthinking.`
  )
);

export const REAL_TEST_SERIES_CATALOG: CambridgeBookSeries[] = ["real-test-2026-q1", "real-test-2026-q2"]
  .filter((id) => rawRealPlusCatalog[id])
  .map((seriesId) =>
    mapRawToSeries(
      seriesId,
      rawRealPlusCatalog[seriesId],
      `Trọn bộ 10 bài tests thi thật (5 Reading • 5 Listening) chuẩn đề thi thật IDP/BC kèm đáp án và giải thích 4 bước Linearthinking.`
    )
  );

export const PLUS_SERIES_CATALOG: CambridgeBookSeries[] = ["plus-1", "plus-2", "plus-3"]
  .filter((id) => rawRealPlusCatalog[id])
  .map((seriesId) =>
    mapRawToSeries(
      seriesId,
      rawRealPlusCatalog[seriesId],
      `Bộ đề IELTS Practice Test Plus với độ khó nâng cao (Reading & Listening) kèm audio, transcript và giải thích Linearthinking.`
    )
  );

export const ALL_SERIES_CATALOG: CambridgeBookSeries[] = [
  ...REAL_TEST_SERIES_CATALOG,
  ...CAMBRIDGE_SERIES_CATALOG,
  ...PLUS_SERIES_CATALOG,
];

export function getSeriesById(seriesId: string): CambridgeBookSeries | undefined {
  // Direct match
  const found = ALL_SERIES_CATALOG.find((s) => s.seriesId === seriesId);
  if (found) return found;

  // Handle aliases
  if (seriesId === "rt-2026-q1") return getSeriesById("real-test-2026-q1");
  if (seriesId === "rt-2026-q2") return getSeriesById("real-test-2026-q2");
  if (seriesId === "ielts-practice-test-plus-1") return getSeriesById("plus-1");
  if (seriesId === "ielts-practice-test-plus-2") return getSeriesById("plus-2");
  if (seriesId === "ielts-practice-test-plus-3") return getSeriesById("plus-3");

  return undefined;
}

export function getAllSeries(): CambridgeBookSeries[] {
  return ALL_SERIES_CATALOG;
}
