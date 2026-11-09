"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Gamepad2,
  Trophy,
  RotateCcw,
  Flame,
  ClipboardCheck,
  Library,
  Play,
} from "lucide-react";
import { COLLOCATIONS, Collocation } from "@/data/collocations";
import {
  loadProgress,
  pickNewRound,
  recordResult,
  saveProgress,
  syncProgressFromSupabase,
  ROUND_SIZE,
} from "@/lib/collocationProgress";
import CollocationExplainCard from "@/components/CollocationExplainCard";
import CollocationQuizReminder from "@/components/CollocationQuizReminder";

const ROUND_SECONDS = 90;

interface Tile {
  id: string;
  text: string;
}

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

export default function CollocationsGamePage() {
  const [pairs, setPairs] = useState<Collocation[]>([]);
  const [leftTiles, setLeftTiles] = useState<Tile[]>([]);
  const [rightTiles, setRightTiles] = useState<Tile[]>([]);

  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [selectedRight, setSelectedRight] = useState<string | null>(null);
  const [matchedIds, setMatchedIds] = useState<string[]>([]);
  const [wrongPair, setWrongPair] = useState<{ left: string; right: string } | null>(null);
  const [activeDetail, setActiveDetail] = useState<Collocation | null>(null);

  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [timeLeft, setTimeLeft] = useState(ROUND_SECONDS);
  const [isGameOver, setIsGameOver] = useState(false);

  const [seenCount, setSeenCount] = useState(0);
  const [learnedCount, setLearnedCount] = useState(0);
  const [cycle, setCycle] = useState(0);
  const [cycleNotice, setCycleNotice] = useState(false);
  const wrongTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const initGame = useCallback(() => {
    const { round, progress, startedNewCycle } = pickNewRound(loadProgress());
    saveProgress(progress);

    setPairs(round);
    setLeftTiles(shuffle(round.map((p) => ({ id: p.id, text: p.left }))));
    setRightTiles(shuffle(round.map((p) => ({ id: p.id, text: p.right }))));
    setMatchedIds([]);
    setSelectedLeft(null);
    setSelectedRight(null);
    setWrongPair(null);
    setActiveDetail(null);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setTimeLeft(ROUND_SECONDS);
    setIsGameOver(false);

    setSeenCount(progress.seen.length);
    setLearnedCount(Object.keys(progress.learned).length);
    setCycle(progress.cycle);
    setCycleNotice(startedNewCycle);
  }, []);

  useEffect(() => {
    syncProgressFromSupabase().then(() => {
      initGame();
    });
  }, [initGame]);

  // Đồng hồ: dừng khi đang đọc giải thích để người học không bị áp lực thời gian.
  useEffect(() => {
    if (isGameOver || activeDetail || pairs.length === 0) return;
    const timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          setIsGameOver(true);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isGameOver, activeDetail, pairs.length]);

  // Hết giờ: các cụm chưa nối được ghi nhận là "sai" để ưu tiên trong bài kiểm tra.
  useEffect(() => {
    if (!isGameOver || pairs.length === 0) return;
    let p = loadProgress();
    pairs.filter((x) => !matchedIds.includes(x.id)).forEach((x) => {
      p = recordResult(p, x.id, false);
    });
    saveProgress(p);
    setLearnedCount(Object.keys(p.learned).length);
    // chỉ chạy một lần khi ván kết thúc
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isGameOver]);

  const tryMatch = (leftId: string, rightId: string) => {
    if (leftId === rightId) {
      const pair = pairs.find((p) => p.id === leftId)!;
      const newMatched = [...matchedIds, leftId];
      setMatchedIds(newMatched);
      setScore((s) => s + 10 + streak * 2);
      setStreak((st) => {
        const next = st + 1;
        setMaxStreak((m) => Math.max(m, next));
        return next;
      });
      setSelectedLeft(null);
      setSelectedRight(null);
      setActiveDetail(pair);

      const p = recordResult(loadProgress(), leftId, true);
      saveProgress(p);
      setLearnedCount(Object.keys(p.learned).length);
    } else {
      setWrongPair({ left: leftId, right: rightId });
      setStreak(0);
      saveProgress(recordResult(loadProgress(), leftId, false));
      if (wrongTimer.current) clearTimeout(wrongTimer.current);
      wrongTimer.current = setTimeout(() => {
        setSelectedLeft(null);
        setSelectedRight(null);
        setWrongPair(null);
      }, 700);
    }
  };

  const onPickLeft = (id: string) => {
    if (wrongPair) return;
    setActiveDetail(null);
    setSelectedLeft(id);
    if (selectedRight) tryMatch(id, selectedRight);
  };

  const onPickRight = (id: string) => {
    if (wrongPair) return;
    setActiveDetail(null);
    setSelectedRight(id);
    if (selectedLeft) tryMatch(selectedLeft, id);
  };

  const continueAfterDetail = () => {
    setActiveDetail(null);
    if (matchedIds.length >= pairs.length) setIsGameOver(true);
  };

  const tileClass = (isMatched: boolean, isWrong: boolean, isSelected: boolean) =>
    `w-full p-4 rounded-2xl font-bold text-sm sm:text-base transition border shadow-sm flex items-center justify-center text-center ${
      isMatched
        ? "bg-emerald-50 border-emerald-300 text-emerald-800 opacity-60 cursor-default"
        : isWrong
        ? "bg-red-100 border-red-400 text-red-800 animate-shake"
        : isSelected
        ? "bg-[#e11b22] border-[#b91c1c] text-white shadow-md"
        : "bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100"
    }`;

  const total = COLLOCATIONS.length;

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-12">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-600 hover:text-[#e11b22] transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Về trang chủ
        </Link>
        <Link
          href="/games/collocations/quiz"
          className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full bg-white text-slate-700 border border-slate-200 hover:border-[#e11b22] hover:text-[#e11b22] transition"
        >
          <ClipboardCheck className="w-3.5 h-3.5" />
          Bài kiểm tra tuần
        </Link>
      </div>

      <CollocationQuizReminder showUpcoming />

      {/* Tiến độ học */}
      <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 font-bold text-slate-800">
            <Library className="w-4 h-4 text-[#e11b22]" />
            Tiến độ vòng {cycle + 1}: {Math.min(seenCount, total)}/{total} cụm đã gặp
          </div>
          <span className="text-xs font-semibold text-slate-500">Đã nối đúng: {learnedCount} cụm</span>
        </div>
        <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
          <div
            className="h-full bg-[#e11b22] transition-all"
            style={{ width: `${Math.min(100, (seenCount / total) * 100)}%` }}
          />
        </div>
        {cycleNotice && (
          <div className="text-xs font-semibold text-emerald-700">
            🎉 Bạn đã gặp hết {total} cụm! Bắt đầu vòng ôn tập mới.
          </div>
        )}
      </div>

      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#e11b22] mb-1">
              <Gamepad2 className="w-4 h-4" />
              Collocation Match • {ROUND_SIZE} cụm mới mỗi ván
            </div>
            <h1 className="text-2xl font-black text-slate-900">Nối Từ Tạo Thành Collocation Tự Nhiên</h1>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 font-mono font-bold text-slate-700 text-sm">
              ⏱ {timeLeft}s{activeDetail && !isGameOver ? " ⏸" : ""}
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-50 text-[#e11b22] font-bold text-sm border border-red-200">
              <Trophy className="w-4 h-4 text-[#e11b22]" />
              {score}
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 text-amber-700 font-bold text-sm border border-amber-200">
              <Flame className="w-4 h-4 fill-amber-500 text-amber-500" />
              {streak}x
            </div>
          </div>
        </div>

        {!isGameOver ? (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 text-center">
                  Động từ / Tính từ
                </div>
                {leftTiles.map((item) => (
                  <button
                    key={item.id}
                    disabled={matchedIds.includes(item.id)}
                    onClick={() => onPickLeft(item.id)}
                    className={tileClass(
                      matchedIds.includes(item.id),
                      wrongPair?.left === item.id,
                      selectedLeft === item.id
                    )}
                  >
                    {item.text}
                  </button>
                ))}
              </div>

              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 text-center">
                  Danh từ / Cụm kết hợp
                </div>
                {rightTiles.map((item) => (
                  <button
                    key={item.id}
                    disabled={matchedIds.includes(item.id)}
                    onClick={() => onPickRight(item.id)}
                    className={tileClass(
                      matchedIds.includes(item.id),
                      wrongPair?.right === item.id,
                      selectedRight === item.id
                    )}
                  >
                    {item.text}
                  </button>
                ))}
              </div>
            </div>

            {activeDetail && (
              <div className="space-y-3 animate-in fade-in duration-200">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                  ✓ Chính xác! Đồng hồ tạm dừng để bạn đọc giải thích
                </div>
                <CollocationExplainCard item={activeDetail} />
                <div className="flex justify-end">
                  <button
                    onClick={continueAfterDetail}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#e11b22] text-white font-bold text-sm hover:bg-[#b91c1c] transition"
                  >
                    <Play className="w-4 h-4 fill-white" />
                    {matchedIds.length >= pairs.length ? "Xem kết quả" : "Tiếp tục"}
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="p-6 rounded-3xl bg-red-50 border border-red-200 space-y-6 text-center">
            <div className="w-16 h-16 rounded-2xl bg-[#e11b22] text-white flex items-center justify-center mx-auto shadow-lg shadow-red-500/30">
              <Trophy className="w-8 h-8" />
            </div>

            <div>
              <h2 className="text-2xl font-black text-slate-900">
                {matchedIds.length === pairs.length ? "Hoàn Thành Thử Thách!" : "Hết giờ!"}
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Nối đúng <b>{matchedIds.length}/{pairs.length}</b> cụm • <b>{score} điểm</b> • chuỗi dài nhất{" "}
                <b>{maxStreak}</b>
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-[#e11b22] text-left">
                Ôn tập {pairs.length} cụm trong ván này:
              </div>
              {pairs.map((p) => (
                <div key={p.id} className="relative">
                  {!matchedIds.includes(p.id) && (
                    <span className="absolute -top-2 right-3 z-10 text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-600 text-white">
                      Chưa nối được
                    </span>
                  )}
                  <CollocationExplainCard item={p} compact />
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={initGame}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#e11b22] text-white font-bold text-sm shadow hover:bg-[#b91c1c] transition"
              >
                <RotateCcw className="w-4 h-4" />
                Chơi lại ván mới ({ROUND_SIZE} cụm mới)
              </button>
              <Link
                href="/games/collocations/quiz"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold text-sm hover:border-[#e11b22] hover:text-[#e11b22] transition"
              >
                <ClipboardCheck className="w-4 h-4" />
                Kiểm tra các cụm đã học
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
