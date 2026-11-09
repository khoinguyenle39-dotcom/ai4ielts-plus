// Complete Authentic IELTS Test Library (28 Books • 271 Full Tests)
// Sourced from DOL Tự Học (/hoc-tap & /luyen-thi-ielts/free-ielts-online-test)
// Server-side data loader for AI4IELTS+ Platform

import real26q2 from "./books/real-test-2026-q2.json";
import real26q1 from "./books/real-test-2026-q1.json";
import forecast26q2 from "./books/forecast-test-2026-q2.json";
import forecast26q1 from "./books/forecast-test-2026-q1.json";
import cam21 from "./books/cam-21.json";
import cam20 from "./books/cam-20.json";
import cam19 from "./books/cam-19.json";
import cam18 from "./books/cam-18.json";
import cam17 from "./books/cam-17.json";
import cam16 from "./books/cam-16.json";
import cam15 from "./books/cam-15.json";
import cam14 from "./books/cam-14.json";
import cam13 from "./books/cam-13.json";
import cam12 from "./books/cam-12.json";
import cam11 from "./books/cam-11.json";
import cam10 from "./books/cam-10.json";
import cam09 from "./books/cam-09.json";
import officialGuide from "./books/official-guide.json";
import ieltsTrainer from "./books/ielts-trainer.json";
import actual1 from "./books/actual-test-1.json";
import actual2 from "./books/actual-test-2.json";
import actual3 from "./books/actual-test-3.json";
import actual4 from "./books/actual-test-4.json";
import actual5 from "./books/actual-test-5.json";
import actual6 from "./books/actual-test-6.json";
import plus1 from "./books/plus-1.json";
import plus2 from "./books/plus-2.json";
import plus3 from "./books/plus-3.json";

export interface QuestionExplanation {
  step1: string;
  step2: string;
  step3: string;
  step4?: string;
  distractor?: string;
}

export interface TestQuestion {
  id: number;
  prompt: string;
  type: "TRUE_FALSE_NOT_GIVEN" | "MULTIPLE_CHOICE" | "FILL_IN_BLANK";
  options?: string[];
  correct: string;
  imageUrl?: string;
  explanation: QuestionExplanation;
}

export interface TestPassage {
  id: string;
  passageNumber: number;
  title: string;
  subtitle?: string;
  content: string[];
  audioUrl?: string;
  transcript?: string[];
  images?: string[];
  questions: TestQuestion[];
}

export interface IELTSTestItem {
  id: string;
  title: string;
  series: string;
  testNumber: number;
  type: "Reading" | "Listening";
  durationMinutes: number;
  passages: TestPassage[];
}

const BOOK_BUNDLES: Record<string, Record<string, IELTSTestItem>> = {
  "real-test-2026-q2": real26q2 as unknown as Record<string, IELTSTestItem>,
  "real-test-2026-q1": real26q1 as unknown as Record<string, IELTSTestItem>,
  "forecast-test-2026-q2": forecast26q2 as unknown as Record<string, IELTSTestItem>,
  "forecast-test-2026-q1": forecast26q1 as unknown as Record<string, IELTSTestItem>,
  "cam-21": cam21 as unknown as Record<string, IELTSTestItem>,
  "cam-20": cam20 as unknown as Record<string, IELTSTestItem>,
  "cam-19": cam19 as unknown as Record<string, IELTSTestItem>,
  "cam-18": cam18 as unknown as Record<string, IELTSTestItem>,
  "cam-17": cam17 as unknown as Record<string, IELTSTestItem>,
  "cam-16": cam16 as unknown as Record<string, IELTSTestItem>,
  "cam-15": cam15 as unknown as Record<string, IELTSTestItem>,
  "cam-14": cam14 as unknown as Record<string, IELTSTestItem>,
  "cam-13": cam13 as unknown as Record<string, IELTSTestItem>,
  "cam-12": cam12 as unknown as Record<string, IELTSTestItem>,
  "cam-11": cam11 as unknown as Record<string, IELTSTestItem>,
  "cam-10": cam10 as unknown as Record<string, IELTSTestItem>,
  "cam-09": cam09 as unknown as Record<string, IELTSTestItem>,
  "official-guide": officialGuide as unknown as Record<string, IELTSTestItem>,
  "ielts-trainer": ieltsTrainer as unknown as Record<string, IELTSTestItem>,
  "actual-test-1": actual1 as unknown as Record<string, IELTSTestItem>,
  "actual-test-2": actual2 as unknown as Record<string, IELTSTestItem>,
  "actual-test-3": actual3 as unknown as Record<string, IELTSTestItem>,
  "actual-test-4": actual4 as unknown as Record<string, IELTSTestItem>,
  "actual-test-5": actual5 as unknown as Record<string, IELTSTestItem>,
  "actual-test-6": actual6 as unknown as Record<string, IELTSTestItem>,
  "plus-1": plus1 as unknown as Record<string, IELTSTestItem>,
  "plus-2": plus2 as unknown as Record<string, IELTSTestItem>,
  "plus-3": plus3 as unknown as Record<string, IELTSTestItem>,
};

export const IELTS_TESTS: Record<string, IELTSTestItem> = {};
for (const bundle of Object.values(BOOK_BUNDLES)) {
  Object.assign(IELTS_TESTS, bundle);
}

// Common aliases for direct series links
const ALIAS_MAP: Record<string, string> = {
  "real-test-2026-q1": "real-test-2026-q1-reading-1",
  "real-test-2026-q2": "real-test-2026-q2-reading-1",
  "rt-2026-q1": "real-test-2026-q1-reading-1",
  "rt-2026-q2": "real-test-2026-q2-reading-1",
  "forecast-test-2026-q1": "forecast-test-2026-q1-reading-1",
  "forecast-test-2026-q2": "forecast-test-2026-q2-reading-1",
  "fc-2026-q1": "forecast-test-2026-q1-reading-1",
  "fc-2026-q2": "forecast-test-2026-q2-reading-1",
  "plus-1": "plus-1-reading-1",
  "plus-2": "plus-2-reading-1",
  "plus-3": "plus-3-reading-1",
  "official-guide": "official-guide-reading-1",
  "ielts-trainer": "ielts-trainer-reading-1",
  "actual-test-1": "actual-test-1-reading-1",
  "actual-test-2": "actual-test-2-listening-7",
  "actual-test-3": "actual-test-3-reading-1",
  "actual-test-4": "actual-test-4-reading-1",
  "actual-test-5": "actual-test-5-reading-1",
  "actual-test-6": "actual-test-6-reading-1",
};

export function getIELTSTestById(id: string): IELTSTestItem {
  if (IELTS_TESTS[id]) {
    return IELTS_TESTS[id];
  }
  if (ALIAS_MAP[id] && IELTS_TESTS[ALIAS_MAP[id]]) {
    return IELTS_TESTS[ALIAS_MAP[id]];
  }
  if (BOOK_BUNDLES[id]) {
    const firstKey = Object.keys(BOOK_BUNDLES[id])[0];
    if (firstKey) return BOOK_BUNDLES[id][firstKey];
  }
  const seriesMatch = id.match(/^([a-z0-9-]+)-(?:reading|listening)-\d+$/);
  if (seriesMatch && BOOK_BUNDLES[seriesMatch[1]]) {
    const firstKey = Object.keys(BOOK_BUNDLES[seriesMatch[1]])[0];
    if (firstKey) return BOOK_BUNDLES[seriesMatch[1]][firstKey];
  }
  return IELTS_TESTS["cam-21-reading-1"];
}
