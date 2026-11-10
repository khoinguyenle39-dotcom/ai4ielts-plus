"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Play,
  CheckCircle2,
  Search,
  Volume2,
  Headphones,
  Sparkles,
  Bookmark,
  BookmarkCheck,
  ArrowRight,
  Clock,
} from "lucide-react";
import { ALL_DICTATION_LESSONS } from "@/data/dictationData";
import {
  DICTATION_PROGRESS_EVENT,
  DictationProgressStore,
  loadDictationStore,
  syncDictationFromSupabase,
  toggleBookmarkDictationLesson,
} from "@/lib/dictationProgress";

export default function DictationPage() {
  const [selectedSection, setSelectedSection] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [store, setStore] = useState<DictationProgressStore>({
    lessons: {},
    lastActiveLessonId: null,
  });

  useEffect(() => {
    setStore(loadDictationStore());
    syncDictationFromSupabase().then((remote) => setStore(remote));

    const handleUpdate = () => setStore(loadDictationStore());
    window.addEventListener(DICTATION_PROGRESS_EVENT, handleUpdate);
    return () => window.removeEventListener(DICTATION_PROGRESS_EVENT, handleUpdate);
  }, []);

  const isLessonStartedOrSaved = (lessonId: string) => {
    const p = store.lessons[lessonId];
    if (!p) return false;
    return (
      p.bookmarked ||
      p.completedIndices.length > 0 ||
      p.currentIndex > 0 ||
      Object.values(p.draftInputs || {}).some((v) => Boolean(v?.trim()))
    );
  };

  const isLessonCompleted = (lessonId: string, totalSentences: number) => {
    const p = store.lessons[lessonId];
    return Boolean(p && p.completedIndices.length >= totalSentences && totalSentences > 0);
  };

  const savedOrInProgressLessons = ALL_DICTATION_LESSONS.filter((l) =>
    isLessonStartedOrSaved(l.id)
  );

  const filteredLessons = ALL_DICTATION_LESSONS.filter((lesson) => {
    const matchesSection =
      selectedSection === "ALL"
        ? true
        : selectedSection === "SAVED"
        ? isLessonStartedOrSaved(lesson.id)
        : lesson.section === selectedSection;

    const matchesSearch =
      !searchQuery.trim() ||
      lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lesson.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lesson.dictationId.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesSection && matchesSearch;
  });

  const totalSentencesCount = ALL_DICTATION_LESSONS.reduce(
    (acc, l) => acc + l.totalSentences,
    0
  );

  const totalCompletedSentences = ALL_DICTATION_LESSONS.reduce((acc, l) => {
    const p = store.lessons[l.id];
    return acc + (p?.completedIndices.length || 0);
  }, 0);

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-[#e11b22] text-xs font-bold mb-2 border border-red-200">
            <Volume2 className="w-3.5 h-3.5" />
            Phương pháp Nghe Chép Chính Tả & Shadowing AI4IELTS+ • Tự động lưu từng câu
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Kho Bài Nghe Chép Chính Tả Phân Cấp ({ALL_DICTATION_LESSONS.length} Bài • {totalSentencesCount} Câu)
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Đã hoàn thành <b className="text-[#e11b22]">{totalCompletedSentences}/{totalSentencesCount} câu</b> trên toàn hệ thống. Mọi bài nghe và câu bạn đã gõ đều được tự động lưu lại để học tiếp bất cứ lúc nào.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm tên bài nghe..."
              className="pl-9 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#e11b22] w-full sm:w-64 font-medium"
            />
          </div>
        </div>
      </div>

      {/* Khung Bài Nghe Đã Lưu / Đang Làm Dở Chưa Xong */}
      {savedOrInProgressLessons.length > 0 && (
        <div className="p-5 sm:p-6 rounded-3xl bg-red-50/50 border-2 border-red-200 space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e11b22] opacity-80" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#e11b22]" />
              </span>
              <h2 className="text-base sm:text-lg font-black text-slate-900">
                Bài Nghe Đã Lưu & Đang Làm Dở ({savedOrInProgressLessons.length} bài)
              </h2>
            </div>
            <span className="text-xs font-bold text-slate-500">
              Bấm vào bài để mở lại đúng câu bạn đang làm dở
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {savedOrInProgressLessons.map((lesson) => {
              const p = store.lessons[lesson.id];
              const doneCount = p?.completedIndices.length || 0;
              const totalCount = lesson.sentences.length;
              const pct = totalCount > 0 ? Math.round((doneCount / totalCount) * 100) : 0;
              const finished = doneCount >= totalCount;
              const resumeSentence = (p?.currentIndex ?? 0) + 1;

              return (
                <div
                  key={`saved-${lesson.id}`}
                  className="p-4 rounded-2xl bg-white border border-red-200 shadow-xs flex flex-col justify-between gap-3"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-black px-2 py-0.5 rounded-full bg-red-50 text-[#e11b22] border border-red-200">
                        {lesson.section}
                      </span>
                      {!finished ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-black text-[#e11b22]">
                          <span className="w-2 h-2 rounded-full bg-[#e11b22] animate-pulse" />
                          Chưa xong ({doneCount}/{totalCount} câu)
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[11px] font-black text-emerald-600">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Đã hoàn thành
                        </span>
                      )}
                    </div>

                    <div className="font-black text-sm text-slate-900 truncate">
                      {lesson.title}
                    </div>

                    <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                      <div
                        className={`h-full ${finished ? "bg-emerald-500" : "bg-[#e11b22]"}`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[11px] font-bold text-slate-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      Đang ở Câu {resumeSentence}/{totalCount}
                    </span>
                    <Link
                      href={`/dictation/${lesson.id}`}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#e11b22] hover:bg-[#b91c1c] text-white text-xs font-black transition"
                    >
                      <span>Làm tiếp Câu {resumeSentence}</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Filter Tabs (Có chấm đỏ ở các chủ đề Section 1–4 còn bài chưa hoàn thành) */}
      <div className="flex flex-wrap items-center gap-2 text-sm font-bold">
        {[
          { key: "ALL", label: `Tất cả (${ALL_DICTATION_LESSONS.length} bài)`, hasRedDot: false },
          {
            key: "SAVED",
            label: `Đã lưu & Đang làm (${savedOrInProgressLessons.length})`,
            hasRedDot: savedOrInProgressLessons.some(
              (l) => !isLessonCompleted(l.id, l.sentences.length)
            ),
          },
          ...["Section 1", "Section 2", "Section 3", "Section 4"].map((sec) => {
            const lessonsInSec = ALL_DICTATION_LESSONS.filter((l) => l.section === sec);
            const hasUnfinishedInSec = lessonsInSec.some(
              (l) => !isLessonCompleted(l.id, l.sentences.length)
            );
            const secTitle =
              sec === "Section 1"
                ? "Section 1 - Đời thường"
                : sec === "Section 2"
                ? "Section 2 - Hướng dẫn"
                : sec === "Section 3"
                ? "Section 3 - Thảo luận"
                : "Section 4 - Học thuật";
            return {
              key: sec,
              label: `${secTitle} (${lessonsInSec.length})`,
              hasRedDot: hasUnfinishedInSec,
            };
          }),
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setSelectedSection(tab.key)}
            className={`relative px-4 py-2 rounded-xl transition flex items-center gap-1.5 cursor-pointer ${
              selectedSection === tab.key
                ? "bg-[#e11b22] text-white shadow-sm"
                : "bg-white border border-slate-200 text-slate-700 hover:border-red-300 hover:text-[#e11b22]"
            }`}
          >
            <span>{tab.label}</span>
            {tab.hasRedDot && (
              <span
                className={`w-2 h-2 rounded-full ${
                  selectedSection === tab.key ? "bg-amber-300" : "bg-[#e11b22]"
                } animate-pulse`}
                title="Chủ đề này còn bài nghe chưa hoàn thành"
              />
            )}
          </button>
        ))}
      </div>

      {/* Lesson List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredLessons.map((lesson, idx) => {
          const p = store.lessons[lesson.id];
          const doneCount = p?.completedIndices.length || 0;
          const totalCount = lesson.sentences.length;
          const pct = totalCount > 0 ? Math.round((doneCount / totalCount) * 100) : 0;
          const started = isLessonStartedOrSaved(lesson.id);
          const finished = isLessonCompleted(lesson.id, totalCount);
          const bookmarked = Boolean(p?.bookmarked);
          const resumeSentence = (p?.currentIndex ?? 0) + 1;

          return (
            <div
              key={lesson.id}
              className={`p-5 rounded-2xl bg-white border shadow-sm hover:shadow-md transition flex flex-col justify-between ${
                started && !finished
                  ? "border-red-300 ring-1 ring-red-100"
                  : finished
                  ? "border-emerald-300"
                  : "border-slate-200 hover:border-[#e11b22]"
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-xs font-black px-2.5 py-1 rounded-full bg-red-50 text-[#e11b22] border border-red-200">
                      {lesson.section}
                    </span>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                      {lesson.dictationId}
                    </span>
                    {!finished && (
                      <span
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-50 text-[#e11b22] text-[10px] font-black border border-red-200"
                        title="Bài nghe này chưa hoàn thành"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#e11b22] animate-ping" />
                        {started ? `Chưa xong (${doneCount}/${totalCount})` : "Chưa làm"}
                      </span>
                    )}
                    {finished && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-black border border-emerald-200">
                        <CheckCircle2 className="w-3 h-3" />
                        Đã xong 100%
                      </span>
                    )}
                  </div>

                  {/* Nút Lưu bài nghe */}
                  <button
                    type="button"
                    onClick={() => toggleBookmarkDictationLesson(lesson.id)}
                    title={bookmarked ? "Bỏ lưu bài nghe này" : "Lưu bài nghe để học tiếp"}
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-xl border text-xs font-black transition cursor-pointer ${
                      bookmarked
                        ? "bg-amber-50 border-amber-300 text-amber-800"
                        : "bg-slate-50 border-slate-200 text-slate-600 hover:border-[#e11b22] hover:text-[#e11b22]"
                    }`}
                  >
                    {bookmarked ? (
                      <>
                        <BookmarkCheck className="w-3.5 h-3.5 fill-amber-400 text-amber-600" />
                        Đã lưu
                      </>
                    ) : (
                      <>
                        <Bookmark className="w-3.5 h-3.5" />
                        Lưu bài
                      </>
                    )}
                  </button>
                </div>

                <h3 className="font-black text-slate-900 text-base leading-snug">
                  {lesson.title}
                </h3>

                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 font-medium">
                  {lesson.description}
                </p>

                {/* Thanh tiến độ số câu đã làm */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-slate-700">
                      Đã làm:{" "}
                      <b className={doneCount > 0 ? "text-[#e11b22]" : "text-slate-600"}>
                        {doneCount}/{totalCount} câu
                      </b>
                    </span>
                    <span className="text-slate-400">{pct}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className={`h-full transition-all duration-300 ${
                        finished ? "bg-emerald-500" : "bg-[#e11b22]"
                      }`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                {started && !finished ? (
                  <div className="flex items-center gap-1.5 text-xs text-[#e11b22] font-bold">
                    <span className="w-2 h-2 rounded-full bg-[#e11b22] animate-pulse" />
                    Đang dừng ở Câu {resumeSentence}
                  </div>
                ) : idx === 0 && !finished ? (
                  <div className="flex items-center gap-1.5 text-xs text-[#e11b22] font-bold">
                    <Sparkles className="w-4 h-4 text-[#e11b22]" />
                    Đề xuất bắt đầu
                  </div>
                ) : (
                  <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                    <Headphones className="w-3.5 h-3.5" /> {lesson.level} • {lesson.noOfWords} từ
                  </span>
                )}

                <Link
                  href={`/dictation/${lesson.id}`}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl font-black text-xs transition shadow-sm active:scale-95 ${
                    finished
                      ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                      : "bg-[#e11b22] hover:bg-[#b91c1c] text-white"
                  }`}
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  {started && !finished
                    ? `Làm tiếp Câu ${resumeSentence}`
                    : finished
                    ? "Ôn lại bài"
                    : "Luyện chép ngay"}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
