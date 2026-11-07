"use client";

import { use, useState } from "react";
import Link from "next/link";
import { 
  BookOpen, 
  Headphones, 
  Clock, 
  HelpCircle, 
  Play, 
  ChevronRight, 
  ArrowLeft, 
  Sparkles, 
  Award,
  Volume2
} from "lucide-react";
import { getSeriesById, CAMBRIDGE_SERIES_CATALOG } from "@/data/cambridgeCatalog";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function SeriesDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const series = getSeriesById(resolvedParams.id) || CAMBRIDGE_SERIES_CATALOG[0];
  const [activeTab, setActiveTab] = useState<"READING" | "LISTENING">("READING");

  const currentTests = activeTab === "READING" ? series.readingTests : series.listeningTests;

  return (
    <div className="space-y-8 pb-16">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs font-bold text-slate-500">
        <Link href="/tests" className="hover:text-[#e11b22] flex items-center gap-1 transition">
          <ArrowLeft className="w-3.5 h-3.5" />
          Kho Đề Thi
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-800 font-black">{series.title}</span>
      </nav>

      {/* Hero Banner (Pure Red Background with 100% Crisp White Text) */}
      <div className="rounded-3xl bg-[#e11b22] text-white p-6 sm:p-10 shadow-xl border border-red-600 space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#e11b22] text-xs font-black uppercase tracking-wider shadow-sm">
            <Award className="w-3.5 h-3.5" />
            {series.badge}
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black/25 text-white text-xs font-bold border border-white/20">
            {series.plays} lượt làm bài
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black/25 text-white text-xs font-bold border border-white/20">
            {series.readingTests.length + series.listeningTests.length} bài tests ({series.readingTests.length} Reading • {series.listeningTests.length} Listening)
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          {series.title}
        </h1>

        <p className="text-white text-sm sm:text-base leading-relaxed font-semibold max-w-3xl opacity-95">
          {series.description || `Trọn bộ đề thi chuẩn gồm ${series.readingTests.length} đề Reading và ${series.listeningTests.length} đề Listening. Trải nghiệm thi máy bấm giờ thi thật và giải thích chi tiết 4 bước độc quyền theo Linearthinking.`}
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-black">
          <span className="bg-black/25 px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" /> Reading: 60 phút • Listening: 30 phút
          </span>
          <span className="bg-black/25 px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Chấm điểm chuẩn thang điểm Band 9.0
          </span>
        </div>
      </div>

      {/* Skill Tabs Selector (Reading vs Listening) */}
      <div className="flex items-center gap-3 p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
        <button
          onClick={() => setActiveTab("READING")}
          className={`flex-1 py-3 px-4 rounded-xl text-sm font-black transition flex items-center justify-center gap-2 ${
            activeTab === "READING"
              ? "bg-[#e11b22] text-white shadow-sm"
              : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Đề Thi Reading ({series.readingTests.length} đề thi)</span>
        </button>

        <button
          onClick={() => setActiveTab("LISTENING")}
          className={`flex-1 py-3 px-4 rounded-xl text-sm font-black transition flex items-center justify-center gap-2 ${
            activeTab === "LISTENING"
              ? "bg-[#e11b22] text-white shadow-sm"
              : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
          }`}
        >
          <Headphones className="w-4 h-4" />
          <span>Đề Thi Listening ({series.listeningTests.length} đề thi)</span>
        </button>
      </div>

      {/* Tests Grid (All 4 Tests for Active Skill) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b-2 border-slate-200 pb-2">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#e11b22]" />
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              Danh Sách Đề Thi {activeTab === "READING" ? "Reading" : "Listening"} ({currentTests.length} Đề)
            </h2>
          </div>
          <span className="text-xs font-bold text-slate-500">
            {activeTab === "READING" ? "3 Passages • 40 câu • 60 phút" : "4 Parts • 40 câu • 30 phút"}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {currentTests.map((t) => (
            <div
              key={t.id}
              className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-[#e11b22] transition flex flex-col justify-between space-y-5"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black px-3 py-1 rounded-full bg-red-50 text-[#e11b22] border border-red-200">
                    Test {t.testNumber}
                  </span>
                  <div className="flex items-center gap-3 text-xs font-bold text-slate-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {t.durationMinutes} phút
                    </span>
                    <span className="flex items-center gap-1">
                      <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
                      {t.questionsCount} câu hỏi
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-black text-slate-900 leading-snug">
                  {t.title}
                </h3>

                {/* Passages or Parts List */}
                <div className="p-3.5 rounded-2xl bg-slate-50/70 border border-slate-100 space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">
                    {activeTab === "READING" ? "Các bài đọc (3 Passages):" : "Các phần nghe (4 Parts):"}
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                    {t.previewItems.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-4 h-4 rounded-full bg-white border border-slate-200 text-slate-600 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span className="line-clamp-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  <Sparkles className="w-3 h-3 text-emerald-600" />
                  Linearthinking 4 bước
                </div>

                <Link
                  href={`/tests/${t.id}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-[#e11b22] text-white font-black text-xs hover:bg-[#b91c1c] transition shadow-sm active:scale-95"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  Bắt đầu làm bài
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Switch between Cambridge Series */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
        <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider">
          Khám Phá Các Bộ Sách Cambridge Khác
        </h3>
        <div className="flex flex-wrap gap-2">
          {CAMBRIDGE_SERIES_CATALOG.map((s) => (
            <Link
              key={s.seriesId}
              href={`/tests/series/${s.seriesId}`}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition ${
                s.seriesId === series.seriesId
                  ? "bg-[#e11b22] text-white border-[#e11b22] shadow-sm"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100"
              }`}
            >
              {s.title.replace("IELTS CAM Inspired ", "Cam ")}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
