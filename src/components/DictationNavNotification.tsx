"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Headphones, ArrowRight, X, BookmarkCheck } from "lucide-react";
import {
  DICTATION_PROGRESS_EVENT,
  getIncompleteDictationLessons,
  loadDictationStore,
  syncDictationFromSupabase,
} from "@/lib/dictationProgress";

export function DictationDesktopNavLink() {
  const [reminderInfo, setReminderInfo] = useState<
    ReturnType<typeof getIncompleteDictationLessons> | null
  >(null);

  useEffect(() => {
    let mounted = true;
    syncDictationFromSupabase().then((store) => {
      if (!mounted) return;
      setReminderInfo(getIncompleteDictationLessons(store));
    });

    const handleUpdate = () => {
      setReminderInfo(getIncompleteDictationLessons(loadDictationStore()));
    };
    window.addEventListener(DICTATION_PROGRESS_EVENT, handleUpdate);
    return () => {
      mounted = false;
      window.removeEventListener(DICTATION_PROGRESS_EVENT, handleUpdate);
    };
  }, []);

  const primary = reminderInfo?.primaryReminder;
  const incompleteCount = reminderInfo?.incompleteLessons.length || 0;

  return (
    <div className="relative group">
      <Link
        href="/dictation"
        className="relative flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-slate-700 hover:text-[#e11b22] hover:bg-red-50 transition"
      >
        <div className="relative">
          <Headphones className="w-4 h-4 text-[#e11b22]" />
          {/* Chấm đỏ thông báo nổi bật ở mục Nghe Chép Chính Tả */}
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e11b22] opacity-80" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#e11b22] border border-white" />
          </span>
        </div>
        <span>Chép chính tả</span>
        {incompleteCount > 0 ? (
          <span className="ml-0.5 px-1.5 py-0.2 rounded-full bg-[#e11b22] text-white text-[10px] font-black leading-tight">
            {incompleteCount}
          </span>
        ) : (
          <span
            className="w-2 h-2 rounded-full bg-[#e11b22] inline-block"
            title="Còn bài nghe chưa hoàn thành"
          />
        )}
      </Link>

      {/* Popover khi di chuột vào mục Chép chính tả trên thanh Menu */}
      {primary && (
        <div className="hidden group-hover:block absolute left-0 top-full pt-2 z-50 w-80">
          <div className="p-4 rounded-2xl bg-white border-2 border-red-200 shadow-xl space-y-2.5">
            <div className="flex items-center gap-2 text-xs font-black text-[#e11b22]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e11b22] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#e11b22]" />
              </span>
              <span>
                {primary.isStarted
                  ? "NHẮC NHỞ: BÀI NGHE CHƯA XONG!"
                  : "NHẮC NHỞ BÀI NGHE CHỦ ĐỀ HÔM NAY"}
              </span>
            </div>

            <div className="text-xs font-bold text-slate-800 leading-snug">
              {primary.section}: <span className="font-black">{primary.title}</span>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between text-[11px] font-bold text-slate-500">
                <span>Tiến độ đã lưu:</span>
                <span className="text-[#e11b22] font-black">
                  {primary.completedCount}/{primary.totalCount} câu
                </span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                <div
                  className="h-full bg-[#e11b22]"
                  style={{
                    width: `${
                      primary.totalCount > 0
                        ? Math.round((primary.completedCount / primary.totalCount) * 100)
                        : 0
                    }%`,
                  }}
                />
              </div>
            </div>

            <Link
              href={`/dictation/${primary.lessonId}`}
              className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#e11b22] hover:bg-[#b91c1c] text-white text-xs font-black transition shadow-xs"
            >
              <span>Làm tiếp từ Câu {primary.nextSentenceNumber}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export function DictationMobileNavLink() {
  const [incompleteCount, setIncompleteCount] = useState<number>(0);

  useEffect(() => {
    const update = () => {
      const info = getIncompleteDictationLessons(loadDictationStore());
      setIncompleteCount(info.incompleteLessons.length);
    };
    update();
    window.addEventListener(DICTATION_PROGRESS_EVENT, update);
    return () => window.removeEventListener(DICTATION_PROGRESS_EVENT, update);
  }, []);

  return (
    <Link
      href="/dictation"
      className="relative flex flex-col items-center py-1 px-3 text-slate-600 hover:text-[#e11b22]"
    >
      <div className="relative">
        <Headphones className="w-5 h-5 text-[#e11b22]" />
        <span className="absolute -top-1 -right-1.5 flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e11b22] opacity-80" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#e11b22] border border-white" />
        </span>
      </div>
      <span className="text-[11px] font-semibold mt-0.5 flex items-center gap-1">
        Chép bài
        {incompleteCount > 0 && (
          <span className="px-1 rounded-full bg-[#e11b22] text-white text-[9px] font-black">
            {incompleteCount}
          </span>
        )}
      </span>
    </Link>
  );
}

/**
 * Thông báo chấm đỏ nhắc nhở khi người dùng vừa vào web mà chưa hoàn thành xong bài nghe của chủ đề
 */
export function DictationUnfinishedToast() {
  const pathname = usePathname();
  const [dismissed, setDismissed] = useState(false);
  const [reminderInfo, setReminderInfo] = useState<
    ReturnType<typeof getIncompleteDictationLessons> | null
  >(null);

  useEffect(() => {
    const update = () => {
      setReminderInfo(getIncompleteDictationLessons(loadDictationStore()));
    };
    update();
    window.addEventListener(DICTATION_PROGRESS_EVENT, update);
    return () => window.removeEventListener(DICTATION_PROGRESS_EVENT, update);
  }, []);

  // Ẩn nếu đang ở ngay trong phòng làm bài của chính bài đó hoặc đã tắt
  if (dismissed || !reminderInfo) return null;
  const primary = reminderInfo.primaryReminder;
  if (pathname?.startsWith(`/dictation/${primary.lessonId}`)) return null;

  return (
    <div className="mb-5 p-4 rounded-2xl bg-white border-2 border-red-200 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 animate-in fade-in slide-in-from-top-2 duration-200">
      <div className="flex items-start sm:items-center gap-3">
        <div className="relative w-10 h-10 rounded-xl bg-red-50 text-[#e11b22] flex items-center justify-center shrink-0">
          <Headphones className="w-5 h-5" />
          {/* Chấm đỏ nhấp nháy */}
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e11b22] opacity-80" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#e11b22] border-2 border-white" />
          </span>
        </div>

        <div className="space-y-0.5">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1 text-[11px] font-black uppercase tracking-wider text-[#e11b22]">
              <span className="w-2 h-2 rounded-full bg-[#e11b22] animate-pulse" />
              {primary.isStarted
                ? "Nhắc nhở: Bạn còn bài Nghe Chép Chính Tả đang làm dở!"
                : "Nhắc nhở: Bạn chưa hoàn thành bài Nghe Chép Chính Tả của chủ đề!"}
            </span>
            {reminderInfo.incompleteLessons.length > 1 && (
              <span className="px-2 py-0.5 rounded-full bg-red-50 text-[#e11b22] text-[10px] font-black border border-red-200">
                +{reminderInfo.incompleteLessons.length - 1} bài đã lưu khác
              </span>
            )}
          </div>

          <p className="text-xs sm:text-sm text-slate-700 font-semibold">
            Chủ đề <b>{primary.section}</b>:{" "}
            <strong className="text-slate-900">{primary.title}</strong> — Đã lưu{" "}
            <b className="text-[#e11b22]">
              {primary.completedCount}/{primary.totalCount} câu
            </b>
            .
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
        <Link
          href={`/dictation/${primary.lessonId}`}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#e11b22] hover:bg-[#b91c1c] text-white text-xs font-black transition shadow-sm"
        >
          <BookmarkCheck className="w-3.5 h-3.5" />
          <span>Làm tiếp Câu {primary.nextSentenceNumber}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>

        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
          title="Ẩn nhắc nhở"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
