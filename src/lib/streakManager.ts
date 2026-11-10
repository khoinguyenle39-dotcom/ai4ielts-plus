// Quản lý chuỗi ngày học tập liên tục (Study Streak).
// Quy tắc nghiêm ngặt: Mỗi ngày vào học được tính +1 ngày liên tiếp.
// Nếu bỏ lỡ >= 1 ngày không vào (khoảng cách giữa 2 lần truy cập > 1 ngày lịch), chuỗi Streak bị mất!

import { supabase } from "@/lib/supabase";

const STORAGE_KEY = "ai4ielts_study_streak_v1";
const SUPABASE_STREAK_USER_ID = "default_user_streak";
export const STREAK_UPDATED_EVENT = "ai4ielts-streak-updated";

export interface StreakLostNotice {
  previousStreak: number;
  missedDays: number;
  lostOnDate: string; // YYYY-MM-DD
  acknowledged: boolean;
}

export interface StudyStreakState {
  currentStreak: number;
  longestStreak: number;
  lastActiveDate: string | null; // YYYY-MM-DD theo giờ địa phương
  lastCheckInIso: string | null;
  history: string[]; // Danh sách các ngày YYYY-MM-DD đã vào học
  streakLostCount: number;
  lostNotice: StreakLostNotice | null;
}

const INITIAL_STATE: StudyStreakState = {
  currentStreak: 0,
  longestStreak: 0,
  lastActiveDate: null,
  lastCheckInIso: null,
  history: [],
  streakLostCount: 0,
  lostNotice: null,
};

/** Trả về chuỗi YYYY-MM-DD theo múi giờ địa phương của người học */
export function toLocalDateKey(date: Date = new Date()): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

/** Tính số ngày lịch chênh lệch giữa 2 chuỗi YYYY-MM-DD (toKey - fromKey) */
export function diffCalendarDays(fromKey: string, toKey: string): number {
  const [fy, fm, fd] = fromKey.split("-").map(Number);
  const [ty, tm, td] = toKey.split("-").map(Number);
  const fromUtc = Date.UTC(fy, (fm || 1) - 1, fd || 1);
  const toUtc = Date.UTC(ty, (tm || 1) - 1, td || 1);
  return Math.round((toUtc - fromUtc) / 86_400_000);
}

export function loadStreakState(): StudyStreakState {
  if (typeof window === "undefined") return { ...INITIAL_STATE };
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...INITIAL_STATE };
    const parsed = JSON.parse(raw);
    return {
      ...INITIAL_STATE,
      ...parsed,
      history: Array.isArray(parsed?.history) ? parsed.history : [],
    };
  } catch {
    return { ...INITIAL_STATE };
  }
}

async function pushStreakToSupabase(state: StudyStreakState) {
  try {
    const { data: existing } = await supabase
      .from("user_progress")
      .select("id")
      .eq("user_id", SUPABASE_STREAK_USER_ID)
      .limit(1)
      .maybeSingle();

    const payload = {
      user_id: SUPABASE_STREAK_USER_ID,
      completed_tasks: [state],
      test_results: [],
      last_active: new Date().toISOString(),
    };

    if (existing?.id) {
      await supabase.from("user_progress").update(payload).eq("id", existing.id);
    } else {
      await supabase.from("user_progress").insert(payload);
    }
  } catch {
    // Fallback an toàn khi offline
  }
}

export function saveStreakState(state: StudyStreakState, syncRemote = true) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  window.dispatchEvent(new CustomEvent(STREAK_UPDATED_EVENT, { detail: state }));
  if (syncRemote) {
    void pushStreakToSupabase(state);
  }
}

/**
 * Kiểm tra và ghi nhận ngày học hôm nay (hoặc ngày truyền vào).
 * - Nếu chưa từng vào: bắt đầu chuỗi = 1.
 * - Nếu đã vào trong cùng ngày: giữ nguyên chuỗi.
 * - Nếu ngày hôm trước vừa vào (diff === 1): tăng chuỗi +1.
 * - Nếu nghỉ >= 1 ngày (diff > 1): MẤT STREAK! Ghi nhận cảnh báo mất chuỗi và đặt lại chuỗi = 1 cho ngày mới.
 */
export function recordDailyStudyVisit(now: Date = new Date()): StudyStreakState {
  const prev = loadStreakState();
  const todayKey = toLocalDateKey(now);
  const nowIso = now.toISOString();

  // Trường hợp 1: Lần đầu tiên vào học
  if (!prev.lastActiveDate) {
    const next: StudyStreakState = {
      currentStreak: 1,
      longestStreak: 1,
      lastActiveDate: todayKey,
      lastCheckInIso: nowIso,
      history: [todayKey],
      streakLostCount: 0,
      lostNotice: null,
    };
    saveStreakState(next);
    return next;
  }

  const dayDiff = diffCalendarDays(prev.lastActiveDate, todayKey);

  // Trường hợp 2: Đã vào học trong ngày hôm nay rồi
  if (dayDiff <= 0) {
    const historySet = new Set(prev.history);
    historySet.add(todayKey);
    const next: StudyStreakState = {
      ...prev,
      currentStreak: Math.max(1, prev.currentStreak),
      longestStreak: Math.max(1, prev.longestStreak, prev.currentStreak),
      lastCheckInIso: prev.lastCheckInIso || nowIso,
      history: Array.from(historySet).sort(),
    };
    saveStreakState(next, false);
    return next;
  }

  // Trường hợp 3: Học liên tiếp ngày kế tiếp (diff === 1)
  if (dayDiff === 1) {
    const newStreak = prev.currentStreak + 1;
    const newLongest = Math.max(prev.longestStreak, newStreak);
    const historySet = new Set(prev.history);
    historySet.add(todayKey);

    const next: StudyStreakState = {
      ...prev,
      currentStreak: newStreak,
      longestStreak: newLongest,
      lastActiveDate: todayKey,
      lastCheckInIso: nowIso,
      history: Array.from(historySet).sort(),
      lostNotice: null,
    };
    saveStreakState(next);
    return next;
  }

  // Trường hợp 4: Bỏ lỡ >= 1 ngày không vào học (dayDiff > 1) -> MẤT STREAK!
  const missedDays = dayDiff - 1;
  const historySet = new Set(prev.history);
  historySet.add(todayKey);

  const next: StudyStreakState = {
    currentStreak: 1, // Bắt đầu lại từ ngày 1
    longestStreak: Math.max(prev.longestStreak, prev.currentStreak, 1),
    lastActiveDate: todayKey,
    lastCheckInIso: nowIso,
    history: Array.from(historySet).sort(),
    streakLostCount: (prev.streakLostCount || 0) + 1,
    lostNotice: {
      previousStreak: prev.currentStreak,
      missedDays,
      lostOnDate: todayKey,
      acknowledged: false,
    },
  };
  saveStreakState(next);
  return next;
}

/** Đồng bộ dữ liệu Streak từ Supabase và kiểm tra ngày hôm nay */
export async function syncAndCheckStreak(): Promise<StudyStreakState> {
  const local = loadStreakState();
  try {
    const { data } = await supabase
      .from("user_progress")
      .select("completed_tasks")
      .eq("user_id", SUPABASE_STREAK_USER_ID)
      .order("last_active", { ascending: false })
      .limit(1)
      .maybeSingle();

    const remoteRaw = Array.isArray(data?.completed_tasks) ? data?.completed_tasks[0] : null;
    if (remoteRaw && typeof remoteRaw === "object" && remoteRaw.lastActiveDate) {
      const remote: StudyStreakState = {
        ...INITIAL_STATE,
        ...remoteRaw,
        history: Array.isArray(remoteRaw.history) ? remoteRaw.history : [],
      };
      // Nếu trên cloud có lịch sử nhiều hơn hoặc mới hơn thì hợp nhất trước khi tính hôm nay
      if (
        !local.lastActiveDate ||
        remote.history.length > local.history.length ||
        (remote.lastActiveDate &&
          diffCalendarDays(local.lastActiveDate, remote.lastActiveDate) > 0)
      ) {
        if (typeof window !== "undefined") {
          window.localStorage.setItem(STORAGE_KEY, JSON.stringify(remote));
        }
      }
    }
  } catch {
    // Bỏ qua lỗi mạng
  }
  return recordDailyStudyVisit(new Date());
}

export function acknowledgeStreakLostNotice(): StudyStreakState {
  const current = loadStreakState();
  if (!current.lostNotice) return current;
  const next: StudyStreakState = {
    ...current,
    lostNotice: {
      ...current.lostNotice,
      acknowledged: true,
    },
  };
  saveStreakState(next);
  return next;
}

/**
 * Hàm hỗ trợ kiểm thử nhanh cơ chế Cộng Streak / Mất Streak khi nghỉ 1 ngày:
 * - mode === "add_day": Giả lập hôm qua đã học để tăng +1 ngày liên tục.
 * - mode === "miss_one_day": Giả lập lần cuối vào học là cách đây 2 ngày (tức bỏ trống 1 ngày hôm qua không vào) -> Mất Streak!
 * - mode === "reset_today": Đặt lại đúng thực tế bắt đầu hôm nay (1 ngày).
 */
export function simulateStreakScenario(
  mode: "add_day" | "miss_one_day" | "reset_today"
): StudyStreakState {
  const current = loadStreakState();
  const now = new Date();
  const todayKey = toLocalDateKey(now);

  if (mode === "reset_today") {
    const fresh: StudyStreakState = {
      currentStreak: 1,
      longestStreak: 1,
      lastActiveDate: todayKey,
      lastCheckInIso: now.toISOString(),
      history: [todayKey],
      streakLostCount: 0,
      lostNotice: null,
    };
    saveStreakState(fresh);
    return fresh;
  }

  if (mode === "add_day") {
    const newStreak = current.currentStreak + 1;
    const historySet = new Set(current.history);
    // Thêm ngày lùi về trước để lịch sử hiển thị đủ chuỗi liên tiếp
    for (let i = 0; i < newStreak; i++) {
      const d = new Date(now);
      d.setDate(d.getDate() - i);
      historySet.add(toLocalDateKey(d));
    }
    const next: StudyStreakState = {
      ...current,
      currentStreak: newStreak,
      longestStreak: Math.max(current.longestStreak, newStreak),
      lastActiveDate: todayKey,
      lastCheckInIso: now.toISOString(),
      history: Array.from(historySet).sort(),
      lostNotice: null,
    };
    saveStreakState(next);
    return next;
  }

  // mode === "miss_one_day": Giả lập lần cuối vào học là 2 ngày trước (nghỉ 1 ngày hôm qua)
  const previousStreakToLose = Math.max(current.currentStreak, 3);
  const twoDaysAgo = new Date(now);
  twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);
  const twoDaysAgoKey = toLocalDateKey(twoDaysAgo);

  // Ghi trạng thái giả lập cách đây 2 ngày rồi gọi recordDailyStudyVisit(now) để kích hoạt logic mất streak thật
  const simulatedPast: StudyStreakState = {
    ...current,
    currentStreak: previousStreakToLose,
    longestStreak: Math.max(current.longestStreak, previousStreakToLose),
    lastActiveDate: twoDaysAgoKey,
    history: current.history.filter((d) => d !== todayKey),
  };
  saveStreakState(simulatedPast, false);
  return recordDailyStudyVisit(now);
}
