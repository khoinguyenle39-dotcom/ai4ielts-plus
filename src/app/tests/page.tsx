"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BookOpen, Play, Search, Headphones, FileText, Sparkles } from "lucide-react";
import SyncStatusHub from "@/components/SyncStatusHub";
import {
  ALL_SERIES_CATALOG,
  CambridgeBookSeries,
  BookSeriesCategory,
} from "@/data/cambridgeCatalog";

type FilterTab = "ALL" | BookSeriesCategory;

const CATEGORY_SECTIONS: {
  key: BookSeriesCategory;
  title: string;
  subtitle: string;
}[] = [
  {
    key: "REAL_FORECAST",
    title: "Đề Thi Thật & Dự Đoán Mới Nhất (Real Test & Forecast 2026 - Q1 & Q2)",
    subtitle: "4 Bộ đề • 40 Bài thi Reading & Listening chuẩn IDP & BC",
  },
  {
    key: "CAMBRIDGE",
    title: "Trọn Bộ IELTS CAM Inspired (Cambridge 09 Đến Cambridge 21)",
    subtitle: "13 Cuốn sách • 104 Bài thi (52 Reading + 52 Listening)",
  },
  {
    key: "ACTUAL_TEST",
    title: "Trọn Bộ IELTS Recent Actual Test (Vol 1 Đến Vol 6)",
    subtitle: "6 Cuốn sách • 66 Bài thi tổng hợp đề thi thật các năm",
  },
  {
    key: "PLUS",
    title: "Trọn Bộ IELTS Practice Test Plus (Plus 1, Plus 2, Plus 3)",
    subtitle: "3 Cuốn sách • 35 Bài thi nâng cao kèm giải thích Linearthinking",
  },
  {
    key: "OFFICIAL_TRAINER",
    title: "The Official Cambridge Guide to IELTS & IELTS Trainer",
    subtitle: "2 Bộ sách chính thống từ Cambridge • 26 Bài thi",
  },
];

function BookCard({ series }: { series: CambridgeBookSeries }) {
  const rTests = series.readingTests || [];
  const lTests = series.listeningTests || [];
  const totalTests = rTests.length + lTests.length;

  return (
    <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-[#e11b22] transition flex flex-col justify-between">
      <div className="space-y-2.5">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-black px-2.5 py-1 rounded-full bg-red-50 text-[#e11b22] border border-red-200">
            {series.badge}
          </span>
          <span className="text-xs font-bold text-slate-500">
            {totalTests} bài tests
          </span>
        </div>

        <h3 className="text-lg font-black text-slate-900 leading-snug">
          {series.title}
        </h3>

        <p className="text-xs text-slate-600 leading-relaxed font-medium line-clamp-2">
          {series.description}
        </p>

        <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 pt-1">
          <span>{series.plays} lượt làm bài</span>
          <span className="text-slate-600">
            {rTests.length} Reading • {lTests.length} Listening
          </span>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 space-y-2.5">
        {/* Quick Links for Reading & Listening */}
        <div className="space-y-1.5">
          {rTests.length > 0 && (
            <div className="flex items-center justify-between text-[11px]">
              <span className="font-bold text-slate-500 inline-flex items-center gap-1">
                <FileText className="w-3 h-3 text-[#e11b22]" /> Reading:
              </span>
              <div className="flex items-center gap-1 flex-wrap justify-end">
                {rTests.map((t) => (
                  <Link
                    key={t.id}
                    href={`/tests/${t.id}`}
                    className="px-1.5 py-0.5 rounded bg-slate-100 hover:bg-red-50 hover:text-[#e11b22] text-slate-700 font-black transition"
                    title={`Làm ${t.title}`}
                  >
                    R{t.testNumber}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {lTests.length > 0 && (
            <div className="flex items-center justify-between text-[11px]">
              <span className="font-bold text-slate-500 inline-flex items-center gap-1">
                <Headphones className="w-3 h-3 text-[#e11b22]" /> Listening:
              </span>
              <div className="flex items-center gap-1 flex-wrap justify-end">
                {lTests.map((t) => (
                  <Link
                    key={t.id}
                    href={`/tests/${t.id}`}
                    className="px-1.5 py-0.5 rounded bg-slate-100 hover:bg-red-50 hover:text-[#e11b22] text-slate-700 font-black transition"
                    title={`Làm ${t.title} (Có Audio & Transcript)`}
                  >
                    L{t.testNumber}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        <Link
          href={`/tests/series/${series.seriesId}`}
          className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#e11b22] text-white font-black text-xs hover:bg-[#b91c1c] transition shadow-sm active:scale-95"
        >
          <Play className="w-3.5 h-3.5 fill-white" />
          Xem trọn bộ {totalTests} đề thi ({rTests.length}R & {lTests.length}L)
        </Link>
      </div>
    </div>
  );
}

export default function TestsPage() {
  const [activeTab, setActiveTab] = useState<FilterTab>("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const totalBooks = ALL_SERIES_CATALOG.length;
  const totalTestsCount = ALL_SERIES_CATALOG.reduce(
    (sum, s) => sum + s.readingTests.length + s.listeningTests.length,
    0
  );

  const matchesSearch = (series: CambridgeBookSeries) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      series.title.toLowerCase().includes(q) ||
      series.description.toLowerCase().includes(q) ||
      series.seriesId.toLowerCase().includes(q) ||
      series.readingTests.some((r) =>
        r.previewItems.some((p) => p.toLowerCase().includes(q))
      ) ||
      series.listeningTests.some((l) =>
        l.previewItems.some((p) => p.toLowerCase().includes(q))
      )
    );
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Top Banner (Pure Red Background with 100% Crisp White Text) */}
      <div className="rounded-3xl bg-[#e11b22] text-white p-6 sm:p-10 shadow-xl border border-red-600 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#e11b22] text-xs font-black uppercase tracking-wider shadow-sm">
          <BookOpen className="w-4 h-4 text-[#e11b22]" />
          Kho Đề Thi IELTS Online Đầy Đủ Nhất ({totalBooks} Bộ Sách • {totalTestsCount} Đề Thi)
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          Luyện Thi IELTS Online Test (Trọn Bộ 28 Đầu Sách Chuẩn Quốc Tế)
        </h1>

        <p className="text-white text-sm sm:text-base leading-relaxed font-semibold max-w-3xl opacity-95">
          Tích hợp toàn bộ <b>{totalTestsCount} bài thi Reading & Listening</b> từ <b>Cambridge 09–21</b>, <b>Real Test & Forecast 2026 (Q1 & Q2)</b>, <b>Recent Actual Test Vol 1–6</b>, <b>Practice Test Plus 1–3</b>, <b>Official Guide</b> và <b>IELTS Trainer</b>. Đầy đủ Audio chuẩn, Transcript phân vai và giải thích 4 bước <b>Linearthinking</b>.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-black">
          <span className="bg-black/25 px-3.5 py-1.5 rounded-full border border-white/20">
            Tổng cộng: {totalTestsCount} Bài Tests Chuẩn 40 Câu
          </span>
          <span className="bg-black/25 px-3.5 py-1.5 rounded-full border border-white/20">
            {totalBooks} Bộ Series Độc Quyền (Reading & Listening)
          </span>
          <span className="bg-black/25 px-3.5 py-1.5 rounded-full border border-white/20">
            Audio VCDN Cloud + Transcript + Linearthinking
          </span>
        </div>
      </div>

      {/* 24/7 Live Sync & Auto-Update Engine Hub */}
      <SyncStatusHub />

      {/* Filter Bar & Live Search */}
      <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-black">
          {[
            { key: "ALL", label: `Tất cả (${totalBooks} Bộ • ${totalTestsCount} Đề)` },
            { key: "REAL_FORECAST", label: "Real & Forecast 2026 (4 Bộ)" },
            { key: "CAMBRIDGE", label: "Cambridge 09–21 (13 Bộ)" },
            { key: "ACTUAL_TEST", label: "Recent Actual Vol 1–6 (6 Bộ)" },
            { key: "PLUS", label: "Practice Plus 1–3 (3 Bộ)" },
            { key: "OFFICIAL_TRAINER", label: "Official Guide & Trainer (2 Bộ)" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as FilterTab)}
              className={`px-3.5 py-2 rounded-xl transition ${
                activeTab === tab.key
                  ? "bg-[#e11b22] text-white shadow-sm"
                  : "bg-slate-50 border border-slate-200 text-slate-700 hover:border-red-300 hover:text-[#e11b22]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="relative w-full lg:w-72">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm bộ đề hoặc tên Passage..."
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#e11b22]"
          />
        </div>
      </div>

      {/* Category Sections */}
      {CATEGORY_SECTIONS.filter(
        (sec) => activeTab === "ALL" || activeTab === sec.key
      ).map((sec) => {
        const books = ALL_SERIES_CATALOG.filter(
          (b) => b.category === sec.key && matchesSearch(b)
        );
        if (books.length === 0) return null;

        return (
          <div key={sec.key} className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-slate-200 pb-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#e11b22]" />
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  {sec.title}
                </h2>
              </div>
              <span className="text-xs font-bold text-[#e11b22] bg-red-50 px-3 py-1 rounded-full border border-red-200 self-start sm:self-auto">
                {sec.subtitle}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {books.map((book) => (
                <BookCard key={book.seriesId} series={book} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
