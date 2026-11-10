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
  Bookmark,
  BookmarkCheck,
  Save,
} from "lucide-react";
import { getDictationLessonById, ALL_DICTATION_LESSONS } from "@/data/dictationData";
import {
  DICTATION_PROGRESS_EVENT,
  DictationProgressStore,
  getOrInitLessonProgress,
  loadDictationStore,
  toggleBookmarkDictationLesson,
  updateLessonDictationProgress,
} from "@/lib/dictationProgress";
import { recordDailyStudyVisit } from "@/lib/streakManager";

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
  const [savedAnswers, setSavedAnswers] = useState<Record<number, string>>({});
  const [draftInputs, setDraftInputs] = useState<Record<number, string>>({});
  const [bookmarked, setBookmarked] = useState(false);
  const [saveToastText, setSaveToastText] = useState<string>("");
  const [allStore, setAllStore] = useState<DictationProgressStore>({
    lessons: {},
    lastActiveLessonId: null,
  });

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const initializedLessonRef = useRef<string | null>(null);

  const currentSentence =
    lessonData.sentences[currentIndex] || lessonData.sentences[0];

  // Khôi phục bài & các câu đã làm khi mở trang
  useEffect(() => {
    const prog = getOrInitLessonProgress(lessonData.id);
    setCompletedIndices(prog.completedIndices || []);
    setSavedAnswers(prog.savedAnswers || {});
    setDraftInputs(prog.draftInputs || {});
    setBookmarked(Boolean(prog.bookmarked));
    setAllStore(loadDictationStore());

    // Tìm câu đang dừng lại lần trước
    const resumeIdx = Math.min(
      Math.max(0, prog.currentIndex || 0),
      lessonData.sentences.length - 1
    );
    setCurrentIndex(resumeIdx);

    if ((prog.completedIndices || []).includes(resumeIdx)) {
      setUserInput(prog.savedAnswers?.[resumeIdx] || "");
      setIsSubmitted(true);
    } else {
      setUserInput(prog.draftInputs?.[resumeIdx] || "");
      setIsSubmitted(false);
    }

    initializedLessonRef.current = lessonData.id;

    const handleStoreUpdate = () => setAllStore(loadDictationStore());
    window.addEventListener(DICTATION_PROGRESS_EVENT, handleStoreUpdate);
    return () => window.removeEventListener(DICTATION_PROGRESS_EVENT, handleStoreUpdate);
  }, [lessonData.id, lessonData.sentences.length]);

  // Khi chuyển câu trong cùng bài: nạp lại câu đã làm hoặc bản nháp của câu đó
  const handleSelectSentence = (nextIdx: number) => {
    const bounded = Math.min(Math.max(0, nextIdx), lessonData.sentences.length - 1);
    setCurrentIndex(bounded);
    setShowHint(false);
    setIsPlaying(false);

    const prog = getOrInitLessonProgress(lessonData.id);
    if (prog.completedIndices.includes(bounded)) {
      setUserInput(
        prog.savedAnswers?.[bounded] ||
          lessonData.sentences[bounded]?.text ||
          ""
      );
      setIsSubmitted(true);
    } else {
      setUserInput(prog.draftInputs?.[bounded] || "");
      setIsSubmitted(false);
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

  // Tự động lưu bản nháp khi người học đang gõ
  const handleInputChange = (val: string) => {
    setUserInput(val);
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

  const saveCompletedSentence = (answerText: string) => {
    setIsSubmitted(true);
    recordDailyStudyVisit(new Date());

    const updated = updateLessonDictationProgress(lessonData.id, (prev) => {
      const nextCompleted = prev.completedIndices.includes(currentIndex)
        ? prev.completedIndices
        : [...prev.completedIndices, currentIndex].sort((a, b) => a - b);

      return {
        ...prev,
        currentIndex,
        completedIndices: nextCompleted,
        savedAnswers: {
          ...(prev.savedAnswers || {}),
          [currentIndex]: answerText,
        },
        draftInputs: {
          ...(prev.draftInputs || {}),
          [currentIndex]: answerText,
        },
      };
    });

    setCompletedIndices(updated.completedIndices);
    setSavedAnswers(updated.savedAnswers);
    setSaveToastText(`Đã lưu Câu ${currentIndex + 1}/${lessonData.sentences.length}`);
    setTimeout(() => setSaveToastText(""), 2500);
  };

  const handleCheck = () => {
    if (!userInput.trim()) return;
    saveCompletedSentence(userInput.trim());
  };

  const handleToggleBookmark = () => {
    const updated = toggleBookmarkDictationLesson(lessonData.id);
    setBookmarked(updated.bookmarked);
    setSaveToastText(
      updated.bookmarked ? "Đã lưu bài vào danh sách học tiếp!" : "Đã bỏ đánh dấu lưu bài"
    );
    setTimeout(() => setSaveToastText(""), 2500);
  };

  const handleManualSaveProgress = () => {
    updateLessonDictationProgress(lessonData.id, (prev) => ({
      ...prev,
      bookmarked: true,
      currentIndex,
      draftInputs: {
        ...(prev.draftInputs || {}),
        [currentIndex]: userInput,
      },
    }));
    setBookmarked(true);
    setSaveToastText(
      `Đã lưu bài & vị trí Câu ${currentIndex + 1} (${completedIndices.length}/${lessonData.sentences.length} câu đã xong)`
    );
    setTimeout(() => setSaveToastText(""), 3000);
  };

  const handleResetLesson = () => {
    if (!window.confirm("Bạn có chắc muốn xoá các câu đã làm của bài này để chép lại từ đầu?")) {
      return;
    }
    const updated = updateLessonDictationProgress(lessonData.id, (prev) => ({
      ...prev,
      currentIndex: 0,
      completedIndices: [],
      savedAnswers: {},
      draftInputs: {},
    }));
    setCompletedIndices(updated.completedIndices);
    setSavedAnswers({});
    setDraftInputs({});
    setCurrentIndex(0);
    setUserInput("");
    setIsSubmitted(false);
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

  const isLessonAllDone =
    completedIndices.length >= lessonData.sentences.length &&
    lessonData.sentences.length > 0;

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-12">
      {/* Top Breadcrumb & Save Controls */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <Link
          href="/dictation"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-600 hover:text-[#e11b22] transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Quay lại kho 19 bài nghe chép chính tả
        </Link>

        <div className="flex items-center gap-2 flex-wrap">
          {saveToastText && (
            <span className="inline-flex items-center gap-1 text-xs font-black px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 animate-in fade-in">
              <CheckCircle2 className="w-3.5 h-3.5" />
              {saveToastText}
            </span>
          )}

          <button
            type="button"
            onClick={handleManualSaveProgress}
            className="inline-flex items-center gap-1.5 text-xs font-black px-3.5 py-1.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white transition cursor-pointer shadow-xs"
          >
            <Save className="w-3.5 h-3.5" />
            Lưu bài & câu đang làm
          </button>

          <button
            type="button"
            onClick={handleToggleBookmark}
            className={`inline-flex items-center gap-1.5 text-xs font-black px-3.5 py-1.5 rounded-full border transition cursor-pointer ${
              bookmarked
                ? "bg-amber-50 border-amber-300 text-amber-800"
                : "bg-white border-slate-200 text-slate-700 hover:border-[#e11b22]"
            }`}
          >
            {bookmarked ? (
              <>
                <BookmarkCheck className="w-3.5 h-3.5 fill-amber-400 text-amber-600" />
                Đã lưu bài
              </>
            ) : (
              <>
                <Bookmark className="w-3.5 h-3.5" />
                Đánh dấu lưu bài
              </>
            )}
          </button>

          <span
            className={`inline-flex items-center gap-1.5 text-xs font-black px-3 py-1.5 rounded-full border ${
              isLessonAllDone
                ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                : "bg-red-50 text-[#e11b22] border-red-200"
            }`}
          >
            {!isLessonAllDone && (
              <span className="w-2 h-2 rounded-full bg-[#e11b22] animate-ping" />
            )}
            Đã lưu: {completedIndices.length}/{lessonData.sentences.length} câu
          </span>
        </div>
      </div>

      {/* Main Studio Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4 flex-wrap gap-3">
          <div>
            <div className="text-xs font-black text-[#e11b22] uppercase tracking-wider flex items-center gap-2">
              <span>
                {lessonData.section} • {lessonData.level} • Mã: {lessonData.dictationId}
              </span>
              {completedIndices.includes(currentIndex) && (
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black">
                  ✓ Câu này đã làm & đã lưu
                </span>
              )}
            </div>
            <h1 className="text-2xl font-black text-slate-900 mt-0.5">{lessonData.title}</h1>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
              Câu {currentIndex + 1} / {lessonData.sentences.length}
            </span>
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 font-mono">
              {formatMs(currentSentence.start)} – {formatMs(currentSentence.end)}
            </span>
            {completedIndices.length > 0 && (
              <button
                type="button"
                onClick={handleResetLesson}
                className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 hover:bg-red-50 text-slate-500 hover:text-[#e11b22] transition cursor-pointer"
                title="Làm lại bài nghe này từ đầu"
              >
                Làm lại từ đầu
              </button>
            )}
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
                className="w-12 h-12 rounded-2xl bg-[#e11b22] text-white flex items-center justify-center hover:bg-[#b91c1c] transition shadow-md shadow-red-500/20 active:scale-95 cursor-pointer"
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
                className="px-3.5 h-10 rounded-xl bg-white border border-slate-200 text-slate-700 inline-flex items-center gap-1.5 text-xs font-bold hover:bg-slate-100 transition shadow-sm cursor-pointer"
                title="Phát lại câu này từ đầu"
              >
                <RotateCcw className="w-4 h-4" />
                Nghe lại câu ({formatMs(currentSentence.start)})
              </button>

              <button
                onClick={() => setIsLooping(!isLooping)}
                className={`px-3 h-10 rounded-xl border inline-flex items-center gap-1.5 text-xs font-bold transition shadow-sm cursor-pointer ${
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
                  className={`px-3 py-1 rounded-lg transition cursor-pointer ${
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
              Nhập những gì bạn nghe được (Tự động lưu từng chữ & câu đã làm)
            </label>
            <button
              onClick={() => setShowHint(!showHint)}
              className="inline-flex items-center gap-1 text-xs font-bold text-[#e11b22] hover:underline cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5" />
              {showHint ? "Ẩn gợi ý" : "Xem gợi ý nghĩa tiếng Việt"}
            </button>
          </div>

          {showHint && (
            <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-900">
              Nghĩa tiếng Việt: {currentSentence.translation}
            </div>
          )}

          <textarea
            value={userInput}
            onChange={(e) => handleInputChange(e.target.value)}
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

          <div className="flex items-center justify-between flex-wrap gap-2">
            <button
              onClick={() => {
                setUserInput(currentSentence.text);
                saveCompletedSentence(currentSentence.text);
              }}
              className="text-xs font-bold text-slate-500 hover:text-[#e11b22] transition cursor-pointer"
            >
              Hiện đáp án & Lưu hoàn thành câu này
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCheck}
                className="px-6 py-2.5 rounded-xl bg-[#e11b22] text-white font-bold text-sm hover:bg-[#b91c1c] transition shadow-md shadow-red-500/15 cursor-pointer"
              >
                Kiểm tra & Lưu câu này
              </button>
            </div>
          </div>
        </div>

        {/* Diff & Explanation Result */}
        {isSubmitted && (
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 animate-in fade-in duration-200">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Đáp án chuẩn & Phân tích từng từ (Click vào từ để nghe phát âm):
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5" /> Đã lưu câu {currentIndex + 1}
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
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsRecording(!isRecording)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                    isRecording
                      ? "bg-[#e11b22] text-white animate-pulse"
                      : "bg-white border border-slate-200 text-slate-700 hover:border-red-300 hover:text-[#e11b22]"
                  }`}
                >
                  <Mic className="w-4 h-4" />
                  {isRecording ? "Đang thu âm giọng đọc..." : "Luyện đọc Shadowing"}
                </button>

                {currentIndex < lessonData.sentences.length - 1 && (
                  <button
                    onClick={() => handleSelectSentence(currentIndex + 1)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-black transition cursor-pointer"
                  >
                    Sang Câu {currentIndex + 2}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Navigation Footer (Danh sách số thứ tự câu 1..N hiển thị rõ câu đã lưu vs câu chưa làm) */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100 gap-2">
          <button
            disabled={currentIndex === 0}
            onClick={() => handleSelectSentence(currentIndex - 1)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-40 transition cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            Câu trước
          </button>

          <div className="flex items-center gap-1.5 overflow-x-auto max-w-md py-1 px-2">
            {lessonData.sentences.map((s, idx) => {
              const isDone = completedIndices.includes(idx);
              const hasDraft = Boolean(draftInputs[idx]?.trim()) && !isDone;
              return (
                <button
                  key={s.id}
                  onClick={() => handleSelectSentence(idx)}
                  title={
                    isDone
                      ? `Câu ${idx + 1}: Đã làm & Đã lưu`
                      : hasDraft
                      ? `Câu ${idx + 1}: Đang gõ dở (Chưa xong)`
                      : `Câu ${idx + 1}: Chưa làm`
                  }
                  className={`relative w-8 h-8 shrink-0 rounded-lg text-xs font-black transition cursor-pointer ${
                    idx === currentIndex
                      ? "bg-[#e11b22] text-white shadow-sm"
                      : isDone
                      ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                      : hasDraft
                      ? "bg-amber-50 text-amber-800 border border-amber-300"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {idx + 1}
                  {!isDone && idx !== currentIndex && (
                    <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#e11b22]" />
                  )}
                </button>
              );
            })}
          </div>

          <button
            disabled={currentIndex === lessonData.sentences.length - 1}
            onClick={() => handleSelectSentence(currentIndex + 1)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 disabled:opacity-40 transition cursor-pointer"
          >
            Câu tiếp theo
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Quick Lesson Switcher (Có chấm đỏ trên các bài nghe chưa hoàn thành) */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2 text-sm font-black text-slate-900">
            <ListOrdered className="w-4 h-4 text-[#e11b22]" />
            Chuyển nhanh sang bài nghe chép chính tả khác ({ALL_DICTATION_LESSONS.length} bài)
          </div>
          <span className="text-xs text-slate-500 font-semibold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#e11b22] inline-block" /> Chấm đỏ = Bài nghe chưa hoàn thành hết các câu
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {ALL_DICTATION_LESSONS.map((item) => {
            const p = allStore.lessons[item.id];
            const done = p?.completedIndices.length || 0;
            const total = item.sentences.length;
            const isFinished = done >= total && total > 0;
            const isActive = item.id === lessonData.id;

            return (
              <Link
                key={item.id}
                href={`/dictation/${item.id}`}
                className={`relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border transition ${
                  isActive
                    ? "bg-[#e11b22] text-white border-[#e11b22]"
                    : isFinished
                    ? "bg-emerald-50 text-emerald-800 border-emerald-200 hover:border-emerald-400"
                    : "bg-slate-50 text-slate-700 border-slate-200 hover:border-[#e11b22] hover:text-[#e11b22]"
                }`}
              >
                {!isFinished && (
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isActive ? "bg-amber-300" : "bg-[#e11b22]"
                    } shrink-0`}
                  />
                )}
                <span>
                  {item.section}: {item.title} ({done}/{total} câu)
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
