"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  CheckCircle2,
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  Mic,
  Repeat,
  ListOrdered,
  Eye,
} from "lucide-react";
import { getDictationLessonById, ALL_DICTATION_LESSONS } from "@/data/dictationData";

export default function DictationStudioPage() {
  const params = useParams();
  const lessonId = typeof params?.id === "string" ? params.id : "family-excursions";
  const lessonData = getDictationLessonById(lessonId);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [isLooping, setIsLooping] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [completedIndices, setCompletedIndices] = useState<number[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentSentence =
    lessonData.sentences[currentIndex] || lessonData.sentences[0];

  useEffect(() => {
    setUserInput("");
    setIsSubmitted(false);
    setShowHint(false);
    setIsPlaying(false);
    if (audioRef.current && currentSentence) {
      audioRef.current.pause();
      audioRef.current.currentTime = (currentSentence.start || 0) / 1000;
    }
  }, [currentIndex, lessonData.id]);

  const playCurrentSentenceSlice = () => {
    const audio = audioRef.current;
    if (!audio || !currentSentence) return;
    const startSec = (currentSentence.start || 0) / 1000;
    const endSec = (currentSentence.end || 0) / 1000;

    if (
      audio.currentTime < startSec ||
      (endSec > startSec && audio.currentTime >= endSec - 0.15)
    ) {
      audio.currentTime = startSec;
    }
    audio.playbackRate = playbackSpeed;
    audio
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false));
  };

  const handleTogglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      playCurrentSentenceSlice();
    }
  };

  const handleReplay = () => {
    if (!audioRef.current || !currentSentence) return;
    audioRef.current.currentTime = (currentSentence.start || 0) / 1000;
    audioRef.current.playbackRate = playbackSpeed;
    audioRef.current
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false));
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio || !currentSentence) return;
    const startSec = (currentSentence.start || 0) / 1000;
    const endSec = (currentSentence.end || 0) / 1000;

    if (endSec > startSec && audio.currentTime >= endSec) {
      if (isLooping) {
        audio.currentTime = startSec;
        audio.play().catch(() => {});
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleChangeSpeed = (speed: number) => {
    setPlaybackSpeed(speed);
    if (audioRef.current) {
      audioRef.current.playbackRate = speed;
    }
  };

  const handleCheck = () => {
    if (!userInput.trim()) return;
    setIsSubmitted(true);
    if (!completedIndices.includes(currentIndex)) {
      setCompletedIndices((prev) => [...prev, currentIndex]);
    }
  };

  const speakWord = (word: string) => {
    if ("speechSynthesis" in window) {
      const cleanWord = word.replace(/[^a-zA-Z0-9']/g, "");
      const utterance = new SpeechSynthesisUtterance(cleanWord);
      utterance.lang = "en-US";
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  const formatMs = (ms: number) => {
    const totalSec = Math.floor((ms || 0) / 1000);
    const m = Math.floor(totalSec / 60);
    const s = totalSec % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const renderDiff = () => {
    const targetWords = currentSentence.text.split(" ");
    const userWords = userInput.trim().split(/\s+/);

    return (
      <div className="flex flex-wrap gap-2 text-lg">
        {targetWords.map((targetWord, idx) => {
          const cleanTarget = targetWord.toLowerCase().replace(/[^a-z0-9]/g, "");
          const cleanUser = userWords[idx]?.toLowerCase().replace(/[^a-z0-9]/g, "");
          const isCorrect = cleanTarget === cleanUser;

          return (
            <span
              key={idx}
              onClick={() => speakWord(targetWord)}
              className={`cursor-pointer px-2 py-0.5 rounded transition ${
                isCorrect
                  ? "bg-emerald-100 text-emerald-800 font-bold"
                  : "bg-red-100 text-red-800 font-bold underline decoration-red-500"
              }`}
              title="Click để nghe phát âm từ này"
            >
              {targetWord}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-12">
      {/* Top Breadcrumb */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <Link
          href="/dictation"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-600 hover:text-[#e11b22] transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Quay lại kho 19 bài nghe chép chính tả
        </Link>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
            Mã bài: {lessonData.dictationId}
          </span>
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-red-50 text-[#e11b22] border border-red-200">
            Đã hoàn thành: {completedIndices.length}/{lessonData.sentences.length} câu
          </span>
        </div>
      </div>

      {/* Main Studio Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4 flex-wrap gap-3">
          <div>
            <div className="text-xs font-black text-[#e11b22] uppercase tracking-wider">
              {lessonData.section} • {lessonData.level}
            </div>
            <h1 className="text-2xl font-black text-slate-900">{lessonData.title}</h1>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
              Câu {currentIndex + 1} / {lessonData.sentences.length}
            </span>
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 font-mono">
              {formatMs(currentSentence.start)} – {formatMs(currentSentence.end)}
            </span>
            <span
              className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                currentSentence.difficulty === "EASY"
                  ? "bg-emerald-100 text-emerald-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {currentSentence.difficulty}
            </span>
          </div>
        </div>

        {/* Audio Player Controller */}
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
          <audio
            ref={audioRef}
            src={lessonData.audioUrl}
            onTimeUpdate={handleTimeUpdate}
            onEnded={() => setIsPlaying(false)}
          />

          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-2.5">
              <button
                onClick={handleTogglePlay}
                className="w-12 h-12 rounded-2xl bg-[#e11b22] text-white flex items-center justify-center hover:bg-[#b91c1c] transition shadow-md shadow-red-500/20 active:scale-95"
                title="Phát / Tạm dừng câu hiện tại"
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 fill-white" />
                ) : (
                  <Play className="w-5 h-5 fill-white ml-0.5" />
                )}
              </button>

              <button
                onClick={handleReplay}
                className="px-3.5 h-10 rounded-xl bg-white border border-slate-200 text-slate-700 inline-flex items-center gap-1.5 text-xs font-bold hover:bg-slate-100 transition shadow-sm"
                title="Phát lại câu này từ đầu"
              >
                <RotateCcw className="w-4 h-4" />
                Nghe lại câu ({formatMs(currentSentence.start)})
              </button>

              <button
                onClick={() => setIsLooping(!isLooping)}
                className={`px-3 h-10 rounded-xl border inline-flex items-center gap-1.5 text-xs font-bold transition shadow-sm ${
                  isLooping
                    ? "bg-red-50 border-red-300 text-[#e11b22]"
                    : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100"
                }`}
                title="Lặp lại câu này liên tục"
              >
                <Repeat className="w-4 h-4" />
                Auto-Loop
              </button>
            </div>

            {/* Speed controller */}
            <div className="flex items-center gap-1 bg-white border border-slate-200 rounded-xl p-1 text-xs font-bold shadow-sm">
              {[0.75, 1, 1.25].map((speed) => (
                <button
                  key={speed}
                  onClick={() => handleChangeSpeed(speed)}
                  className={`px-3 py-1 rounded-lg transition ${
                    playbackSpeed === speed
                      ? "bg-[#e11b22] text-white"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {speed}x
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Nhập những gì bạn nghe được (Nhấn Enter để kiểm tra)
            </label>
            <button
              onClick={() => setShowHint(!showHint)}
              className="inline-flex items-center gap-1 text-xs font-bold text-[#e11b22] hover:underline"
            >
              <Eye className="w-3.5 h-3.5" />
              {showHint ? "Ẩn gợi ý" : "Xem gợi ý nghĩa tiếng Việt"}
            </button>
          </div>

          {showHint && (
            <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-900">
              💡 Nghĩa tiếng Việt: {currentSentence.translation}
            </div>
          )}

          <textarea
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleCheck();
              }
            }}
            placeholder="Gõ lại câu tiếng Anh bạn vừa nghe..."
            rows={3}
            className="w-full p-4 rounded-2xl border border-slate-200 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#e11b22] text-base font-medium"
          />

          <div className="flex items-center justify-between">
            <button
              onClick={() => {
                setUserInput(currentSentence.text);
                setIsSubmitted(true);
              }}
              className="text-xs font-bold text-slate-500 hover:text-[#e11b22] transition"
            >
              Bỏ qua & Xem đáp án câu này
            </button>

            <button
              onClick={handleCheck}
              className="px-6 py-2.5 rounded-xl bg-[#e11b22] text-white font-bold text-sm hover:bg-[#b91c1c] transition shadow-md shadow-red-500/15"
            >
              Kiểm tra chính tả
            </button>
          </div>
        </div>

        {/* Diff & Explanation Result */}
        {isSubmitted && (
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 animate-in fade-in duration-200">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Đáp án chuẩn & Phân tích từng từ (Click vào từ để nghe phát âm):
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#e11b22]">
                <Volume2 className="w-3.5 h-3.5" /> Click từ bất kỳ để tra âm
              </span>
            </div>

            {renderDiff()}

            <div className="pt-3 border-t border-slate-200 text-sm text-slate-600">
              <span className="font-bold text-slate-800">Dịch nghĩa: </span>
              {currentSentence.translation}
            </div>

            {/* Shadowing Box */}
            <div className="pt-3 border-t border-slate-200 flex items-center justify-between flex-wrap gap-3">
              <div className="text-xs text-slate-500">
                <strong className="text-slate-800">Bước tiếp theo (Shadowing):</strong> Nhấn thu âm và đọc nhại theo tốc độ của người bản xứ.
              </div>
              <button
                onClick={() => setIsRecording(!isRecording)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition ${
                  isRecording
                    ? "bg-[#e11b22] text-white animate-pulse"
                    : "bg-white border border-slate-200 text-slate-700 hover:border-red-300 hover:text-[#e11b22]"
                }`}
              >
                <Mic className="w-4 h-4" />
                {isRecording ? "Đang thu âm giọng đọc..." : "Luyện đọc Shadowing"}
              </button>
            </div>
          </div>
        )}

        {/* Navigation Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <button
            disabled={currentIndex === 0}
            onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-40 transition"
          >
            <ChevronLeft className="w-4 h-4" />
            Câu trước
          </button>

          <div className="flex items-center gap-1.5 overflow-x-auto max-w-md py-1 px-2">
            {lessonData.sentences.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentIndex(idx)}
                className={`w-7 h-7 shrink-0 rounded-lg text-xs font-bold transition ${
                  idx === currentIndex
                    ? "bg-[#e11b22] text-white shadow-sm"
                    : completedIndices.includes(idx)
                    ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>

          <button
            disabled={currentIndex === lessonData.sentences.length - 1}
            onClick={() =>
              setCurrentIndex((prev) =>
                Math.min(lessonData.sentences.length - 1, prev + 1)
              )
            }
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 disabled:opacity-40 transition"
          >
            Câu tiếp theo
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Quick Lesson Switcher */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
        <div className="flex items-center gap-2 text-sm font-black text-slate-900">
          <ListOrdered className="w-4 h-4 text-[#e11b22]" />
          Chuyển nhanh sang bài nghe chép chính tả khác ({ALL_DICTATION_LESSONS.length} bài)
        </div>
        <div className="flex flex-wrap gap-2">
          {ALL_DICTATION_LESSONS.map((item) => (
            <Link
              key={item.id}
              href={`/dictation/${item.id}`}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition ${
                item.id === lessonData.id
                  ? "bg-[#e11b22] text-white border-[#e11b22]"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:border-[#e11b22] hover:text-[#e11b22]"
              }`}
            >
              {item.section}: {item.title} ({item.totalSentences} câu)
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
