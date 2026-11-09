// Lưu tiến độ học collocation trong localStorage + đồng bộ tự động lên Supabase (bảng public.user_progress).
import { COLLOCATIONS, Collocation } from "@/data/collocations";
import { supabase } from "@/lib/supabase";

const STORAGE_KEY = "ai4ielts_collocation_progress_v1";
const SUPABASE_USER_ID = "default_user";
export const QUIZ_INTERVAL_MS = 7 * 24 * 60 * 60 * 1000;
export const ROUND_SIZE = 6;

export interface LearnedStat {
  firstSeenAt: number;
  correct: number;
  wrong: number;
}

export interface QuizRecord {
  at: number;
  score: number;
  total: number;
}

export interface CollocationProgress {
  seen: string[]; // các cụm đã xuất hiện trong vòng học hiện tại
  cycle: number; // số lần đã học hết toàn bộ kho
  learned: Record<string, LearnedStat>;
  firstPlayAt: number | null;
  lastQuizAt: number | null;
  lastNotifiedAt: number | null;
  quizHistory: QuizRecord[];
}

const EMPTY: CollocationProgress = {
  seen: [],
  cycle: 0,
  learned: {},
  firstPlayAt: null,
  lastQuizAt: null,
  lastNotifiedAt: null,
  quizHistory: [],
};

export function loadProgress(): CollocationProgress {
  if (typeof window === "undefined") return { ...EMPTY };
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...EMPTY };
    return { ...EMPTY, ...JSON.parse(raw) };
  } catch {
    return { ...EMPTY };
  }
}

async function pushProgressToSupabase(p: CollocationProgress) {
  try {
    const { data: existing } = await supabase
      .from("user_progress")
      .select("id")
      .eq("user_id", SUPABASE_USER_ID)
      .limit(1)
      .maybeSingle();

    const payload = {
      user_id: SUPABASE_USER_ID,
      completed_tasks: [p],
      test_results: p.quizHistory || [],
      last_active: new Date().toISOString(),
    };

    if (existing?.id) {
      await supabase.from("user_progress").update(payload).eq("id", existing.id);
    } else {
      await supabase.from("user_progress").insert(payload);
    }
  } catch {
    // Fallback an toàn nếu người dùng ngoại tuyến
  }
}

export function saveProgress(p: CollocationProgress) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  void pushProgressToSupabase(p);
}

/**
 * Đồng bộ tiến độ học từ Supabase về máy nếu trên Supabase có nhiều dữ liệu hơn.
 */
export async function syncProgressFromSupabase(): Promise<CollocationProgress> {
  const local = loadProgress();
  try {
    const { data } = await supabase
      .from("user_progress")
      .select("completed_tasks, test_results")
      .eq("user_id", SUPABASE_USER_ID)
      .order("last_active", { ascending: false })
      .limit(1)
      .maybeSingle();

    const remoteRaw = Array.isArray(data?.completed_tasks)
      ? data?.completed_tasks[0]
      : null;

    if (remoteRaw && typeof remoteRaw === "object") {
      const remote: CollocationProgress = { ...EMPTY, ...remoteRaw };
      const localLearnedCount = Object.keys(local.learned).length;
      const remoteLearnedCount = Object.keys(remote.learned).length;

      if (remoteLearnedCount > localLearnedCount || remote.seen.length > local.seen.length) {
        if (typeof window !== "undefined") {
          window.localStorage.setItem(STORAGE_KEY, JSON.stringify(remote));
        }
        return remote;
      }
    }
  } catch {
    // Bỏ qua lỗi mạng
  }
  return local;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Hai cụm "xung đột" nếu ghép chéo được với nhau trong cùng một ván
// (trùng vế trái/phải, hoặc vế trái của cụm này là từ thay thế của cụm kia).
function conflicts(a: Collocation, b: Collocation): boolean {
  if (a.left === b.left || a.right === b.right) return true;
  if (a.alt?.includes(b.left)) return true;
  if (b.alt?.includes(a.left)) return true;
  return false;
}

function pickCompatible(candidates: Collocation[], chosen: Collocation[], size: number) {
  for (const c of candidates) {
    if (chosen.length >= size) break;
    if (chosen.some((x) => x.id === c.id || conflicts(x, c))) continue;
    chosen.push(c);
  }
}

/**
 * Chọn một ván mới: ưu tiên những cụm CHƯA xuất hiện trong vòng học hiện tại.
 * Khi đã học hết kho, bắt đầu vòng mới (cycle + 1).
 * Trả về ván chơi và progress đã cập nhật (chưa lưu).
 */
export function pickNewRound(progress: CollocationProgress): {
  round: Collocation[];
  progress: CollocationProgress;
  startedNewCycle: boolean;
} {
  let seen = new Set(progress.seen);
  let cycle = progress.cycle;
  let startedNewCycle = false;

  let unseen = COLLOCATIONS.filter((c) => !seen.has(c.id));
  if (unseen.length === 0) {
    seen = new Set();
    cycle += 1;
    startedNewCycle = true;
    unseen = [...COLLOCATIONS];
  }

  const chosen: Collocation[] = [];
  pickCompatible(shuffle(unseen), chosen, ROUND_SIZE);

  // Nếu số cụm mới còn lại không đủ (cuối vòng), bù bằng cụm cũ.
  if (chosen.length < ROUND_SIZE) {
    pickCompatible(shuffle(COLLOCATIONS.filter((c) => seen.has(c.id))), chosen, ROUND_SIZE);
  }

  chosen.forEach((c) => seen.add(c.id));
  const now = Date.now();

  return {
    round: chosen,
    startedNewCycle,
    progress: {
      ...progress,
      seen: Array.from(seen),
      cycle,
      firstPlayAt: progress.firstPlayAt ?? now,
    },
  };
}

export function recordResult(
  progress: CollocationProgress,
  id: string,
  isCorrect: boolean
): CollocationProgress {
  const prev = progress.learned[id] ?? { firstSeenAt: Date.now(), correct: 0, wrong: 0 };
  return {
    ...progress,
    learned: {
      ...progress.learned,
      [id]: {
        ...prev,
        correct: prev.correct + (isCorrect ? 1 : 0),
        wrong: prev.wrong + (isCorrect ? 0 : 1),
      },
    },
  };
}

/** Mốc thời gian bắt đầu tính chu kỳ 7 ngày. */
export function quizAnchor(p: CollocationProgress): number | null {
  return p.lastQuizAt ?? p.firstPlayAt;
}

export function isQuizDue(p: CollocationProgress, now = Date.now()): boolean {
  const anchor = quizAnchor(p);
  if (!anchor || Object.keys(p.learned).length === 0) return false;
  return now - anchor >= QUIZ_INTERVAL_MS;
}

export function nextQuizAt(p: CollocationProgress): number | null {
  const anchor = quizAnchor(p);
  return anchor ? anchor + QUIZ_INTERVAL_MS : null;
}
