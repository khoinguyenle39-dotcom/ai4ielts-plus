"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { 
  ArrowLeft, 
  Clock, 
  CheckCircle2, 
  X, 
  Layers, 
  BookOpen,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  Award,
  Sparkles,
  ChevronRight
} from "lucide-react";
import { getIELTSTestById, IELTSTestItem, TestQuestion } from "@/data/ieltsTests";

export default function TestRunnerPage() {
  const params = useParams();
  const testId = typeof params?.id === "string" ? params.id : Array.isArray(params?.id) ? params.id[0] : "cam-21-reading-1";

  const testData: IELTSTestItem = useMemo(() => {
    return getIELTSTestById(testId);
  }, [testId]);

  const [activePassageIdx, setActivePassageIdx] = useState(0);
  const currentPassage = testData.passages[activePassageIdx] || testData.passages[0];

  const allQuestions = useMemo(() => {
    return testData.passages.flatMap(p => p.questions);
  }, [testData]);

  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [expandedExplanation, setExpandedExplanation] = useState<Record<number, boolean>>({});
  const [timeLeft, setTimeLeft] = useState(testData.durationMinutes * 60);
  const [score, setScore] = useState<{ correct: number; total: number; band: string } | null>(null);

  // Timer countdown
  useEffect(() => {
    if (isSubmitted) return;
    const timer = setInterval(() => {
      setTimeLeft(t => (t > 0 ? t - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [isSubmitted]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSelectAnswer = (qId: number, val: string) => {
    if (isSubmitted) return;
    setAnswers(prev => ({ ...prev, [qId]: val.trim() }));
  };

  const handleSubmit = () => {
    let correctCount = 0;
    allQuestions.forEach(q => {
      const userAns = (answers[q.id] || "").trim().toLowerCase();
      const correctAns = q.correct.trim().toLowerCase();
      if (userAns === correctAns) {
        correctCount++;
      }
    });

    const ratio = correctCount / (allQuestions.length || 1);
    let band = "4.0";
    if (ratio >= 0.9) band = "9.0";
    else if (ratio >= 0.8) band = "8.0";
    else if (ratio >= 0.7) band = "7.5";
    else if (ratio >= 0.6) band = "6.5";
    else if (ratio >= 0.5) band = "5.5";
    else if (ratio >= 0.4) band = "5.0";

    setScore({ correct: correctCount, total: allQuestions.length, band });
    setIsSubmitted(true);
    setShowExplanation(true);
  };

  const toggleExplain = (qId: number) => {
    setExpandedExplanation(prev => ({
      ...prev,
      [qId]: !prev[qId]
    }));
  };

  const scrollToQuestion = (qId: number) => {
    const el = document.getElementById(`question-card-${qId}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="space-y-4 pb-16 max-w-7xl mx-auto">
      {/* Top Controller Bar */}
      <div className="sticky top-16 z-40 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link
            href="/tests"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-600 hover:text-[#e11b22] transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Kho đề</span>
          </Link>
          <div className="h-4 w-px bg-slate-200 hidden sm:block" />
          <div className="text-xs sm:text-sm font-black text-slate-900 truncate max-w-xs sm:max-w-md">
            {testData.title}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono font-bold text-xs sm:text-sm border ${
            timeLeft < 300 
              ? "bg-red-100 text-[#e11b22] border-red-300 animate-pulse" 
              : "bg-red-50 text-[#e11b22] border-red-200"
          }`}>
            <Clock className="w-4 h-4 text-[#e11b22]" />
            {formatTime(timeLeft)}
          </div>

          {!isSubmitted ? (
            <button
              onClick={handleSubmit}
              className="px-4 sm:px-6 py-2 rounded-xl bg-[#e11b22] text-white font-black text-xs sm:text-sm shadow hover:bg-[#b91c1c] active:scale-95 transition"
            >
              Nộp Bài
            </button>
          ) : (
            <button
              onClick={() => setShowExplanation(!showExplanation)}
              className="px-4 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs sm:text-sm shadow hover:bg-black transition flex items-center gap-1.5"
            >
              <Layers className="w-4 h-4 text-[#e11b22]" />
              {showExplanation ? "Đóng giải thích" : "Xem Linearthinking"}
            </button>
          )}
        </div>
      </div>

      {/* Result Alert if submitted */}
      {isSubmitted && score && (
        <div className="p-6 rounded-3xl bg-gradient-to-r from-[#991b1b] via-[#b91c1c] to-[#e11b22] text-white shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-black/20 border border-white/20">
              <Award className="w-3.5 h-3.5 text-amber-300" />
              Kết quả thi thử chuẩn Cambridge & DOL Tự Học
            </span>
            <h2 className="text-2xl sm:text-3xl font-black mt-1">
              Bạn đạt {score.correct} / {score.total} câu đúng • Ước tính Band {score.band}
            </h2>
            <p className="text-xs sm:text-sm text-red-100 font-medium">
              Đối chiếu từng câu bên dưới để xem phương pháp 4 bước <b>Linearthinking</b> và nhận diện bẫy đề thi thật.
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => {
                setIsSubmitted(false);
                setAnswers({});
                setScore(null);
                setTimeLeft(testData.durationMinutes * 60);
              }}
              className="px-4 py-2.5 rounded-xl bg-black/30 hover:bg-black/50 text-white font-bold text-xs sm:text-sm border border-white/20 transition"
            >
              Làm lại bài
            </button>
          </div>
        </div>
      )}

      {/* Multi-passage Tabs (if test has multiple passages) */}
      {testData.passages.length > 1 && (
        <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white border border-slate-200">
          {testData.passages.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setActivePassageIdx(idx)}
              className={`flex-1 py-2 px-3 rounded-xl text-xs font-black transition ${
                activePassageIdx === idx
                  ? "bg-[#e11b22] text-white shadow-sm"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              Passage {p.passageNumber}: {p.title} ({p.questions.length} câu)
            </button>
          ))}
        </div>
      )}

      {/* Question Navigation Palette */}
      <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-wrap items-center gap-2">
        <span className="text-xs font-black text-slate-500 mr-2 uppercase tracking-wider">
          Bảng câu hỏi ({allQuestions.length} câu):
        </span>
        {allQuestions.map(q => {
          const hasAnswer = !!answers[q.id];
          const isCorrect = isSubmitted && (answers[q.id] || "").trim().toLowerCase() === q.correct.trim().toLowerCase();

          return (
            <button
              key={q.id}
              onClick={() => scrollToQuestion(q.id)}
              className={`w-7 h-7 rounded-lg text-xs font-black transition border flex items-center justify-center ${
                isSubmitted
                  ? isCorrect
                    ? "bg-emerald-500 text-white border-emerald-600"
                    : "bg-[#e11b22] text-white border-red-700"
                  : hasAnswer
                  ? "bg-slate-900 text-white border-slate-900"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-200"
              }`}
            >
              {q.id}
            </button>
          );
        })}
      </div>

      {/* Split Screen Container (IDP / BC Test Interface) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {/* Left Pane: Reading Passage */}
        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col h-[750px] sticky top-36">
          <div className="border-b border-slate-100 pb-3 mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#e11b22]">
              Reading Passage {currentPassage.passageNumber}
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-0.5">
              {currentPassage.title}
            </h2>
            {currentPassage.subtitle && (
              <p className="text-xs text-slate-500 mt-1 italic leading-relaxed">
                {currentPassage.subtitle}
              </p>
            )}
          </div>

          <div className="flex-1 overflow-y-auto pr-3 text-slate-800 leading-relaxed text-sm space-y-4 font-serif">
            {currentPassage.content.map((para, i) => (
              <p key={i} className="text-justify leading-7">
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* Right Pane: Questions & Answer Sheet */}
        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col min-h-[750px]">
          <div className="border-b border-slate-100 pb-3 mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Answer Sheet</span>
            <h3 className="text-base font-black text-slate-900 mt-0.5">
              Questions for Passage {currentPassage.passageNumber} ({currentPassage.questions.length} câu)
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Điền từ hoặc chọn đáp án đúng. Sau khi nộp bài, bấm vào từng câu để xem giải thích 4 bước <b>Linearthinking</b>.
            </p>
          </div>

          <div className="space-y-6">
            {currentPassage.questions.map((q) => {
              const userVal = (answers[q.id] || "").trim();
              const isCorrect = userVal.toLowerCase() === q.correct.trim().toLowerCase();
              const isExpanded = expandedExplanation[q.id] || showExplanation;

              return (
                <div 
                  id={`question-card-${q.id}`}
                  key={q.id}
                  className={`p-5 rounded-2xl border transition ${
                    isSubmitted 
                      ? isCorrect ? "bg-emerald-50/50 border-emerald-300" : "bg-red-50/50 border-red-300"
                      : "bg-slate-50/50 border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className={`w-7 h-7 rounded-xl font-black text-xs flex items-center justify-center shrink-0 ${
                      isSubmitted
                        ? isCorrect ? "bg-emerald-600 text-white" : "bg-[#e11b22] text-white"
                        : "bg-red-100 text-[#e11b22]"
                    }`}>
                      {q.id}
                    </span>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-slate-900 leading-snug">
                        {q.prompt}
                      </p>
                    </div>
                  </div>

                  {/* Input form based on type */}
                  <div className="mt-4 pl-10">
                    {q.type === "TRUE_FALSE_NOT_GIVEN" && (
                      <div className="flex flex-wrap gap-2">
                        {["TRUE", "FALSE", "NOT GIVEN"].map((opt) => (
                          <button
                            key={opt}
                            onClick={() => handleSelectAnswer(q.id, opt)}
                            disabled={isSubmitted}
                            className={`px-4 py-2 rounded-xl text-xs font-black transition border ${
                              answers[q.id] === opt
                                ? "bg-[#e11b22] text-white border-[#e11b22] shadow-sm"
                                : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    )}

                    {q.type === "FILL_IN_BLANK" && (
                      <div className="flex items-center gap-2 max-w-sm">
                        <input
                          type="text"
                          disabled={isSubmitted}
                          value={answers[q.id] || ""}
                          onChange={(e) => handleSelectAnswer(q.id, e.target.value)}
                          placeholder="Nhập câu trả lời..."
                          className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm font-semibold text-slate-900 focus:outline-none focus:border-[#e11b22] focus:ring-2 focus:ring-red-100 bg-white"
                        />
                      </div>
                    )}

                    {q.type === "MULTIPLE_CHOICE" && q.options && (
                      <div className="space-y-2">
                        {q.options.map((opt) => (
                          <button
                            key={opt}
                            onClick={() => handleSelectAnswer(q.id, opt)}
                            disabled={isSubmitted}
                            className={`w-full text-left p-2.5 rounded-xl text-xs font-bold transition border flex items-center justify-between ${
                              answers[q.id] === opt
                                ? "bg-[#e11b22] text-white border-[#e11b22]"
                                : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100"
                            }`}
                          >
                            <span>{opt}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Submission Status */}
                  {isSubmitted && (
                    <div className="mt-4 pl-10 pt-3 border-t border-slate-200/60 flex items-center justify-between">
                      <div className="text-xs font-black flex items-center gap-2">
                        {isCorrect ? (
                          <span className="text-emerald-700 flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4" /> Chính xác! Đáp án: <b>{q.correct}</b>
                          </span>
                        ) : (
                          <span className="text-[#e11b22] flex items-center gap-1.5">
                            <X className="w-4 h-4" /> Sai! Đáp án đúng: <b>{q.correct}</b> (Bạn chọn: {answers[q.id] || "Bỏ trống"})
                          </span>
                        )}
                      </div>

                      <button
                        onClick={() => toggleExplain(q.id)}
                        className="inline-flex items-center gap-1 text-xs font-black text-[#e11b22] hover:underline"
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        {isExpanded ? "Ẩn giải thích" : "Xem giải thích 4 bước"}
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  )}

                  {/* 4-Step Linearthinking Explanation Box */}
                  {isSubmitted && isExpanded && (
                    <div className="mt-4 pl-10 space-y-3 pt-3 border-t border-slate-200 animate-in fade-in duration-200">
                      <div className="text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                        <Layers className="w-4 h-4 text-[#e11b22]" />
                        Phương Pháp Linearthinking 4 Bước
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                        <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1">
                          <span className="font-black text-[#e11b22] uppercase text-[10px]">
                            Bước 1: Phân tích câu hỏi
                          </span>
                          <p className="text-slate-700 leading-relaxed font-medium">
                            {q.explanation.step1}
                          </p>
                        </div>

                        <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1">
                          <span className="font-black text-[#e11b22] uppercase text-[10px]">
                            Bước 2: Định vị thông tin (Locate)
                          </span>
                          <p className="text-slate-700 leading-relaxed font-medium">
                            {q.explanation.step2}
                          </p>
                        </div>

                        <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1">
                          <span className="font-black text-[#e11b22] uppercase text-[10px]">
                            Bước 3: Bóc tách cấu trúc câu (Read S-V-O)
                          </span>
                          <p className="text-slate-700 leading-relaxed font-medium">
                            {q.explanation.step3}
                          </p>
                        </div>

                        <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1">
                          <span className="font-black text-[#e11b22] uppercase text-[10px]">
                            Bước 4: So sánh & Kết luận (Compare)
                          </span>
                          <p className="text-slate-700 leading-relaxed font-medium">
                            {q.explanation.step4}
                          </p>
                        </div>
                      </div>

                      {q.explanation.distractor && (
                        <div className="p-3 rounded-xl bg-red-100/70 border border-red-300 text-xs text-red-900 leading-relaxed font-semibold">
                          {q.explanation.distractor}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
