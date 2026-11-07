"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
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
  Repeat
} from "lucide-react";

const LESSON_DATA = {
  id: "family-excursions",
  title: "Family Excursions",
  section: "Section 1",
  audioUrl: "https://suijm9clouobj.vcdn.cloud/PRIVATE/MEDIA/2eabf966-f2a9-4bb2-982e-5d513fa3fb1f.mp3",
  sentences: [
    {
      id: 1,
      text: "Hi. Can I help you?",
      translation: "Xin chào. Tôi có thể giúp gì cho anh?",
      difficulty: "EASY",
    },
    {
      id: 2,
      text: "Yes, I'd like to find out about excursions for my family.",
      translation: "Vâng, tôi muốn tìm hiểu về các chuyến tham quan cho gia đình tôi.",
      difficulty: "EASY",
    },
    {
      id: 3,
      text: "Certainly. We have several options available this week.",
      translation: "Chắc chắn rồi. Chúng tôi có một vài lựa chọn trong tuần này.",
      difficulty: "EASY",
    },
    {
      id: 4,
      text: "Could you tell me what excursions are suitable for children?",
      translation: "Cô có thể cho tôi biết những chuyến tham quan nào phù hợp với trẻ em không?",
      difficulty: "HARD",
    },
    {
      id: 5,
      text: "Well, the animal park is always very popular with younger kids.",
      translation: "À, công viên động vật luôn luôn rất được các em nhỏ yêu thích.",
      difficulty: "HARD",
    }
  ]
};

export default function DictationStudioPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [isLooping, setIsLooping] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentSentence = LESSON_DATA.sentences[currentIndex];

  useEffect(() => {
    setUserInput("");
    setIsSubmitted(false);
  }, [currentIndex]);

  const handleTogglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(e => console.log("Audio play error", e));
      setIsPlaying(true);
    }
  };

  const handleReplay = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = 0;
    audioRef.current.play();
    setIsPlaying(true);
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
  };

  const speakWord = (word: string) => {
    if ('speechSynthesis' in window) {
      const cleanWord = word.replace(/[^a-zA-Z]/g, '');
      const utterance = new SpeechSynthesisUtterance(cleanWord);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
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
                  : "bg-red-100 text-red-800 font-bold line-through decoration-red-600"
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
    <div className="max-w-4xl mx-auto space-y-6 pb-12">
      {/* Top Breadcrumb */}
      <div className="flex items-center justify-between">
        <Link
          href="/dictation"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-600 hover:text-[#e11b22] transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Quay lại danh mục bài nghe
        </Link>
        <span className="text-xs font-bold px-3 py-1 rounded-full bg-red-50 text-[#e11b22] border border-red-200">
          Audio VCDN Cloud
        </span>
      </div>

      {/* Main Studio Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div>
            <div className="text-xs font-bold text-[#e11b22] uppercase tracking-wider">{LESSON_DATA.section}</div>
            <h1 className="text-2xl font-black text-slate-900">{LESSON_DATA.title}</h1>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
              Câu {currentIndex + 1} / {LESSON_DATA.sentences.length}
            </span>
            <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
              currentSentence.difficulty === "EASY" ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"
            }`}>
              {currentSentence.difficulty}
            </span>
          </div>
        </div>

        {/* Audio Player Controller (DOL Red Accent) */}
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
          <audio 
            ref={audioRef} 
            src={LESSON_DATA.audioUrl} 
            loop={isLooping}
            onEnded={() => setIsPlaying(false)}
          />

          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-2">
              <button
                onClick={handleTogglePlay}
                className="w-12 h-12 rounded-2xl bg-[#e11b22] text-white flex items-center justify-center hover:bg-[#b91c1c] transition shadow-md shadow-red-500/20 active:scale-95"
              >
                {isPlaying ? <Pause className="w-5 h-5 fill-white" /> : <Play className="w-5 h-5 fill-white ml-0.5" />}
              </button>

              <button
                onClick={handleReplay}
                className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-700 flex items-center justify-center hover:bg-slate-100 transition shadow-sm"
                title="Phát lại từ đầu"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsLooping(!isLooping)}
                className={`w-10 h-10 rounded-xl border flex items-center justify-center transition shadow-sm ${
                  isLooping 
                    ? "bg-red-50 border-red-300 text-[#e11b22] font-bold" 
                    : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100"
                }`}
                title="Lặp lại câu này liên tục"
              >
                <Repeat className="w-4 h-4" />
              </button>
            </div>

            {/* Speed controller */}
            <div className="flex items-center gap-1 bg-white border border-slate-200 rounded-xl p-1 text-xs font-bold shadow-sm">
              {[0.75, 1, 1.25].map((speed) => (
                <button
                  key={speed}
                  onClick={() => handleChangeSpeed(speed)}
                  className={`px-3 py-1 rounded-lg transition ${
                    playbackSpeed === speed ? "bg-[#e11b22] text-white" : "text-slate-600 hover:bg-slate-100"
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
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
            Nhập những gì bạn nghe được (Nhấn Enter để kiểm tra)
          </label>
          <textarea
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleCheck();
              }
            }}
            placeholder="Gõ lại câu tiếng Anh bạn vừa nghe được tại đây..."
            rows={3}
            className="w-full p-4 rounded-2xl border border-slate-300 text-slate-800 text-base focus:outline-none focus:ring-2 focus:ring-[#e11b22] transition resize-none font-medium"
          />

          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-500 font-medium">
              💡 Mẹo: Chuyển sang bàn phím tiếng Anh (Unikey Eng) để gõ chính xác nhất.
            </span>
            <button
              onClick={handleCheck}
              className="px-6 py-2.5 rounded-xl bg-[#e11b22] text-white font-bold text-sm shadow hover:bg-[#b91c1c] transition active:scale-95"
            >
              Kiểm Tra Đáp Án
            </button>
          </div>
        </div>

        {/* Result & Analysis Section */}
        {isSubmitted && (
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 animate-in fade-in duration-300">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Đối chiếu từ vựng (Click vào từ để nghe phát âm)
              </span>
              <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" />
                Đã phân tích
              </span>
            </div>

            {renderDiff()}

            <div className="pt-3 border-t border-slate-200 space-y-1">
              <span className="text-xs font-bold text-slate-500">Dịch nghĩa tiếng Việt:</span>
              <p className="text-sm font-semibold text-slate-800">{currentSentence.translation}</p>
            </div>

            {/* Shadowing Practice */}
            <div className="pt-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => speakWord(currentSentence.text)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-100 transition shadow-sm"
              >
                <Volume2 className="w-4 h-4 text-[#e11b22]" />
                Phát âm cả câu
              </button>

              <button
                onClick={() => setIsRecording(!isRecording)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition shadow-sm ${
                  isRecording 
                    ? "bg-[#e11b22] text-white animate-pulse" 
                    : "bg-red-50 text-[#e11b22] border border-red-200 hover:bg-red-100"
                }`}
              >
                <Mic className="w-4 h-4" />
                {isRecording ? "Đang ghi âm Shadowing..." : "Luyện Shadowing (Nhại giọng)"}
              </button>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <button
            disabled={currentIndex === 0}
            onClick={() => setCurrentIndex(currentIndex - 1)}
            className="inline-flex items-center gap-1 px-4 py-2 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
          >
            <ChevronLeft className="w-4 h-4" />
            Câu trước
          </button>

          <button
            disabled={currentIndex === LESSON_DATA.sentences.length - 1}
            onClick={() => setCurrentIndex(currentIndex + 1)}
            className="inline-flex items-center gap-1 px-5 py-2.5 rounded-xl bg-[#e11b22] text-white font-bold text-xs hover:bg-[#b91c1c] disabled:opacity-40 disabled:cursor-not-allowed transition shadow-sm"
          >
            Câu tiếp theo
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
