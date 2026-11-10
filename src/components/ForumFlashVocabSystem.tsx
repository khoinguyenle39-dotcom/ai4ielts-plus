"use client";

import React, { useState, useEffect, useMemo, useCallback, useRef } from "react";
import {
  VOCAB_TOPICS,
  VocabTopicMeta,
  VocabItem,
  VocabTopicData,
} from "@/data/vocabTopics";
import { supabase } from "@/lib/supabase";
import { recordDailyStudyVisit } from "@/lib/streakManager";
import {
  BookOpen,
  Star,
  Volume2,
  CheckCircle2,
  XCircle,
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  Download,
  Bookmark,
  BookmarkCheck,
  Sparkles,
  Trophy,
  Lock,
  Unlock,
  Mic,
  Headphones,
  Layers,
  Search,
  Plus,
  Trash2,
  Play,
  Flame,
  Sprout,
  TreePine,
  HelpCircle,
  Keyboard,
  Shuffle,
  Award,
} from "lucide-react";

const STORAGE_KEY = "ai4ielts_forumflash_vocab_v1";
const SUPABASE_USER_ID = "default_user_forumflash_vocab";
const LESSON_SIZE = 10; // 10 mục từ mỗi bài học (200 từ = 20 bài/chủ đề)

export type LessonModeId = "hoc" | "tap" | "nghe" | "noi" | "vuot";
export type DifficultyLevel = "easy" | "medium" | "hard";
export type SrsGrade = "again" | "hard" | "good" | "easy";

export interface SrsCard {
  id: string;
  term: string;
  definition: string;
  phonetic: string;
  partOfSpeech: string;
  pattern: string;
  exampleEn: string;
  exampleVi: string;
  topicTitle: string;
  addedAt: number;
  due: number;
  interval: number; // days
  ease: number;
  reps: number;
  lapses: number;
}

export interface WrongAnswerRecord {
  prompt: string;
  sentence: string;
  given: string;
  answer: string;
  explain: string;
}

export interface ForumFlashProgressState {
  xp: number;
  // key: `${topicId}:${lessonIndex + 1}:${modeId}` -> stars (1..3)
  stars: Record<string, number>;
  // key: topicId -> true if passed 30-question skip test
  topicPassed: Record<string, boolean>;
  // key: topicId -> card index in Topic Library
  libraryPositions: Record<string, number>;
  // key: item.id -> SrsCard
  srsDeck: Record<string, SrsCard>;
  totalCorrect: number;
  totalAttempts: number;
}

const INITIAL_PROGRESS: ForumFlashProgressState = {
  xp: 0,
  stars: {},
  topicPassed: {},
  libraryPositions: {},
  srsDeck: {},
  totalCorrect: 0,
  totalAttempts: 0,
};

const TREE_STAGES = [
  { at: 0, label: "01 · Hạt giống ngôn từ", desc: "Bắt đầu gieo những mục từ IELTS đầu tiên." },
  { at: 150, label: "02 · Mầm non nảy lộc", desc: "Đã hình thành thói quen lật thẻ và làm bài tập." },
  { at: 400, label: "03 · Cây non vươn chồi", desc: "Vốn từ học thuật bắt đầu bám rễ vững chắc." },
  { at: 800, label: "04 · Tán lá sum suê", desc: "Nắm vững ngữ cảnh câu và Collocation theo chủ đề." },
  { at: 1500, label: "05 · Đơm hoa học thuật", desc: "Phản xạ nhanh cả Nghe viết, Điền từ và Phát âm." },
  { at: 2500, label: "06 · Kết trái Band 6.5+", desc: "Sử dụng linh hoạt từ vựng CEFR B2–C1 trong bài thi." },
  { at: 4000, label: "07 · Cổ thụ IELTS C2", desc: "Làm chủ trọn vẹn kho từ vựng học thuật đỉnh cao." },
];

const LESSON_MODES: {
  id: LessonModeId;
  title: string;
  summary: string;
  maxStars: number;
  optional?: boolean;
}[] = [
  {
    id: "hoc",
    title: "Học thẻ",
    summary: "Xem hết 10 thẻ từ, cấu trúc, ví dụ và phát âm là qua màn.",
    maxStars: 1,
  },
  {
    id: "tap",
    title: "Bài tập",
    summary: "Đúng/Sai, trắc nghiệm, ghép đôi 4 cặp và điền từ vào ngữ cảnh.",
    maxStars: 3,
  },
  {
    id: "nghe",
    title: "Nghe viết",
    summary: "Chỉ nghe phát âm rồi gõ lại mục từ hoặc chọn audio đúng.",
    maxStars: 3,
    optional: true,
  },
  {
    id: "noi",
    title: "Phát âm",
    summary: "Đọc to mục từ, trình duyệt nhận diện giọng nói và chấm ngay.",
    maxStars: 3,
    optional: true,
  },
];

function starKey(topicId: string, lessonIdx: number, modeId: LessonModeId): string {
  return `${topicId}:${lessonIdx + 1}:${modeId}`;
}

function normalizeAnswer(str: string): string {
  return String(str || "")
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[’‘`´]/g, "'")
    .replace(/[-–—]/g, " ")
    .replace(/[.,!?;:"()[\]]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function isAnswerMatch(given: string, expected: string): boolean {
  const g = normalizeAnswer(given);
  const e = normalizeAnswer(expected);
  if (!g || !e) return false;
  if (g === e) return true;
  // Chấp nhận biến thể Anh-Anh / Anh-Mỹ phổ biến (-ise/-ize, -our/-or, -re/-er)
  const unify = (s: string) =>
    s
      .replace(/is(e|ed|es|ing|ation)\b/g, "iz$1")
      .replace(/(\w{2,})our\b/g, "$1or")
      .replace(/(\w{2,})re\b/g, "$1er");
  return unify(g) === unify(e);
}

/** Phát âm tiếng Anh bằng Web Speech API */
function speakEnglish(text: string, rate = 0.95) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  try {
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "en-GB";
    utter.rate = rate;
    const voices = window.speechSynthesis.getVoices();
    const preferred =
      voices.find((v) => v.lang.startsWith("en-GB") && /natural|google|siri|premium/i.test(v.name)) ||
      voices.find((v) => v.lang.startsWith("en-GB")) ||
      voices.find((v) => v.lang.startsWith("en-US")) ||
      voices.find((v) => v.lang.startsWith("en"));
    if (preferred) utter.voice = preferred;
    window.speechSynthesis.speak(utter);
  } catch {
    // Bỏ qua nếu trình duyệt chặn
  }
}

/** Âm thanh hiệu ứng khi trả lời Đúng / Sai */
function playFeedbackSound(correct: boolean) {
  if (typeof window === "undefined") return;
  try {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = correct ? "sine" : "triangle";
    osc.frequency.setValueAtTime(correct ? 587.33 : 220, ctx.currentTime);
    if (correct) {
      osc.frequency.setValueAtTime(880, ctx.currentTime + 0.09);
    } else {
      osc.frequency.setValueAtTime(165, ctx.currentTime + 0.1);
    }
    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
    osc.connect(gain).connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.26);
  } catch {
    // Ignore audio errors
  }
}

/** Tính toán SRS theo thuật toán Anki SM-2 giống ForumFlash */
function gradeSrsCard(card: SrsCard, grade: SrsGrade, now = Date.now()): SrsCard {
  const ease = Math.min(3.0, Math.max(1.3, card.ease || 2.5));
  const interval = Math.max(0, card.interval || 0);
  const reps = Math.max(0, card.reps || 0);

  if (grade === "again") {
    return {
      ...card,
      ease: Math.max(1.3, ease - 0.2),
      interval: 0,
      reps: 0,
      lapses: (card.lapses || 0) + 1,
      due: now + 10 * 60 * 1000, // Ôn lại sau 10 phút
    };
  }

  let nextInterval = 1;
  if (grade === "hard") {
    nextInterval = interval > 0 ? Math.max(1, Math.round(interval * 1.2)) : 1;
  } else if (grade === "easy") {
    nextInterval = reps === 0 ? 3 : Math.max(1, Math.round(interval * ease * 1.3));
  } else {
    // good
    nextInterval = reps === 0 ? 1 : reps === 1 ? 3 : Math.max(1, Math.round(interval * ease));
  }

  const nextEase =
    grade === "hard"
      ? Math.max(1.3, ease - 0.15)
      : grade === "easy"
      ? Math.min(3.0, ease + 0.15)
      : ease;

  return {
    ...card,
    ease: nextEase,
    interval: nextInterval,
    reps: reps + 1,
    due: now + nextInterval * 86_400_000,
  };
}

interface QuestionItem {
  id: string;
  kind: "truefalse" | "choice" | "fill" | "longfill" | "match" | "dictation" | "listenchoice" | "speaking";
  card: VocabItem;
  prompt: string;
  sentence?: string;
  sentenceVi?: string;
  options?: string[];
  answer: string;
  matchPairs?: { term: string; definition: string }[];
  explain: string;
}

function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/** Tạo danh sách câu hỏi bài tập cho 1 Bài học (hoặc bài Thi vượt cấp 30 câu) */
function buildQuestionsForSession(
  lessonCards: VocabItem[],
  allTopicCards: VocabItem[],
  mode: LessonModeId,
  difficulty: DifficultyLevel
): QuestionItem[] {
  if (mode === "noi") {
    return lessonCards.map((card, idx) => ({
      id: `noi-${idx}`,
      kind: "speaking",
      card,
      prompt: "Đọc to mục từ này vào Microphone",
      sentence: card.examples[0]?.en || "",
      sentenceVi: card.examples[0]?.vi || "",
      answer: card.term,
      explain: `${card.term} /${card.phonetic}/ = ${card.definition}`,
    }));
  }

  if (mode === "nghe") {
    return lessonCards.map((card, idx) => {
      const useListenChoice =
        (difficulty === "medium" && idx % 2 === 1) ||
        (difficulty === "hard" && idx % 3 !== 0);

      if (useListenChoice) {
        const distractors = shuffleArray(
          allTopicCards.filter((c) => c.id !== card.id && c.definition !== card.definition)
        ).slice(0, 3);
        const options = shuffleArray([card.term, ...distractors.map((d) => d.term)]);
        return {
          id: `nghe-${idx}`,
          kind: "listenchoice",
          card,
          prompt: `Nghe 4 phương án phát âm và chọn mục từ có nghĩa là: “${card.definition}”`,
          options,
          answer: card.term,
          explain: `“${card.term}” /${card.phonetic}/ = ${card.definition}`,
        };
      }

      return {
        id: `nghe-${idx}`,
        kind: "dictation",
        card,
        prompt: "Nghe phát âm rồi gõ lại chính xác mục từ tiếng Anh",
        sentence: `Gợi ý nghĩa: ${card.definition} (${card.partOfSpeech})`,
        answer: card.term,
        explain: `“${card.term}” /${card.phonetic}/ = ${card.definition}`,
      };
    });
  }

  // mode === "tap" hoặc "vuot" (Thi vượt cấp 30 câu)
  const pool = mode === "vuot" ? shuffleArray(allTopicCards).slice(0, 30) : lessonCards;
  const sequence: QuestionItem["kind"][] =
    mode === "vuot"
      ? [
          "choice",
          "fill",
          "longfill",
          "dictation",
          "match",
          "choice",
          "fill",
          "longfill",
          "choice",
          "fill",
        ]
      : difficulty === "easy"
      ? ["truefalse", "choice", "match", "choice", "truefalse", "choice", "fill", "choice", "match", "fill"]
      : difficulty === "medium"
      ? ["choice", "match", "fill", "choice", "longfill", "match", "fill", "choice", "fill", "longfill"]
      : ["fill", "longfill", "choice", "fill", "longfill", "match", "fill", "longfill", "choice", "fill"];

  return pool.map((card, idx) => {
    const kind = sequence[idx % sequence.length];
    const distractors = shuffleArray(
      allTopicCards.filter((c) => c.id !== card.id && c.definition !== card.definition)
    ).slice(0, 3);

    if (kind === "truefalse") {
      const isTrue = Math.random() >= 0.45 || distractors.length === 0;
      const shownMeaning = isTrue ? card.definition : distractors[0].definition;
      return {
        id: `q-${idx}`,
        kind: "truefalse",
        card,
        prompt: `Mục từ “${card.term}” có nghĩa là “${shownMeaning}” — Đúng hay Sai?`,
        sentence: card.examples[0]?.en || "",
        sentenceVi: card.examples[0]?.vi || "",
        options: ["Đúng", "Sai"],
        answer: isTrue ? "Đúng" : "Sai",
        explain: `“${card.term}” có nghĩa chuẩn là: “${card.definition}”.`,
      };
    }

    if (kind === "match") {
      const pairCards = [card, ...distractors.slice(0, 3)];
      return {
        id: `q-${idx}`,
        kind: "match",
        card,
        prompt: "Nối mỗi mục từ tiếng Anh ở cột trái với nghĩa tiếng Việt tương ứng ở cột phải",
        matchPairs: pairCards.map((c) => ({ term: c.term, definition: c.definition })),
        answer: "Ghép đúng cả 4 cặp",
        explain: pairCards.map((c) => `“${c.term}” = ${c.definition}`).join(" · "),
      };
    }

    if (kind === "dictation") {
      return {
        id: `q-${idx}`,
        kind: "dictation",
        card,
        prompt: "Nghe phát âm và gõ lại mục từ tiếng Anh",
        sentence: `Nghĩa: ${card.definition} (${card.partOfSpeech})`,
        answer: card.term,
        explain: `“${card.term}” /${card.phonetic}/ = ${card.definition}`,
      };
    }

    if (kind === "longfill" && card.longContexts && card.longContexts.length > 0) {
      const ctxParagraph = card.longContexts[idx % card.longContexts.length];
      return {
        id: `q-${idx}`,
        kind: "longfill",
        card,
        prompt: `Điền mục từ phù hợp vào chỗ trống trong đoạn văn học thuật (Gợi ý: ${card.definition})`,
        sentence: ctxParagraph,
        answer: card.term,
        explain: `Đáp án: “${card.term}” (${card.definition}) · Cấu trúc: ${card.pattern}`,
      };
    }

    if (kind === "fill" || kind === "longfill") {
      const shortCtx =
        card.shortContexts?.[0] ||
        (card.examples[0]?.en
          ? card.examples[0].en.replace(new RegExp(card.term, "i"), "___")
          : `We need to focus on ___ (${card.definition}).`);
      return {
        id: `q-${idx}`,
        kind: "fill",
        card,
        prompt: `Điền từ/cụm từ tiếng Anh tương ứng với nghĩa: “${card.definition}” (${card.partOfSpeech})`,
        sentence: shortCtx.includes("___") ? shortCtx : `${shortCtx} (___)`,
        sentenceVi: card.examples[0]?.vi || "",
        answer: card.term,
        explain: `Đáp án: “${card.term}” /${card.phonetic}/ = ${card.definition}`,
      };
    }

    // Default: "choice"
    const askContextChoice = idx % 2 === 0 && (card.shortContexts?.length || card.examples.length);
    if (askContextChoice) {
      const rawSentence =
        card.shortContexts?.[0] ||
        card.examples[0]?.en.replace(new RegExp(card.term, "i"), "___") ||
        "___";
      const options = shuffleArray([card.term, ...distractors.map((d) => d.term)]);
      return {
        id: `q-${idx}`,
        kind: "choice",
        card,
        prompt: `Chọn mục từ đúng để hoàn thành câu (Nghĩa cần điền: “${card.definition}”)`,
        sentence: rawSentence,
        sentenceVi: card.examples[0]?.vi || "",
        options,
        answer: card.term,
        explain: `“${card.term}” = ${card.definition} · ${card.pattern}`,
      };
    }

    const options = shuffleArray([card.definition, ...distractors.map((d) => d.definition)]);
    return {
      id: `q-${idx}`,
      kind: "choice",
      card,
      prompt: `Chọn nghĩa tiếng Việt chính xác của mục từ: “${card.term}” (${card.partOfSpeech})`,
      sentence: card.examples[0]?.en || "",
      sentenceVi: card.examples[0]?.vi || "",
      options,
      answer: card.definition,
      explain: `“${card.term}” /${card.phonetic}/ = ${card.definition}`,
    };
  });
}

export default function ForumFlashVocabSystem() {
  const [progress, setProgress] = useState<ForumFlashProgressState>(INITIAL_PROGRESS);
  const [trackFilter, setTrackFilter] = useState<"ielts" | "cefr" | "srs">("ielts");
  const [selectedTopicId, setSelectedTopicId] = useState<string>("education");
  const [topicDataMap, setTopicDataMap] = useState<Record<string, VocabTopicData>>({});
  const [loadingTopic, setLoadingTopic] = useState<boolean>(false);

  // Chế độ Thư viện toàn bộ thẻ của chủ đề
  const [libraryOpen, setLibraryOpen] = useState<boolean>(false);
  const [libraryIdx, setLibraryIdx] = useState<number>(0);
  const [libraryFlipped, setLibraryFlipped] = useState<boolean>(false);
  const [libraryJumpInput, setLibraryJumpInput] = useState<string>("");

  // Modal chọn mức độ trước khi vào Bài học
  const [previewLesson, setPreviewLesson] = useState<{
    lessonIdx: number;
    modeId: LessonModeId;
  } | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyLevel>("medium");

  // Phiên học trực tiếp (Lesson / Flashcard / Quiz / Skip Test)
  const [activeSession, setActiveSession] = useState<{
    topicId: string;
    lessonIdx: number; // -1 nếu là Thi vượt cấp 30 câu
    modeId: LessonModeId;
    difficulty: DifficultyLevel;
    cards: VocabItem[];
    questions: QuestionItem[];
    step: number;
    cardFrontLang: "en" | "vi";
    cardFlipped: boolean;
    cardRecallInput: string;
    cardRecallChecked: boolean;
    needReviewIds: string[];
    selectedAnswer: string;
    checked: boolean;
    lastCorrect: boolean;
    correctCount: number;
    wrongRecords: WrongAnswerRecord[];
    completed: boolean;
    // Cho dạng ghép đôi 4 cặp (match)
    matchLeftSelected: string | null;
    matchedPairs: Record<string, string>; // term -> definition
    // Cho dạng Phát âm (speaking)
    speechTranscript: string;
    isListeningSpeech: boolean;
  } | null>(null);

  // Quản lý Bộ thẻ SRS cá nhân
  const [srsSearch, setSrsSearch] = useState("");
  const [srsSort, setSrsSort] = useState<"due" | "hardest" | "added" | "alphabet">("due");
  const [srsStudyCard, setSrsStudyCard] = useState<SrsCard | null>(null);
  const [srsStudyFlipped, setSrsStudyFlipped] = useState(false);
  const [newCardFront, setNewCardFront] = useState("");
  const [newCardBack, setNewCardBack] = useState("");
  const [newCardExample, setNewCardExample] = useState("");
  const [showAddSrsModal, setShowAddSrsModal] = useState(false);

  const topicCacheRef = useRef<Record<string, VocabTopicData>>({});

  // Load & Sync Progress từ localStorage + Supabase
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        setProgress({ ...INITIAL_PROGRESS, ...parsed });
      }
    } catch {
      // ignore
    }

    (async () => {
      try {
        const { data } = await supabase
          .from("user_progress")
          .select("completed_tasks")
          .eq("user_id", SUPABASE_USER_ID)
          .order("last_active", { ascending: false })
          .limit(1)
          .maybeSingle();

        const remote = Array.isArray(data?.completed_tasks) ? data.completed_tasks[0] : null;
        if (remote && typeof remote === "object") {
          setProgress((prev) => {
            if ((remote.xp || 0) > prev.xp || Object.keys(remote.stars || {}).length > Object.keys(prev.stars).length) {
              const merged = { ...INITIAL_PROGRESS, ...remote };
              localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
              return merged;
            }
            return prev;
          });
        }
      } catch {
        // Offline safe
      }
    })();
  }, []);

  const saveProgress = useCallback((updater: (prev: ForumFlashProgressState) => ForumFlashProgressState) => {
    setProgress((prev) => {
      const next = updater(prev);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // ignore
      }
      // Đồng bộ lên Supabase
      (async () => {
        try {
          const { data: existing } = await supabase
            .from("user_progress")
            .select("id")
            .eq("user_id", SUPABASE_USER_ID)
            .limit(1)
            .maybeSingle();

          const payload = {
            user_id: SUPABASE_USER_ID,
            completed_tasks: [next],
            test_results: [],
            last_active: new Date().toISOString(),
          };
          if (existing?.id) {
            await supabase.from("user_progress").update(payload).eq("id", existing.id);
          } else {
            await supabase.from("user_progress").insert(payload);
          }
        } catch {
          // ignore
        }
      })();
      return next;
    });
  }, []);

  // Tải file JSON của chủ đề đang chọn
  const loadTopicData = useCallback(async (topicId: string): Promise<VocabTopicData | null> => {
    if (topicCacheRef.current[topicId]) {
      return topicCacheRef.current[topicId];
    }
    setLoadingTopic(true);
    try {
      const res = await fetch(`/vocab-data/${topicId}.json`);
      if (!res.ok) throw new Error("Failed to load topic");
      const data: VocabTopicData = await res.json();
      topicCacheRef.current[topicId] = data;
      setTopicDataMap((prev) => ({ ...prev, [topicId]: data }));
      return data;
    } catch {
      return null;
    } finally {
      setLoadingTopic(false);
    }
  }, []);

  useEffect(() => {
    void loadTopicData(selectedTopicId);
  }, [selectedTopicId, loadTopicData]);

  const filteredTopics = useMemo(() => {
    if (trackFilter === "cefr") return VOCAB_TOPICS.filter((t) => t.cefr);
    return VOCAB_TOPICS.filter((t) => !t.cefr);
  }, [trackFilter]);

  const currentTopicMeta: VocabTopicMeta = useMemo(() => {
    return (
      VOCAB_TOPICS.find((t) => t.id === selectedTopicId) ||
      filteredTopics[0] ||
      VOCAB_TOPICS[0]
    );
  }, [selectedTopicId, filteredTopics]);

  const currentTopicData: VocabTopicData | undefined = topicDataMap[currentTopicMeta.id];

  // Chia các mục từ của chủ đề thành các bài học (mỗi bài 10 từ)
  const lessons = useMemo(() => {
    const total = currentTopicData?.items.length || currentTopicMeta.count || 200;
    const count = Math.ceil(total / LESSON_SIZE);
    return Array.from({ length: count }, (_, idx) => {
      const start = idx * LESSON_SIZE;
      const end = Math.min(total, start + LESSON_SIZE);
      return {
        index: idx,
        numberLabel: String(idx + 1).padStart(2, "0"),
        size: end - start,
        items: currentTopicData ? currentTopicData.items.slice(start, end) : [],
      };
    });
  }, [currentTopicData, currentTopicMeta]);

  // Tính giai đoạn Cây trưởng thành theo XP
  const treeStageInfo = useMemo(() => {
    let stageIdx = 0;
    for (let i = 0; i < TREE_STAGES.length; i++) {
      if (progress.xp >= TREE_STAGES[i].at) stageIdx = i;
    }
    const current = TREE_STAGES[stageIdx];
    const next = TREE_STAGES[stageIdx + 1] || null;
    const percent = next
      ? Math.min(100, Math.round(((progress.xp - current.at) / (next.at - current.at)) * 100))
      : 100;
    return { stageIdx, current, next, percent };
  }, [progress.xp]);

  // Kiểm tra 1 bài học đã mở khóa chưa
  const isLessonUnlocked = useCallback(
    (topicId: string, lessonIdx: number) => {
      if (lessonIdx === 0) return true;
      if (progress.topicPassed[topicId]) return true;
      // Bài trước đó phải đạt ít nhất 1 sao ở phần "tap" (Bài tập)
      const prevTapStars = progress.stars[starKey(topicId, lessonIdx - 1, "tap")] || 0;
      return prevTapStars > 0;
    },
    [progress.stars, progress.topicPassed]
  );

  // Kiểm tra 1 nút chế độ trong bài học đã mở khóa chưa
  const isModeUnlocked = useCallback(
    (topicId: string, lessonIdx: number, modeId: LessonModeId) => {
      if (!isLessonUnlocked(topicId, lessonIdx)) return false;
      if (progress.topicPassed[topicId]) return true;
      if (modeId === "hoc") return true;
      if (modeId === "tap") {
        const hocStars = progress.stars[starKey(topicId, lessonIdx, "hoc")] || 0;
        const tapStars = progress.stars[starKey(topicId, lessonIdx, "tap")] || 0;
        return hocStars > 0 || tapStars > 0;
      }
      // "nghe" & "noi" mở khi đã học thẻ hoặc làm bài tập
      const hocStars = progress.stars[starKey(topicId, lessonIdx, "hoc")] || 0;
      const tapStars = progress.stars[starKey(topicId, lessonIdx, "tap")] || 0;
      return hocStars > 0 || tapStars > 0;
    },
    [isLessonUnlocked, progress.stars, progress.topicPassed]
  );

  // Lưu / Bỏ lưu 1 mục từ vào Bộ thẻ ôn tập SRS
  const toggleSaveToSrs = useCallback(
    (item: VocabItem, topicTitle: string) => {
      saveProgress((prev) => {
        const nextDeck = { ...prev.srsDeck };
        if (nextDeck[item.id]) {
          delete nextDeck[item.id];
        } else {
          const now = Date.now();
          nextDeck[item.id] = {
            id: item.id,
            term: item.term,
            definition: item.definition,
            phonetic: item.phonetic,
            partOfSpeech: item.partOfSpeech,
            pattern: item.pattern,
            exampleEn: item.examples[0]?.en || "",
            exampleVi: item.examples[0]?.vi || "",
            topicTitle,
            addedAt: now,
            due: now,
            interval: 0,
            ease: 2.5,
            reps: 0,
            lapses: 0,
          };
        }
        return { ...prev, srsDeck: nextDeck };
      });
    },
    [saveProgress]
  );

  // Xuất bộ thẻ của chủ đề ra file TSV (Anki/Quizlet) hoặc CSV (Excel/Sheets)
  const exportTopicCards = useCallback(
    (format: "tsv" | "csv") => {
      if (!currentTopicData) return;
      const sep = format === "tsv" ? "\t" : ",";
      const escapeCell = (val: string) => {
        const clean = String(val || "").replace(/\r?\n/g, " ").trim();
        if (format === "tsv") return clean.replace(/\t/g, " ");
        return `"${clean.replace(/"/g, '""')}"`;
      };

      const header = ["Term", "Vietnamese Meaning", "IPA", "Part of Speech", "Pattern", "Example EN", "Example VI"]
        .map(escapeCell)
        .join(sep);

      const rows = currentTopicData.items.map((item) =>
        [
          item.term,
          item.definition,
          `/${item.phonetic}/`,
          item.partOfSpeech,
          item.pattern,
          item.examples[0]?.en || "",
          item.examples[0]?.vi || "",
        ]
          .map(escapeCell)
          .join(sep)
      );

      const content = "\uFEFF" + [header, ...rows].join("\n");
      const blob = new Blob([content], {
        type: format === "tsv" ? "text/tab-separated-values;charset=utf-8" : "text/csv;charset=utf-8",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `ai4ielts-vocab-${currentTopicData.id}.${format}`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    },
    [currentTopicData]
  );

  // Mở chế độ học (Lesson hoặc Thi vượt cấp)
  const startLessonSession = useCallback(
    async (topicId: string, lessonIdx: number, modeId: LessonModeId, difficulty: DifficultyLevel) => {
      const data = await loadTopicData(topicId);
      if (!data || !data.items.length) return;

      const start = lessonIdx * LESSON_SIZE;
      const lessonCards =
        modeId === "vuot"
          ? shuffleArray(data.items).slice(0, 30)
          : data.items.slice(start, start + LESSON_SIZE);

      const questions =
        modeId === "hoc"
          ? []
          : buildQuestionsForSession(lessonCards, data.items, modeId, difficulty);

      setPreviewLesson(null);
      setActiveSession({
        topicId,
        lessonIdx,
        modeId,
        difficulty,
        cards: lessonCards,
        questions,
        step: 0,
        cardFrontLang: "en",
        cardFlipped: false,
        cardRecallInput: "",
        cardRecallChecked: false,
        needReviewIds: [],
        selectedAnswer: "",
        checked: false,
        lastCorrect: false,
        correctCount: 0,
        wrongRecords: [],
        completed: false,
        matchLeftSelected: null,
        matchedPairs: {},
        speechTranscript: "",
        isListeningSpeech: false,
      });

      // Tự động phát âm nếu câu đầu tiên là dictation
      if (modeId !== "hoc" && questions[0]?.kind === "dictation") {
        setTimeout(() => speakEnglish(questions[0].card.term), 250);
      }
    },
    [loadTopicData]
  );

  // Xử lý hoàn thành phiên học (cộng XP, lưu sao, cập nhật Streak)
  const finishActiveSession = useCallback(
    (finalCorrect: number, totalQ: number, wrongList: WrongAnswerRecord[]) => {
      if (!activeSession) return;
      recordDailyStudyVisit(new Date());

      const { topicId, lessonIdx, modeId } = activeSession;

      if (modeId === "hoc") {
        saveProgress((prev) => {
          const key = starKey(topicId, lessonIdx, "hoc");
          return {
            ...prev,
            xp: prev.xp + 35,
            stars: { ...prev.stars, [key]: 1 },
          };
        });
        setActiveSession((prev) => (prev ? { ...prev, completed: true } : null));
        return;
      }

      if (modeId === "vuot") {
        const passed = finalCorrect >= 25; // 25/30 câu
        saveProgress((prev) => ({
          ...prev,
          xp: prev.xp + (passed ? 120 : 25),
          topicPassed: passed ? { ...prev.topicPassed, [topicId]: true } : prev.topicPassed,
          totalCorrect: prev.totalCorrect + finalCorrect,
          totalAttempts: prev.totalAttempts + totalQ,
        }));
        setActiveSession((prev) =>
          prev
            ? {
                ...prev,
                correctCount: finalCorrect,
                wrongRecords: wrongList,
                completed: true,
              }
            : null
        );
        return;
      }

      const ratio = totalQ > 0 ? finalCorrect / totalQ : 0;
      const passed = ratio >= 0.8;
      const earnedStars = !passed ? 0 : ratio === 1 ? 3 : ratio >= 0.9 ? 2 : 1;

      saveProgress((prev) => {
        const key = starKey(topicId, lessonIdx, modeId);
        const oldStars = prev.stars[key] || 0;
        const hocKey = starKey(topicId, lessonIdx, "hoc");
        return {
          ...prev,
          xp: prev.xp + (passed ? 35 + earnedStars * 15 : 10),
          stars: {
            ...prev.stars,
            [key]: Math.max(oldStars, earnedStars),
            ...(modeId === "tap" && earnedStars > 0 ? { [hocKey]: 1 } : {}),
          },
          totalCorrect: prev.totalCorrect + finalCorrect,
          totalAttempts: prev.totalAttempts + totalQ,
        };
      });

      setActiveSession((prev) =>
        prev
          ? {
              ...prev,
              correctCount: finalCorrect,
              wrongRecords: wrongList,
              completed: true,
            }
          : null
      );
    },
    [activeSession, saveProgress]
  );

  // Phím tắt bàn phím cho Thư viện thẻ & Chế độ Học thẻ
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;

      if (libraryOpen && currentTopicData) {
        const currentCard = currentTopicData.items[libraryIdx];
        if (e.code === "Space") {
          e.preventDefault();
          setLibraryFlipped((f) => !f);
        } else if (e.key === "ArrowRight") {
          e.preventDefault();
          setLibraryFlipped(false);
          setLibraryIdx((i) => Math.min(currentTopicData.items.length - 1, i + 1));
        } else if (e.key === "ArrowLeft") {
          e.preventDefault();
          setLibraryFlipped(false);
          setLibraryIdx((i) => Math.max(0, i - 1));
        } else if (e.key.toLowerCase() === "a" && currentCard) {
          e.preventDefault();
          speakEnglish(currentCard.term);
        }
        return;
      }

      if (activeSession && !activeSession.completed && activeSession.modeId === "hoc") {
        const currentCard = activeSession.cards[activeSession.step];
        if (!currentCard) return;
        if (e.code === "Space") {
          e.preventDefault();
          setActiveSession((s) => (s ? { ...s, cardFlipped: !s.cardFlipped } : null));
        } else if (e.key.toLowerCase() === "a") {
          e.preventDefault();
          speakEnglish(currentCard.term);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [libraryOpen, currentTopicData, libraryIdx, activeSession]);

  // Lưu vị trí thẻ đang xem trong Thư viện chủ đề
  useEffect(() => {
    if (!libraryOpen || !currentTopicData) return;
    saveProgress((prev) => ({
      ...prev,
      libraryPositions: {
        ...prev.libraryPositions,
        [currentTopicData.id]: libraryIdx,
      },
    }));
  }, [libraryIdx, libraryOpen, currentTopicData, saveProgress]);

  // Thống kê tiến độ của chủ đề đang chọn
  const currentTopicStats = useMemo(() => {
    let completedLessons = 0;
    let earnedStars = 0;
    const maxStarsPerLesson = LESSON_MODES.reduce((acc, m) => acc + m.maxStars, 0); // 10 sao/bài
    lessons.forEach((l) => {
      const tapStars = progress.stars[starKey(currentTopicMeta.id, l.index, "tap")] || 0;
      if (tapStars > 0) completedLessons += 1;
      LESSON_MODES.forEach((m) => {
        earnedStars += progress.stars[starKey(currentTopicMeta.id, l.index, m.id)] || 0;
      });
    });
    return {
      completedLessons,
      totalLessons: lessons.length,
      earnedStars,
      maxStars: lessons.length * maxStarsPerLesson,
    };
  }, [lessons, progress.stars, currentTopicMeta.id]);

  // Danh sách thẻ SRS đã lọc & sắp xếp
  const sortedSrsCards = useMemo(() => {
    const all = Object.values(progress.srsDeck);
    const q = srsSearch.trim().toLowerCase();
    const filtered = q
      ? all.filter(
          (c) =>
            c.term.toLowerCase().includes(q) ||
            c.definition.toLowerCase().includes(q) ||
            c.topicTitle.toLowerCase().includes(q)
        )
      : all;

    return [...filtered].sort((a, b) => {
      if (srsSort === "due") return a.due - b.due;
      if (srsSort === "added") return b.addedAt - a.addedAt;
      if (srsSort === "alphabet") return a.term.localeCompare(b.term, "en");
      if (srsSort === "hardest") return b.lapses * 2 + (3 - b.ease) - (a.lapses * 2 + (3 - a.ease));
      return 0;
    });
  }, [progress.srsDeck, srsSearch, srsSort]);

  const dueSrsCards = useMemo(() => {
    const now = Date.now();
    return Object.values(progress.srsDeck)
      .filter((c) => c.due <= now)
      .sort((a, b) => a.due - b.due);
  }, [progress.srsDeck]);

  // ============================================================================
  // 1. GIAO DIỆN THƯ VIỆN CHỦ ĐỀ (XEM TOÀN BỘ 200 THẺ + TẢI TSV/CSV)
  // ============================================================================
  if (libraryOpen && currentTopicData) {
    const totalCards = currentTopicData.items.length;
    const card = currentTopicData.items[libraryIdx] || currentTopicData.items[0];
    const isSaved = Boolean(progress.srsDeck[card.id]);

    return (
      <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-6 sm:p-8 space-y-6">
        {/* Thanh tiêu đề Thư viện */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#e11b22] mb-1">
              <button
                type="button"
                onClick={() => setLibraryOpen(false)}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-red-50 hover:bg-red-100 text-[#e11b22] transition cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Thoát
              </button>
              <span>THƯ VIỆN CHỦ ĐỀ · {totalCards} THẺ</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              {currentTopicData.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
              Xem lại toàn bộ mục từ của chủ đề. Hệ thống tự động nhớ vị trí thẻ bạn đang xem để lần sau học tiếp đúng chỗ.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={() => exportTopicCards("tsv")}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-200 hover:border-[#e11b22] text-xs font-black text-slate-700 hover:text-[#e11b22] transition cursor-pointer"
            >
              <Download className="w-4 h-4" />
              Xuất TSV (Anki / Quizlet)
            </button>
            <button
              type="button"
              onClick={() => exportTopicCards("csv")}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-200 hover:border-[#e11b22] text-xs font-black text-slate-700 hover:text-[#e11b22] transition cursor-pointer"
            >
              <Download className="w-4 h-4" />
              Xuất CSV (Excel / Sheets)
            </button>
            <button
              type="button"
              onClick={() => setLibraryOpen(false)}
              className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-black transition cursor-pointer"
            >
              Trở về lộ trình
            </button>
          </div>
        </div>

        {/* Thẻ Flashcard lớn (Mặt trước / Mặt sau) */}
        <div
          onClick={() => setLibraryFlipped((f) => !f)}
          className="relative min-h-[340px] rounded-3xl border-2 border-slate-200 hover:border-[#e11b22] bg-gradient-to-br from-white via-slate-50/50 to-red-50/20 p-6 sm:p-10 shadow-md flex flex-col justify-between cursor-pointer select-none transition"
        >
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-3 py-1 rounded-full bg-red-50 text-[#e11b22] border border-red-200 text-xs font-black">
                {card.label} · {card.partOfSpeech}
              </span>
              <span className="text-xs font-bold text-slate-400">
                Thẻ {libraryIdx + 1} / {totalCards}
              </span>
            </div>

            <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                onClick={() => speakEnglish(card.term)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-[#e11b22] hover:text-white text-slate-700 text-xs font-black transition cursor-pointer"
              >
                <Volume2 className="w-4 h-4" />
                Phát âm
              </button>
              <button
                type="button"
                onClick={() => toggleSaveToSrs(card, currentTopicData.title)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-black transition cursor-pointer ${
                  isSaved
                    ? "bg-amber-50 border-amber-300 text-amber-700"
                    : "bg-white border-slate-200 text-slate-600 hover:border-[#e11b22]"
                }`}
              >
                {isSaved ? (
                  <>
                    <BookmarkCheck className="w-4 h-4 fill-amber-400 text-amber-600" />
                    Đã lưu SRS
                  </>
                ) : (
                  <>
                    <Bookmark className="w-4 h-4" />
                    Lưu thẻ
                  </>
                )}
              </button>
            </div>
          </div>

          {!libraryFlipped ? (
            <div className="my-auto py-8 text-center space-y-3">
              <h3 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
                {card.term}
              </h3>
              {card.phonetic && (
                <p className="text-base sm:text-lg font-mono text-slate-500">/{card.phonetic}/</p>
              )}
              <p className="text-xs font-bold text-[#e11b22] pt-4">
                Bấm vào thẻ hoặc nhấn phím [Space] để lật xem nghĩa, cấu trúc & câu mẫu →
              </p>
            </div>
          ) : (
            <div className="my-auto py-4 space-y-4">
              <div className="border-b border-slate-200 pb-3">
                <div className="text-xs font-black uppercase text-slate-400">Nghĩa tiếng Việt</div>
                <div className="text-2xl sm:text-3xl font-black text-[#e11b22] mt-0.5">
                  {card.definition}
                </div>
                <div className="text-sm font-bold text-slate-700 mt-1">
                  {card.term} <span className="font-mono text-slate-400">/{card.phonetic}/</span>
                </div>
              </div>

              {card.pattern && (
                <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200">
                  <div className="text-[11px] font-black uppercase text-amber-800">
                    Cách dùng & Cấu trúc kết hợp từ (Pattern / Collocation)
                  </div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5">{card.pattern}</div>
                </div>
              )}

              {card.examples.length > 0 && (
                <div className="space-y-2">
                  <div className="text-[11px] font-black uppercase text-slate-400">
                    Ngữ cảnh & Câu mẫu IELTS
                  </div>
                  {card.examples.map((ex, i) => (
                    <div
                      key={i}
                      onClick={(e) => {
                        e.stopPropagation();
                        speakEnglish(ex.en);
                      }}
                      className="p-3 rounded-2xl bg-white border border-slate-200 hover:border-[#e11b22] transition cursor-pointer"
                    >
                      <p className="text-sm font-bold text-slate-900 flex items-center gap-2">
                        <Volume2 className="w-3.5 h-3.5 text-[#e11b22] shrink-0" />
                        {ex.en}
                      </p>
                      {ex.vi && (
                        <p className="text-xs font-medium text-slate-500 mt-1 pl-5">{ex.vi}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 pt-2 border-t border-slate-100">
            <span>Phím tắt: [A] Phát âm · [Space] Lật thẻ · [←/→] Chuyển thẻ</span>
            <span>{libraryFlipped ? "Đang xem Mặt sau" : "Đang xem Mặt trước"}</span>
          </div>
        </div>

        {/* Điều hướng thẻ & Nhảy tới thẻ bất kỳ */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const num = parseInt(libraryJumpInput, 10);
              if (num >= 1 && num <= totalCards) {
                setLibraryFlipped(false);
                setLibraryIdx(num - 1);
                setLibraryJumpInput("");
              }
            }}
            className="flex items-center gap-2"
          >
            <span className="text-xs font-bold text-slate-600">Tới thẻ số:</span>
            <input
              type="number"
              min={1}
              max={totalCards}
              value={libraryJumpInput}
              onChange={(e) => setLibraryJumpInput(e.target.value)}
              placeholder={String(libraryIdx + 1)}
              className="w-20 px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-black text-center"
            />
            <span className="text-xs font-bold text-slate-400">/ {totalCards}</span>
            <button
              type="submit"
              className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-black transition cursor-pointer"
            >
              Tới thẻ
            </button>
          </form>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              disabled={libraryIdx === 0}
              onClick={() => {
                setLibraryFlipped(false);
                setLibraryIdx((i) => Math.max(0, i - 1));
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 hover:border-[#e11b22] disabled:opacity-40 text-xs font-black text-slate-700 transition cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              Thẻ trước
            </button>
            <button
              type="button"
              disabled={libraryIdx >= totalCards - 1}
              onClick={() => {
                setLibraryFlipped(false);
                setLibraryIdx((i) => Math.min(totalCards - 1, i + 1));
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#e11b22] hover:bg-[#b91c1c] disabled:opacity-40 text-xs font-black text-white transition cursor-pointer shadow-sm"
            >
              Thẻ tiếp theo
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ============================================================================
  // 2. GIAO DIỆN PHIÊN HỌC TRỰC TIẾP (HỌC THẺ / BÀI TẬP / NGHE VIẾT / PHÁT ÂM / VƯỢT CẤP)
  // ============================================================================
  if (activeSession) {
    const {
      topicId,
      lessonIdx,
      modeId,
      cards,
      questions,
      step,
      cardFrontLang,
      cardFlipped,
      cardRecallInput,
      cardRecallChecked,
      selectedAnswer,
      checked,
      lastCorrect,
      correctCount,
      wrongRecords,
      completed,
      matchLeftSelected,
      matchedPairs,
      speechTranscript,
      isListeningSpeech,
    } = activeSession;

    // 2A. MÀN HÌNH TỔNG KẾT KẾT QUẢ SAU KHI HOÀN THÀNH
    if (completed) {
      const totalQ = modeId === "hoc" ? cards.length : questions.length;
      const ratio = totalQ > 0 ? correctCount / totalQ : 1;
      const passed =
        modeId === "hoc" ? true : modeId === "vuot" ? correctCount >= 25 : ratio >= 0.8;
      const earnedStars =
        modeId === "hoc" ? 1 : !passed ? 0 : ratio === 1 ? 3 : ratio >= 0.9 ? 2 : 1;

      return (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-6 sm:p-10 max-w-3xl mx-auto space-y-6 text-center">
          <div className="w-20 h-20 rounded-3xl bg-red-50 border-2 border-red-200 text-[#e11b22] flex items-center justify-center mx-auto shadow-inner">
            {passed ? <Trophy className="w-10 h-10" /> : <RotateCcw className="w-10 h-10" />}
          </div>

          <div className="space-y-2">
            <div className="text-xs font-black uppercase tracking-widest text-[#e11b22]">
              {modeId === "hoc"
                ? `ĐÃ XEM HẾT THẺ · BÀI ${String(lessonIdx + 1).padStart(2, "0")}`
                : modeId === "vuot"
                ? passed
                  ? "ĐÃ VƯỢT CẤP CHỦ ĐỀ"
                  : "CHƯA ĐỦ ĐIỂM VƯỢT CẤP (CẦN 25/30)"
                : passed
                ? "ĐÃ QUA MÀN XUẤT SẮC"
                : "CHƯA ĐẠT MỐC 80% ĐỂ QUA BÀI"}
            </div>

            {modeId !== "hoc" && modeId !== "vuot" && (
              <div className="text-3xl text-amber-400 tracking-widest">
                {"★".repeat(earnedStars)}
                <span className="text-slate-200">{"★".repeat(3 - earnedStars)}</span>
              </div>
            )}

            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              {currentTopicMeta.title} ·{" "}
              {modeId === "vuot"
                ? "Thi vượt cấp 30 câu"
                : `Bài ${String(lessonIdx + 1).padStart(2, "0")}`}
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
            <div className="p-4 rounded-2xl bg-red-50/60 border border-red-200">
              <div className="text-2xl font-black text-[#e11b22]">
                +{modeId === "hoc" ? 35 : passed ? 35 + earnedStars * 15 : 10} XP
              </div>
              <div className="text-xs font-bold text-slate-600">XP nhận được</div>
            </div>
            <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200">
              <div className="text-2xl font-black text-emerald-700">
                {modeId === "hoc" ? `${cards.length}/${cards.length}` : `${correctCount}/${totalQ}`}
              </div>
              <div className="text-xs font-bold text-slate-600">
                {modeId === "hoc" ? "Thẻ đã học" : "Câu trả lời đúng"}
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-2xl font-black text-slate-800">
                {modeId === "hoc" ? "100%" : `${Math.round(ratio * 100)}%`}
              </div>
              <div className="text-xs font-bold text-slate-600">Độ chính xác</div>
            </div>
          </div>

          {/* Xem lại câu sai */}
          {wrongRecords.length > 0 && (
            <div className="text-left space-y-3 pt-4 border-t border-slate-200">
              <h3 className="text-sm font-black uppercase tracking-wider text-slate-800">
                Xem lại {wrongRecords.length} câu trả lời chưa đúng
              </h3>
              <div className="space-y-2.5 max-h-72 overflow-y-auto pr-1">
                {wrongRecords.map((w, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-red-50/40 border border-red-200 text-xs space-y-1"
                  >
                    <div className="font-black text-slate-900">{w.prompt}</div>
                    {w.sentence && <div className="text-slate-600 italic">{w.sentence}</div>}
                    <div className="flex flex-wrap gap-3 pt-1">
                      <span className="text-red-600 font-bold">
                        Bạn chọn/gõ: <del>{w.given || "(Bỏ trống)"}</del>
                      </span>
                      <span className="text-emerald-700 font-black">
                        Đáp án đúng: {w.answer}
                      </span>
                    </div>
                    {w.explain && <div className="text-slate-500 font-medium">{w.explain}</div>}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {modeId === "hoc" && (
              <button
                type="button"
                onClick={() => startLessonSession(topicId, lessonIdx, "tap", "medium")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#e11b22] hover:bg-[#b91c1c] text-white font-black text-sm shadow-md transition cursor-pointer"
              >
                Làm bài tập ngay
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
            {modeId !== "hoc" && !passed && (
              <button
                type="button"
                onClick={() =>
                  startLessonSession(topicId, lessonIdx, modeId, activeSession.difficulty)
                }
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#e11b22] hover:bg-[#b91c1c] text-white font-black text-sm shadow-md transition cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                Làm lại để lấy Sao
              </button>
            )}
            <button
              type="button"
              onClick={() => setActiveSession(null)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-black text-sm transition cursor-pointer"
            >
              Về lộ trình từ vựng
            </button>
          </div>
        </div>
      );
    }

    // 2B. CHẾ ĐỘ HỌC THẺ FLASHCARD (modeId === "hoc")
    if (modeId === "hoc") {
      const card = cards[step];
      const isSaved = Boolean(progress.srsDeck[card.id]);
      const progressPct = Math.round(((step + 1) / cards.length) * 100);

      const handleAdvanceCard = (remembered: boolean) => {
        const nextNeedReview = remembered
          ? activeSession.needReviewIds
          : [...activeSession.needReviewIds, card.id];
        if (step + 1 >= cards.length) {
          finishActiveSession(cards.length, cards.length, []);
        } else {
          setActiveSession({
            ...activeSession,
            step: step + 1,
            cardFlipped: false,
            cardRecallInput: "",
            cardRecallChecked: false,
            needReviewIds: nextNeedReview,
          });
        }
      };

      return (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-6 sm:p-8 max-w-3xl mx-auto space-y-6">
          {/* Thanh Tiến độ trên cùng */}
          <div className="flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => setActiveSession(null)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-black transition cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Thoát
            </button>

            <div className="flex-1">
              <div className="flex items-center justify-between text-xs font-black text-slate-600 mb-1">
                <span>
                  BÀI {String(lessonIdx + 1).padStart(2, "0")} · HỌC THẺ ({step + 1}/{cards.length})
                </span>
                <span>{progressPct}%</span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden">
                <div
                  className="h-full bg-[#e11b22] transition-all duration-300"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
            </div>

            {/* Chọn mặt trước Anh / Việt giống ForumFlash */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-black">
              <span className="px-2 text-slate-500 hidden sm:inline">Mặt trước:</span>
              <button
                type="button"
                onClick={() => setActiveSession({ ...activeSession, cardFrontLang: "en" })}
                className={`px-2.5 py-1 rounded-lg transition cursor-pointer ${
                  cardFrontLang === "en" ? "bg-[#e11b22] text-white" : "text-slate-600"
                }`}
              >
                Anh
              </button>
              <button
                type="button"
                onClick={() => setActiveSession({ ...activeSession, cardFrontLang: "vi" })}
                className={`px-2.5 py-1 rounded-lg transition cursor-pointer ${
                  cardFrontLang === "vi" ? "bg-[#e11b22] text-white" : "text-slate-600"
                }`}
              >
                Việt
              </button>
            </div>
          </div>

          {/* Khung Thẻ Flashcard */}
          <div
            onClick={() => setActiveSession({ ...activeSession, cardFlipped: !cardFlipped })}
            className="min-h-[340px] rounded-3xl border-2 border-slate-200 hover:border-[#e11b22] bg-gradient-to-br from-white to-red-50/20 p-6 sm:p-8 shadow-sm flex flex-col justify-between cursor-pointer transition"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="px-3 py-1 rounded-full bg-red-50 text-[#e11b22] border border-red-200 text-xs font-black">
                {card.label} · {card.partOfSpeech}
              </span>

              <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                <button
                  type="button"
                  onClick={() => speakEnglish(card.term)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-[#e11b22] hover:text-white text-slate-700 text-xs font-black transition cursor-pointer"
                >
                  <Volume2 className="w-4 h-4" />
                  Nghe (A)
                </button>
                <button
                  type="button"
                  onClick={() => toggleSaveToSrs(card, currentTopicMeta.title)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-black transition cursor-pointer ${
                    isSaved
                      ? "bg-amber-50 border-amber-300 text-amber-700"
                      : "bg-white border-slate-200 text-slate-600 hover:border-[#e11b22]"
                  }`}
                >
                  {isSaved ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                  {isSaved ? "Đã lưu SRS" : "Lưu thẻ"}
                </button>
              </div>
            </div>

            {!cardFlipped ? (
              <div className="my-auto py-8 text-center space-y-3">
                <h3 className="text-3xl sm:text-5xl font-black text-slate-900">
                  {cardFrontLang === "en" ? card.term : card.definition}
                </h3>
                {cardFrontLang === "en" && card.phonetic && (
                  <p className="text-base sm:text-lg font-mono text-slate-500">/{card.phonetic}/</p>
                )}
                <p className="text-xs font-bold text-[#e11b22] pt-4">
                  Chạm vào thẻ hoặc nhấn [Space] để lật mặt sau →
                </p>
              </div>
            ) : (
              <div className="my-auto py-4 space-y-4" onClick={(e) => e.stopPropagation()}>
                <div className="border-b border-slate-200 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-[#e11b22]">
                      {card.term}
                    </div>
                    <div className="text-base font-black text-slate-800 mt-0.5">
                      Nghĩa: {card.definition}
                    </div>
                  </div>
                  {card.phonetic && (
                    <span className="font-mono text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-xl">
                      /{card.phonetic}/
                    </span>
                  )}
                </div>

                {card.pattern && (
                  <div className="p-3 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs">
                    <span className="font-black uppercase text-amber-800 block mb-0.5">
                      Cấu trúc & Cách kết hợp từ:
                    </span>
                    <span className="font-bold text-slate-900 text-sm">{card.pattern}</span>
                  </div>
                )}

                {card.examples.length > 0 && (
                  <div className="space-y-2">
                    <div className="text-[11px] font-black uppercase text-slate-400">
                      Câu mẫu ngữ cảnh IELTS (Bấm vào câu để nghe):
                    </div>
                    {card.examples.map((ex, i) => (
                      <div
                        key={i}
                        onClick={() => speakEnglish(ex.en)}
                        className="p-3 rounded-2xl bg-white border border-slate-200 hover:border-[#e11b22] transition cursor-pointer"
                      >
                        <p className="text-sm font-bold text-slate-900 flex items-center gap-2">
                          <Volume2 className="w-3.5 h-3.5 text-[#e11b22] shrink-0" />
                          {ex.en}
                        </p>
                        {ex.vi && (
                          <p className="text-xs text-slate-500 font-medium mt-0.5 pl-5">{ex.vi}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Ô gõ lại từ để nhẩm nhớ giống ForumFlash */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const ok = isAnswerMatch(cardRecallInput, card.term);
                    playFeedbackSound(ok);
                    setActiveSession({ ...activeSession, cardRecallChecked: true });
                  }}
                  className="pt-2 flex items-center gap-2"
                >
                  <input
                    type="text"
                    value={cardRecallInput}
                    onChange={(e) =>
                      setActiveSession({
                        ...activeSession,
                        cardRecallInput: e.target.value,
                        cardRecallChecked: false,
                      })
                    }
                    placeholder={`Gõ lại “${card.term}” để nhớ mặt chữ...`}
                    className={`flex-1 px-3.5 py-2 rounded-xl border text-xs font-bold ${
                      cardRecallChecked
                        ? isAnswerMatch(cardRecallInput, card.term)
                          ? "border-emerald-400 bg-emerald-50 text-emerald-900"
                          : "border-red-400 bg-red-50 text-red-900"
                        : "border-slate-200 bg-white"
                    }`}
                  />
                  <button
                    type="submit"
                    className="px-3.5 py-2 rounded-xl bg-slate-900 text-white text-xs font-black cursor-pointer"
                  >
                    Kiểm tra
                  </button>
                </form>
              </div>
            )}

            <div className="text-[11px] font-bold text-slate-400 pt-2 border-t border-slate-100 flex justify-between">
              <span>Phím tắt: [A] Phát âm · [Space] Lật thẻ</span>
              <span>Bấm vào thẻ để lật mặt trước / mặt sau</span>
            </div>
          </div>

          {/* 2 Nút đánh giá mức độ ghi nhớ: Cần ôn / Đã nhớ */}
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              disabled={!cardFlipped}
              onClick={() => handleAdvanceCard(false)}
              className="py-3.5 rounded-2xl border-2 border-amber-300 bg-amber-50 hover:bg-amber-100 disabled:opacity-40 text-amber-900 font-black text-sm transition cursor-pointer"
            >
              ↺ Cần ôn lại
            </button>
            <button
              type="button"
              disabled={!cardFlipped}
              onClick={() => handleAdvanceCard(true)}
              className="py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 text-white font-black text-sm shadow-sm transition cursor-pointer"
            >
              ✓ Đã nhớ từ này
            </button>
          </div>
        </div>
      );
    }

    // 2C. CHẾ ĐỘ BÀI TẬP / NGHE VIẾT / PHÁT ÂM / THI VƯỢT CẤP
    const currentQ = questions[step];
    if (!currentQ) return null;
    const progressPct = Math.round(((step + 1) / questions.length) * 100);

    const handleSubmitAnswer = (givenValue: string, isMatchQuestion = false) => {
      if (checked) return;
      const correct = isMatchQuestion
        ? givenValue === "Ghép đúng cả 4 cặp"
        : currentQ.kind === "truefalse" || currentQ.kind === "choice" || currentQ.kind === "listenchoice"
        ? givenValue === currentQ.answer
        : isAnswerMatch(givenValue, currentQ.answer);

      playFeedbackSound(correct);

      const nextCorrectCount = correctCount + (correct ? 1 : 0);
      const nextWrongs = correct
        ? wrongRecords
        : [
            ...wrongRecords,
            {
              prompt: currentQ.prompt,
              sentence: currentQ.sentence || "",
              given: givenValue,
              answer: currentQ.answer,
              explain: currentQ.explain,
            },
          ];

      setActiveSession({
        ...activeSession,
        selectedAnswer: givenValue,
        checked: true,
        lastCorrect: correct,
        correctCount: nextCorrectCount,
        wrongRecords: nextWrongs,
      });
    };

    const handleNextQuestion = () => {
      if (step + 1 >= questions.length) {
        finishActiveSession(correctCount, questions.length, wrongRecords);
        return;
      }
      const nextQ = questions[step + 1];
      setActiveSession({
        ...activeSession,
        step: step + 1,
        selectedAnswer: "",
        checked: false,
        lastCorrect: false,
        matchLeftSelected: null,
        matchedPairs: {},
        speechTranscript: "",
        isListeningSpeech: false,
      });
      if (nextQ?.kind === "dictation") {
        setTimeout(() => speakEnglish(nextQ.card.term), 250);
      }
    };

    // Xử lý nhận diện giọng nói cho chế độ Phát âm ("speaking")
    const handleStartSpeechRecognition = () => {
      if (typeof window === "undefined") return;
      const SpeechRec =
        (window as unknown as { SpeechRecognition?: new () => unknown; webkitSpeechRecognition?: new () => unknown })
          .SpeechRecognition ||
        (window as unknown as { webkitSpeechRecognition?: new () => unknown }).webkitSpeechRecognition;

      if (!SpeechRec) {
        alert("Trình duyệt của bạn chưa hỗ trợ nhận diện giọng nói trực tiếp. Bạn có thể bấm 'Đánh dấu Đã đọc chuẩn' để tiếp tục.");
        return;
      }

      try {
        const rec = new SpeechRec() as {
          lang: string;
          interimResults: boolean;
          maxAlternatives: number;
          onresult: (e: { results: { [k: number]: { [k: number]: { transcript: string } } } }) => void;
          onerror: () => void;
          onend: () => void;
          start: () => void;
        };
        rec.lang = "en-US";
        rec.interimResults = false;
        rec.maxAlternatives = 3;
        setActiveSession((s) => (s ? { ...s, isListeningSpeech: true, speechTranscript: "" } : null));

        rec.onresult = (event) => {
          const spoken = event.results?.[0]?.[0]?.transcript || "";
          setActiveSession((s) => (s ? { ...s, isListeningSpeech: false, speechTranscript: spoken } : null));
          handleSubmitAnswer(spoken);
        };
        rec.onerror = () => {
          setActiveSession((s) => (s ? { ...s, isListeningSpeech: false } : null));
        };
        rec.onend = () => {
          setActiveSession((s) => (s ? { ...s, isListeningSpeech: false } : null));
        };
        rec.start();
      } catch {
        setActiveSession((s) => (s ? { ...s, isListeningSpeech: false } : null));
      }
    };

    return (
      <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-6 sm:p-8 max-w-3xl mx-auto space-y-6">
        {/* Header câu hỏi */}
        <div className="flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => setActiveSession(null)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-black transition cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Thoát
          </button>

          <div className="flex-1">
            <div className="flex items-center justify-between text-xs font-black text-slate-600 mb-1">
              <span>
                CÂU {step + 1}/{questions.length} ·{" "}
                {modeId === "vuot"
                  ? "THI VƯỢT CẤP CHỦ ĐỀ"
                  : modeId === "nghe"
                  ? "NGHE VIẾT"
                  : modeId === "noi"
                  ? "LUYỆN PHÁT ÂM"
                  : `BÀI TẬP (${activeSession.difficulty.toUpperCase()})`}
              </span>
              <span className="text-emerald-600">Đúng: {correctCount}</span>
            </div>
            <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden">
              <div
                className="h-full bg-[#e11b22] transition-all duration-300"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>
        </div>

        {/* Nội dung câu hỏi */}
        <div className="space-y-5">
          <div className="space-y-2">
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-red-50 text-[#e11b22] border border-red-200 text-[11px] font-black uppercase">
              {currentQ.kind === "truefalse" && "Đúng hay Sai"}
              {currentQ.kind === "choice" && "Trắc nghiệm ngữ cảnh"}
              {currentQ.kind === "fill" && "Điền từ vào câu"}
              {currentQ.kind === "longfill" && "Điền từ vào đoạn văn IELTS"}
              {currentQ.kind === "match" && "Ghép đôi 4 cặp từ – nghĩa"}
              {currentQ.kind === "dictation" && "Nghe & Gõ lại từ"}
              {currentQ.kind === "listenchoice" && "Nghe & Chọn phát âm đúng"}
              {currentQ.kind === "speaking" && "Đọc to & Chấm phát âm"}
            </span>
            <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
              {currentQ.prompt}
            </h3>
          </div>

          {/* Ngữ cảnh câu hoặc đoạn văn */}
          {currentQ.sentence && (
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <p className="text-sm sm:text-base font-bold text-slate-800 leading-relaxed">
                {currentQ.sentence.split("___").map((part, idx, arr) => (
                  <React.Fragment key={idx}>
                    {part}
                    {idx < arr.length - 1 && (
                      <span
                        className={`inline-block min-w-[90px] px-2.5 py-0.5 mx-1 rounded-lg border-b-2 font-black text-center ${
                          checked
                            ? lastCorrect
                              ? "bg-emerald-100 border-emerald-600 text-emerald-900"
                              : "bg-red-100 border-red-600 text-[#e11b22]"
                            : "bg-amber-100/80 border-amber-500 text-amber-900"
                        }`}
                      >
                        {checked ? currentQ.answer : selectedAnswer || "___"}
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </p>
              {checked && currentQ.sentenceVi && (
                <p className="text-xs font-medium text-slate-500 border-t border-slate-200/70 pt-2">
                  <b>Dịch nghĩa:</b> {currentQ.sentenceVi}
                </p>
              )}
            </div>
          )}

          {/* Dạng 1: Dictation (Nghe rồi gõ lại từ) */}
          {currentQ.kind === "dictation" && (
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => speakEnglish(currentQ.card.term, 0.95)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#e11b22] hover:bg-[#b91c1c] text-white font-black text-xs shadow-sm transition cursor-pointer"
                >
                  <Volume2 className="w-4 h-4" />
                  Nghe phát âm chuẩn
                </button>
                <button
                  type="button"
                  onClick={() => speakEnglish(currentQ.card.term, 0.65)}
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-black text-xs transition cursor-pointer"
                >
                  <Headphones className="w-4 h-4" />
                  Nghe chậm (0.65x)
                </button>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!selectedAnswer.trim()) return;
                  handleSubmitAnswer(selectedAnswer);
                }}
                className="flex flex-col sm:flex-row gap-2.5"
              >
                <input
                  type="text"
                  autoFocus
                  readOnly={checked}
                  value={selectedAnswer}
                  onChange={(e) =>
                    setActiveSession({ ...activeSession, selectedAnswer: e.target.value })
                  }
                  placeholder="Gõ mục từ bạn nghe được rồi nhấn Enter..."
                  className="flex-1 px-4 py-3 rounded-2xl border-2 border-slate-200 focus:border-[#e11b22] outline-none text-sm font-black"
                />
                {!checked && (
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs transition cursor-pointer"
                  >
                    Kiểm tra
                  </button>
                )}
              </form>
            </div>
          )}

          {/* Dạng 2: ListenChoice (Nghe 4 phương án phát âm và chọn) */}
          {currentQ.kind === "listenchoice" && currentQ.options && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentQ.options.map((opt, idx) => {
                const isPicked = selectedAnswer === opt;
                const isRight = opt === currentQ.answer;
                return (
                  <div
                    key={opt}
                    className={`p-4 rounded-2xl border-2 flex items-center justify-between gap-3 transition ${
                      checked
                        ? isRight
                          ? "bg-emerald-50 border-emerald-500 text-emerald-900"
                          : isPicked
                          ? "bg-red-50 border-red-400 text-red-900"
                          : "bg-slate-50 border-slate-200 opacity-60"
                        : isPicked
                        ? "bg-red-50 border-[#e11b22]"
                        : "bg-white border-slate-200 hover:border-[#e11b22]"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => speakEnglish(opt)}
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 hover:bg-[#e11b22] hover:text-white text-slate-800 text-xs font-black transition cursor-pointer"
                    >
                      <Volume2 className="w-4 h-4" />
                      Nghe Audio {String.fromCharCode(65 + idx)}
                    </button>

                    <button
                      type="button"
                      disabled={checked}
                      onClick={() => handleSubmitAnswer(opt)}
                      className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-[#e11b22] text-white text-xs font-black transition cursor-pointer"
                    >
                      {checked ? opt : "Chọn đáp án này"}
                    </button>
                  </div>
                );
              })}
            </div>
          )}

          {/* Dạng 3: Trắc nghiệm / Đúng Sai */}
          {(currentQ.kind === "choice" || currentQ.kind === "truefalse") && currentQ.options && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentQ.options.map((opt, idx) => {
                const isPicked = selectedAnswer === opt;
                const isRight = opt === currentQ.answer;
                return (
                  <button
                    key={opt}
                    type="button"
                    disabled={checked}
                    onClick={() => handleSubmitAnswer(opt)}
                    className={`p-4 rounded-2xl border-2 text-left flex items-center gap-3 font-bold text-sm transition cursor-pointer ${
                      checked
                        ? isRight
                          ? "bg-emerald-50 border-emerald-500 text-emerald-900"
                          : isPicked
                          ? "bg-red-50 border-red-400 text-red-900"
                          : "bg-slate-50 border-slate-200 text-slate-400"
                        : "bg-white border-slate-200 hover:border-[#e11b22] text-slate-800"
                    }`}
                  >
                    <span className="w-7 h-7 rounded-xl bg-slate-100 flex items-center justify-center text-xs font-black shrink-0">
                      {checked && isRight
                        ? "✓"
                        : checked && isPicked && !isRight
                        ? "✕"
                        : String.fromCharCode(65 + idx)}
                    </span>
                    <span>{opt}</span>
                  </button>
                );
              })}
            </div>
          )}

          {/* Dạng 4: Điền từ vào chỗ trống (fill / longfill) */}
          {(currentQ.kind === "fill" || currentQ.kind === "longfill") && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!selectedAnswer.trim()) return;
                handleSubmitAnswer(selectedAnswer);
              }}
              className="flex flex-col sm:flex-row gap-2.5"
            >
              <input
                type="text"
                autoFocus
                readOnly={checked}
                value={selectedAnswer}
                onChange={(e) =>
                  setActiveSession({ ...activeSession, selectedAnswer: e.target.value })
                }
                placeholder="Điền từ hoặc cụm từ tiếng Anh rồi nhấn Enter..."
                className="flex-1 px-4 py-3 rounded-2xl border-2 border-slate-200 focus:border-[#e11b22] outline-none text-sm font-black"
              />
              {!checked && (
                <button
                  type="submit"
                  className="px-6 py-3 rounded-2xl bg-[#e11b22] hover:bg-[#b91c1c] text-white font-black text-xs transition cursor-pointer"
                >
                  Nộp đáp án
                </button>
              )}
            </form>
          )}

          {/* Dạng 5: Ghép đôi 4 cặp (match) */}
          {currentQ.kind === "match" && currentQ.matchPairs && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="text-xs font-black uppercase text-slate-400">Mục từ tiếng Anh</div>
                {currentQ.matchPairs.map((p) => {
                  const isMatched = Boolean(matchedPairs[p.term]);
                  const isSelected = matchLeftSelected === p.term;
                  return (
                    <button
                      key={p.term}
                      type="button"
                      disabled={checked || isMatched}
                      onClick={() =>
                        setActiveSession({ ...activeSession, matchLeftSelected: p.term })
                      }
                      className={`w-full p-3.5 rounded-2xl border-2 text-left text-xs sm:text-sm font-black transition cursor-pointer ${
                        isMatched
                          ? "bg-emerald-50 border-emerald-400 text-emerald-800"
                          : isSelected
                          ? "bg-red-50 border-[#e11b22] text-[#e11b22]"
                          : "bg-white border-slate-200 hover:border-slate-400 text-slate-800"
                      }`}
                    >
                      {p.term}
                    </button>
                  );
                })}
              </div>

              <div className="space-y-2">
                <div className="text-xs font-black uppercase text-slate-400">Nghĩa tiếng Việt</div>
                {currentQ.matchPairs
                  .slice()
                  .sort((a, b) => a.definition.localeCompare(b.definition, "vi"))
                  .map((p) => {
                    const matchedTerm = Object.keys(matchedPairs).find(
                      (k) => matchedPairs[k] === p.definition
                    );
                    return (
                      <button
                        key={p.definition}
                        type="button"
                        disabled={checked || Boolean(matchedTerm) || !matchLeftSelected}
                        onClick={() => {
                          if (!matchLeftSelected) return;
                          const targetPair = currentQ.matchPairs?.find(
                            (x) => x.term === matchLeftSelected
                          );
                          if (targetPair && targetPair.definition === p.definition) {
                            const nextMatched = {
                              ...matchedPairs,
                              [matchLeftSelected]: p.definition,
                            };
                            const allDone =
                              Object.keys(nextMatched).length ===
                              (currentQ.matchPairs?.length || 4);
                            setActiveSession({
                              ...activeSession,
                              matchedPairs: nextMatched,
                              matchLeftSelected: null,
                            });
                            if (allDone) {
                              handleSubmitAnswer("Ghép đúng cả 4 cặp", true);
                            } else {
                              playFeedbackSound(true);
                            }
                          } else {
                            playFeedbackSound(false);
                            handleSubmitAnswer("Ghép sai cặp từ", true);
                          }
                        }}
                        className={`w-full p-3.5 rounded-2xl border-2 text-left text-xs sm:text-sm font-bold transition cursor-pointer ${
                          matchedTerm
                            ? "bg-emerald-50 border-emerald-400 text-emerald-800"
                            : "bg-white border-slate-200 hover:border-[#e11b22] text-slate-700"
                        }`}
                      >
                        {p.definition}
                      </button>
                    );
                  })}
              </div>
            </div>
          )}

          {/* Dạng 6: Luyện Phát Âm (speaking) */}
          {currentQ.kind === "speaking" && (
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 text-center space-y-4">
              <div className="text-3xl font-black text-slate-900">{currentQ.card.term}</div>
              <div className="text-sm font-mono text-slate-500">/{currentQ.card.phonetic}/</div>
              <div className="text-xs font-bold text-slate-600">
                Nghĩa: {currentQ.card.definition}
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => speakEnglish(currentQ.card.term)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-[#e11b22] text-xs font-black text-slate-700 cursor-pointer"
                >
                  <Volume2 className="w-4 h-4 text-[#e11b22]" />
                  Nghe mẫu
                </button>

                {!checked && (
                  <>
                    <button
                      type="button"
                      onClick={handleStartSpeechRecognition}
                      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-xs font-black shadow-sm transition cursor-pointer ${
                        isListeningSpeech
                          ? "bg-amber-600 animate-pulse"
                          : "bg-[#e11b22] hover:bg-[#b91c1c]"
                      }`}
                    >
                      <Mic className="w-4 h-4" />
                      {isListeningSpeech ? "Đang nghe bạn đọc..." : "Bấm Mic & Đọc to"}
                    </button>

                    <button
                      type="button"
                      onClick={() => handleSubmitAnswer(currentQ.card.term)}
                      className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black cursor-pointer"
                    >
                      ✓ Tôi đã tự đọc chuẩn
                    </button>
                  </>
                )}
              </div>

              {speechTranscript && (
                <div className="text-xs font-bold text-slate-600">
                  Máy nghe được: <b className="text-slate-900">“{speechTranscript}”</b>
                </div>
              )}
            </div>
          )}

          {/* Giải thích sau khi trả lời */}
          {checked && (
            <div
              className={`p-4 rounded-2xl border-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                lastCorrect
                  ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                  : "bg-red-50 border-red-300 text-red-950"
              }`}
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2 font-black text-sm">
                  {lastCorrect ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      Chính xác!
                    </>
                  ) : (
                    <>
                      <XCircle className="w-5 h-5 text-[#e11b22]" />
                      Chưa chính xác · Đáp án đúng: {currentQ.answer}
                    </>
                  )}
                </div>
                <p className="text-xs font-medium opacity-90">{currentQ.explain}</p>
              </div>

              <button
                type="button"
                onClick={handleNextQuestion}
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs shrink-0 transition cursor-pointer"
              >
                {step + 1 >= questions.length ? "Xem kết quả →" : "Câu tiếp theo →"}
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ============================================================================
  // 3. GIAO DIỆN CHÍNH: LỘ TRÌNH TỪ VỰNG FORUMFLASH (CÂY XP + 31 CHỦ ĐỀ + BỘ THẺ SRS)
  // ============================================================================
  return (
    <div className="space-y-6">
      {/* Banner Cây Trưởng Thành XP & Thống kê tổng quan giống ForumFlash */}
      <div className="rounded-3xl bg-gradient-to-r from-[#1d2a57] via-[#1e293b] to-[#0f172a] text-white p-6 sm:p-8 shadow-xl border border-slate-800">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          <div className="lg:col-span-2 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-amber-300 text-xs font-black uppercase tracking-wider">
              <Sprout className="w-4 h-4" />
              Hệ thống Học Từ Vựng & SRS Chuẩn ForumFlash · 9.922 Mục Từ
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              {treeStageInfo.current.label}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-medium">
              {treeStageInfo.current.desc} Mỗi bài hoàn thành bổ sung XP cho cây và mở khóa bài kế tiếp.
            </p>

            {/* Thanh XP */}
            <div className="pt-2 space-y-1.5">
              <div className="flex items-center justify-between text-xs font-black">
                <span className="text-amber-300">{progress.xp.toLocaleString("vi-VN")} XP</span>
                <span className="text-slate-300">
                  {treeStageInfo.next
                    ? `Còn ${(treeStageInfo.next.at - progress.xp).toLocaleString("vi-VN")} XP để đạt: ${
                        treeStageInfo.next.label
                      }`
                    : "Đã đạt cấp độ Cổ thụ tối đa!"}
                </span>
              </div>
              <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-400 to-[#e11b22] transition-all duration-500"
                  style={{ width: `${treeStageInfo.percent}%` }}
                />
              </div>
            </div>
          </div>

          {/* 3 Hộp chỉ số nhanh */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-4 rounded-2xl bg-white/10 border border-white/10 text-center">
              <div className="text-2xl font-black text-white">25</div>
              <div className="text-[11px] font-bold text-slate-300 mt-0.5">Chủ đề IELTS</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/10 border border-white/10 text-center">
              <div className="text-2xl font-black text-amber-300">A1–C2</div>
              <div className="text-[11px] font-bold text-slate-300 mt-0.5">6 Bậc Oxford</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/10 border border-white/10 text-center">
              <div className="text-2xl font-black text-emerald-300">
                {Object.keys(progress.srsDeck).length}
              </div>
              <div className="text-[11px] font-bold text-slate-300 mt-0.5">Thẻ SRS đã lưu</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bộ chuyển nhánh: 25 Chủ đề IELTS | 6 Bậc CEFR A1–C2 | Bộ thẻ ôn tập SRS */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-slate-200 shadow-xs">
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => {
              setTrackFilter("ielts");
              setSelectedTopicId("education");
            }}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition cursor-pointer ${
              trackFilter === "ielts"
                ? "bg-[#e11b22] text-white shadow-sm"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <Layers className="w-4 h-4" />
            25 Chủ Đề Từ Vựng IELTS (5.000 từ)
          </button>

          <button
            type="button"
            onClick={() => {
              setTrackFilter("cefr");
              setSelectedTopicId("oxford-a1");
            }}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition cursor-pointer ${
              trackFilter === "cefr"
                ? "bg-[#e11b22] text-white shadow-sm"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <Award className="w-4 h-4" />
            Chuẩn CEFR Bậc A1 – C2 (4.922 từ)
          </button>

          <button
            type="button"
            onClick={() => setTrackFilter("srs")}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition cursor-pointer ${
              trackFilter === "srs"
                ? "bg-[#e11b22] text-white shadow-sm"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <BookmarkCheck className="w-4 h-4" />
            Bộ Thẻ Ôn Tập SRS ({Object.keys(progress.srsDeck).length})
            {dueSrsCards.length > 0 && (
              <span className="px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 text-[10px] font-black">
                {dueSrsCards.length} tới hạn
              </span>
            )}
          </button>
        </div>
      </div>

      {/* NHÁNH 3: BỘ THẺ ÔN TẬP CÁ NHÂN (SRS ANKI-STYLE) */}
      {trackFilter === "srs" ? (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-5">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#e11b22]">
                SPACED REPETITION (SRS SM-2)
              </span>
              <h3 className="text-2xl font-black text-slate-900 mt-0.5">
                Bộ Thẻ Ôn Tập Từ Vựng Của Tôi
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                Các thẻ bạn bấm “Lưu thẻ” trong lúc học hoặc tự thêm mới sẽ được tính lịch ôn tự động theo mức độ nhớ (Chưa nhớ · Khó · Nhớ · Dễ).
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              {dueSrsCards.length > 0 && (
                <button
                  type="button"
                  onClick={() => {
                    setSrsStudyCard(dueSrsCards[0]);
                    setSrsStudyFlipped(false);
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#e11b22] hover:bg-[#b91c1c] text-white text-xs font-black shadow-sm transition cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-white" />
                  Ôn ngay {dueSrsCards.length} thẻ tới hạn
                </button>
              )}
              <button
                type="button"
                onClick={() => setShowAddSrsModal(true)}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-black transition cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                + Thêm thẻ từ mới
              </button>
            </div>
          </div>

          {/* Khung Ôn tập SRS trực tiếp */}
          {srsStudyCard && (
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-amber-300 uppercase tracking-wider">
                  Đang ôn tập thẻ tới hạn · Còn {dueSrsCards.length} thẻ
                </span>
                <button
                  type="button"
                  onClick={() => setSrsStudyCard(null)}
                  className="text-xs font-bold text-slate-300 hover:text-white cursor-pointer"
                >
                  Đóng khung ôn ✕
                </button>
              </div>

              <div
                onClick={() => setSrsStudyFlipped((f) => !f)}
                className="min-h-[220px] rounded-2xl bg-white/10 border border-white/15 p-6 flex flex-col justify-center items-center text-center cursor-pointer space-y-3"
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl sm:text-4xl font-black">{srsStudyCard.term}</span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      speakEnglish(srsStudyCard.term);
                    }}
                    className="p-2 rounded-xl bg-white/15 hover:bg-white/25"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
                {srsStudyCard.phonetic && (
                  <div className="text-sm font-mono text-slate-300">/{srsStudyCard.phonetic}/</div>
                )}

                {srsStudyFlipped ? (
                  <div className="pt-4 border-t border-white/15 w-full max-w-lg space-y-2">
                    <div className="text-xl font-black text-amber-300">
                      {srsStudyCard.definition}
                    </div>
                    {srsStudyCard.pattern && (
                      <div className="text-xs text-slate-200">{srsStudyCard.pattern}</div>
                    )}
                    {srsStudyCard.exampleEn && (
                      <div className="text-xs italic text-slate-300">
                        “{srsStudyCard.exampleEn}”
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-xs font-bold text-amber-300 pt-2">
                    Bấm vào thẻ để xem nghĩa và chọn mức độ nhớ →
                  </div>
                )}
              </div>

              {srsStudyFlipped && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {(
                    [
                      { id: "again", label: "Chưa nhớ (10 phút)", cls: "bg-red-600 hover:bg-red-700" },
                      { id: "hard", label: "Khó (1 ngày)", cls: "bg-amber-600 hover:bg-amber-700" },
                      { id: "good", label: "Nhớ (3+ ngày)", cls: "bg-emerald-600 hover:bg-emerald-700" },
                      { id: "easy", label: "Dễ (4+ ngày)", cls: "bg-blue-600 hover:bg-blue-700" },
                    ] as { id: SrsGrade; label: string; cls: string }[]
                  ).map((g) => (
                    <button
                      key={g.id}
                      type="button"
                      onClick={() => {
                        const updated = gradeSrsCard(srsStudyCard, g.id);
                        saveProgress((prev) => ({
                          ...prev,
                          xp: prev.xp + 5,
                          srsDeck: { ...prev.srsDeck, [updated.id]: updated },
                        }));
                        const remaining = dueSrsCards.filter((c) => c.id !== srsStudyCard.id);
                        setSrsStudyCard(remaining[0] || null);
                        setSrsStudyFlipped(false);
                      }}
                      className={`py-2.5 px-3 rounded-xl text-white font-black text-xs transition cursor-pointer ${g.cls}`}
                    >
                      {g.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Thanh tìm kiếm & Sắp xếp bộ thẻ */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="search"
                value={srsSearch}
                onChange={(e) => setSrsSearch(e.target.value)}
                placeholder="Tìm từ, nghĩa hoặc chủ đề..."
                className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs font-bold"
              />
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <span className="text-xs font-bold text-slate-500">Xếp theo:</span>
              <select
                value={srsSort}
                onChange={(e) => setSrsSort(e.target.value as typeof srsSort)}
                className="px-3 py-2 rounded-xl border border-slate-200 text-xs font-black text-slate-700"
              >
                <option value="due">Tới hạn ôn trước</option>
                <option value="hardest">Khó nhất trước</option>
                <option value="added">Mới thêm trước</option>
                <option value="alphabet">Bảng chữ cái A–Z</option>
              </select>
            </div>
          </div>

          {sortedSrsCards.length === 0 ? (
            <div className="p-10 text-center rounded-2xl bg-slate-50 border border-dashed border-slate-200 space-y-2">
              <p className="text-sm font-black text-slate-700">
                Bộ thẻ ôn tập SRS của bạn chưa có mục từ nào.
              </p>
              <p className="text-xs text-slate-500">
                Hãy bấm nút “Lưu thẻ” khi đang học các chủ đề IELTS/CEFR hoặc bấm “+ Thêm thẻ từ mới” ở góc trên.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-400 uppercase font-black">
                    <th className="py-3 px-3">Từ / Cụm từ</th>
                    <th className="py-3 px-3">Nghĩa tiếng Việt</th>
                    <th className="py-3 px-3">Chủ đề</th>
                    <th className="py-3 px-3">Lịch ôn SRS</th>
                    <th className="py-3 px-3 text-right">Thao tác</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {sortedSrsCards.map((c) => {
                    const isDue = c.due <= Date.now();
                    return (
                      <tr key={c.id} className="hover:bg-slate-50">
                        <td className="py-3 px-3 font-black text-slate-900">
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => speakEnglish(c.term)}
                              className="text-[#e11b22] hover:opacity-80 cursor-pointer"
                            >
                              <Volume2 className="w-4 h-4" />
                            </button>
                            <span>{c.term}</span>
                          </div>
                        </td>
                        <td className="py-3 px-3 font-bold text-slate-700">{c.definition}</td>
                        <td className="py-3 px-3 text-slate-500 font-semibold">{c.topicTitle}</td>
                        <td className="py-3 px-3">
                          {isDue ? (
                            <span className="px-2.5 py-0.5 rounded-full bg-red-50 text-[#e11b22] border border-red-200 font-black">
                              Tới hạn ôn
                            </span>
                          ) : (
                            <span className="text-slate-500 font-bold">
                              Sau {Math.max(1, Math.ceil((c.due - Date.now()) / 86_400_000))} ngày
                            </span>
                          )}
                        </td>
                        <td className="py-3 px-3 text-right">
                          <button
                            type="button"
                            onClick={() =>
                              saveProgress((prev) => {
                                const copy = { ...prev.srsDeck };
                                delete copy[c.id];
                                return { ...prev, srsDeck: copy };
                              })
                            }
                            className="p-1.5 rounded-lg text-slate-400 hover:text-[#e11b22] cursor-pointer"
                            title="Xoá thẻ"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}

          {/* Modal tự thêm thẻ SRS mới */}
          {showAddSrsModal && (
            <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
              <div className="bg-white rounded-3xl max-w-md w-full p-6 space-y-4 border border-slate-200 shadow-2xl">
                <h4 className="text-lg font-black text-slate-900">Thêm thẻ từ vựng cá nhân</h4>
                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-black text-slate-700 block mb-1">
                      Từ / Cụm từ tiếng Anh *
                    </label>
                    <input
                      type="text"
                      value={newCardFront}
                      onChange={(e) => setNewCardFront(e.target.value)}
                      placeholder="VD: sustainable development"
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-bold"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-black text-slate-700 block mb-1">
                      Nghĩa tiếng Việt *
                    </label>
                    <input
                      type="text"
                      value={newCardBack}
                      onChange={(e) => setNewCardBack(e.target.value)}
                      placeholder="VD: sự phát triển bền vững"
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-bold"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-black text-slate-700 block mb-1">
                      Câu ví dụ / Ghi chú (Tuỳ chọn)
                    </label>
                    <input
                      type="text"
                      value={newCardExample}
                      onChange={(e) => setNewCardExample(e.target.value)}
                      placeholder="VD: Governments should promote sustainable development."
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-bold"
                    />
                  </div>
                </div>
                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowAddSrsModal(false)}
                    className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-black cursor-pointer"
                  >
                    Huỷ
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (!newCardFront.trim() || !newCardBack.trim()) return;
                      const id = `custom-${Date.now()}`;
                      const now = Date.now();
                      saveProgress((prev) => ({
                        ...prev,
                        srsDeck: {
                          ...prev.srsDeck,
                          [id]: {
                            id,
                            term: newCardFront.trim(),
                            definition: newCardBack.trim(),
                            phonetic: "",
                            partOfSpeech: "Tự thêm",
                            pattern: "",
                            exampleEn: newCardExample.trim(),
                            exampleVi: "",
                            topicTitle: "Thẻ cá nhân",
                            addedAt: now,
                            due: now,
                            interval: 0,
                            ease: 2.5,
                            reps: 0,
                            lapses: 0,
                          },
                        },
                      }));
                      setNewCardFront("");
                      setNewCardBack("");
                      setNewCardExample("");
                      setShowAddSrsModal(false);
                    }}
                    className="px-5 py-2 rounded-xl bg-[#e11b22] text-white text-xs font-black cursor-pointer"
                  >
                    Lưu thẻ
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* NHÁNH 1 & 2: CỘT TRÁI (DANH SÁCH CHỦ ĐỀ) + CỘT PHẢI (BẢN ĐỒ 20 BÀI HỌC CỦA CHỦ ĐỀ) */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* CỘT TRÁI: Danh sách 25 Chủ đề IELTS hoặc 6 Bậc CEFR */}
          <div className="lg:col-span-4 bg-white rounded-3xl border border-slate-200 shadow-sm p-4 space-y-3 max-h-[780px] overflow-y-auto">
            <div className="px-2 pt-1 pb-2 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-black uppercase tracking-wider text-slate-900">
                  {trackFilter === "cefr" ? "6 Bậc Từ Vựng CEFR" : "25 Chủ Đề Từ Vựng IELTS"}
                </h3>
                <p className="text-[11px] font-semibold text-slate-500">
                  {trackFilter === "cefr"
                    ? "Chuẩn Oxford 3000/5000 từ A1 đến C2"
                    : "25 chủ đề · 5.000 mục từ & Collocations"}
                </p>
              </div>
            </div>

            <div className="space-y-2">
              {filteredTopics.map((topic, idx) => {
                const totalL = Math.ceil(topic.count / LESSON_SIZE);
                let doneL = 0;
                for (let i = 0; i < totalL; i++) {
                  if ((progress.stars[starKey(topic.id, i, "tap")] || 0) > 0) doneL++;
                }
                const pct = totalL > 0 ? Math.round((doneL / totalL) * 100) : 0;
                const isSelected = topic.id === currentTopicMeta.id;

                return (
                  <button
                    key={topic.id}
                    type="button"
                    onClick={() => setSelectedTopicId(topic.id)}
                    className={`w-full p-3.5 rounded-2xl border text-left transition flex items-center gap-3 cursor-pointer ${
                      isSelected
                        ? "bg-red-50/70 border-[#e11b22] shadow-xs"
                        : "bg-white border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <span
                      className={`w-9 h-9 rounded-xl flex items-center justify-center text-xs font-black shrink-0 ${
                        isSelected
                          ? "bg-[#e11b22] text-white"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>

                    <div className="flex-1 min-w-0">
                      <div className="text-xs sm:text-sm font-black text-slate-900 truncate">
                        {topic.title}
                      </div>
                      <div className="text-[11px] font-bold text-slate-500 mt-0.5">
                        {doneL}/{totalL} bài đã hoàn thành · {pct}%
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-slate-100 mt-1.5 overflow-hidden">
                        <div
                          className="h-full bg-[#e11b22]"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>

                    <span className="text-xs font-black text-[#e11b22]">
                      {isSelected ? "→" : ""}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* CỘT PHẢI: Tổng quan Chủ đề + Thư viện 200 thẻ + Thi vượt cấp + Danh sách Bài học 01..20 */}
          <div className="lg:col-span-8 space-y-5">
            {/* Hộp Tổng quan Chủ đề */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-[#e11b22]">
                    {currentTopicMeta.eyebrow} · {currentTopicMeta.count} MỤC TỪ
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 mt-0.5">
                    {currentTopicMeta.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                    {currentTopicMeta.description}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <div className="px-3.5 py-2 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-black text-slate-700">
                    {currentTopicStats.completedLessons}/{currentTopicStats.totalLessons} bài học ·{" "}
                    <span className="text-amber-600">
                      {currentTopicStats.earnedStars}/{currentTopicStats.maxStars} ★
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      const savedPos = progress.libraryPositions[currentTopicMeta.id] || 0;
                      setLibraryIdx(savedPos);
                      setLibraryFlipped(false);
                      setLibraryOpen(true);
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-slate-900 hover:bg-[#e11b22] text-white text-xs font-black transition cursor-pointer shadow-xs"
                  >
                    <BookOpen className="w-4 h-4" />
                    Toàn bộ {currentTopicMeta.count} thẻ →
                  </button>
                </div>
              </div>

              {/* Cổng Thi Vượt Cấp Chủ Đề (30 câu) giống ForumFlash */}
              <div
                className={`p-4 sm:p-5 rounded-2xl border-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                  progress.topicPassed[currentTopicMeta.id]
                    ? "bg-emerald-50/70 border-emerald-300"
                    : "bg-amber-50/50 border-amber-200"
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm font-black text-slate-900">
                    <Sparkles className="w-4 h-4 text-[#e11b22]" />
                    {progress.topicPassed[currentTopicMeta.id]
                      ? "Đã vượt cấp chủ đề này (Đã mở khóa toàn bộ các bài)"
                      : "Thi vượt cấp chủ đề (30 câu tổng hợp)"}
                  </div>
                  <p className="text-xs text-slate-600 font-medium">
                    30 câu theo mức khó: kết hợp bài tập ngữ cảnh và nghe viết. Đúng từ 25/30 câu là mở khóa mọi bài, mọi mức của chủ đề ngay lập tức.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => startLessonSession(currentTopicMeta.id, -1, "vuot", "hard")}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#e11b22] hover:bg-[#b91c1c] text-white text-xs font-black shrink-0 transition cursor-pointer shadow-xs"
                >
                  {progress.topicPassed[currentTopicMeta.id] ? "Làm lại bài thi" : "Làm bài thi →"}
                </button>
              </div>
            </div>

            {/* Danh sách các Bài học (Bài 01 -> Bài 20) */}
            {loadingTopic && !currentTopicData ? (
              <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 text-sm font-bold text-slate-500">
                Đang tải bộ thẻ từ vựng của chủ đề {currentTopicMeta.title}...
              </div>
            ) : (
              <div className="space-y-4">
                {lessons.map((lesson) => {
                  const unlocked = isLessonUnlocked(currentTopicMeta.id, lesson.index);
                  const tapStars =
                    progress.stars[starKey(currentTopicMeta.id, lesson.index, "tap")] || 0;
                  const passedLesson = tapStars > 0;

                  const totalLessonStars = LESSON_MODES.reduce(
                    (acc, m) =>
                      acc + (progress.stars[starKey(currentTopicMeta.id, lesson.index, m.id)] || 0),
                    0
                  );

                  return (
                    <article
                      key={lesson.index}
                      className={`p-5 sm:p-6 rounded-3xl bg-white border-2 transition ${
                        passedLesson
                          ? "border-emerald-300 shadow-xs"
                          : unlocked
                          ? "border-slate-200 hover:border-[#e11b22] shadow-sm"
                          : "border-slate-200/70 opacity-75 bg-slate-50/60"
                      }`}
                    >
                      {/* Header của Bài học */}
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-100">
                        <div className="flex items-center gap-3">
                          <span
                            className={`px-3 py-1 rounded-xl text-xs font-black ${
                              passedLesson
                                ? "bg-emerald-600 text-white"
                                : unlocked
                                ? "bg-[#e11b22] text-white"
                                : "bg-slate-200 text-slate-600"
                            }`}
                          >
                            Bài {lesson.numberLabel}
                          </span>
                          <span className="text-xs font-bold text-slate-500">
                            {lesson.size} mục từ
                          </span>
                          {lesson.items.length > 0 && (
                            <span className="text-xs text-slate-400 font-medium hidden sm:inline truncate max-w-xs">
                              ({lesson.items.slice(0, 3).map((i) => i.term).join(", ")}...)
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-3">
                          <span
                            className={`text-xs font-black px-2.5 py-0.5 rounded-full ${
                              passedLesson
                                ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                : unlocked
                                ? "bg-amber-50 text-amber-700 border border-amber-200"
                                : "bg-slate-100 text-slate-500"
                            }`}
                          >
                            {passedLesson ? "Đã qua" : unlocked ? "Đang học" : "Chưa mở"}
                          </span>
                          <span className="text-xs font-black text-amber-500">
                            {totalLessonStars}/10 ★
                          </span>
                        </div>
                      </div>

                      {/* 2 Phần: Để qua bài (Học thẻ -> Bài tập) & Luyện thêm (Nghe viết, Phát âm) */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                        {/* Để qua bài */}
                        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                          <div className="text-[11px] font-black uppercase tracking-wider text-slate-500">
                            Để qua bài (Bắt buộc)
                          </div>
                          <div className="grid grid-cols-2 gap-2.5">
                            {LESSON_MODES.filter((m) => !m.optional).map((m, mIdx) => {
                              const modeOpen = isModeUnlocked(
                                currentTopicMeta.id,
                                lesson.index,
                                m.id
                              );
                              const earned =
                                progress.stars[
                                  starKey(currentTopicMeta.id, lesson.index, m.id)
                                ] || 0;

                              return (
                                <button
                                  key={m.id}
                                  type="button"
                                  disabled={!modeOpen}
                                  onClick={() => {
                                    if (m.id === "hoc") {
                                      void startLessonSession(
                                        currentTopicMeta.id,
                                        lesson.index,
                                        "hoc",
                                        "medium"
                                      );
                                    } else {
                                      setPreviewLesson({
                                        lessonIdx: lesson.index,
                                        modeId: m.id,
                                      });
                                    }
                                  }}
                                  className={`p-3 rounded-2xl border-2 text-left transition flex flex-col justify-between cursor-pointer ${
                                    earned > 0
                                      ? "bg-emerald-50/70 border-emerald-400 text-emerald-950"
                                      : modeOpen
                                      ? "bg-white border-[#e11b22] hover:bg-red-50/40 text-slate-900"
                                      : "bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed"
                                  }`}
                                >
                                  <div className="flex items-center justify-between">
                                    <span className="w-6 h-6 rounded-lg bg-slate-900 text-white text-[11px] font-black flex items-center justify-center">
                                      {earned > 0 ? "✓" : mIdx + 1}
                                    </span>
                                    <span className="text-xs font-black text-amber-500">
                                      {modeOpen || earned > 0 ? (
                                        <>
                                          {"★".repeat(earned)}
                                          <span className="text-slate-300">
                                            {"★".repeat(m.maxStars - earned)}
                                          </span>
                                        </>
                                      ) : (
                                        <Lock className="w-3.5 h-3.5 text-slate-400" />
                                      )}
                                    </span>
                                  </div>
                                  <div className="mt-2 font-black text-xs sm:text-sm">
                                    {m.title}
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {/* Luyện thêm, tuỳ chọn */}
                        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                          <div className="text-[11px] font-black uppercase tracking-wider text-slate-500">
                            Luyện thêm <em className="not-italic text-slate-400">(Tuỳ chọn)</em>
                          </div>
                          <div className="grid grid-cols-2 gap-2.5">
                            {LESSON_MODES.filter((m) => m.optional).map((m) => {
                              const modeOpen = isModeUnlocked(
                                currentTopicMeta.id,
                                lesson.index,
                                m.id
                              );
                              const earned =
                                progress.stars[
                                  starKey(currentTopicMeta.id, lesson.index, m.id)
                                ] || 0;

                              return (
                                <button
                                  key={m.id}
                                  type="button"
                                  disabled={!modeOpen}
                                  onClick={() =>
                                    setPreviewLesson({
                                      lessonIdx: lesson.index,
                                      modeId: m.id,
                                    })
                                  }
                                  className={`p-3 rounded-2xl border-2 text-left transition flex flex-col justify-between cursor-pointer ${
                                    earned > 0
                                      ? "bg-emerald-50/70 border-emerald-400 text-emerald-950"
                                      : modeOpen
                                      ? "bg-white border-slate-300 hover:border-[#e11b22] text-slate-900"
                                      : "bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed"
                                  }`}
                                >
                                  <div className="flex items-center justify-between">
                                    {m.id === "nghe" ? (
                                      <Headphones className="w-4 h-4 text-[#e11b22]" />
                                    ) : (
                                      <Mic className="w-4 h-4 text-[#e11b22]" />
                                    )}
                                    <span className="text-xs font-black text-amber-500">
                                      {modeOpen || earned > 0 ? (
                                        <>
                                          {"★".repeat(earned)}
                                          <span className="text-slate-300">
                                            {"★".repeat(m.maxStars - earned)}
                                          </span>
                                        </>
                                      ) : (
                                        <Lock className="w-3.5 h-3.5 text-slate-400" />
                                      )}
                                    </span>
                                  </div>
                                  <div className="mt-2 font-black text-xs sm:text-sm">
                                    {m.title}
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Modal chọn độ khó (Dễ / Vừa / Khó) trước khi vào Bài tập / Nghe viết / Phát âm */}
      {previewLesson && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 space-y-5 border border-slate-200 shadow-2xl">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-red-50 text-[#e11b22] text-xs font-black">
                {currentTopicMeta.title} · Bài{" "}
                {String(previewLesson.lessonIdx + 1).padStart(2, "0")}
              </span>
              <button
                type="button"
                onClick={() => setPreviewLesson(null)}
                className="text-slate-400 hover:text-slate-700 font-black text-lg cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div>
              <h4 className="text-xl font-black text-slate-900">
                {LESSON_MODES.find((m) => m.id === previewLesson.modeId)?.title}
              </h4>
              <p className="text-xs text-slate-600 font-medium mt-1">
                {LESSON_MODES.find((m) => m.id === previewLesson.modeId)?.summary}
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-black uppercase text-slate-500">
                Chọn mức độ thử thách:
              </div>
              <div className="grid grid-cols-3 gap-2.5">
                {(
                  [
                    { id: "easy", label: "Dễ", desc: "Đúng/Sai, Trắc nghiệm & Ghép đôi" },
                    { id: "medium", label: "Vừa", desc: "Trắc nghiệm, Ghép đôi & Điền câu" },
                    { id: "hard", label: "Khó", desc: "Điền câu & Đoạn văn học thuật" },
                  ] as { id: DifficultyLevel; label: string; desc: string }[]
                ).map((d) => (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => setSelectedDifficulty(d.id)}
                    className={`p-3 rounded-2xl border-2 text-left transition cursor-pointer ${
                      selectedDifficulty === d.id
                        ? "border-[#e11b22] bg-red-50/60"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <div className="font-black text-sm text-slate-900">{d.label}</div>
                    <div className="text-[10px] font-semibold text-slate-500 mt-0.5 leading-snug">
                      {d.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setPreviewLesson(null)}
                className="px-4 py-2.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-black cursor-pointer"
              >
                Huỷ
              </button>
              <button
                type="button"
                onClick={() =>
                  startLessonSession(
                    currentTopicMeta.id,
                    previewLesson.lessonIdx,
                    previewLesson.modeId,
                    selectedDifficulty
                  )
                }
                className="px-6 py-2.5 rounded-xl bg-[#e11b22] hover:bg-[#b91c1c] text-white text-xs font-black shadow-sm cursor-pointer"
              >
                Bắt đầu ngay →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
