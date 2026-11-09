"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BellRing, CalendarClock, X } from "lucide-react";
import {
  isQuizDue,
  loadProgress,
  nextQuizAt,
  saveProgress,
} from "@/lib/collocationProgress";

const ONE_DAY = 24 * 60 * 60 * 1000;

/**
 * Nhắc bài kiểm tra collocation định kỳ 7 ngày.
 * - Hiện banner trong trang khi đến hạn.
 * - Nếu người dùng đã cho phép, bắn thêm thông báo trình duyệt (tối đa 1 lần/ngày).
 * Lưu ý: thông báo chỉ được kiểm tra khi người dùng mở website.
 */
export default function CollocationQuizReminder({ showUpcoming = false }: { showUpcoming?: boolean }) {
  const [due, setDue] = useState(false);
  const [nextAt, setNextAt] = useState<number | null>(null);
  const [learnedCount, setLearnedCount] = useState(0);
  const [dismissed, setDismissed] = useState(false);
  const [permission, setPermission] = useState<NotificationPermission | "unsupported">("default");

  useEffect(() => {
    const p = loadProgress();
    const isDue = isQuizDue(p);
    setDue(isDue);
    setNextAt(nextQuizAt(p));
    setLearnedCount(Object.keys(p.learned).length);

    if (!("Notification" in window)) {
      setPermission("unsupported");
      return;
    }
    setPermission(Notification.permission);

    if (isDue && Notification.permission === "granted") {
      const now = Date.now();
      if (!p.lastNotifiedAt || now - p.lastNotifiedAt > ONE_DAY) {
        new Notification("AI4IELTS+ • Đến hạn kiểm tra Collocation", {
          body: `Đã 7 ngày rồi! Làm bài kiểm tra để ôn lại ${Object.keys(p.learned).length} cụm bạn đã học.`,
        });
        saveProgress({ ...p, lastNotifiedAt: now });
      }
    }
  }, []);

  const requestPermission = async () => {
    if (!("Notification" in window)) return;
    const result = await Notification.requestPermission();
    setPermission(result);
  };

  if (dismissed) return null;

  if (due) {
    return (
      <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 border border-amber-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-400 text-white flex items-center justify-center shrink-0">
            <BellRing className="w-5 h-5" />
          </div>
          <div>
            <div className="font-black text-slate-900">Đến hạn bài kiểm tra Collocation hàng tuần!</div>
            <div className="text-sm text-slate-600">
              Đã 7 ngày kể từ lần kiểm tra trước. Ôn lại {learnedCount} cụm bạn đã học để nhớ lâu hơn.
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/games/collocations/quiz"
            className="px-4 py-2 rounded-xl bg-[#e11b22] text-white text-sm font-bold hover:bg-[#b91c1c] transition"
          >
            Làm bài ngay
          </Link>
          <button
            onClick={() => setDismissed(true)}
            className="w-9 h-9 rounded-xl border border-amber-300 text-amber-700 flex items-center justify-center hover:bg-amber-100"
            title="Để sau"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  if (!showUpcoming || !nextAt) return null;

  return (
    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm">
      <div className="flex items-center gap-2 text-slate-600">
        <CalendarClock className="w-4 h-4 text-slate-400" />
        Bài kiểm tra tuần tới: <b className="text-slate-900">{new Date(nextAt).toLocaleDateString("vi-VN")}</b>
      </div>
      {permission === "default" && (
        <button
          onClick={requestPermission}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 font-bold text-xs hover:border-[#e11b22] hover:text-[#e11b22] transition"
        >
          <BellRing className="w-3.5 h-3.5" /> Bật thông báo trình duyệt
        </button>
      )}
      {permission === "granted" && (
        <span className="text-xs font-bold text-emerald-700">✓ Đã bật thông báo</span>
      )}
    </div>
  );
}
