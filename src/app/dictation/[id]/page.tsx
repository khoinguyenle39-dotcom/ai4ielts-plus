"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  Play,
  Pause,
  RotateCcw,
  ArrowLeft,
  ArrowRight,
  Mic,
  Repeat,
  Eye,
  ChevronDown,
  ChevronUp,
  XCircle,
  CheckCircle2,
  Volume2,
} from "lucide-react";
import { getDictationLessonById } from "@/data/dictationData";
import {
  getOrInitLessonProgress,
  updateLessonDictationProgress,
} from "@/lib/dictationProgress";
import { recordDailyStudyVisit } from "@/lib/streakManager";

function cleanWord(w: string): string {
  return String(w || "")
    .toLowerCase()
    .replace(/[^a-z0-9']/g, "");
}

function formatSecToMmSs(sec: number): string {
  const s = Math.max(0, Math.floor(sec || 0));
  const mins = Math.floor(s / 60);
  const rem = s % 60;
  return `${String(mins).padStart(2, "0")}:${String(rem).padStart(2, "0")}`;
}

export default function DictationStudioPage() {
  const params = useParams();
  const lessonId = typeof params?.id === "string" ? params.id : "family-excursions";
  const lessonData = getDictationLessonById(lessonId);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [difficultyMode, setDifficultyMode] = useState<"EASY" | "HARD">("EASY");
  const [userInput, setUserInput] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isEditingBox, setIsEditingBox] = useState(true);
  const [revealAllWords, setRevealAllWords] = useState(false);
  const [scriptOpen, setScriptOpen] = useState(false);
  const [showSentencePicker, setShowSentencePicker] = useState(false);

  // Audio state
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [loopTarget, setLoopTarget] = useState<number>(2); // 1, 2, 3, 0 (0 = vô hạn)
  const [elapsedSec, setElapsedSec] = useState<number>(0);
  const [isListeningMic, setIsListeningMic] = useState(false);

  // Saved state
  const [completedIndices, setCompletedIndices] = useState<number[]>([]);
  const [savedAnswers, setSavedAnswers] = useState<Record<number, string>>({});
  const [draftInputs, setDraftInputs] = useState<Record<number, string>>({});

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const loopCounterRef = useRef<number>(0);

  const currentSentence =
    lessonData.sentences[currentIndex] || lessonData.sentences[0];

  const targetWords = currentSentence.text.trim().split(/\s+/).filter(Boolean);
  const wordCount = targetWords.length;

  const sentenceDurationSec = Math.max(
    1,
    Math.round(((currentSentence.end || 0) - (currentSentence.start || 0)) / 1000)
  );

  // Khôi phục tiến độ đã lưu khi mở bài
  useEffect(() => {
    const prog = getOrInitLessonProgress(lessonData.id);
    setCompletedIndices(prog.completedIndices || []);
    setSavedAnswers(prog.savedAnswers || {});
    setDraftInputs(prog.draftInputs || {});

    const resumeIdx = Math.min(
      Math.max(0, prog.currentIndex || 0),
      lessonData.sentences.length - 1
    );
    setCurrentIndex(resumeIdx);

    const savedAns = prog.savedAnswers?.[resumeIdx];
    const draftAns = prog.draftInputs?.[resumeIdx];

    if (savedAns) {
      setUserInput(savedAns);
      setIsChecked(true);
      setIsEditingBox(false);
    } else {
      setUserInput(draftAns || "");
      setIsChecked(false);
      setIsEditingBox(true);
    }
    setRevealAllWords(false);
    setScriptOpen(false);
    setElapsedSec(0);
  }, [lessonData.id, lessonData.sentences.length]);

  const handleSelectSentence = (nextIdx: number) => {
    const bounded = Math.min(Math.max(0, nextIdx), lessonData.sentences.length - 1);
    setCurrentIndex(bounded);
    setRevealAllWords(false);
    setScriptOpen(false);
    setIsPlaying(false);
    setElapsedSec(0);
    setShowSentencePicker(false);

    const prog = getOrInitLessonProgress(lessonData.id);
    const savedAns = prog.savedAnswers?.[bounded];
    const draftAns = prog.draftInputs?.[bounded];

    if (savedAns) {
      setUserInput(savedAns);
      setIsChecked(true);
      setIsEditingBox(false);
    } else {
      setUserInput(draftAns || "");
      setIsChecked(false);
      setIsEditingBox(true);
      setTimeout(() => textareaRef.current?.focus(), 60);
    }

    updateLessonDictationProgress(lessonData.id, (prev) => ({
      ...prev,
      currentIndex: bounded,
    }));

    if (audioRef.current && lessonData.sentences[bounded]) {
      audioRef.current.pause();
      audioRef.current.currentTime = (lessonData.sentences[bounded].start || 0) / 1000;
    }
  };

  const handleInputChange = (val: string) => {
    setUserInput(val);
    if (isChecked) {
      setIsChecked(false);
    }
    setDraftInputs((prev) => ({ ...prev, [currentIndex]: val }));
    updateLessonDictationProgress(lessonData.id, (prev) => ({
      ...prev,
      currentIndex,
      draftInputs: {
        ...(prev.draftInputs || {}),
        [currentIndex]: val,
      },
    }));
  };

  // Kiểm tra xem câu người dùng gõ đã đúng 100% với câu chuẩn chưa
  const userWords = userInput.trim().split(/\s+/).filter(Boolean);
  const isAllWordsCorrect =
    userWords.length === targetWords.length &&
    targetWords.every((tw, i) => cleanWord(tw) === cleanWord(userWords[i] || ""));

  const handleCheck = () => {
    if (!userInput.trim()) return;
    setIsChecked(true);
    setIsEditingBox(false);
    recordDailyStudyVisit(new Date());

    // Tự động lưu câu đã làm
    const updated = updateLessonDictationProgress(lessonData.id, (prev) => {
      const nextCompleted =
        isAllWordsCorrect && !prev.completedIndices.includes(currentIndex)
          ? [...prev.completedIndices, currentIndex].sort((a, b) => a - b)
          : prev.completedIndices;

      return {
        ...prev,
        currentIndex,
        completedIndices: nextCompleted,
        savedAnswers: {
          ...(prev.savedAnswers || {}),
          [currentIndex]: userInput.trim(),
        },
        draftInputs: {
          ...(prev.draftInputs || {}),
          [currentIndex]: userInput.trim(),
        },
      };
    });

    setCompletedIndices(updated.completedIndices);
    setSavedAnswers(updated.savedAnswers);
  };

  const handleRetry = () => {
    setIsChecked(false);
    setIsEditingBox(true);
    setTimeout(() => {
      textareaRef.current?.focus();
    }, 40);
  };

  // Điều khiển phát Audio theo đoạn timestamp của câu
  const playCurrentSentenceSlice = (resetToStart = false) => {
    const audio = audioRef.current;
    if (!audio || !currentSentence) return;
    const startSec = (currentSentence.start || 0) / 1000;
    const endSec = (currentSentence.end || 0) / 1000;

    if (
      resetToStart ||
      audio.currentTime < startSec ||
      (endSec > startSec && audio.currentTime >= endSec - 0.1)
    ) {
      audio.currentTime = startSec;
      setElapsedSec(0);
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
      loopCounterRef.current = 1;
      playCurrentSentenceSlice(false);
    }
  };

  const handleReplay = () => {
    loopCounterRef.current = 1;
    playCurrentSentenceSlice(true);
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio || !currentSentence) return;
    const startSec = (currentSentence.start || 0) / 1000;
    const endSec = (currentSentence.end || 0) / 1000;

    const currentElapsed = Math.max(0, audio.currentTime - startSec);
    setElapsedSec(Math.min(sentenceDurationSec, currentElapsed));

    if (endSec > startSec && audio.currentTime >= endSec) {
      if (loopTarget === 0 || loopCounterRef.current < loopTarget) {
        loopCounterRef.current += 1;
        audio.currentTime = startSec;
        setElapsedSec(0);
        audio.play().catch(() => {});
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleCycleSpeed = () => {
    const speeds = [1, 1.25, 0.75, 0.5];
    const nextIdx = (speeds.indexOf(playbackSpeed) + 1) % speeds.length;
    const nextSpeed = speeds[nextIdx];
    setPlaybackSpeed(nextSpeed);
    if (audioRef.current) {
      audioRef.current.playbackRate = nextSpeed;
    }
  };

  const handleCycleLoop = () => {
    const loops = [1, 2, 3, 0]; // 0 = ∞
    const nextIdx = (loops.indexOf(loopTarget) + 1) % loops.length;
    setLoopTarget(loops[nextIdx]);
  };

  // Nhận diện giọng nói qua icon Mic trong ô xám
  const handleMicDictate = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (typeof window === "undefined") return;
    const SpeechRec =
      (
        window as unknown as {
          SpeechRecognition?: new () => unknown;
          webkitSpeechRecognition?: new () => unknown;
        }
      ).SpeechRecognition ||
      (window as unknown as { webkitSpeechRecognition?: new () => unknown })
        .webkitSpeechRecognition;

    if (!SpeechRec) {
      alert("Trình duyệt hiện tại chưa hỗ trợ nhập bằng giọng nói.");
      return;
    }

    try {
      const rec = new SpeechRec() as {
        lang: string;
        interimResults: boolean;
        onresult: (ev: { results: { [k: number]: { [k: number]: { transcript: string } } } }) => void;
        onerror: () => void;
        onend: () => void;
        start: () => void;
      };
      rec.lang = "en-US";
      rec.interimResults = false;
      setIsListeningMic(true);
      rec.onresult = (ev) => {
        const spoken = ev.results?.[0]?.[0]?.transcript || "";
        if (spoken) {
          handleInputChange(userInput ? `${userInput.trim()} ${spoken}` : spoken);
          setIsEditingBox(true);
        }
        setIsListeningMic(false);
      };
      rec.onerror = () => setIsListeningMic(false);
      rec.onend = () => setIsListeningMic(false);
      rec.start();
    } catch {
      setIsListeningMic(false);
    }
  };

  const speakSingleWord = (word: string) => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(word.replace(/[^a-zA-Z0-9']/g, ""));
      utter.lang = "en-GB";
      utter.rate = 0.9;
      window.speechSynthesis.speak(utter);
    }
  };

  // Tạo dòng gợi ý giống hệt ảnh 1:
  // Các từ đúng đầu câu hiện chữ đen bình thường -> Từ đầu tiên bị sai/thiếu hiện màu xanh lá -> Các từ phía sau ẩn thành **** !
  const renderProgressiveHintLine = () => {
    if (revealAllWords || isAllWordsCorrect) {
      return (
        <div className="text-lg sm:text-xl font-medium text-slate-900 tracking-wide">
          {targetWords.map((tw, idx) => (
            <span
              key={idx}
              onClick={() => speakSingleWord(tw)}
              className="text-emerald-600 cursor-pointer hover:underline mr-1.5"
            >
              {tw}
            </span>
          ))}
        </div>
      );
    }

    // Tìm vị trí từ đầu tiên người dùng gõ sai hoặc chưa gõ
    let firstMismatchIdx = targetWords.findIndex(
      (tw, idx) => cleanWord(tw) !== cleanWord(userWords[idx] || "")
    );
    if (firstMismatchIdx === -1) firstMismatchIdx = targetWords.length;

    // Trích dấu câu cuối cùng nếu có (VD: !, ?, .)
    const lastWordRaw = targetWords[targetWords.length - 1] || "";
    const trailingPunctMatch = lastWordRaw.match(/([.!?]+)$/);
    const trailingPunct = trailingPunctMatch ? trailingPunctMatch[1] : "";

    return (
      <div className="text-lg sm:text-xl font-normal text-slate-900 tracking-wide flex flex-wrap items-baseline gap-x-1.5">
        {targetWords.map((tw, idx) => {
          const coreWord = tw.replace(/([.!?]+)$/, "");
          if (idx < firstMismatchIdx) {
            // Từ đã gõ đúng: hiện chữ đen chuẩn
            return (
              <span key={idx} className="text-slate-900">
                {coreWord}
              </span>
            );
          }
          if (idx === firstMismatchIdx) {
            // Từ đầu tiên bị sai: ở chế độ EASY hiện từ gợi ý màu xanh lá; ở chế độ HARD hiện chữ cái đầu + ***
            const hintDisplay =
              difficultyMode === "EASY"
                ? coreWord
                : `${coreWord.slice(0, 1)}${"*".repeat(Math.max(2, coreWord.length - 1))}`;
            return (
              <span
                key={idx}
                onClick={() => speakSingleWord(coreWord)}
                className="text-[#16a34a] font-medium cursor-pointer hover:underline"
                title="Bấm để nghe phát âm từ gợi ý này"
              >
                {hintDisplay}
              </span>
            );
          }
          return null;
        })}

        {firstMismatchIdx < targetWords.length - 1 && (
          <span className="text-slate-800 select-none">****</span>
        )}

        {trailingPunct && <span className="text-slate-900">{trailingPunct}</span>}
      </div>
    );
  };

  const progressRatio = Math.min(
    100,
    Math.max(0, (elapsedSec / sentenceDurationSec) * 100)
  );

  return (
    <div className="max-w-3xl mx-auto space-y-4 py-2 pb-16">
      {/* Thanh quay lại nhỏ gọn phía trên */}
      <div className="flex items-center justify-between text-xs font-bold text-slate-500 px-1">
        <Link
          href="/dictation"
          className="inline-flex items-center gap-1.5 hover:text-[#e11b22] transition"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{lessonData.section}: {lessonData.title}</span>
        </Link>

        <button
          type="button"
          onClick={() => setShowSentencePicker((v) => !v)}
          className="inline-flex items-center gap-1.5 text-slate-600 hover:text-[#e11b22] cursor-pointer"
        >
          <span className="w-2 h-2 rounded-full bg-[#e11b22]" />
          <span>
            Đã lưu {completedIndices.length}/{lessonData.sentences.length} câu (Chọn câu nhanh)
          </span>
        </button>
      </div>

      {/* Bảng chọn câu nhanh khi bấm vào "Chọn câu nhanh" */}
      {showSentencePicker && (
        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-wrap gap-1.5">
          {lessonData.sentences.map((s, idx) => {
            const isDone = completedIndices.includes(idx);
            const hasSaved = Boolean(savedAnswers[idx] || draftInputs[idx]);
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => handleSelectSentence(idx)}
                className={`w-8 h-8 rounded-lg text-xs font-bold transition cursor-pointer ${
                  idx === currentIndex
                    ? "bg-[#e11b22] text-white"
                    : isDone
                    ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                    : hasSaved
                    ? "bg-amber-50 text-amber-800 border border-amber-300"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      )}

      {/* ===================================================================== */}
      {/* CARD CHÍNH GIỐNG HỆT ẢNH 1                                             */}
      {/* ===================================================================== */}
      <div className="rounded-2xl bg-white border border-slate-200 shadow-xs p-5 sm:p-7 space-y-6">
        <audio
          ref={audioRef}
          src={lessonData.audioUrl}
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => setIsPlaying(false)}
        />

        {/* HÀNG 1: ← Câu 14/50 →  4 từ                     [ EASY | HARD ] */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              type="button"
              disabled={currentIndex === 0}
              onClick={() => handleSelectSentence(currentIndex - 1)}
              className="p-1 text-slate-500 hover:text-slate-900 disabled:opacity-30 transition cursor-pointer"
              aria-label="Câu trước"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            <span className="text-sm sm:text-base font-bold text-slate-800">
              Câu {currentIndex + 1}/{lessonData.sentences.length}
            </span>

            <button
              type="button"
              disabled={currentIndex >= lessonData.sentences.length - 1}
              onClick={() => handleSelectSentence(currentIndex + 1)}
              className="p-1 text-slate-500 hover:text-slate-900 disabled:opacity-30 transition cursor-pointer"
              aria-label="Câu tiếp theo"
            >
              <ArrowRight className="w-4 h-4" />
            </button>

            <span className="text-sm text-slate-500 font-normal pl-1">
              {wordCount} từ
            </span>
          </div>

          {/* Nút chuyển EASY / HARD giống hệt ảnh 1 */}
          <div className="inline-flex items-center rounded-xl border border-slate-200 p-1 bg-white">
            <button
              type="button"
              onClick={() => setDifficultyMode("EASY")}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                difficultyMode === "EASY"
                  ? "bg-slate-100 text-slate-900"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              EASY
            </button>
            <button
              type="button"
              onClick={() => setDifficultyMode("HARD")}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                difficultyMode === "HARD"
                  ? "bg-slate-100 text-slate-900"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              HARD
            </button>
          </div>
        </div>

        {/* HÀNG 2: [▶] [↺]  ─────────────────  00:00/00:01  [1x] [⇄2] */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Nút Play tròn đỏ */}
          <button
            type="button"
            onClick={handleTogglePlay}
            className="w-11 h-11 rounded-full bg-[#dc2626] hover:bg-[#b91c1c] text-white flex items-center justify-center shrink-0 transition shadow-xs cursor-pointer"
            aria-label={isPlaying ? "Tạm dừng" : "Phát"}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 fill-white" />
            ) : (
              <Play className="w-5 h-5 fill-white ml-0.5" />
            )}
          </button>

          {/* Nút Replay tròn trắng */}
          <button
            type="button"
            onClick={handleReplay}
            className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center shrink-0 transition cursor-pointer"
            title="Phát lại câu này từ đầu"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          {/* Thanh tiến độ xám */}
          <div className="flex-1 h-2 rounded-full bg-slate-200 overflow-hidden">
            <div
              className="h-full bg-[#dc2626] transition-all duration-150"
              style={{ width: `${progressRatio}%` }}
            />
          </div>

          {/* Thời gian 00:00/00:01 */}
          <div className="text-xs font-medium shrink-0 select-none">
            <span className="text-slate-700">{formatSecToMmSs(elapsedSec)}</span>
            <span className="text-slate-400">/{formatSecToMmSs(sentenceDurationSec)}</span>
          </div>

          {/* Nút tốc độ 1x tròn */}
          <button
            type="button"
            onClick={handleCycleSpeed}
            className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-900 font-bold text-xs flex items-center justify-center shrink-0 transition cursor-pointer"
            title="Đổi tốc độ phát"
          >
            {playbackSpeed}x
          </button>

          {/* Nút lặp lại ⇄2 tròn */}
          <button
            type="button"
            onClick={handleCycleLoop}
            className="relative w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center shrink-0 transition cursor-pointer"
            title="Số lần tự động lặp lại câu"
          >
            <Repeat className="w-4 h-4" />
            <span className="text-[9px] font-black absolute bottom-1.5 right-2">
              {loopTarget === 0 ? "∞" : loopTarget}
            </span>
          </button>
        </div>

        {/* HÀNG 3: Ô XÁM NHẬP CHÍNH TẢ & TÔ MÀU XANH/ĐỎ TỪNG TỪ + ICON MIC */}
        <div
          onClick={() => {
            if (!isEditingBox) {
              setIsEditingBox(true);
              setTimeout(() => textareaRef.current?.focus(), 30);
            }
          }}
          className="relative rounded-xl bg-[#e9edf2] p-4 min-h-[115px] flex flex-col justify-between cursor-text"
        >
          {isChecked && !isEditingBox ? (
            <div className="flex flex-wrap gap-x-1.5 gap-y-1 text-base sm:text-lg font-normal leading-relaxed pr-8">
              {userWords.map((uw, idx) => {
                const tw = targetWords[idx];
                const isWordRight = tw && cleanWord(uw) === cleanWord(tw);
                return (
                  <span
                    key={idx}
                    className={isWordRight ? "text-[#16a34a]" : "text-[#dc2626]"}
                  >
                    {uw}
                  </span>
                );
              })}
            </div>
          ) : (
            <textarea
              ref={textareaRef}
              value={userInput}
              onChange={(e) => handleInputChange(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleCheck();
                }
              }}
              placeholder="Nhập những gì bạn nghe được..."
              rows={3}
              className="w-full bg-transparent border-0 outline-none resize-none text-base sm:text-lg text-slate-800 placeholder:text-slate-400 pr-8"
            />
          )}

          {/* Icon Microphone ở góc phải dưới của ô xám giống hệt ảnh 1 */}
          <button
            type="button"
            onClick={handleMicDictate}
            title="Đọc bằng giọng nói"
            className={`absolute bottom-3.5 right-3.5 p-1.5 rounded-full transition cursor-pointer ${
              isListeningMic
                ? "bg-red-100 text-[#dc2626] animate-pulse"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            <Mic className="w-5 h-5" />
          </button>
        </div>

        {/* HÀNG 4: THÔNG BÁO ĐÚNG/SAI + DÒNG GỢI Ý **** + 3 NÚT [👁] [Làm lại] [Kiểm tra] */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pt-1">
          {/* Bên trái: Cảnh báo & Dòng gợi ý */}
          <div className="space-y-2 min-h-[52px] flex flex-col justify-center">
            {isChecked && !isAllWordsCorrect && (
              <>
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#e04f16]">
                  <XCircle className="w-4 h-4 fill-[#e04f16] text-white shrink-0" />
                  <span>Chưa đúng! Bạn xem gợi ý để làm lại nhé!</span>
                </div>
                {renderProgressiveHintLine()}
              </>
            )}

            {isChecked && isAllWordsCorrect && (
              <>
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#16a34a]">
                  <CheckCircle2 className="w-4 h-4 fill-[#16a34a] text-white shrink-0" />
                  <span>Chính xác! Hệ thống đã tự động lưu câu này.</span>
                </div>
                {renderProgressiveHintLine()}
              </>
            )}

            {!isChecked && revealAllWords && renderProgressiveHintLine()}
          </div>

          {/* Bên phải: [👁] [Làm lại] [Kiểm tra] */}
          <div className="flex items-center gap-2.5 self-end">
            <button
              type="button"
              onClick={() => setRevealAllWords((v) => !v)}
              className={`w-10 h-9 rounded-lg border flex items-center justify-center transition cursor-pointer ${
                revealAllWords
                  ? "border-slate-400 bg-slate-100 text-slate-900"
                  : "border-slate-200 bg-white hover:bg-slate-50 text-slate-700"
              }`}
              title="Xem / Ẩn toàn bộ từ trong câu"
            >
              <Eye className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={handleRetry}
              className="px-4 h-9 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs transition cursor-pointer"
            >
              Làm lại
            </button>

            {isChecked && isAllWordsCorrect && currentIndex < lessonData.sentences.length - 1 ? (
              <button
                type="button"
                onClick={() => handleSelectSentence(currentIndex + 1)}
                className="px-4 h-9 rounded-lg bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold text-xs transition cursor-pointer"
              >
                Câu tiếp →
              </button>
            ) : (
              <button
                type="button"
                disabled={isChecked && !isEditingBox}
                onClick={handleCheck}
                className={`px-4 h-9 rounded-lg font-bold text-xs transition ${
                  isChecked && !isEditingBox
                    ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                    : "bg-[#dc2626] hover:bg-[#b91c1c] text-white cursor-pointer"
                }`}
              >
                Kiểm tra
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ===================================================================== */}
      {/* CARD PHỤ BÊN DƯỚI: Script, pronunciation & translate                   */}
      {/* ===================================================================== */}
      <div className="rounded-2xl bg-white border border-slate-200 shadow-xs overflow-hidden">
        <button
          type="button"
          onClick={() => setScriptOpen((v) => !v)}
          className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50/70 transition cursor-pointer"
        >
          <span className="font-bold text-sm sm:text-base text-slate-900">
            Script, pronunciation & translate
          </span>
          {scriptOpen ? (
            <ChevronUp className="w-5 h-5 text-slate-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-slate-500" />
          )}
        </button>

        {scriptOpen && (
          <div className="px-6 pb-5 pt-2 border-t border-slate-100 space-y-3 text-sm">
            <div>
              <div className="text-xs font-bold uppercase text-slate-400 mb-1">
                Script (Bấm vào từng từ để nghe phát âm):
              </div>
              <div className="flex flex-wrap gap-1.5 text-base font-semibold text-slate-900">
                {targetWords.map((tw, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => speakSingleWord(tw)}
                    className="px-1.5 py-0.5 rounded hover:bg-red-50 hover:text-[#dc2626] transition cursor-pointer inline-flex items-center gap-1"
                  >
                    <span>{tw}</span>
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => speakSingleWord(currentSentence.text)}
                  className="ml-2 inline-flex items-center gap-1 text-xs font-bold text-[#dc2626] hover:underline cursor-pointer"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  Nghe cả câu
                </button>
              </div>
            </div>

            <div>
              <div className="text-xs font-bold uppercase text-slate-400 mb-0.5">
                Translate (Dịch nghĩa tiếng Việt):
              </div>
              <p className="text-slate-700 font-medium">{currentSentence.translation}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
