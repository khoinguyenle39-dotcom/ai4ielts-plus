"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Play, CheckCircle2, Search, Volume2, Headphones, Sparkles } from "lucide-react";
import { ALL_DICTATION_LESSONS } from "@/data/dictationData";

export default function DictationPage() {
  const [selectedSection, setSelectedSection] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredLessons = ALL_DICTATION_LESSONS.filter((lesson) => {
    const matchesSection =
      selectedSection === "ALL" || lesson.section === selectedSection;
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

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-[#e11b22] text-xs font-bold mb-2 border border-red-200">
            <Volume2 className="w-3.5 h-3.5" />
            Phương pháp Nghe Chép Chính Tả & Shadowing AI4IELTS+
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Kho Bài Nghe Chép Chính Tả Phân Cấp ({ALL_DICTATION_LESSONS.length} Bài • {totalSentencesCount} Câu)
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Luyện tai bắt âm chuẩn Cambridge (Section 1–4): Nghe từng câu cắt sẵn theo timestamp, gõ chính tả, check lỗi từng từ kèm dịch nghĩa tiếng Việt.
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

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 text-sm font-bold">
        {[
          { key: "ALL", label: `Tất cả (${ALL_DICTATION_LESSONS.length} bài)` },
          {
            key: "Section 1",
            label: `Section 1 - Đời thường (${ALL_DICTATION_LESSONS.filter((l) => l.section === "Section 1").length})`,
          },
          {
            key: "Section 2",
            label: `Section 2 - Hướng dẫn (${ALL_DICTATION_LESSONS.filter((l) => l.section === "Section 2").length})`,
          },
          {
            key: "Section 3",
            label: `Section 3 - Thảo luận (${ALL_DICTATION_LESSONS.filter((l) => l.section === "Section 3").length})`,
          },
          {
            key: "Section 4",
            label: `Section 4 - Học thuật (${ALL_DICTATION_LESSONS.filter((l) => l.section === "Section 4").length})`,
          },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setSelectedSection(tab.key)}
            className={`px-4 py-2 rounded-xl transition ${
              selectedSection === tab.key
                ? "bg-[#e11b22] text-white shadow-sm"
                : "bg-white border border-slate-200 text-slate-700 hover:border-red-300 hover:text-[#e11b22]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Lesson List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredLessons.map((lesson, idx) => (
          <div
            key={lesson.id}
            className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-[#e11b22] transition flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-black px-2.5 py-1 rounded-full bg-red-50 text-[#e11b22] border border-red-200">
                    {lesson.section}
                  </span>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                    {lesson.dictationId}
                  </span>
                </div>
                <span
                  className={`text-xs font-bold px-2.5 py-0.5 rounded ${
                    lesson.level === "Easy"
                      ? "bg-emerald-100 text-emerald-800"
                      : lesson.level === "Medium"
                      ? "bg-amber-100 text-amber-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {lesson.level}
                </span>
              </div>

              <h3 className="font-black text-slate-900 text-base leading-snug">
                {lesson.title}
              </h3>

              <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 font-medium">
                {lesson.description}
              </p>

              <div className="flex items-center gap-3 text-xs text-slate-500 font-bold pt-1">
                <span className="text-slate-700">{lesson.totalSentences} câu ngắn</span>
                <span>•</span>
                <span>{lesson.noOfWords} từ</span>
                <span>•</span>
                <span>{lesson.plays}</span>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
              {idx === 0 ? (
                <div className="flex items-center gap-1.5 text-xs text-[#e11b22] font-bold">
                  <Sparkles className="w-4 h-4 text-[#e11b22]" />
                  Đề xuất bắt đầu
                </div>
              ) : (
                <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                  <Headphones className="w-3.5 h-3.5" /> Audio chuẩn Cambridge
                </span>
              )}

              <Link
                href={`/dictation/${lesson.id}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#e11b22] text-white font-black text-xs hover:bg-[#b91c1c] transition shadow-sm active:scale-95"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                Luyện chép ngay
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
