"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  CheckCircle2,
  X,
  Layers,
  BookOpen,
  Headphones,
  Volume2,
  Play,
  Pause,
  RotateCcw,
  FileText,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  Award,
  Sparkles,
} from "lucide-react";
import type { IELTSTestItem } from "@/data/ieltsTests";

function normalizeAnswer(str: string): string {
  return str
    .toLowerCase()
    .replace(/[.,;!?'"’“”]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function isAnswerCorrect(userRaw: string, correctRaw: string): boolean {
  const u = normalizeAnswer(userRaw || "");
  const c = normalizeAnswer(correctRaw || "");
  if (!u || !c) return false;
  if (u === c) return true;

  // Check slash-separated or OR-separated variants (e.g., "10 / ten", "colour / color")
  const variants = correctRaw
    .split(/\s*(?:\/|\bor\b|,)\s*/i)
    .map((v) => v.trim())
    .filter(Boolean);

  for (const v of variants) {
    const normV = normalizeAnswer(v);
    if (u === normV) return true;
    // Strip optional parentheses: "(the) columns" -> "columns" and "the columns"
    const withoutParenContent = normalizeAnswer(v.replace(/\([^)]*\)/g, ""));
    const withParenContent = normalizeAnswer(v.replace(/[()]/g, ""));
    if (withoutParenContent && u === withoutParenContent) return true;
    if (withParenContent && u === withParenContent) return true;
  }

  // Check letter prefix e.g. "C. false beliefs"
  const prefixMatch = correctRaw.match(/^([A-Z])\.\s*(.+)$/i);
  if (prefixMatch) {
    if (u === prefixMatch[1].toLowerCase()) return true;
    if (u === normalizeAnswer(prefixMatch[2])) return true;
  }

  return false;
}

interface TestRunnerClientProps {
  testData: IELTSTestItem;
}

export default function TestRunnerClient({ testData }: TestRunnerClientProps) {
  const isListening = testData.type === "Listening";
  const unitLabel = isListening ? "Part" : "Passage";

  const [activePassageIdx, setActivePassageIdx] = useState(0);
  const [leftTab, setLeftTab] = useState<"CONTENT" | "TRANSCRIPT">("CONTENT");
  const currentPassage = testData.passages[activePassageIdx] || testData.passages[0];

  const allQuestions = useMemo(() => {
    return testData.passages.flatMap((p) => p.questions);
  }, [testData]);

  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [expandedExplanation, setExpandedExplanation] = useState<Record<number, boolean>>({});
  const [timeLeft, setTimeLeft] = useState(testData.durationMinutes * 60);
  const [score, setScore] = useState<{ correct: number; total: number; band: string } | null>(null);

  // Audio player state for Listening tests
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);

  // Reset state when testData changes
  useEffect(() => {
    setActivePassageIdx(0);
    setAnswers({});
    setIsSubmitted(false);
    setShowExplanation(false);
    setExpandedExplanation({});
    setTimeLeft(testData.durationMinutes * 60);
    setScore(null);
    setIsPlaying(false);
    setLeftTab("CONTENT");
  }, [testData.id, testData.durationMinutes]);

  // Reset audio when switching parts
  useEffect(() => {
    setIsPlaying(false);
    setAudioProgress(0);
    setAudioDuration(0);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.playbackRate = playbackRate;
    }
  }, [activePassageIdx, currentPassage?.audioUrl, playbackRate]);

  // Timer countdown
  useEffect(() => {
    if (isSubmitted) return;
    const timer = setInterval(() => {
      setTimeLeft((t) => (t > 0 ? t - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [isSubmitted]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleTogglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const handleSeekAudio = (deltaSec: number) => {
    if (!audioRef.current) return;
    const next = Math.max(0, Math.min(audioDuration || 9999, audioRef.current.currentTime + deltaSec));
    audioRef.current.currentTime = next;
    setAudioProgress(next);
  };

  const handleChangeSpeed = (rate: number) => {
    setPlaybackRate(rate);
    if (audioRef.current) {
      audioRef.current.playbackRate = rate;
    }
  };

  const handleSelectAnswer = (qId: number, val: string) => {
    if (isSubmitted) return;
    setAnswers((prev) => ({ ...prev, [qId]: val }));
  };

  const handleSubmit = () => {
    let correctCount = 0;
    allQuestions.forEach((q) => {
      if (isAnswerCorrect(answers[q.id] || "", q.correct)) {
        correctCount++;
      }
    });

    let band = "3.5";
    if (correctCount >= 39) band = "9.0";
    else if (correctCount >= 37) band = "8.5";
    else if (correctCount >= 35) band = "8.0";
    else if (correctCount >= 32) band = "7.5";
    else if (correctCount >= 30) band = "7.0";
    else if (correctCount >= 26) band = "6.5";
    else if (correctCount >= 23) band = "6.0";
    else if (correctCount >= 18) band = "5.5";
    else if (correctCount >= 15) band = "5.0";
    else if (correctCount >= 13) band = "4.5";
    else if (correctCount >= 10) band = "4.0";

    setScore({ correct: correctCount, total: allQuestions.length, band });
    setIsSubmitted(true);
    setShowExplanation(true);
    if (isListening && currentPassage?.transcript?.length) {
      setLeftTab("TRANSCRIPT");
    }
  };

  const toggleExplain = (qId: number) => {
    setExpandedExplanation((prev) => ({
      ...prev,
      [qId]: !prev[qId],
    }));
  };

  const scrollToQuestion = (qId: number) => {
    const pIdx = testData.passages.findIndex((p) => p.questions.some((q) => q.id === qId));
    if (pIdx !== -1 && pIdx !== activePassageIdx) {
      setActivePassageIdx(pIdx);
    }
    setTimeout(() => {
      const el = document.getElementById(`question-card-${qId}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 120);
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
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-red-50 text-[#e11b22] border border-red-200 text-[11px] font-black uppercase">
              {isListening ? "Listening" : "Reading"}
            </span>
            <div className="text-xs sm:text-sm font-black text-slate-900 truncate max-w-xs sm:max-w-md">
              {testData.title}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono font-bold text-xs sm:text-sm border ${
              timeLeft < 300
                ? "bg-red-100 text-[#e11b22] border-red-300 animate-pulse"
                : "bg-red-50 text-[#e11b22] border-red-200"
            }`}
          >
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

      {/* Listening Audio Player Bar (when test is Listening and audioUrl exists) */}
      {isListening && currentPassage?.audioUrl && (
        <div className="p-4 rounded-2xl bg-slate-900 text-white shadow-md border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <audio
            ref={audioRef}
            src={currentPassage.audioUrl}
            onTimeUpdate={() => {
              if (audioRef.current) setAudioProgress(audioRef.current.currentTime);
            }}
            onLoadedMetadata={() => {
              if (audioRef.current) setAudioDuration(audioRef.current.duration || 0);
            }}
            onEnded={() => setIsPlaying(false)}
          />

          <div className="flex items-center gap-3">
            <button
              onClick={handleTogglePlay}
              className="w-11 h-11 rounded-xl bg-[#e11b22] hover:bg-[#b91c1c] text-white flex items-center justify-center transition shadow-md shrink-0"
              title={isPlaying ? "Tạm dừng" : "Phát Audio"}
            >
              {isPlaying ? <Pause className="w-5 h-5 fill-white" /> : <Play className="w-5 h-5 fill-white ml-0.5" />}
            </button>

            <button
              onClick={() => handleSeekAudio(-5)}
              className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 transition"
              title="Lùi 5 giây"
            >
              -5s
            </button>
            <button
              onClick={() => handleSeekAudio(5)}
              className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 transition"
              title="Tua 5 giây"
            >
              +5s
            </button>

            <div className="min-w-0">
              <div className="text-[11px] font-black text-red-400 uppercase tracking-wider flex items-center gap-1">
                <Headphones className="w-3.5 h-3.5" />
                Audio Part {currentPassage.passageNumber}: {currentPassage.title}
              </div>
              <div className="text-xs text-slate-300 font-mono">
                {formatTime(audioProgress)} / {formatTime(audioDuration)}
              </div>
            </div>
          </div>

          <div className="flex-1 max-w-md">
            <input
              type="range"
              min={0}
              max={audioDuration || 100}
              value={audioProgress}
              onChange={(e) => {
                const val = Number(e.target.value);
                setAudioProgress(val);
                if (audioRef.current) audioRef.current.currentTime = val;
              }}
              className="w-full accent-[#e11b22] cursor-pointer h-2 bg-slate-700 rounded-lg"
            />
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-[11px] text-slate-400 font-bold mr-1">Tốc độ:</span>
            {[0.75, 1, 1.25, 1.5].map((rate) => (
              <button
                key={rate}
                onClick={() => handleChangeSpeed(rate)}
                className={`px-2.5 py-1 rounded-lg text-xs font-black transition ${
                  playbackRate === rate
                    ? "bg-[#e11b22] text-white"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                {rate}x
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Result Alert if submitted */}
      {isSubmitted && score && (
        <div className="p-6 rounded-3xl bg-gradient-to-r from-[#991b1b] via-[#b91c1c] to-[#e11b22] text-white shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-black/20 border border-white/20">
              <Award className="w-3.5 h-3.5 text-amber-300" />
              Kết quả thi thử chuẩn Quốc tế • Hệ thống AI4IELTS+
            </span>
            <h2 className="text-2xl sm:text-3xl font-black mt-1">
              Bạn đạt {score.correct} / {score.total} câu đúng • Ước tính Band {score.band}
            </h2>
            <p className="text-xs sm:text-sm text-red-100 font-medium">
              Đối chiếu từng câu bên dưới để xem phân tích 4 bước <b>Linearthinking</b> và nhận diện bẫy đề thi thật.
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

      {/* Multi-passage / Multi-part Tabs */}
      {testData.passages.length > 1 && (
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-white border border-slate-200">
          {testData.passages.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setActivePassageIdx(idx)}
              className={`flex-1 min-w-[140px] py-2.5 px-3 rounded-xl text-xs font-black transition ${
                activePassageIdx === idx
                  ? "bg-[#e11b22] text-white shadow-sm"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              {unitLabel} {p.passageNumber}: {p.title} ({p.questions.length} câu)
            </button>
          ))}
        </div>
      )}

      {/* Question Navigation Palette grouped by Passage / Part */}
      <div className="p-4 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#e11b22]" />
            <span className="text-xs font-black text-slate-800 uppercase tracking-wider">
              Bảng điều hướng câu hỏi ({allQuestions.length} câu • {testData.passages.length} {unitLabel}s)
            </span>
          </div>
          <span className="text-xs text-slate-500 font-bold bg-slate-100 px-2.5 py-1 rounded-full">
            Đã làm: <b className="text-slate-900">{Object.keys(answers).filter((k) => answers[Number(k)]?.trim()).length}</b> / {allQuestions.length} câu
          </span>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-${Math.min(4, testData.passages.length)} gap-3`}>
          {testData.passages.map((p, pIdx) => (
            <div
              key={p.id}
              className={`p-3 rounded-2xl border transition ${
                activePassageIdx === pIdx
                  ? "bg-red-50/70 border-red-200 ring-2 ring-red-100"
                  : "bg-slate-50/50 border-slate-200 hover:border-slate-300"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <button
                  onClick={() => setActivePassageIdx(pIdx)}
                  className={`text-xs font-black hover:underline flex items-center gap-1 ${
                    activePassageIdx === pIdx ? "text-[#e11b22]" : "text-slate-700"
                  }`}
                >
                  {unitLabel} {p.passageNumber} ({p.questions[0]?.id}–{p.questions[p.questions.length - 1]?.id})
                </button>
                <span className="text-[10px] text-slate-500 font-bold bg-white px-2 py-0.5 rounded-full border border-slate-200">
                  {p.questions.length} câu
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {p.questions.map((q) => {
                  const hasAnswer = !!(answers[q.id] && answers[q.id].trim());
                  const isCorrect = isSubmitted && isAnswerCorrect(answers[q.id] || "", q.correct);
                  return (
                    <button
                      key={q.id}
                      onClick={() => scrollToQuestion(q.id)}
                      className={`w-7 h-7 rounded-lg text-xs font-black transition border flex items-center justify-center ${
                        isSubmitted
                          ? isCorrect
                            ? "bg-emerald-500 text-white border-emerald-600 shadow-sm"
                            : "bg-[#e11b22] text-white border-red-700 shadow-sm"
                          : hasAnswer
                          ? "bg-slate-900 text-white border-slate-900"
                          : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      {q.id}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Split Screen Container (IDP / BC Test Interface) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {/* Left Pane: Reading Passage OR Listening Context & Transcript */}
        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col h-[760px] sticky top-36">
          <div className="border-b border-slate-100 pb-3 mb-4 space-y-2">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#e11b22]">
                {isListening ? `Listening Part ${currentPassage.passageNumber}` : `Reading Passage ${currentPassage.passageNumber}`}
              </span>

              {isListening && currentPassage.transcript && currentPassage.transcript.length > 0 && (
                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
                  <button
                    onClick={() => setLeftTab("CONTENT")}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-black transition ${
                      leftTab === "CONTENT" ? "bg-[#e11b22] text-white shadow-sm" : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Đề bài & Sơ đồ
                  </button>
                  <button
                    onClick={() => setLeftTab("TRANSCRIPT")}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-black transition flex items-center gap-1 ${
                      leftTab === "TRANSCRIPT" ? "bg-[#e11b22] text-white shadow-sm" : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <FileText className="w-3 h-3" />
                    Transcript ({currentPassage.transcript.length})
                  </button>
                </div>
              )}
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              {currentPassage.title}
            </h2>
            {currentPassage.subtitle && (
              <p className="text-xs text-slate-500 italic leading-relaxed">
                {currentPassage.subtitle}
              </p>
            )}
          </div>

          <div className="flex-1 overflow-y-auto pr-3 text-slate-800 leading-relaxed text-sm space-y-4 font-serif">
            {/* Render section images (e.g. Maps / Diagrams) if viewing CONTENT */}
            {leftTab === "CONTENT" && currentPassage.images && currentPassage.images.length > 0 && (
              <div className="space-y-3 pb-2 font-sans">
                {currentPassage.images.map((imgUrl, idx) => (
                  <div key={idx} className="rounded-2xl border border-slate-200 p-3 bg-slate-50">
                    <div className="text-[11px] font-black uppercase text-[#e11b22] mb-2">
                      Sơ đồ / Bản đồ minh họa ({unitLabel} {currentPassage.passageNumber})
                    </div>
                    <img
                      src={imgUrl}
                      alt={`Diagram ${idx + 1}`}
                      className="w-full h-auto rounded-xl object-contain max-h-[420px] mx-auto bg-white"
                    />
                  </div>
                ))}
              </div>
            )}

            {leftTab === "TRANSCRIPT" && currentPassage.transcript && currentPassage.transcript.length > 0 ? (
              <div className="space-y-3 font-sans">
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs font-bold text-[#e11b22]">
                  💡 Transcript hội thoại chuẩn kèm mốc thời gian và phân vai người nói giúp bạn luyện nghe sâu (Deep Listening) và kiểm tra từ khóa.
                </div>
                {currentPassage.transcript.map((line, idx) => {
                  const m = line.match(/^\[(\d{2}:\d{2})\]\s*([^:]+):\s*(.*)$/);
                  if (m) {
                    return (
                      <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm leading-relaxed">
                        <span className="inline-block font-mono font-bold text-[11px] px-2 py-0.5 rounded bg-red-100 text-[#e11b22] mr-2">
                          {m[1]}
                        </span>
                        <span className="font-black text-slate-900 mr-1.5">{m[2]}:</span>
                        <span className="text-slate-700">{m[3]}</span>
                      </div>
                    );
                  }
                  return (
                    <p key={idx} className="text-slate-700 leading-7">
                      {line}
                    </p>
                  );
                })}
              </div>
            ) : (
              currentPassage.content.map((para, i) => {
                const match = para.match(/^\[([A-Z])\]\s*(.*)$/);
                if (match) {
                  return (
                    <p key={i} className="text-justify leading-7">
                      <span className="inline-flex items-center justify-center w-6 h-6 mr-2 rounded-lg bg-red-100 text-[#e11b22] font-sans font-black text-xs shrink-0 select-none">
                        {match[1]}
                      </span>
                      <span>{match[2]}</span>
                    </p>
                  );
                }
                return (
                  <p key={i} className="text-justify leading-7">
                    {para}
                  </p>
                );
              })
            )}
          </div>
        </div>

        {/* Right Pane: Questions & Answer Sheet */}
        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col min-h-[760px]">
          <div className="border-b border-slate-100 pb-3 mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Answer Sheet</span>
            <h3 className="text-base font-black text-slate-900 mt-0.5">
              Questions for {unitLabel} {currentPassage.passageNumber} ({currentPassage.questions.length} câu)
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Điền từ hoặc chọn đáp án đúng. Sau khi nộp bài, bấm vào từng câu để xem giải thích 4 bước <b>Linearthinking</b>.
            </p>
          </div>

          <div className="space-y-6">
            {currentPassage.questions.map((q) => {
              const userVal = (answers[q.id] || "").trim();
              const isCorrect = isAnswerCorrect(userVal, q.correct);
              const isExpanded = expandedExplanation[q.id] || showExplanation;

              return (
                <div
                  id={`question-card-${q.id}`}
                  key={q.id}
                  className={`p-5 rounded-2xl border transition ${
                    isSubmitted
                      ? isCorrect
                        ? "bg-emerald-50/50 border-emerald-300"
                        : "bg-red-50/50 border-red-300"
                      : "bg-slate-50/50 border-slate-200 hover:border-slate-300"
                  }`}
                >
                  {/* Optional Question Image (Map / Diagram) */}
                  {q.imageUrl && (
                    <div className="mb-4 rounded-xl border border-slate-200 p-3 bg-white">
                      <div className="text-[11px] font-black uppercase text-[#e11b22] mb-1.5">
                        Sơ đồ / Hình ảnh cho câu hỏi {q.id}
                      </div>
                      <img
                        src={q.imageUrl}
                        alt={`Question ${q.id} diagram`}
                        className="w-full h-auto rounded-lg object-contain max-h-80 mx-auto"
                      />
                    </div>
                  )}

                  <div className="flex items-start gap-3">
                    <span
                      className={`w-7 h-7 rounded-xl font-black text-xs flex items-center justify-center shrink-0 ${
                        isSubmitted
                          ? isCorrect
                            ? "bg-emerald-600 text-white"
                            : "bg-[#e11b22] text-white"
                          : "bg-red-100 text-[#e11b22]"
                      }`}
                    >
                      {q.id}
                    </span>

                    <div className="flex-1 space-y-3">
                      <p className="text-sm font-bold text-slate-900 leading-snug">{q.prompt}</p>

                      {/* Options or Input based on Question Type */}
                      {q.type === "TRUE_FALSE_NOT_GIVEN" && q.options && (
                        <div className="flex flex-wrap gap-2 pt-1">
                          {q.options.map((opt) => (
                            <button
                              key={opt}
                              onClick={() => handleSelectAnswer(q.id, opt)}
                              disabled={isSubmitted}
                              className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition ${
                                userVal === opt
                                  ? "bg-[#e11b22] text-white border-[#e11b22] shadow-sm"
                                  : "bg-white text-slate-700 border-slate-200 hover:border-red-300"
                              }`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      )}

                      {q.type === "MULTIPLE_CHOICE" && q.options && (
                        <div className="space-y-2 pt-1">
                          {q.options.map((opt) => (
                            <button
                              key={opt}
                              onClick={() => handleSelectAnswer(q.id, opt)}
                              disabled={isSubmitted}
                              className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-bold border transition flex items-center justify-between ${
                                userVal === opt
                                  ? "bg-[#e11b22] text-white border-[#e11b22] shadow-sm"
                                  : "bg-white text-slate-700 border-slate-200 hover:border-red-300"
                              }`}
                            >
                              <span>{opt}</span>
                              {userVal === opt && <CheckCircle2 className="w-4 h-4 shrink-0" />}
                            </button>
                          ))}
                        </div>
                      )}

                      {q.type === "FILL_IN_BLANK" && (
                        <div className="pt-1">
                          <input
                            type="text"
                            placeholder="Nhập câu trả lời..."
                            value={answers[q.id] || ""}
                            onChange={(e) => handleSelectAnswer(q.id, e.target.value)}
                            disabled={isSubmitted}
                            className="w-full sm:w-80 px-4 py-2 rounded-xl border border-slate-300 bg-white text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#e11b22]"
                          />
                        </div>
                      )}

                      {/* Submitted Answer Status & Linearthinking Button */}
                      {isSubmitted && (
                        <div className="pt-3 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center gap-2 text-xs">
                            {isCorrect ? (
                              <span className="inline-flex items-center gap-1 font-black text-emerald-700">
                                <CheckCircle2 className="w-4 h-4" /> Chính xác!
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 font-black text-[#e11b22]">
                                <X className="w-4 h-4" /> Sai ({userVal || "Chưa trả lời"})
                              </span>
                            )}
                            <span className="text-slate-400">•</span>
                            <span className="font-bold text-slate-800">
                              Đáp án đúng: <u className="text-emerald-700 font-black">{q.correct}</u>
                            </span>
                          </div>

                          <button
                            onClick={() => toggleExplain(q.id)}
                            className="inline-flex items-center gap-1 text-xs font-black text-[#e11b22] hover:underline"
                          >
                            <Sparkles className="w-3.5 h-3.5" />
                            {isExpanded ? "Thu gọn" : "Giải thích Linearthinking"}
                            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                          </button>
                        </div>
                      )}

                      {/* 4-Step Linearthinking Explanation Box */}
                      {isSubmitted && isExpanded && (
                        <div className="mt-3 p-4 rounded-2xl bg-white border-2 border-red-200 shadow-sm space-y-3 text-xs animate-in fade-in duration-200">
                          <div className="flex items-center gap-1.5 font-black text-[#e11b22] uppercase tracking-wider border-b border-slate-100 pb-2">
                            <Layers className="w-4 h-4" />
                            Phân Tích Tư Duy 4 Bước Linearthinking
                          </div>

                          <div className="space-y-2.5 text-slate-700 leading-relaxed">
                            <div>
                              <span className="font-black text-slate-900">Bước 1 (Xác định từ khóa & câu hỏi): </span>
                              {q.explanation.step1}
                            </div>
                            <div>
                              <span className="font-black text-slate-900">Bước 2 (Định vị thông tin gốc): </span>
                              <span className="bg-amber-50 px-1.5 py-0.5 rounded text-slate-900 font-medium border border-amber-200">
                                {q.explanation.step2}
                              </span>
                            </div>
                            <div>
                              <span className="font-black text-slate-900">Bước 3 (Simplify & Đối chiếu nghĩa): </span>
                              {q.explanation.step3}
                            </div>
                            {q.explanation.step4 && (
                              <div>
                                <span className="font-black text-emerald-700">Bước 4 (Kết luận đáp án): </span>
                                <span className="font-bold text-slate-900">{q.explanation.step4}</span>
                              </div>
                            )}
                          </div>

                          {q.explanation.distractor && (
                            <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-900 flex items-start gap-2">
                              <AlertCircle className="w-4 h-4 text-[#e11b22] shrink-0 mt-0.5" />
                              <div>
                                <span className="font-black text-[#e11b22]">Cảnh báo Bẫy Đề Thi (Distractor): </span>
                                {q.explanation.distractor}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
