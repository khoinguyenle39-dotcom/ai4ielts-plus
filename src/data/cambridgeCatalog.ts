// Cambridge IELTS Authentic Series Catalog (Cambridge 09 - 21)
// 13 Books • 104 Tests (4 Reading & 4 Listening per book)
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

import fullCatalogJson from "../../scripts/cam-full-catalog.json";

interface RawSeriesItem {
  seriesId: string;
  title: string;
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

const rawCatalog = fullCatalogJson as Record<string, RawSeriesItem>;

function getBadge(seriesId: string): string {
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
  };
  return defaultMap[seriesId || ""] || "120K";
}

export const CAMBRIDGE_SERIES_CATALOG: CambridgeBookSeries[] = Object.keys(rawCatalog).map((seriesId) => {
  const raw = rawCatalog[seriesId];
  const numMatch = raw.title.match(/\d+/);
  const bookNum = numMatch ? parseInt(numMatch[0], 10) : 0;

  const readingTests: CatalogTestItem[] = (raw.reading || []).map((r) => ({
    testNumber: r.testNumber,
    id: r.id,
    title: r.title,
    skill: "READING",
    previewItems: r.passages.filter(Boolean),
    questionsCount: 40,
    durationMinutes: 60,
    url: r.url,
  }));

  const listeningTests: CatalogTestItem[] = (raw.listening || []).map((l) => ({
    testNumber: l.testNumber,
    id: l.id,
    title: l.title,
    skill: "LISTENING",
    previewItems: l.parts.filter(Boolean),
    questionsCount: 40,
    durationMinutes: 30,
    url: l.url,
  }));

  return {
    seriesId,
    bookNum,
    title: raw.title,
    badge: getBadge(seriesId),
    plays: getPlays(raw.views, seriesId),
    description: `Trọn bộ 8 bài tests chuẩn Cambridge (4 Reading • 4 Listening) kèm audio, transcript và giải thích 4 bước Linearthinking.`,
    readingTests,
    listeningTests,
  };
});

export function getSeriesById(seriesId: string): CambridgeBookSeries | undefined {
  return CAMBRIDGE_SERIES_CATALOG.find((s) => s.seriesId === seriesId);
}

export function getAllSeries(): CambridgeBookSeries[] {
  return CAMBRIDGE_SERIES_CATALOG;
}
