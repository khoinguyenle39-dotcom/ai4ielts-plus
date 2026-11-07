import Link from "next/link";
import { BookOpen, Clock, Play, Flame, Layers, Search, Filter } from "lucide-react";
import SyncStatusHub from "@/components/SyncStatusHub";

const CAM_SERIES = [
  { id: "cam-21", title: "IELTS CAM Inspired 21", testsCount: 8, plays: "154K", badge: "Mới nhất 2026", link: "/tests/cam-21-reading-1", desc: "Passage: The Davies sisters, Why we need silence, The World of Sugar. Chuẩn đề thi 2026." },
  { id: "cam-20", title: "IELTS CAM Inspired 20", testsCount: 8, plays: "421K", badge: "Phổ biến nhất", link: "/tests/cam-20-reading-1", desc: "Passage: The Kākāpō parrot conservation, To Britain greybeam, How stress affects judgement." },
  { id: "cam-19", title: "IELTS CAM Inspired 19", testsCount: 8, plays: "217K", badge: "Chuẩn Cambridge", link: "/tests/cam-19-reading-1", desc: "Passage: How tennis rackets have changed, Pirates of the Mediterranean, Misinformation." },
  { id: "cam-18", title: "IELTS CAM Inspired 18", testsCount: 8, plays: "233K", badge: "Chuẩn Cambridge", link: "/tests/cam-18-reading-1", desc: "Passage: Urban farming aeroponics in Rotterdam, Forest management, Space junk problem." },
  { id: "cam-17", title: "IELTS CAM Inspired 17", testsCount: 8, plays: "271K", badge: "Chuẩn Cambridge", link: "/tests/cam-17-reading-1", desc: "Passage: London underground railway, Stadiums: past, present and future, To catch a king." },
  { id: "cam-16", title: "IELTS CAM Inspired 16", testsCount: 8, plays: "330K", badge: "Chuẩn Cambridge", link: "/tests/cam-16-reading-1", desc: "Passage: Why we need to protect polar bears, The Step Pyramid of Djoser, The future of work." },
  { id: "cam-15", title: "IELTS CAM Inspired 15", testsCount: 8, plays: "204K", badge: "Chuẩn Cambridge", link: "/tests/cam-15-reading-1", desc: "Passage: Nutmeg - a valuable spice, Driverless cars, What is exploration." },
  { id: "cam-14", title: "IELTS CAM Inspired 14", testsCount: 8, plays: "163K", badge: "Chuẩn Cambridge", link: "/tests/cam-14-reading-1", desc: "Passage: Importance Of Children's Play, Bike-Sharing Schemes, Motivational Factors." },
  { id: "cam-13", title: "IELTS CAM Inspired 13", testsCount: 8, plays: "101K", badge: "Chuẩn Cambridge", link: "/tests/cam-13-reading-1", desc: "Passage: Tourism New Zealand Website, Why Being Bored Is Stimulating, Artificial Artists." },
  { id: "cam-12", title: "IELTS CAM Inspired 12", testsCount: 8, plays: "85K", badge: "Chuẩn Cambridge", link: "/tests/cam-19-reading-1", desc: "Luyện thi thử IELTS trên máy tính với trải nghiệm bấm giờ thi thật 60 phút." },
  { id: "cam-11", title: "IELTS CAM Inspired 11", testsCount: 8, plays: "81K", badge: "Chuẩn Cambridge", link: "/tests/cam-18-reading-1", desc: "Phù hợp cho học viên giai đoạn nền tảng muốn làm quen với format đề quốc tế." },
  { id: "cam-10", title: "IELTS CAM Inspired 10", testsCount: 8, plays: "101K", badge: "Chuẩn Cambridge", link: "/tests/cam-21-reading-1", desc: "Kho từ vựng học thuật phong phú, giải thích chi tiết vì sao các đáp án sai." },
  { id: "cam-09", title: "IELTS CAM Inspired 09", testsCount: 8, plays: "127K", badge: "Chuẩn Cambridge", link: "/tests/cam-20-reading-1", desc: "Bộ đề nền tảng giúp đánh giá mức độ đọc hiểu và phát hiện lỗ hổng ngữ pháp." }
];

const REAL_TESTS = [
  { id: "rt-2026-q2", title: "IELTS Real Test 2026 - Q2", testsCount: 10, plays: "2K", badge: "Đề thi thật Quý 2", link: "/tests/real-test-2026-q1", desc: "Tổng hợp các đề thi thật vừa diễn ra trong Quý 2 năm 2026 tại các hội đồng thi IDP & BC." },
  { id: "rt-2026-q1", title: "IELTS Real Test 2026 - Q1", testsCount: 10, plays: "655", badge: "Đề thi thật Quý 1", link: "/tests/real-test-2026-q1", desc: "Đề thi thật Quý 1/2026: AI in Modern Healthcare & Remote Diagnostics." },
  { id: "fc-2026-q2", title: "IELTS Forecast Test 2026 - Q2", testsCount: 10, plays: "360", badge: "Dự đoán quý này", link: "/tests/real-test-2026-q1", desc: "Bộ đề dự đoán khả năng cao xuất hiện trong kỳ thi quý tới kèm lời giải chi tiết." }
];

export default function TestsPage() {
  return (
    <div className="space-y-8 pb-16">
      {/* Top Banner (Pure Red Background with 100% Crisp White Text) */}
      <div className="rounded-3xl bg-[#e11b22] text-white p-6 sm:p-10 shadow-xl border border-red-600 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#e11b22] text-xs font-black uppercase tracking-wider shadow-sm">
          <BookOpen className="w-4 h-4 text-[#e11b22]" />
          Kho Đề Chuẩn Quốc Tế & Đề Thi Thật
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          Luyện Thi IELTS Online Test (Cam 09 – 21)
        </h1>

        <p className="text-white text-sm sm:text-base leading-relaxed font-semibold max-w-3xl opacity-95">
          Kho đề thi IELTS đồ sộ nhất Việt Nam: Đầy đủ từ <b>Cambridge 09 đến Cambridge 21 mới nhất</b> cùng bộ <b>Real Test 2026</b>. Trải nghiệm thi máy bấm giờ 60 phút và giải thích 4 bước theo <b>Linearthinking</b>.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-black">
          <span className="bg-black/25 px-3.5 py-1.5 rounded-full border border-white/20">
            Tổng cộng: 120+ Bài Tests
          </span>
          <span className="bg-black/25 px-3.5 py-1.5 rounded-full border border-white/20">
            Hơn 2 Triệu lượt làm bài
          </span>
          <span className="bg-black/25 px-3.5 py-1.5 rounded-full border border-white/20">
            Tải PDF đề thi & đáp án miễn phí
          </span>
        </div>
      </div>

      {/* 24/7 Live Sync & Auto-Update Engine Hub */}
      <SyncStatusHub />

      {/* Section 1: Bộ Đề Thi Thật Mới Nhất 2026 */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b-2 border-slate-200 pb-2">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#e11b22]" />
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              Đề Thi Thật & Dự Đoán (IELTS Actual & Forecast 2026)
            </h2>
          </div>
          <span className="text-xs font-bold text-[#e11b22] bg-red-50 px-3 py-1 rounded-full border border-red-200">
            Cập nhật quý gần nhất
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {REAL_TESTS.map((test) => (
            <div
              key={test.id}
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-[#e11b22] transition flex flex-col justify-between"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black px-2.5 py-1 rounded-full bg-red-50 text-[#e11b22] border border-red-200">
                    {test.badge}
                  </span>
                  <span className="text-xs font-bold text-slate-500">{test.testsCount} bài tests</span>
                </div>

                <h3 className="text-lg font-black text-slate-900 leading-snug">
                  {test.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {test.desc}
                </p>

                <div className="text-[11px] font-bold text-slate-400">
                  {test.plays} lượt làm bài
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-[#e11b22]">Reading & Listening</span>
                <Link
                  href={test.link}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#e11b22] text-white font-black text-xs hover:bg-[#b91c1c] transition shadow-sm active:scale-95"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  Xem bài test
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2: Trọn Bộ IELTS CAM Inspired 09 - 21 */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b-2 border-slate-200 pb-2">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#e11b22]" />
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              Trọn Bộ IELTS CAM Inspired (Cambridge 09 Đến Cambridge 21)
            </h2>
          </div>
          <span className="text-xs font-bold text-slate-500">
            13 Cuốn sách • 104 Bài tests chuẩn
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CAM_SERIES.map((cam) => (
            <div
              key={cam.id}
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-[#e11b22] transition flex flex-col justify-between"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-black px-2.5 py-0.5 rounded-full ${
                    cam.id === "cam-21" ? "bg-red-50 text-[#e11b22] border border-red-200" :
                    cam.id === "cam-20" ? "bg-amber-100 text-amber-900" :
                    "bg-slate-100 text-slate-700"
                  }`}>
                    {cam.badge}
                  </span>
                  <span className="text-xs font-bold text-slate-500">{cam.testsCount} bài tests</span>
                </div>

                <h3 className="text-lg font-black text-slate-900 leading-snug">
                  {cam.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {cam.desc}
                </p>

                <div className="text-[11px] font-bold text-slate-400">
                  {cam.plays} lượt làm bài
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500">4 Reading • 4 Listening</span>
                <Link
                  href={cam.link}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#e11b22] text-white font-black text-xs hover:bg-[#b91c1c] transition shadow-sm active:scale-95"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  Xem bài test
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
