"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Gamepad2, Trophy, RotateCcw, Flame, CheckCircle2 } from "lucide-react";

interface Pair {
  id: number;
  left: string;
  right: string;
  vietnamese: string;
  example: string;
}

const COLLOCATION_POOL: Pair[] = [
  { id: 1, left: "conduct", right: "research", vietnamese: "tiến hành nghiên cứu", example: "Scientists conduct research to combat climate change." },
  { id: 2, left: "draw", right: "conclusions", vietnamese: "rút ra kết luận", example: "It is too early to draw conclusions from the experiment." },
  { id: 3, left: "acquire", right: "knowledge", vietnamese: "tiếp thu kiến thức", example: "Reading books helps students acquire in-depth knowledge." },
  { id: 4, left: "pose", right: "a serious threat", vietnamese: "gây ra mối đe dọa nghiêm trọng", example: "Plastic pollution poses a serious threat to marine life." },
  { id: 5, left: "allocate", right: "financial resources", vietnamese: "phân bổ nguồn tài chính", example: "Governments should allocate financial resources to public transit." },
  { id: 6, left: "bridge", right: "the generation gap", vietnamese: "thu hẹp khoảng cách thế hệ", example: "Open family discussions help bridge the generation gap." },
  { id: 7, left: "implement", right: "strict policies", vietnamese: "thực thi các chính sách nghiêm ngặt", example: "Cities must implement strict policies against air pollution." },
  { id: 8, left: "reach", right: "a consensus", vietnamese: "đạt được sự đồng thuận", example: "Leaders failed to reach a consensus on tax reforms." },
];

export default function CollocationsGamePage() {
  const [pairs, setPairs] = useState<Pair[]>(COLLOCATION_POOL.slice(0, 5));
  const [leftOptions, setLeftOptions] = useState<{ id: number; text: string }[]>([]);
  const [rightOptions, setRightOptions] = useState<{ id: number; text: string }[]>([]);
  
  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
  const [selectedRight, setSelectedRight] = useState<number | null>(null);
  const [matchedIds, setMatchedIds] = useState<number[]>([]);
  const [wrongPair, setWrongPair] = useState<{ leftId: number; rightId: number } | null>(null);
  
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isGameOver, setIsGameOver] = useState(false);

  const initGame = () => {
    const selected = COLLOCATION_POOL.slice(0, 5);
    setPairs(selected);
    setMatchedIds([]);
    setSelectedLeft(null);
    setSelectedRight(null);
    setWrongPair(null);
    setScore(0);
    setStreak(0);
    setTimeLeft(60);
    setIsGameOver(false);

    setLeftOptions(selected.map(p => ({ id: p.id, text: p.left })).sort(() => Math.random() - 0.5));
    setRightOptions(selected.map(p => ({ id: p.id, text: p.right })).sort(() => Math.random() - 0.5));
  };

  useEffect(() => {
    initGame();
  }, []);

  useEffect(() => {
    if (isGameOver) return;
    const timer = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          setIsGameOver(true);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isGameOver]);

  useEffect(() => {
    if (selectedLeft !== null && selectedRight !== null) {
      if (selectedLeft === selectedRight) {
        setMatchedIds(prev => [...prev, selectedLeft]);
        setScore(s => s + 10 + streak * 2);
        setStreak(st => st + 1);
        setSelectedLeft(null);
        setSelectedRight(null);

        if (matchedIds.length + 1 >= pairs.length) {
          setTimeout(() => {
            setIsGameOver(true);
          }, 500);
        }
      } else {
        setWrongPair({ leftId: selectedLeft, rightId: selectedRight });
        setStreak(0);
        setTimeout(() => {
          setSelectedLeft(null);
          setSelectedRight(null);
          setWrongPair(null);
        }, 700);
      }
    }
  }, [selectedLeft, selectedRight, streak, pairs.length, matchedIds.length]);

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-12">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-600 hover:text-[#e11b22] transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Về trang chủ
        </Link>
        <span className="text-xs font-bold px-3 py-1 rounded-full bg-red-50 text-[#e11b22] border border-red-200">
          IELTS Lexical Resource Band 7.0+
        </span>
      </div>

      {/* Game Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#e11b22] mb-1">
              <Gamepad2 className="w-4 h-4" />
              Game Ghép Cụm Từ Học Thuật (Collocation Match)
            </div>
            <h1 className="text-2xl font-black text-slate-900">Nối Từ Tạo Thành Collocation Tự Nhiên</h1>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 font-mono font-bold text-slate-700 text-sm">
              ⏱ {timeLeft}s
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-50 text-[#e11b22] font-bold text-sm border border-red-200">
              <Trophy className="w-4 h-4 text-[#e11b22]" />
              {score} Điểm
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 text-amber-700 font-bold text-sm border border-amber-200">
              <Flame className="w-4 h-4 fill-amber-500 text-amber-500" />
              {streak}x
            </div>
          </div>
        </div>

        {/* Game Tiles Area */}
        {!isGameOver ? (
          <div className="grid grid-cols-2 gap-4">
            {/* Left Column (Verbs / Adjectives) */}
            <div className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 text-center">
                Động từ / Tính từ
              </div>
              {leftOptions.map((item) => {
                const isMatched = matchedIds.includes(item.id);
                const isSelected = selectedLeft === item.id;
                const isWrong = wrongPair?.leftId === item.id;

                return (
                  <button
                    key={item.id}
                    disabled={isMatched}
                    onClick={() => setSelectedLeft(item.id)}
                    className={`w-full p-4 rounded-2xl font-bold text-sm sm:text-base transition border shadow-sm flex items-center justify-center ${
                      isMatched
                        ? "bg-emerald-50 border-emerald-300 text-emerald-800 opacity-60 cursor-default"
                        : isWrong
                        ? "bg-red-100 border-red-400 text-red-800 animate-shake"
                        : isSelected
                        ? "bg-[#e11b22] border-[#b91c1c] text-white shadow-md scale-102"
                        : "bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100"
                    }`}
                  >
                    {item.text}
                  </button>
                );
              })}
            </div>

            {/* Right Column (Nouns / Prepositions) */}
            <div className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 text-center">
                Danh từ / Cụm kết hợp
              </div>
              {rightOptions.map((item) => {
                const isMatched = matchedIds.includes(item.id);
                const isSelected = selectedRight === item.id;
                const isWrong = wrongPair?.rightId === item.id;

                return (
                  <button
                    key={item.id}
                    disabled={isMatched}
                    onClick={() => setSelectedRight(item.id)}
                    className={`w-full p-4 rounded-2xl font-bold text-sm sm:text-base transition border shadow-sm flex items-center justify-center ${
                      isMatched
                        ? "bg-emerald-50 border-emerald-300 text-emerald-800 opacity-60 cursor-default"
                        : isWrong
                        ? "bg-red-100 border-red-400 text-red-800 animate-shake"
                        : isSelected
                        ? "bg-[#e11b22] border-[#b91c1c] text-white shadow-md scale-102"
                        : "bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100"
                    }`}
                  >
                    {item.text}
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          /* Game Over Screen */
          <div className="p-6 rounded-3xl bg-red-50 border border-red-200 space-y-6 text-center animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-2xl bg-[#e11b22] text-white flex items-center justify-center mx-auto shadow-lg shadow-red-500/30">
              <Trophy className="w-8 h-8" />
            </div>

            <div>
              <h2 className="text-2xl font-black text-slate-900">Hoàn Thành Thử Thách!</h2>
              <p className="text-sm text-slate-600 mt-1">
                Bạn đạt <b>{score} Điểm</b> với chuỗi nối đúng tối đa là <b>{streak} lần liên tiếp</b>!
              </p>
            </div>

            {/* Collocations review table */}
            <div className="text-left bg-white p-5 rounded-2xl border border-red-200 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-[#e11b22]">
                Ôn tập các cụm Collocation trong bài:
              </div>
              {pairs.map((p) => (
                <div key={p.id} className="text-xs space-y-0.5 border-b border-slate-100 pb-2.5 last:border-0 last:pb-0">
                  <div className="font-bold text-slate-900 text-sm">
                    {p.left} {p.right} <span className="font-normal text-slate-500">({p.vietnamese})</span>
                  </div>
                  <div className="italic text-slate-600 font-serif">
                    Ví dụ: "{p.example}"
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={initGame}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#e11b22] text-white font-bold text-sm shadow hover:bg-[#b91c1c] transition"
            >
              <RotateCcw className="w-4 h-4" />
              Chơi lại ván mới
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
