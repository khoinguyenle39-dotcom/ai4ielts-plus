"use client";

import React, { useEffect, useState } from "react";
import {
  Flame,
  Calendar,
  Trophy,
  AlertTriangle,
  Clock,
  CheckCircle2,
  X,
  RotateCcw,
  PlusCircle,
  Zap,
  ShieldAlert,
} from "lucide-react";
import {
  StudyStreakState,
  loadStreakState,
  syncAndCheckStreak,
  acknowledgeStreakLostNotice,
  simulateStreakScenario,
  toLocalDateKey,
  STREAK_UPDATED_EVENT,
} from "@/lib/streakManager";

const OPEN_MODAL_EVENT = "ai4ielts-open-streak-modal";

export function openStudyStreakModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(OPEN_MODAL_EVENT));
  }
}

/** Tính thời gian còn lại tới 23:59:59 đêm nay */
function getCountdownToMidnight(): string {
  const now = new Date();
  const midnight = new Date(now);
  midnight.setHours(23, 59, 59, 999);
  const diffMs = Math.max(0, midnight.getTime() - now.getTime());
  const hours = Math.floor(diffMs / 3_600_000);
  const minutes = Math.floor((diffMs % 3_600_000) / 60_000);
  const seconds = Math.floor((diffMs % 60_000) / 1_000);
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;
}

/** Danh sách 7 ngày gần nhất (từ 6 ngày trước -> hôm nay) */
function getRecent7Days(history: string[]) {
  const historySet = new Set(history);
  const today = new Date();
  const dayNames = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
  const result: {
    key: string;
    label: string;
    dayNum: string;
    checked: boolean;
    isToday: boolean;
  }[] = [];

  for (let i = 6; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const key = toLocalDateKey(d);
    result.push({
      key,
      label: i === 0 ? "Hôm nay" : dayNames[d.getDay()],
      dayNum: `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(
        2,
        "0"
      )}`,
      checked: historySet.has(key),
      isToday: i === 0,
    });
  }
  return result;
}

export function StudyStreakNavbarBadge() {
  const [streakState, setStreakState] = useState<StudyStreakState | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [countdown, setCountdown] = useState("00:00:00");
  const [showSimulator, setShowSimulator] = useState(false);

  useEffect(() => {
    let mounted = true;
    syncAndCheckStreak().then((state) => {
      if (!mounted) return;
      setStreakState(state);
      if (state.lostNotice && !state.lostNotice.acknowledged) {
        setIsOpen(true);
      }
    });

    const handleStreakUpdate = () => {
      setStreakState(loadStreakState());
    };
    const handleOpenModal = () => {
      setIsOpen(true);
    };

    window.addEventListener(STREAK_UPDATED_EVENT, handleStreakUpdate);
    window.addEventListener(OPEN_MODAL_EVENT, handleOpenModal);

    setCountdown(getCountdownToMidnight());
    const timer = setInterval(() => {
      setCountdown(getCountdownToMidnight());
    }, 1000);

    return () => {
      mounted = false;
      window.removeEventListener(STREAK_UPDATED_EVENT, handleStreakUpdate);
      window.removeEventListener(OPEN_MODAL_EVENT, handleOpenModal);
      clearInterval(timer);
    };
  }, []);

  const currentStreak = streakState?.currentStreak ?? 1;
  const longestStreak = streakState?.longestStreak ?? 1;
  const hasUnacknowledgedLoss = Boolean(
    streakState?.lostNotice && !streakState.lostNotice.acknowledged
  );
  const recentDays = getRecent7Days(streakState?.history || []);

  const handleCloseModal = () => {
    if (hasUnacknowledgedLoss) {
      setStreakState(acknowledgeStreakLostNotice());
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Nút Streak trên thanh Navbar */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        title="Bấm để xem chi tiết Chuỗi ngày học tập liên tục (Streak)"
        className={`relative flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border font-black text-xs sm:text-sm transition transform active:scale-95 cursor-pointer ${
          hasUnacknowledgedLoss
            ? "bg-amber-50 border-amber-300 text-amber-800 animate-pulse"
            : "bg-red-50 border-red-200 text-[#e11b22] hover:bg-[#e11b22] hover:text-white hover:border-[#e11b22]"
        }`}
      >
        <Flame className="w-4 h-4 fill-current animate-bounce" />
        <span>{currentStreak} Ngày Streak</span>
        {hasUnacknowledgedLoss && (
          <span className="ml-1 px-1.5 py-0.2 rounded-full bg-red-600 text-white text-[10px] font-black">
            Mất chuỗi!
          </span>
        )}
      </button>

      {/* Modal Chi Tiết Bộ Đếm Streak */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full border border-slate-200 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Header Đỏ thương hiệu */}
            <div className="bg-gradient-to-r from-[#e11b22] to-[#b91c1c] text-white p-6 relative">
              <button
                type="button"
                onClick={handleCloseModal}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white transition"
                aria-label="Đóng"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-white/15 border border-white/30 flex items-center justify-center shadow-inner">
                  <Flame className="w-10 h-10 text-amber-300 fill-amber-300 animate-bounce" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/25 text-[11px] font-bold uppercase tracking-wider mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
                    Đã điểm danh học hôm nay
                  </div>
                  <h3 className="text-3xl font-black tracking-tight">
                    {currentStreak} Ngày Liên Tục
                  </h3>
                  <p className="text-xs text-white/90 font-medium mt-0.5">
                    Nghỉ 1 ngày không vào web là chuỗi Streak sẽ về lại từ đầu!
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
              {/* Cảnh báo nếu vừa bị mất Streak do bỏ trống >= 1 ngày */}
              {streakState?.lostNotice && (
                <div className="p-4 rounded-2xl bg-red-50 border-2 border-red-200 flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-[#e11b22] shrink-0 mt-0.5" />
                  <div className="text-xs space-y-1">
                    <div className="font-black text-[#e11b22] text-sm">
                      CẢNH BÁO: Bạn đã bị mất chuỗi {streakState.lostNotice.previousStreak} ngày Streak!
                    </div>
                    <p className="text-slate-700 font-medium leading-relaxed">
                      Hệ thống ghi nhận bạn đã nghỉ{" "}
                      <b>{streakState.lostNotice.missedDays} ngày</b> không truy cập vào học. Theo
                      quy tắc kỷ luật IELTS, chuỗi cũ đã bị hủy và hôm nay bạn bắt đầu lại từ{" "}
                      <b>Ngày 1</b>.
                    </p>
                  </div>
                </div>
              )}

              {/* 3 Chỉ số thống kê Streak */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                  <div className="flex items-center justify-center text-[#e11b22] mb-1">
                    <Flame className="w-5 h-5 fill-[#e11b22]" />
                  </div>
                  <div className="text-xl font-black text-slate-900">{currentStreak} ngày</div>
                  <div className="text-[11px] font-bold text-slate-500">Streak hiện tại</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-amber-50/60 border border-amber-200 text-center">
                  <div className="flex items-center justify-center text-amber-600 mb-1">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div className="text-xl font-black text-slate-900">{longestStreak} ngày</div>
                  <div className="text-[11px] font-bold text-slate-500">Kỷ lục cao nhất</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-200 text-center">
                  <div className="flex items-center justify-center text-emerald-600 mb-1">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div className="text-xl font-black text-slate-900">
                    {streakState?.history.length ?? 1} ngày
                  </div>
                  <div className="text-[11px] font-bold text-slate-500">Tổng ngày đã học</div>
                </div>
              </div>

              {/* Lịch 7 ngày gần nhất */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-wider text-slate-700">
                    Chuỗi điểm danh 7 ngày qua
                  </span>
                  <span className="text-[11px] font-bold text-slate-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#e11b22]" />
                    Qua ngày mới sau: <b className="text-slate-900 font-mono">{countdown}</b>
                  </span>
                </div>

                <div className="grid grid-cols-7 gap-2">
                  {recentDays.map((d) => (
                    <div
                      key={d.key}
                      className={`p-2 rounded-2xl border text-center flex flex-col items-center justify-center gap-1 transition ${
                        d.checked
                          ? "bg-red-50 border-[#e11b22] text-[#e11b22]"
                          : "bg-slate-50 border-slate-200 text-slate-400"
                      } ${d.isToday ? "ring-2 ring-[#e11b22]/30" : ""}`}
                    >
                      <span className="text-[10px] font-black uppercase">{d.label}</span>
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center ${
                          d.checked
                            ? "bg-[#e11b22] text-white shadow-xs"
                            : "bg-slate-200/70 text-slate-400"
                        }`}
                      >
                        {d.checked ? (
                          <Flame className="w-4 h-4 fill-white" />
                        ) : (
                          <span className="text-[10px] font-bold">✕</span>
                        )}
                      </div>
                      <span className="text-[10px] font-bold text-slate-500">{d.dayNum}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quy tắc nghiêm ngặt */}
              <div className="p-4 rounded-2xl bg-slate-900 text-white space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-black text-amber-400 uppercase tracking-wider">
                  <ShieldAlert className="w-4 h-4" />
                  Cơ chế kỷ luật Streak tự động
                </div>
                <p className="text-xs text-slate-200 leading-relaxed font-medium">
                  • Mỗi ngày bạn mở web học sẽ tự động được cộng <b>+1 Ngày Streak</b>.<br />• Nếu{" "}
                  <b className="text-amber-300">1 ngày trọn vẹn (00:00 → 23:59) không vào học</b>,
                  hệ thống sẽ lập tức xóa chuỗi hiện tại và đưa bạn quay về <b>1 Ngày Streak</b> vào
                  lần đăng nhập kế tiếp.
                </p>
              </div>

              {/* Bảng Kiểm Thử Nhanh Cơ Chế Cộng / Mất Streak */}
              <div className="pt-2 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setShowSimulator((v) => !v)}
                  className="text-xs font-bold text-slate-500 hover:text-[#e11b22] flex items-center gap-1.5 transition cursor-pointer"
                >
                  <Zap className="w-3.5 h-3.5" />
                  {showSimulator
                    ? "Ẩn bộ mô phỏng kiểm thử Streak"
                    : "Bấm để kiểm thử ngay cơ chế Cộng ngày / Mất Streak khi nghỉ 1 ngày"}
                </button>

                {showSimulator && (
                  <div className="mt-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
                    <p className="text-[11px] text-slate-600 font-semibold">
                      Dùng các nút dưới đây để kiểm tra ngay lập tức cách hệ thống xử lý khi bạn học
                      liên tục hoặc khi bạn bỏ lỡ 1 ngày không vào:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => setStreakState(simulateStreakScenario("add_day"))}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black transition cursor-pointer"
                      >
                        <PlusCircle className="w-3.5 h-3.5" />
                        Giả lập +1 ngày học liên tiếp
                      </button>

                      <button
                        type="button"
                        onClick={() => setStreakState(simulateStreakScenario("miss_one_day"))}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#e11b22] hover:bg-[#b91c1c] text-white text-xs font-black transition cursor-pointer"
                      >
                        <AlertTriangle className="w-3.5 h-3.5" />
                        Giả lập nghỉ 1 ngày (Mất Streak!)
                      </button>

                      <button
                        type="button"
                        onClick={() => setStreakState(simulateStreakScenario("reset_today"))}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-black transition cursor-pointer"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        Đặt lại thực tế hôm nay (Ngày 1)
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex justify-end pt-1">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-5 py-2.5 rounded-xl bg-[#e11b22] hover:bg-[#b91c1c] text-white font-black text-xs transition shadow-sm cursor-pointer"
                >
                  Tiếp tục học giữ Streak
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/** Thẻ Streak hiển thị ở trang chủ (thay thế số "3 Ngày" cố định trước đây) */
export function StudyStreakHomeCard() {
  const [streakState, setStreakState] = useState<StudyStreakState | null>(null);

  useEffect(() => {
    setStreakState(loadStreakState());
    const handleStreakUpdate = () => {
      setStreakState(loadStreakState());
    };
    window.addEventListener(STREAK_UPDATED_EVENT, handleStreakUpdate);
    return () => window.removeEventListener(STREAK_UPDATED_EVENT, handleStreakUpdate);
  }, []);

  const currentStreak = Math.max(1, streakState?.currentStreak ?? 1);
  const longestStreak = Math.max(1, streakState?.longestStreak ?? 1);

  return (
    <button
      type="button"
      onClick={openStudyStreakModal}
      className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between gap-3.5 hover:border-[#e11b22] hover:shadow-md transition text-left w-full cursor-pointer group"
    >
      <div className="flex items-center gap-3.5">
        <div className="w-12 h-12 rounded-xl bg-red-50 text-[#e11b22] group-hover:bg-[#e11b22] group-hover:text-white transition flex items-center justify-center font-bold shrink-0">
          <Flame className="w-6 h-6 fill-current" />
        </div>
        <div>
          <div className="text-2xl font-black text-slate-900">{currentStreak} Ngày</div>
          <div className="text-xs text-slate-500 font-bold">
            Chuỗi học liên tục (Kỷ lục: {longestStreak})
          </div>
        </div>
      </div>
      <span className="hidden sm:inline-block text-[10px] font-black text-[#e11b22] bg-red-50 px-2 py-1 rounded-lg border border-red-100">
        Chi tiết
      </span>
    </button>
  );
}
