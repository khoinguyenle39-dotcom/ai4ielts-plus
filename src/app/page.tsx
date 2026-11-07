"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  BookOpen, 
  Headphones, 
  Map, 
  Gamepad2, 
  ArrowRight, 
  CheckCircle2, 
  Flame, 
  TrendingUp,
  Clock,
  Play,
  Layers,
  Calendar,
  Sun,
  Sunset,
  Moon,
  SlidersHorizontal,
  Mic
} from "lucide-react";
import ThreeIeltsLogo from "@/components/ThreeIeltsLogo";

type BandLevel = "4.0-5.0" | "5.5-6.5" | "7.0-8.0+";

const TODAY_TIMETABLE: Record<BandLevel, { period: string; time: string; title: string; link: string; type: string }[]> = {
  "4.0-5.0": [
    { period: "Buổi Sáng (07:30)", time: "30 phút", title: "Chép chính tả: Family Excursions (10 câu đầu)", link: "/dictation/family-excursions", type: "Chép bài" },
    { period: "Buổi Chiều (14:00)", time: "20 phút", title: "Mini-game: Ghép Collocation cơ bản (10 cụm)", link: "/games/collocations", type: "Game từ vựng" },
    { period: "Buổi Tối (20:00)", time: "45 phút", title: "Reading: Bóc tách câu hỏi True/False/Not Given Cam 20", link: "/tests/cam-20-reading-1", type: "Đọc hiểu" }
  ],
  "5.5-6.5": [
    { period: "Buổi Sáng (07:00)", time: "45 phút", title: "Chép chính tả: Talk to Kitchen Assistants (Section 2)", link: "/dictation/kitchen-assistants", type: "Chép bài" },
    { period: "Buổi Chiều (13:30)", time: "30 phút", title: "Thử thách tốc độ: Collocation Match vượt mốc 150 điểm", link: "/games/collocations", type: "Game từ vựng" },
    { period: "Buổi Tối (20:00)", time: "60 phút", title: "Reading Linear: Đọc hiểu Passage 1 Cam 20 theo 4 bước", link: "/tests/cam-20-reading-1", type: "Luyện đề" }
  ],
  "7.0-8.0+": [
    { period: "Buổi Sáng (06:30)", time: "60 phút", title: "Chép chính tả: Nanotechnology 2 (Section 4 độ khó cao)", link: "/dictation/nanotechnology", type: "Chép bài khó" },
    { period: "Buổi Chiều (13:00)", time: "30 phút", title: "Collocation Master: 8 Cụm từ chuyên sâu Band 8.0+", link: "/games/collocations", type: "Game từ vựng" },
    { period: "Buổi Tối (20:00)", time: "75 phút", title: "THI THẬT BẤM GIỜ: Cam 20 Reading Test 1 (60 Phút)", link: "/tests/cam-20-reading-1", type: "Thi thật 60p" }
  ]
};

const FEATURED_CAM_TESTS = [
  { id: "cam-21", title: "IELTS CAM Inspired 21", badge: "Mới nhất 2026", tests: 8, plays: "154K", link: "/tests/cam-20-reading-1" },
  { id: "cam-20", title: "IELTS CAM Inspired 20", badge: "Hot nhất", tests: 8, plays: "421K", link: "/tests/cam-20-reading-1" },
  { id: "cam-19", title: "IELTS CAM Inspired 19", badge: "Chuẩn Cambridge", tests: 8, plays: "217K", link: "/tests/cam-20-reading-1" },
  { id: "rt-2026", title: "IELTS Real Test 2026 Q2", badge: "Đề thi thật", tests: 10, plays: "14K", link: "/tests/cam-20-reading-1" }
];

export default function HomePage() {
  const [selectedBand, setSelectedBand] = useState<BandLevel>("5.5-6.5");

  useEffect(() => {
    const saved = localStorage.getItem("ielts_target_band") as BandLevel;
    if (saved && TODAY_TIMETABLE[saved]) {
      setSelectedBand(saved);
    }
  }, []);

  const handleBandChange = (b: BandLevel) => {
    setSelectedBand(b);
    localStorage.setItem("ielts_target_band", b);
  };

  const scheduleSlots = TODAY_TIMETABLE[selectedBand];

  return (
    <div className="space-y-8 pb-16">
      {/* Hero Banner: 100% Pure Red Background with Crisp Pure White Text */}
      <div className="rounded-3xl bg-[#e11b22] text-white p-6 sm:p-10 shadow-xl border border-red-600">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#e11b22] text-xs font-black uppercase tracking-wider shadow-sm">
              <Layers className="w-4 h-4 text-[#e11b22]" />
              AI4IELTS+ • Hệ Thống Tiếng Anh Tư Duy
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Tự Học IELTS 4 Kỹ Năng Online Cùng AI4IELTS+
            </h1>

            <p className="text-white text-sm sm:text-base leading-relaxed font-semibold max-w-xl opacity-95">
              Bộ đề <b>IELTS CAM Inspired 09–21</b> chuẩn quốc tế, kho <b>Chép Chính Tả</b> phân cấp Section 1–4, và phương pháp <b>Linearthinking</b> độc quyền giúp bóc tách câu logic, không dịch mẹo cơ học.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/shadowing"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white text-[#e11b22] font-black text-sm shadow-lg hover:bg-red-50 transition transform active:scale-95"
              >
                <Mic className="w-4 h-4 text-[#e11b22]" />
                Luyện Nói Shadowing Video
              </Link>
              <Link
                href="/tests"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-black/25 border-2 border-white text-white font-black text-sm hover:bg-black/40 transition"
              >
                <BookOpen className="w-4 h-4" />
                Kho Đề Cam 9 - 21
              </Link>
              <Link
                href="/dictation"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-black/25 border-2 border-white text-white font-black text-sm hover:bg-black/40 transition"
              >
                <Headphones className="w-4 h-4" />
                Chép Chính Tả
              </Link>
              <Link
                href="/roadmap"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-black/25 border-2 border-white text-white font-black text-sm hover:bg-black/40 transition"
              >
                <Calendar className="w-4 h-4" />
                Thời Khóa Biểu
              </Link>
            </div>
          </div>

          {/* Interactive 3D IELTS Logo Component Showcase */}
          <div className="flex flex-col items-center justify-center bg-black/25 rounded-2xl p-6 border border-white/20 shadow-inner">
            <span className="text-xs font-black text-white uppercase tracking-widest mb-1">
              3D IELTS Logo Tương Tác
            </span>
            <ThreeIeltsLogo size="lg" />
            <span className="text-[11px] text-white/90 font-medium mt-1">
              Di chuột hoặc click để xoay 360°
            </span>
          </div>
        </div>
      </div>

      {/* Target & Learning Metrics Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-3.5 hover:border-[#e11b22] transition">
          <div className="w-12 h-12 rounded-xl bg-red-50 text-[#e11b22] flex items-center justify-center font-bold">
            <Flame className="w-6 h-6 fill-[#e11b22]" />
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900">3 Ngày</div>
            <div className="text-xs text-slate-500 font-bold">Chuỗi học liên tục</div>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-3.5 hover:border-[#e11b22] transition">
          <div className="w-12 h-12 rounded-xl bg-red-50 text-[#e11b22] flex items-center justify-center font-bold">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900">Band 7.5</div>
            <div className="text-xs text-slate-500 font-bold">Mục tiêu đặt ra</div>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-3.5 hover:border-[#e11b22] transition">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900">142 Câu</div>
            <div className="text-xs text-slate-500 font-bold">Đã chép chính tả</div>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-3.5 hover:border-[#e11b22] transition">
          <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center font-bold">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900">45 Phút</div>
            <div className="text-xs text-slate-500 font-bold">Thời gian học hôm nay</div>
          </div>
        </div>
      </div>

      {/* TODAY'S TIMETABLE (Thời Khóa Biểu Hôm Nay với Bộ Chọn Band Điểm) */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-black text-[#e11b22] mb-1">
              <Calendar className="w-4 h-4" />
              Thời Khóa Biểu Hôm Nay
            </div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">
              Hôm Nay Cần Học Gì, Chép Gì & Luyện Đề Nào?
            </h2>
          </div>

          {/* Interactive Band Selector */}
          <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-2xl">
            {[
              { id: "4.0-5.0" as BandLevel, label: "Band 4.0 - 5.0" },
              { id: "5.5-6.5" as BandLevel, label: "Band 5.5 - 6.5" },
              { id: "7.0-8.0+" as BandLevel, label: "Band 7.0 - 8.0+" },
            ].map(b => (
              <button
                key={b.id}
                onClick={() => handleBandChange(b.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-black transition ${
                  selectedBand === b.id 
                    ? "bg-[#e11b22] text-white shadow-sm" 
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {b.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3 Time Slots for Today */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {scheduleSlots.map((slot, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl border transition flex flex-col justify-between ${
                idx === 0 
                  ? "bg-amber-50/50 border-amber-200 hover:border-[#e11b22]" 
                  : idx === 1 
                  ? "bg-orange-50/50 border-orange-200 hover:border-[#e11b22]" 
                  : "bg-red-50/40 border-red-200 hover:border-[#e11b22]"
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-slate-700 flex items-center gap-1">
                    {idx === 0 && <Sun className="w-4 h-4 text-amber-600" />}
                    {idx === 1 && <Sunset className="w-4 h-4 text-orange-600" />}
                    {idx === 2 && <Moon className="w-4 h-4 text-indigo-600" />}
                    {slot.period}
                  </span>
                  <span className="text-[11px] font-bold text-slate-500">{slot.time}</span>
                </div>

                <div className="text-xs font-black uppercase text-[#e11b22]">{slot.type}</div>
                <h3 className="text-sm font-black text-slate-900 leading-snug">{slot.title}</h3>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-end">
                <Link
                  href={slot.link}
                  className="inline-flex items-center gap-1 px-4 py-2 rounded-xl bg-[#e11b22] text-white font-black text-xs hover:bg-[#b91c1c] transition shadow-sm"
                >
                  Bắt đầu học
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between pt-2 text-xs font-bold text-slate-500">
          <span>Lộ trình tự động điều chỉnh theo Band mục tiêu của bạn.</span>
          <Link href="/roadmap" className="text-[#e11b22] hover:underline flex items-center gap-1">
            Xem toàn bộ thời khóa biểu cả tuần <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* FEATURED CAMBRIDGE TESTS SECTION (Hiện Đầy Đủ Các Bộ Đề) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b-2 border-slate-200 pb-2">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#e11b22]" />
            <h2 className="text-2xl font-black text-slate-900">
              Các Bộ Đề IELTS CAM Inspired & Đề Thi Thật Nổi Bật
            </h2>
          </div>
          <Link href="/tests" className="text-xs font-bold text-[#e11b22] hover:underline flex items-center gap-1">
            Xem tất cả Cam 09–21 <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURED_CAM_TESTS.map(t => (
            <div
              key={t.id}
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-[#e11b22] transition flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-black px-2.5 py-0.5 rounded-full bg-red-50 text-[#e11b22] border border-red-200">
                    {t.badge}
                  </span>
                  <span className="text-xs font-bold text-slate-400">{t.tests} bài tests</span>
                </div>

                <h3 className="text-base font-black text-slate-900 leading-snug mt-1">
                  {t.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  {t.plays} lượt học viên đã luyện đề
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-400">4 Reading • 4 Listening</span>
                <Link
                  href={t.link}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#e11b22] text-white font-black text-xs hover:bg-[#b91c1c] transition shadow-sm"
                >
                  <Play className="w-3 h-3 fill-white" />
                  Làm đề
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
