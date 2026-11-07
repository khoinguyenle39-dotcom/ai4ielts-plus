import Link from "next/link";
import { BookOpen, Clock, Play, Flame, Layers, Search, Filter, Sparkles, Award } from "lucide-react";
import SyncStatusHub from "@/components/SyncStatusHub";

const REAL_TESTS = [
  { 
    id: "real-test-2026-q1", 
    title: "IELTS Real Test 2026 - Q1", 
    testsCount: 10, 
    plays: "142K", 
    badge: "Đề thi thật Quý 1/2026", 
    link: "/tests/series/real-test-2026-q1", 
    desc: "Đề thi thật Quý 1/2026: Why Good Ideas Fail, Keeping The Water Away, What Makes A Musical Expert. Chuẩn đề thi thật IDP & BC.",
    readingNums: [1, 2, 3, 4, 5],
    listeningNums: [1, 2, 3, 4, 5]
  },
  { 
    id: "real-test-2026-q2", 
    title: "IELTS Real Test 2026 - Q2", 
    testsCount: 10, 
    plays: "118K", 
    badge: "Đề thi thật Quý 2/2026", 
    link: "/tests/series/real-test-2026-q2", 
    desc: "Đề thi thật Quý 2/2026: The Secret Life of the Forest, Cognitive Behavioural Therapy, Language Evolution. Đề thi máy mới nhất.",
    readingNums: [1, 2, 3, 4, 5],
    listeningNums: [1, 2, 3, 4, 5]
  }
];

const PLUS_SERIES = [
  {
    id: "plus-1",
    title: "IELTS Practice Test Plus 1",
    testsCount: 10,
    plays: "280K",
    badge: "Chuẩn Plus 1",
    link: "/tests/series/plus-1",
    desc: "Bộ đề kinh điển nâng cao: In Praise of Amateurs, Reading the Screen, The Revolutionary Bridges of Robert Maillart.",
    readingNums: [1, 2, 3, 4, 5],
    listeningNums: [1, 2, 3, 4, 5]
  },
  {
    id: "plus-2",
    title: "IELTS Practice Test Plus 2",
    testsCount: 11,
    plays: "310K",
    badge: "Chuẩn Plus 2",
    link: "/tests/series/plus-2",
    desc: "Bộ đề bám sát đề thi thật với các chủ đề khoa học, xã hội và công nghệ. 5 Reading tests & 6 Listening tests.",
    readingNums: [1, 2, 3, 4, 5],
    listeningNums: [1, 2, 3, 4, 5, 6]
  },
  {
    id: "plus-3",
    title: "IELTS Practice Test Plus 3",
    testsCount: 14,
    plays: "390K",
    badge: "Hot Plus 3",
    link: "/tests/series/plus-3",
    desc: "Bộ đề Plus có số lượng bài thi lớn nhất: 7 Reading tests & 7 Listening tests với giải thích 4 bước Linearthinking.",
    readingNums: [1, 2, 3, 4, 5, 6, 7],
    listeningNums: [1, 2, 3, 4, 5, 6, 7]
  }
];

const CAM_SERIES = [
  { id: "cam-21", title: "IELTS CAM Inspired 21", testsCount: 8, plays: "154K", badge: "Mới nhất 2026", link: "/tests/series/cam-21", desc: "Passage: The Davies sisters, Why we need silence, The World of Sugar. Chuẩn đề thi 2026." },
  { id: "cam-20", title: "IELTS CAM Inspired 20", testsCount: 8, plays: "421K", badge: "Phổ biến nhất", link: "/tests/series/cam-20", desc: "Passage: The Kākāpō parrot conservation, To Britain greybeam, How stress affects judgement." },
  { id: "cam-19", title: "IELTS CAM Inspired 19", testsCount: 8, plays: "217K", badge: "Chuẩn Cambridge", link: "/tests/series/cam-19", desc: "Passage: How tennis rackets have changed, Pirates of the Mediterranean, Misinformation." },
  { id: "cam-18", title: "IELTS CAM Inspired 18", testsCount: 8, plays: "233K", badge: "Chuẩn Cambridge", link: "/tests/series/cam-18", desc: "Passage: Urban farming aeroponics in Rotterdam, Forest management, Space junk problem." },
  { id: "cam-17", title: "IELTS CAM Inspired 17", testsCount: 8, plays: "271K", badge: "Chuẩn Cambridge", link: "/tests/series/cam-17", desc: "Passage: London underground railway, Stadiums: past, present and future, To catch a king." },
  { id: "cam-16", title: "IELTS CAM Inspired 16", testsCount: 8, plays: "330K", badge: "Chuẩn Cambridge", link: "/tests/series/cam-16", desc: "Passage: Why we need to protect polar bears, The Step Pyramid of Djoser, The future of work." },
  { id: "cam-15", title: "IELTS CAM Inspired 15", testsCount: 8, plays: "204K", badge: "Chuẩn Cambridge", link: "/tests/series/cam-15", desc: "Passage: Nutmeg a valuable spice, Driverless cars, What is exploration." },
  { id: "cam-14", title: "IELTS CAM Inspired 14", testsCount: 8, plays: "163K", badge: "Chuẩn Cambridge", link: "/tests/series/cam-14", desc: "Passage: The growth of bike-sharing schemes around the world, Alexander Henderson." },
  { id: "cam-13", title: "IELTS CAM Inspired 13", testsCount: 8, plays: "101K", badge: "Chuẩn Cambridge", link: "/tests/series/cam-13", desc: "Passage: Case Study: Tourism New Zealand, Why companies need to learn by experience." },
  { id: "cam-12", title: "IELTS CAM Inspired 12", testsCount: 8, plays: "85K", badge: "Chuẩn Cambridge", link: "/tests/series/cam-12", desc: "Passage: Cork, Collecting as a hobby, What's the purpose of gaining knowledge." },
  { id: "cam-11", title: "IELTS CAM Inspired 11", testsCount: 8, plays: "81K", badge: "Chuẩn Cambridge", link: "/tests/series/cam-11", desc: "Passage: Crop-growing in the skyscraper, The story of the bicycle, Falconry in the UAE." },
  { id: "cam-10", title: "IELTS CAM Inspired 10", testsCount: 8, plays: "101K", badge: "Chuẩn Cambridge", link: "/tests/series/cam-10", desc: "Passage: Stepwells, European Transport System 1990-2010, The psychology of innovation." },
  { id: "cam-09", title: "IELTS CAM Inspired 09", testsCount: 8, plays: "127K", badge: "Chuẩn Cambridge", link: "/tests/series/cam-09", desc: "Passage: William Henry Perkin, Is There Anybody Out There, Information theory." },
];

export default function TestsPage() {
  return (
    <div className="space-y-8 pb-16">
      {/* Top Banner (Pure Red Background with 100% Crisp White Text) */}
      <div className="rounded-3xl bg-[#e11b22] text-white p-6 sm:p-10 shadow-xl border border-red-600 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#e11b22] text-xs font-black uppercase tracking-wider shadow-sm">
          <BookOpen className="w-4 h-4 text-[#e11b22]" />
          Kho Đề Chuẩn Quốc Tế & Đề Thi Thật Đầy Đủ Nhất
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          Luyện Thi IELTS Online Test (Cam 09–21 • Real Test • Practice Plus)
        </h1>

        <p className="text-white text-sm sm:text-base leading-relaxed font-semibold max-w-3xl opacity-95">
          Kho đề thi IELTS đồ sộ nhất Việt Nam: Đầy đủ từ <b>Cambridge 09 đến Cambridge 21 mới nhất</b>, trọn bộ <b>IELTS Real Test 2026 (Quý 1 & 2)</b> và <b>IELTS Practice Test Plus (1, 2, 3)</b>. Trải nghiệm thi máy bấm giờ và giải thích 4 bước theo <b>Linearthinking</b>.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-black">
          <span className="bg-black/25 px-3.5 py-1.5 rounded-full border border-white/20">
            Tổng cộng: 160+ Bài Tests Chuẩn 40 Câu
          </span>
          <span className="bg-black/25 px-3.5 py-1.5 rounded-full border border-white/20">
            18 Bộ Series Độc Quyền
          </span>
          <span className="bg-black/25 px-3.5 py-1.5 rounded-full border border-white/20">
            Phương pháp Linearthinking độc quyền
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
              Đề Thi Thật (IELTS Real Test 2026 - Q1 & Q2)
            </h2>
          </div>
          <span className="text-xs font-bold text-[#e11b22] bg-red-50 px-3 py-1 rounded-full border border-red-200">
            Đầy đủ 40 câu • 3 Passages / 4 Parts
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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

              <div className="mt-4 pt-3 border-t border-slate-100 space-y-2.5">
                <div className="flex items-center justify-between text-xs font-bold text-slate-600">
                  <span className="text-slate-500 font-semibold">5 Reading • 5 Listening</span>
                  <div className="flex items-center gap-1 text-[11px]">
                    <span className="text-slate-400">Đề:</span>
                    {test.readingNums.map((n) => (
                      <Link
                        key={n}
                        href={`/tests/${test.id}-reading-${n}`}
                        className="px-1.5 py-0.5 rounded bg-slate-100 hover:bg-red-50 hover:text-[#e11b22] text-slate-700 font-black transition"
                        title={`Làm Reading Test ${n}`}
                      >
                        R{n}
                      </Link>
                    ))}
                    {test.listeningNums.map((n) => (
                      <Link
                        key={n}
                        href={`/tests/${test.id}-listening-${n}`}
                        className="px-1.5 py-0.5 rounded bg-slate-100 hover:bg-red-50 hover:text-[#e11b22] text-slate-700 font-black transition"
                        title={`Làm Listening Test ${n}`}
                      >
                        L{n}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  href={test.link}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#e11b22] text-white font-black text-xs hover:bg-[#b91c1c] transition shadow-sm active:scale-95"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  Xem trọn bộ 10 đề thi (Reading & Listening)
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2: IELTS Practice Test Plus 1, 2, 3 */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b-2 border-slate-200 pb-2">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#e11b22]" />
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              Trọn Bộ IELTS Practice Test Plus (Plus 1, Plus 2, Plus 3)
            </h2>
          </div>
          <span className="text-xs font-bold text-slate-500">
            3 Cuốn sách • 35 Bài tests nâng cao
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PLUS_SERIES.map((plus) => (
            <div
              key={plus.id}
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-[#e11b22] transition flex flex-col justify-between"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-red-50 text-[#e11b22] border border-red-200">
                    {plus.badge}
                  </span>
                  <span className="text-xs font-bold text-slate-500">{plus.testsCount} bài tests</span>
                </div>

                <h3 className="text-lg font-black text-slate-900 leading-snug">
                  {plus.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {plus.desc}
                </p>

                <div className="text-[11px] font-bold text-slate-400">
                  {plus.plays} lượt làm bài
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 space-y-2.5">
                <div className="flex items-center justify-between text-xs font-bold text-slate-600">
                  <span className="text-slate-500 font-semibold">{plus.readingNums.length}R • {plus.listeningNums.length}L</span>
                  <div className="flex items-center gap-1 text-[11px] flex-wrap justify-end">
                    {plus.readingNums.map((n) => (
                      <Link
                        key={n}
                        href={`/tests/${plus.id}-reading-${n}`}
                        className="px-1.5 py-0.5 rounded bg-slate-100 hover:bg-red-50 hover:text-[#e11b22] text-slate-700 font-black transition"
                        title={`Làm Reading Test ${n}`}
                      >
                        R{n}
                      </Link>
                    ))}
                    {plus.listeningNums.map((n) => (
                      <Link
                        key={n}
                        href={`/tests/${plus.id}-listening-${n}`}
                        className="px-1.5 py-0.5 rounded bg-slate-100 hover:bg-red-50 hover:text-[#e11b22] text-slate-700 font-black transition"
                        title={`Làm Listening Test ${n}`}
                      >
                        L{n}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  href={plus.link}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#e11b22] text-white font-black text-xs hover:bg-[#b91c1c] transition shadow-sm active:scale-95"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  Xem trọn bộ {plus.testsCount} đề thi
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3: Trọn Bộ IELTS CAM Inspired 09 - 21 */}
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

              <div className="mt-4 pt-3 border-t border-slate-100 space-y-2.5">
                <div className="flex items-center justify-between text-xs font-bold text-slate-600">
                  <span className="text-slate-500 font-semibold">4 Reading • 4 Listening</span>
                  <div className="flex items-center gap-1 text-[11px]">
                    <span className="text-slate-400">Chọn đề:</span>
                    {[1, 2, 3, 4].map(n => (
                      <Link
                        key={n}
                        href={`/tests/${cam.id}-reading-${n}`}
                        className="px-1.5 py-0.5 rounded bg-slate-100 hover:bg-red-50 hover:text-[#e11b22] text-slate-700 font-black transition"
                        title={`Làm Reading Test ${n}`}
                      >
                        R{n}
                      </Link>
                    ))}
                    {[1, 2, 3, 4].map(n => (
                      <Link
                        key={n}
                        href={`/tests/${cam.id}-listening-${n}`}
                        className="px-1.5 py-0.5 rounded bg-slate-100 hover:bg-red-50 hover:text-[#e11b22] text-slate-700 font-black transition"
                        title={`Làm Listening Test ${n}`}
                      >
                        L{n}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  href={cam.link}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#e11b22] text-white font-black text-xs hover:bg-[#b91c1c] transition shadow-sm active:scale-95"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  Xem trọn bộ 8 đề thi (Reading & Listening)
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
