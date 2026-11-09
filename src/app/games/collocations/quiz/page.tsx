"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ClipboardCheck, RotateCcw, XCircle, History } from "lucide-react";
import { COLLOCATIONS, Collocation, getCollocationById } from "@/data/collocations";
import {
  CollocationProgress,
  loadProgress,
  nextQuizAt,
  recordResult,
  saveProgress,
  syncProgressFromSupabase,
} from "@/lib/collocationProgress";
import CollocationExplainCard from "@/components/CollocationExplainCard";

const MAX_QUESTIONS = 15;
const MIN_LEARNED = 4;

type QuestionType = "meaning" | "partner";

interface Question {
  type: QuestionType;
  item: Collocation;
  options: string[];
  answer: string;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const phrase = (c: Collocation) => `${c.left} ${c.right}`;

function buildQuestion(item: Collocation, type: QuestionType): Question {
  if (type === "meaning") {
    const distractors = shuffle(COLLOCATIONS.filter((c) => c.id !== item.id && c.vi !== item.vi))
      .slice(0, 3)
      .map(phrase);
    const answer = phrase(item);
    return { type, item, answer, options: shuffle([answer, ...distractors]) };
  }

  // partner: "___ + right" → chọn vế trái. Loại các từ cũng đúng (alt) và các từ trùng.
  const invalid = new Set([item.left, ...(item.alt ?? [])]);
  COLLOCATIONS.filter((c) => c.right === item.right).forEach((c) => invalid.add(c.left));
  const pool = Array.from(new Set(COLLOCATIONS.map((c) => c.left))).filter((l) => !invalid.has(l));
  const distractors = shuffle(pool).slice(0, 3);
  return { type, item, answer: item.left, options: shuffle([item.left, ...distractors]) };
}

function buildQuiz(p: CollocationProgress): Question[] {
  const learned = Object.entries(p.learned)
    .map(([id, stat]) => ({ item: getCollocationById(id), stat }))
    .filter((x): x is { item: Collocation; stat: typeof x.stat } => !!x.item);

  // Ưu tiên cụm hay sai, sau đó trộn ngẫu nhiên.
  const ordered = shuffle(learned).sort(
    (a, b) => b.stat.wrong - b.stat.correct - (a.stat.wrong - a.stat.correct)
  );

  return ordered
    .slice(0, MAX_QUESTIONS)
    .map((x, i) => buildQuestion(x.item, i % 2 === 0 ? "meaning" : "partner"));
}

export default function CollocationQuizPage() {
  const [progress, setProgress] = useState<CollocationProgress | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);

  const start = () => {
    const p = loadProgress();
    setProgress(p);
    setQuestions(buildQuiz(p));
    setIndex(0);
    setPicked(null);
    setCorrectCount(0);
    setFinished(false);
  };

  useEffect(() => {
    syncProgressFromSupabase().then(() => {
      start();
    });
  }, []);

  if (!progress) return null;

  const learnedCount = Object.keys(progress.learned).length;

  if (learnedCount < MIN_LEARNED) {
    return (
      <div className="max-w-2xl mx-auto space-y-6 pb-12">
        <Link href="/games/collocations" className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-600 hover:text-[#e11b22]">
          <ArrowLeft className="w-4 h-4" /> Quay lại game
        </Link>
        <div className="p-8 rounded-3xl bg-white border border-slate-200 text-center space-y-3">
          <ClipboardCheck className="w-10 h-10 text-[#e11b22] mx-auto" />
          <h1 className="text-xl font-black text-slate-900">Chưa đủ cụm để kiểm tra</h1>
          <p className="text-sm text-slate-600">
            Bạn cần học ít nhất {MIN_LEARNED} cụm collocation (hiện có {learnedCount}). Hãy chơi thêm vài ván nhé!
          </p>
          <Link
            href="/games/collocations"
            className="inline-block px-5 py-2.5 rounded-xl bg-[#e11b22] text-white text-sm font-bold hover:bg-[#b91c1c]"
          >
            Chơi game Collocation
          </Link>
        </div>
      </div>
    );
  }

  const q = questions[index];

  const choose = (opt: string) => {
    if (picked || !q) return;
    setPicked(opt);
    const ok = opt === q.answer;
    if (ok) setCorrectCount((c) => c + 1);
    saveProgress(recordResult(loadProgress(), q.item.id, ok));
  };

  const next = () => {
    if (index + 1 < questions.length) {
      setIndex(index + 1);
      setPicked(null);
      return;
    }
    // Kết thúc: lưu mốc kiểm tra để bắt đầu chu kỳ 7 ngày mới.
    const now = Date.now();
    const p = loadProgress();
    const updated = {
      ...p,
      lastQuizAt: now,
      lastNotifiedAt: null,
      quizHistory: [...p.quizHistory, { at: now, score: correctCount, total: questions.length }].slice(-20),
    };
    saveProgress(updated);
    setProgress(updated);
    setFinished(true);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 pb-12">
      <div className="flex items-center justify-between">
        <Link href="/games/collocations" className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-600 hover:text-[#e11b22]">
          <ArrowLeft className="w-4 h-4" /> Quay lại game
        </Link>
        <span className="text-xs font-bold px-3 py-1 rounded-full bg-red-50 text-[#e11b22] border border-red-200">
          Kiểm tra định kỳ 7 ngày
        </span>
      </div>

      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
        {!finished && q ? (
          <>
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-black text-slate-900">Bài kiểm tra Collocation</h1>
              <span className="text-sm font-bold text-slate-500">
                Câu {index + 1}/{questions.length}
              </span>
            </div>
            <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
              <div className="h-full bg-[#e11b22] transition-all" style={{ width: `${(index / questions.length) * 100}%` }} />
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              {q.type === "meaning" ? (
                <>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Chọn collocation có nghĩa:
                  </div>
                  <div className="text-lg font-black text-slate-900">“{q.item.vi}”</div>
                </>
              ) : (
                <>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Chọn từ kết hợp tự nhiên nhất:
                  </div>
                  <div className="text-lg font-black text-slate-900">
                    ______ <span className="text-[#e11b22]">{q.item.right}</span>
                  </div>
                  <div className="text-sm text-slate-500 mt-1">({q.item.vi})</div>
                </>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {q.options.map((opt) => {
                const isAnswer = opt === q.answer;
                const isPicked = opt === picked;
                return (
                  <button
                    key={opt}
                    onClick={() => choose(opt)}
                    disabled={!!picked}
                    className={`p-4 rounded-2xl border font-bold text-sm text-left transition flex items-center justify-between gap-2 ${
                      !picked
                        ? "bg-white border-slate-200 text-slate-800 hover:border-[#e11b22]"
                        : isAnswer
                        ? "bg-emerald-50 border-emerald-400 text-emerald-800"
                        : isPicked
                        ? "bg-red-50 border-red-400 text-red-800"
                        : "bg-white border-slate-200 text-slate-400"
                    }`}
                  >
                    {opt}
                    {picked && isAnswer && <CheckCircle2 className="w-4 h-4 shrink-0" />}
                    {picked && isPicked && !isAnswer && <XCircle className="w-4 h-4 shrink-0" />}
                  </button>
                );
              })}
            </div>

            {picked && (
              <div className="space-y-3">
                <CollocationExplainCard item={q.item} />
                <div className="flex justify-end">
                  <button
                    onClick={next}
                    className="px-5 py-2.5 rounded-xl bg-[#e11b22] text-white font-bold text-sm hover:bg-[#b91c1c]"
                  >
                    {index + 1 < questions.length ? "Câu tiếp theo" : "Xem kết quả"}
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center space-y-5">
            <ClipboardCheck className="w-12 h-12 text-[#e11b22] mx-auto" />
            <div>
              <h2 className="text-2xl font-black text-slate-900">
                Kết quả: {correctCount}/{questions.length}
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Bài kiểm tra tiếp theo:{" "}
                <b>{nextQuizAt(progress) ? new Date(nextQuizAt(progress)!).toLocaleDateString("vi-VN") : "—"}</b>
              </p>
            </div>

            {progress.quizHistory.length > 0 && (
              <div className="text-left p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500">
                  <History className="w-3.5 h-3.5" /> Lịch sử kiểm tra
                </div>
                {[...progress.quizHistory].reverse().slice(0, 6).map((h) => (
                  <div key={h.at} className="flex justify-between text-sm">
                    <span className="text-slate-600">{new Date(h.at).toLocaleDateString("vi-VN")}</span>
                    <span className="font-bold text-slate-900">
                      {h.score}/{h.total}
                    </span>
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={start}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold text-sm hover:border-[#e11b22] hover:text-[#e11b22]"
              >
                <RotateCcw className="w-4 h-4" /> Làm lại
              </button>
              <Link
                href="/games/collocations"
                className="px-5 py-2.5 rounded-xl bg-[#e11b22] text-white font-bold text-sm hover:bg-[#b91c1c]"
              >
                Học thêm cụm mới
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
