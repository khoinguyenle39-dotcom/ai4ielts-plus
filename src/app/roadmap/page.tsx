"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Circle, 
  ArrowRight, 
  Sparkles, 
  Flame, 
  Target, 
  BookOpen, 
  Headphones, 
  Gamepad2, 
  Sun, 
  Sunset, 
  Moon,
  ChevronRight,
  SlidersHorizontal
} from "lucide-react";

type BandLevel = "4.0-5.0" | "5.5-6.5" | "7.0-8.0+";

interface TimeSlot {
  period: "morning" | "afternoon" | "evening";
  time: string;
  icon: "sun" | "sunset" | "moon";
  title: string;
  category: "dictation" | "collocation" | "reading" | "mocktest";
  actionText: string;
  link: string;
  duration: string;
  description: string;
}

interface DaySchedule {
  dayName: string;
  dateStr: string;
  focus: string;
  slots: TimeSlot[];
}

const SCHEDULE_BY_BAND: Record<BandLevel, DaySchedule[]> = {
  "4.0-5.0": [
    {
      dayName: "Hôm nay (Thứ Hai)",
      dateStr: "Trọng tâm: Nền tảng phát âm & Bóc tách câu đơn",
      focus: "Luyện tai bắt từ Section 1 & Nắm cấu trúc S-V-O",
      slots: [
        {
          period: "morning",
          time: "07:30 - 08:00 (30 phút)",
          icon: "sun",
          title: "Chép chính tả: Family Excursions (Section 1)",
          category: "dictation",
          actionText: "Vào chép bài",
          link: "/dictation/family-excursions",
          duration: "30p",
          description: "Nghe chép 10 câu đầu để nhận diện chuẩn số điện thoại, tên riêng và thời gian."
        },
        {
          period: "afternoon",
          time: "14:00 - 14:20 (20 phút)",
          icon: "sunset",
          title: "Mini-game: Ghép Collocation cơ bản",
          category: "collocation",
          actionText: "Chơi game",
          link: "/games/collocations",
          duration: "20p",
          description: "Nối 10 cặp từ vựng quen thuộc: conduct research, acquire knowledge..."
        },
        {
          period: "evening",
          time: "20:00 - 20:45 (45 phút)",
          icon: "moon",
          title: "Reading Linear: Phân tích Passage 1 Cam 20",
          category: "reading",
          actionText: "Luyện đọc",
          link: "/tests/cam-20-reading-1",
          duration: "45p",
          description: "Bóc tách câu hỏi True/False/Not Given theo Step 1 (Simplify) và Step 2 (Locate)."
        }
      ]
    },
    {
      dayName: "Ngày mai (Thứ Ba)",
      dateStr: "Trọng tâm: Shadowing nhại giọng & Cụm danh từ",
      focus: "Luyện cơ miệng phát âm & Tránh bẫy False",
      slots: [
        {
          period: "morning",
          time: "07:30 - 08:00 (30 phút)",
          icon: "sun",
          title: "Luyện Shadowing: Family Excursions (Câu 11 - 20)",
          category: "dictation",
          actionText: "Luyện phát âm",
          link: "/dictation/family-excursions",
          duration: "30p",
          description: "Nghe từng câu và nhại lại đúng ngữ điệu lên xuống và ngắt nghỉ."
        },
        {
          period: "afternoon",
          time: "14:00 - 14:20 (20 phút)",
          icon: "sunset",
          title: "Ôn tập 10 Collocations chủ đề Hằng ngày",
          category: "collocation",
          actionText: "Chơi game",
          link: "/games/collocations",
          duration: "20p",
          description: "Ghi nhớ ví dụ thực tế trong câu của từng cụm từ."
        },
        {
          period: "evening",
          time: "20:00 - 20:45 (45 phút)",
          icon: "moon",
          title: "Reading: Bóc tách Step 3 & Step 4 câu 2 và 3",
          category: "reading",
          actionText: "Đọc phân tích",
          link: "/tests/cam-20-reading-1",
          duration: "45p",
          description: "So sánh nghĩa câu với nghĩa câu, nhận diện từ phủ định trái ngược."
        }
      ]
    }
  ],
  "5.5-6.5": [
    {
      dayName: "Hôm nay (Thứ Hai)",
      dateStr: "Trọng tâm: Độc thoại hướng dẫn Section 2 & Đọc hiểu kết nối câu",
      focus: "Nhận diện Paraphrasing bẫy & Tăng tốc độ đọc",
      slots: [
        {
          period: "morning",
          time: "07:00 - 07:45 (45 phút)",
          icon: "sun",
          title: "Chép chính tả: Talk to Kitchen Assistants (Section 2)",
          category: "dictation",
          actionText: "Chép bài",
          link: "/dictation/kitchen-assistants",
          duration: "45p",
          description: "Luyện nghe độc thoại tốc độ tự nhiên, bắt các từ vựng chỉ quy tắc an toàn."
        },
        {
          period: "afternoon",
          time: "13:30 - 14:00 (30 phút)",
          icon: "sunset",
          title: "Thử thách tốc độ: Collocation Match 150 điểm",
          category: "collocation",
          actionText: "Thử thách",
          link: "/games/collocations",
          duration: "30p",
          description: "Rèn phản xạ tự động với các cụm: implement strict policies, bridge the gap..."
        },
        {
          period: "evening",
          time: "20:00 - 21:00 (60 phút)",
          icon: "moon",
          title: "Luyện thi: Cam 20 Reading Test 1 (Chế độ Luyện tập)",
          category: "reading",
          actionText: "Làm bài",
          link: "/tests/cam-20-reading-1",
          duration: "60p",
          description: "Đọc toàn bộ Passage 1 & 2, đối chiếu bảng Paraphrasing 2 cột của AI4IELTS+."
        }
      ]
    },
    {
      dayName: "Ngày mai (Thứ Ba)",
      dateStr: "Trọng tâm: Thảo luận học thuật Section 3 & Luyện Shadowing",
      focus: "Phân biệt quan điểm của nhiều người nói trong bài nghe",
      slots: [
        {
          period: "morning",
          time: "07:00 - 07:45 (45 phút)",
          icon: "sun",
          title: "Chép chính tả: Paper on Public Libraries (Section 3)",
          category: "dictation",
          actionText: "Chép bài",
          link: "/dictation/public-libraries",
          duration: "45p",
          description: "Bắt kịp nhịp đối thoại giữa sinh viên và giảng viên về đề án nghiên cứu."
        },
        {
          period: "afternoon",
          time: "13:30 - 14:00 (30 phút)",
          icon: "sunset",
          title: "Học 10 Collocations chủ đề Giáo dục & Xã hội",
          category: "collocation",
          actionText: "Ôn từ vựng",
          link: "/games/collocations",
          duration: "30p",
          description: "Ghi nhớ cấu trúc câu học thuật ứng dụng cho Writing Task 2."
        },
        {
          period: "evening",
          time: "20:00 - 21:00 (60 phút)",
          icon: "moon",
          title: "Phân tích lời giải Linearthinking câu Matching Headings",
          category: "reading",
          actionText: "Xem lời giải",
          link: "/tests/cam-20-reading-1",
          duration: "60p",
          description: "Học cách đọc câu chủ đề và lược bỏ chi tiết rườm rà để tìm tiêu đề đoạn."
        }
      ]
    }
  ],
  "7.0-8.0+": [
    {
      dayName: "Hôm nay (Thứ Hai)",
      dateStr: "Trọng tâm: Bài giảng chuyên ngành Section 4 & Mock Test bấm giờ 60p",
      focus: "Tối ưu hóa thời gian, đạt độ chính xác 35+/40 câu",
      slots: [
        {
          period: "morning",
          time: "06:30 - 07:30 (60 phút)",
          icon: "sun",
          title: "Chép chính tả: Nanotechnology 2 (Section 4 độ khó cao)",
          category: "dictation",
          actionText: "Chép bài khó",
          link: "/dictation/nanotechnology",
          duration: "60p",
          description: "Nghe bài giảng chuyên khảo công nghệ nano, bắt chính xác các thuật ngữ khoa học."
        },
        {
          period: "afternoon",
          time: "13:00 - 13:30 (30 phút)",
          icon: "sunset",
          title: "Collocation Master: 8 Cụm từ Band 8.0+",
          category: "collocation",
          actionText: "Thử thách đỉnh cao",
          link: "/games/collocations",
          duration: "30p",
          description: "Nắm vững các cụm: allocate financial resources, reach a consensus..."
        },
        {
          period: "evening",
          time: "20:00 - 21:15 (75 phút)",
          icon: "moon",
          title: "THI THẬT BẤM GIỜ: Cam 20 Reading Test 1 (60 Phút)",
          category: "mocktest",
          actionText: "Bật thi thật",
          link: "/tests/cam-20-reading-1",
          duration: "60p",
          description: "Thi dưới áp lực thời gian chuẩn IDP/BC. Tự động chấm điểm và phân tích bẫy Not Given."
        }
      ]
    },
    {
      dayName: "Ngày mai (Thứ Ba)",
      dateStr: "Trọng tâm: Thuyết trình học thuật Four Business Values & Phân tích sâu",
      focus: "Luyện khả năng tập trung cao độ trong các đoạn dài",
      slots: [
        {
          period: "morning",
          time: "06:30 - 07:30 (60 phút)",
          icon: "sun",
          title: "Chép chính tả: Four Business Values (Section 4)",
          category: "dictation",
          actionText: "Chép bài khó",
          link: "/dictation/business-values",
          duration: "60p",
          description: "Nghe bài giảng văn hóa doanh nghiệp, phân tích từ vựng kinh tế chuyên sâu."
        },
        {
          period: "afternoon",
          time: "13:00 - 13:30 (30 phút)",
          icon: "sunset",
          title: "Shadowing câu dài tốc độ 1.25x",
          category: "dictation",
          actionText: "Luyện nhại giọng",
          link: "/dictation/nanotechnology",
          duration: "30p",
          description: "Tăng tốc độ nhại giọng để luyện phản xạ nói tự nhiên cho Speaking Part 3."
        },
        {
          period: "evening",
          time: "20:00 - 21:15 (75 phút)",
          icon: "moon",
          title: "Mổ xẻ toàn diện bài đọc Cam 21 Reading Test 1",
          category: "reading",
          actionText: "Phân tích bài",
          link: "/tests/cam-21-reading-1",
          duration: "60p",
          description: "Bóc tách logic đề thi mới nhất 2026, ghi chép danh sách Paraphrasing vào sổ tay."
        }
      ]
    }
  ]
};

export default function RoadmapPage() {
  const [selectedBand, setSelectedBand] = useState<BandLevel>("5.5-6.5");
  const [completedSlots, setCompletedSlots] = useState<string[]>([]);

  useEffect(() => {
    const savedBand = localStorage.getItem("ielts_target_band") as BandLevel;
    if (savedBand && SCHEDULE_BY_BAND[savedBand]) {
      setSelectedBand(savedBand);
    }
    const savedCompleted = localStorage.getItem("ielts_completed_schedule_slots");
    if (savedCompleted) {
      try {
        setCompletedSlots(JSON.parse(savedCompleted));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleSelectBand = (band: BandLevel) => {
    setSelectedBand(band);
    localStorage.setItem("ielts_target_band", band);
  };

  const toggleSlot = (slotKey: string) => {
    setCompletedSlots(prev => {
      const next = prev.includes(slotKey) 
        ? prev.filter(k => k !== slotKey) 
        : [...prev, slotKey];
      localStorage.setItem("ielts_completed_schedule_slots", JSON.stringify(next));
      return next;
    });
  };

  const currentSchedule = SCHEDULE_BY_BAND[selectedBand];

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-16">
      {/* Top Banner (Pure Red Background with 100% Crisp White Text) */}
      <div className="rounded-3xl bg-[#e11b22] text-white p-6 sm:p-10 shadow-xl border border-red-600 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#e11b22] text-xs font-black uppercase tracking-wider shadow-sm">
          <Calendar className="w-4 h-4 text-[#e11b22]" />
          Thời Khóa Biểu Tự Học Hàng Ngày
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          Lộ Trình Tự Học Cá Nhân Hóa (Linearthinking)
        </h1>

        <p className="text-white text-sm sm:text-base leading-relaxed font-semibold max-w-3xl opacity-95">
          Hệ thống được thiết kế như một thời khóa biểu chuẩn mực: Phân chia chính xác <b>Sáng - Chiều - Tối</b> bạn cần chép bài nào, học cụm từ gì và giải đề gì để bứt phá band điểm.
        </p>

        {/* Band Level Selector Tabs */}
        <div className="pt-4 border-t border-red-400/40 space-y-2">
          <div className="flex items-center gap-2 text-xs font-black text-white uppercase tracking-wider">
            <SlidersHorizontal className="w-4 h-4 text-white" />
            Chọn trình độ hiện tại & mục tiêu của bạn để hệ thống tự điều chỉnh bài học:
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { id: "4.0-5.0" as BandLevel, title: "Band 4.0 - 5.0 (Nền tảng)", desc: "Trọng tâm: Chép Sec 1 & Nắm vững câu S-V-O" },
              { id: "5.5-6.5" as BandLevel, title: "Band 5.5 - 6.5 (Tăng tốc)", desc: "Trọng tâm: Chép Sec 2-3 & Luyện đọc hiểu Linear" },
              { id: "7.0-8.0+" as BandLevel, title: "Band 7.0 - 8.0+ (Bứt phá)", desc: "Trọng tâm: Chép Sec 4 khó & Thi thử 60p Cam 20" },
            ].map(bandOption => {
              const isSelected = selectedBand === bandOption.id;
              return (
                <button
                  key={bandOption.id}
                  onClick={() => handleSelectBand(bandOption.id)}
                  className={`p-4 rounded-2xl text-left transition transform active:scale-95 border ${
                    isSelected
                      ? "bg-white text-[#e11b22] border-white shadow-lg font-black"
                      : "bg-red-800/40 text-white border-white/20 hover:bg-red-800/60 font-semibold"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-base">{bandOption.title}</span>
                    {isSelected && <CheckCircle2 className="w-5 h-5 text-[#e11b22]" />}
                  </div>
                  <p className={`text-xs mt-1 ${isSelected ? "text-slate-600" : "text-white/80"}`}>
                    {bandOption.desc}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Daily Timetable Breakdown */}
      <div className="space-y-8">
        {currentSchedule.map((dayPlan, dayIdx) => (
          <div key={dayIdx} className="space-y-4">
            {/* Day Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-slate-200 pb-3">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-[#e11b22] bg-red-50 px-3 py-1 rounded-full border border-red-200">
                  {dayPlan.dayName}
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                  {dayPlan.focus}
                </h2>
              </div>
              <span className="text-xs font-bold text-slate-500">
                {dayPlan.dateStr}
              </span>
            </div>

            {/* 3 Slots: Morning - Afternoon - Evening */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {dayPlan.slots.map((slot, sIdx) => {
                const slotKey = `${selectedBand}-d${dayIdx}-s${sIdx}`;
                const isDone = completedSlots.includes(slotKey);

                return (
                  <div
                    key={sIdx}
                    className={`rounded-2xl p-5 border transition flex flex-col justify-between shadow-sm ${
                      isDone
                        ? "bg-emerald-50/70 border-emerald-300"
                        : slot.period === "morning"
                        ? "bg-amber-50/40 border-amber-200 hover:border-[#e11b22]"
                        : slot.period === "afternoon"
                        ? "bg-orange-50/40 border-orange-200 hover:border-[#e11b22]"
                        : "bg-slate-50/70 border-slate-200 hover:border-[#e11b22]"
                    }`}
                  >
                    <div className="space-y-3">
                      {/* Period Badge & Time */}
                      <div className="flex items-center justify-between">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black ${
                          slot.period === "morning"
                            ? "bg-amber-100 text-amber-900"
                            : slot.period === "afternoon"
                            ? "bg-orange-100 text-orange-900"
                            : "bg-slate-200 text-slate-900"
                        }`}>
                          {slot.period === "morning" && <Sun className="w-3.5 h-3.5 text-amber-600" />}
                          {slot.period === "afternoon" && <Sunset className="w-3.5 h-3.5 text-orange-600" />}
                          {slot.period === "evening" && <Moon className="w-3.5 h-3.5 text-indigo-600" />}
                          {slot.period === "morning" ? "Buổi Sáng" : slot.period === "afternoon" ? "Buổi Chiều" : "Buổi Tối"}
                        </span>

                        <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {slot.duration}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className={`text-base font-black leading-snug ${isDone ? "line-through text-slate-400" : "text-slate-900"}`}>
                        {slot.title}
                      </h3>

                      {/* Specific Task Description */}
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        {slot.description}
                      </p>
                    </div>

                    {/* Bottom Actions */}
                    <div className="mt-5 pt-3 border-t border-slate-200/80 flex items-center justify-between">
                      <button
                        onClick={() => toggleSlot(slotKey)}
                        className={`inline-flex items-center gap-1.5 text-xs font-bold transition ${
                          isDone ? "text-emerald-700" : "text-slate-500 hover:text-slate-800"
                        }`}
                      >
                        {isDone ? (
                          <>
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 fill-emerald-100" />
                            Đã hoàn thành
                          </>
                        ) : (
                          <>
                            <Circle className="w-4 h-4 text-slate-400" />
                            Đánh dấu xong
                          </>
                        )}
                      </button>

                      <Link
                        href={slot.link}
                        className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-xl bg-[#e11b22] text-white font-bold text-xs hover:bg-[#b91c1c] transition shadow-sm active:scale-95"
                      >
                        {slot.actionText}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
