// Quản lý lưu bài nghe chép chính tả, lưu từng câu đã làm, câu đang gõ dở
// và phát hiện bài nghe chưa hoàn thành để hiện chấm đỏ nhắc nhở khi vào web.

import { supabase } from "@/lib/supabase";
import { ALL_DICTATION_LESSONS, getDictationLessonById } from "@/data/dictationData";

const STORAGE_KEY = "ai4ielts_dictation_progress_v1";
const SUPABASE_DICTATION_USER_ID = "default_user_dictation";
export const DICTATION_PROGRESS_EVENT = "ai4ielts-dictation-progress-updated";

export interface LessonDictationProgress {
  lessonId: string;
  title: string;
  section: string;
  totalSentences: number;
  bookmarked: boolean; // Người dùng bấm "Lưu bài"
  currentIndex: number; // Câu đang dừng lại gần nhất (0-based)
  completedIndices: number[]; // Danh sách index các câu đã kiểm tra xong
  savedAnswers: Record<number, string>; // Lưu nội dung người dùng đã gõ cho từng câu
  draftInputs: Record<number, string>; // Lưu nháp câu đang gõ dở chưa nộp
  startedAt: number;
  updatedAt: number;
}

export interface DictationProgressStore {
  lessons: Record<string, LessonDictationProgress>;
  lastActiveLessonId: string | null;
}

const EMPTY_STORE: DictationProgressStore = {
  lessons: {},
  lastActiveLessonId: null,
};

export function loadDictationStore(): DictationProgressStore {
  if (typeof window === "undefined") return { ...EMPTY_STORE };
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...EMPTY_STORE };
    const parsed = JSON.parse(raw);
    return {
      lessons: parsed?.lessons && typeof parsed.lessons === "object" ? parsed.lessons : {},
      lastActiveLessonId: parsed?.lastActiveLessonId || null,
    };
  } catch {
    return { ...EMPTY_STORE };
  }
}

async function pushDictationToSupabase(store: DictationProgressStore) {
  try {
    const { data: existing } = await supabase
      .from("user_progress")
      .select("id")
      .eq("user_id", SUPABASE_DICTATION_USER_ID)
      .limit(1)
      .maybeSingle();

    const payload = {
      user_id: SUPABASE_DICTATION_USER_ID,
      completed_tasks: [store],
      test_results: [],
      last_active: new Date().toISOString(),
    };

    if (existing?.id) {
      await supabase.from("user_progress").update(payload).eq("id", existing.id);
    } else {
      await supabase.from("user_progress").insert(payload);
    }
  } catch {
    // Offline fallback
  }
}

export function saveDictationStore(store: DictationProgressStore, syncRemote = true) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  window.dispatchEvent(new CustomEvent(DICTATION_PROGRESS_EVENT, { detail: store }));
  if (syncRemote) {
    void pushDictationToSupabase(store);
  }
}

export async function syncDictationFromSupabase(): Promise<DictationProgressStore> {
  const local = loadDictationStore();
  try {
    const { data } = await supabase
      .from("user_progress")
      .select("completed_tasks")
      .eq("user_id", SUPABASE_DICTATION_USER_ID)
      .order("last_active", { ascending: false })
      .limit(1)
      .maybeSingle();

    const remoteRaw = Array.isArray(data?.completed_tasks) ? data.completed_tasks[0] : null;
    if (remoteRaw && typeof remoteRaw === "object" && remoteRaw.lessons) {
      const mergedLessons: Record<string, LessonDictationProgress> = {
        ...remoteRaw.lessons,
        ...local.lessons,
      };
      for (const id of Object.keys(mergedLessons)) {
        const lLoc = local.lessons[id];
        const lRem = remoteRaw.lessons[id];
        if (lLoc && lRem) {
          mergedLessons[id] = (lRem.updatedAt || 0) > (lLoc.updatedAt || 0) ? lRem : lLoc;
        }
      }
      const merged: DictationProgressStore = {
        lessons: mergedLessons,
        lastActiveLessonId: local.lastActiveLessonId || remoteRaw.lastActiveLessonId || null,
      };
      saveDictationStore(merged, false);
      return merged;
    }
  } catch {
    // ignore network error
  }
  return local;
}

export function getOrInitLessonProgress(lessonId: string): LessonDictationProgress {
  const store = loadDictationStore();
  const lessonMeta = getDictationLessonById(lessonId);
  const existing = store.lessons[lessonMeta.id];
  if (existing) {
    return {
      ...existing,
      totalSentences: lessonMeta.sentences.length,
    };
  }
  const now = Date.now();
  return {
    lessonId: lessonMeta.id,
    title: lessonMeta.title,
    section: lessonMeta.section,
    totalSentences: lessonMeta.sentences.length,
    bookmarked: false,
    currentIndex: 0,
    completedIndices: [],
    savedAnswers: {},
    draftInputs: {},
    startedAt: now,
    updatedAt: now,
  };
}

export function updateLessonDictationProgress(
  lessonId: string,
  updater: (prev: LessonDictationProgress) => LessonDictationProgress
): LessonDictationProgress {
  const store = loadDictationStore();
  const prev = getOrInitLessonProgress(lessonId);
  const updated = {
    ...updater(prev),
    updatedAt: Date.now(),
  };
  const nextStore: DictationProgressStore = {
    lessons: {
      ...store.lessons,
      [updated.lessonId]: updated,
    },
    lastActiveLessonId: updated.lessonId,
  };
  saveDictationStore(nextStore);
  return updated;
}

export function toggleBookmarkDictationLesson(lessonId: string): LessonDictationProgress {
  return updateLessonDictationProgress(lessonId, (prev) => ({
    ...prev,
    bookmarked: !prev.bookmarked,
  }));
}

/**
 * Trả về danh sách các bài nghe đang làm dở hoặc đã lưu nhưng CHƯA hoàn thành hết các câu.
 * Nếu người dùng mới vào web lần đầu chưa mở bài nào, trả về bài nghe đầu tiên được đề xuất
 * để hiện chấm đỏ nhắc nhở hoàn thành bài nghe của chủ đề.
 */
export function getIncompleteDictationLessons(store?: DictationProgressStore): {
  incompleteLessons: LessonDictationProgress[];
  primaryReminder: {
    lessonId: string;
    title: string;
    section: string;
    completedCount: number;
    totalCount: number;
    nextSentenceNumber: number;
    isStarted: boolean;
  };
} {
  const currentStore = store || loadDictationStore();
  const allSaved = Object.values(currentStore.lessons);

  // Các bài đã bắt đầu (có câu đã làm, hoặc đã lưu bài, hoặc có nháp, hoặc đang ở câu > 0) nhưng chưa đủ 100% số câu
  const incomplete = allSaved
    .filter((item) => {
      const hasActivity =
        item.bookmarked ||
        item.completedIndices.length > 0 ||
        item.currentIndex > 0 ||
        Object.keys(item.draftInputs || {}).some((k) => Boolean(item.draftInputs[Number(k)]?.trim()));
      const isFinished = item.completedIndices.length >= item.totalSentences && item.totalSentences > 0;
      return hasActivity && !isFinished;
    })
    .sort((a, b) => b.updatedAt - a.updatedAt);

  if (incomplete.length > 0) {
    const top = incomplete[0];
    // Tìm câu đầu tiên chưa hoàn thành hoặc câu đang dừng lại
    let nextIdx = top.currentIndex;
    if (top.completedIndices.includes(nextIdx)) {
      for (let i = 0; i < top.totalSentences; i++) {
        if (!top.completedIndices.includes(i)) {
          nextIdx = i;
          break;
        }
      }
    }
    return {
      incompleteLessons: incomplete,
      primaryReminder: {
        lessonId: top.lessonId,
        title: top.title,
        section: top.section,
        completedCount: top.completedIndices.length,
        totalCount: top.totalSentences,
        nextSentenceNumber: nextIdx + 1,
        isStarted: true,
      },
    };
  }

  // Kiểm tra xem người dùng đã hoàn thành tất cả 19 bài chưa; nếu chưa thì nhắc bài tiếp theo chưa xong
  const firstUnfinished =
    ALL_DICTATION_LESSONS.find((l) => {
      const p = currentStore.lessons[l.id];
      return !p || p.completedIndices.length < l.sentences.length;
    }) || ALL_DICTATION_LESSONS[0];

  const existingProg = currentStore.lessons[firstUnfinished.id];
  const doneCount = existingProg?.completedIndices.length || 0;

  return {
    incompleteLessons: [],
    primaryReminder: {
      lessonId: firstUnfinished.id,
      title: firstUnfinished.title,
      section: firstUnfinished.section,
      completedCount: doneCount,
      totalCount: firstUnfinished.sentences.length,
      nextSentenceNumber: doneCount + 1,
      isStarted: doneCount > 0,
    },
  };
}
