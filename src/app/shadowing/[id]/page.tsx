"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { 
  INITIAL_SHADOWING_LESSONS, 
  ShadowingLesson, 
  ShadowingSentence 
} from "@/data/shadowingVideos";
import { 
  ArrowLeft, 
  Mic, 
  Square, 
  Play, 
  Pause, 
  Repeat, 
  CheckCircle2, 
  Volume2, 
  Sliders, 
  Sparkles, 
  Award, 
  Share2, 
  Youtube, 
  ChevronRight, 
  ChevronLeft,
  Flame,
  Languages,
  Gauge,
  Radio,
  RotateCcw
} from "lucide-react";

function formatSeconds(sec: number): string {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function ShadowingStudioPage() {
  const params = useParams();
  const router = useRouter();
  const lessonId = params?.id as string;

  const [lesson, setLesson] = useState<ShadowingLesson | null>(null);
  const [currentSentenceIdx, setCurrentSentenceIdx] = useState<number>(0);
  const [completedSentences, setCompletedSentences] = useState<number[]>([]);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1.0);
  const [showViTranslation, setShowViTranslation] = useState<boolean>(true);
  const [isLoopingCurrent, setIsLoopingCurrent] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [autoScroll, setAutoScroll] = useState<boolean>(true);

  // Audio recording state
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [recordedAudioUrl, setRecordedAudioUrl] = useState<string | null>(null);
  const [isPlayingUserAudio, setIsPlayingUserAudio] = useState<boolean>(false);
  const [recordingSeconds, setRecordingSeconds] = useState<number>(0);

  const playerRef = useRef<any>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const userAudioPlayerRef = useRef<HTMLAudioElement | null>(null);
  const recordingTimerRef = useRef<NodeJS.Timeout | null>(null);
  const transcriptListRef = useRef<HTMLDivElement | null>(null);
  const isLoopingRef = useRef<boolean>(false);
  const currentSentenceRef = useRef<ShadowingSentence | null>(null);
  const isSeekingUntilRef = useRef<number>(0);

  isLoopingRef.current = isLoopingCurrent;

  // Load lesson
  useEffect(() => {
    if (!lessonId) return;

    const found = INITIAL_SHADOWING_LESSONS.find(l => l.id === lessonId || l.youtubeId === lessonId);
    if (found) {
      setLesson(found);
    } else {
      const cached = localStorage.getItem(`shadowing_lesson_${lessonId}`);
      if (cached) {
        try {
          setLesson(JSON.parse(cached));
        } catch (e) {
          console.error(e);
        }
      }
    }

    const savedProgress = localStorage.getItem(`shadowing_progress_${lessonId}`);
    if (savedProgress) {
      try {
        setCompletedSentences(JSON.parse(savedProgress));
      } catch (e) {
        console.error(e);
      }
    }
  }, [lessonId]);

  const currentSentence: ShadowingSentence | undefined = lesson?.sentences[currentSentenceIdx];
  currentSentenceRef.current = currentSentence || null;

  // Initialize YouTube IFrame API for Real-Time Synchronization
  useEffect(() => {
    if (!lesson) return;

    // Load YouTube API script if not loaded
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);
    }

    let intervalId: NodeJS.Timeout;

    const onPlayerReady = (event: any) => {
      playerRef.current = event.target;
      playerRef.current.setPlaybackRate(playbackSpeed);

      // Start Real-time synchronization loop (polls every 100ms)
      intervalId = setInterval(() => {
        if (!playerRef.current || typeof playerRef.current.getCurrentTime !== "function") return;

        // Skip polling if user just initiated a seek/rewind command to prevent race conditions
        if (Date.now() < isSeekingUntilRef.current) return;

        const time = playerRef.current.getCurrentTime();
        setCurrentTime(time);

        // Check Loop Mode
        if (isLoopingRef.current && currentSentenceRef.current) {
          const sent = currentSentenceRef.current;
          if (time >= sent.endSec) {
            playerRef.current.seekTo(Math.max(0, sent.startSec - 0.05), true);
            return;
          }
        }

        // Real-time Song-Song Sync: Find matching sentence index based on time
        if (lesson && lesson.sentences && lesson.sentences.length > 0) {
          const matchingIdx = lesson.sentences.findIndex((s, i) => {
            const nextSent = lesson.sentences[i + 1];
            const nextStart = nextSent ? nextSent.startSec : (s.endSec + 1.2);
            return time >= s.startSec && time < nextStart;
          });

          if (matchingIdx !== -1 && matchingIdx !== currentSentenceIdx) {
            setCurrentSentenceIdx(matchingIdx);
            currentSentenceRef.current = lesson.sentences[matchingIdx];

            // Auto-scroll matching sentence into view in transcript sidebar
            if (autoScroll && transcriptListRef.current) {
              const el = document.getElementById(`sentence-card-${matchingIdx}`);
              if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "nearest" });
              }
            }
          }
        }
      }, 100);
    };

    const onPlayerStateChange = (event: any) => {
      if (window.YT) {
        setIsPlaying(event.data === window.YT.PlayerState.PLAYING);
      }
    };

    const setupPlayer = () => {
      try {
        if (playerRef.current && typeof playerRef.current.destroy === "function") {
          playerRef.current.destroy();
        }
        playerRef.current = new window.YT.Player("shadowing-youtube-player", {
          videoId: lesson.youtubeId,
          playerVars: {
            autoplay: 0,
            controls: 1,
            rel: 0,
            modestbranding: 1,
            enablejsapi: 1,
            origin: window.location.origin
          },
          events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
          }
        });
      } catch (err) {
        console.warn("Player init error:", err);
      }
    };

    if (window.YT && window.YT.Player) {
      setupPlayer();
    } else {
      window.onYouTubeIframeAPIReady = setupPlayer;
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
      if (playerRef.current && typeof playerRef.current.destroy === "function") {
        try {
          playerRef.current.destroy();
        } catch (e) {}
      }
    };
  }, [lesson?.youtubeId]);

  // Handle speed change
  const handleSpeedChange = (speed: number) => {
    setPlaybackSpeed(speed);
    if (playerRef.current && typeof playerRef.current.setPlaybackRate === "function") {
      playerRef.current.setPlaybackRate(speed);
    }
  };

  // Jump to exact sentence in YouTube video & rewind immediately
  const jumpToSentence = (idx: number, autoPlay: boolean = true) => {
    if (!lesson || !lesson.sentences || !lesson.sentences[idx]) return;
    const sent = lesson.sentences[idx];

    // Lock interval synchronization for 950ms to allow smooth seek without race conditions
    isSeekingUntilRef.current = Date.now() + 950;

    setCurrentSentenceIdx(idx);
    currentSentenceRef.current = sent;
    setRecordedAudioUrl(null);

    if (playerRef.current && typeof playerRef.current.seekTo === "function") {
      // Seek to exact sentence start with slight 0.05s breath buffer
      const seekTarget = Math.max(0, sent.startSec - 0.05);
      playerRef.current.seekTo(seekTarget, true);
      if (autoPlay && typeof playerRef.current.playVideo === "function") {
        playerRef.current.playVideo();
      }
    }

    // Auto-scroll the clicked sentence into view smoothly
    if (transcriptListRef.current) {
      const el = document.getElementById(`sentence-card-${idx}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };

  // Recording controls
  const handleStartRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) audioChunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" });
        const url = URL.createObjectURL(audioBlob);
        setRecordedAudioUrl(url);
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
      setRecordingSeconds(0);

      recordingTimerRef.current = setInterval(() => {
        setRecordingSeconds(prev => prev + 1);
      }, 1000);
    } catch (err) {
      alert("Vui lòng cho phép quyền truy cập Micro trên trình duyệt để ghi âm nhại giọng!");
    }
  };

  const handleStopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      if (recordingTimerRef.current) {
        clearInterval(recordingTimerRef.current);
        recordingTimerRef.current = null;
      }
    }
  };

  const handlePlayUserAudio = () => {
    if (!recordedAudioUrl) return;

    if (!userAudioPlayerRef.current) {
      userAudioPlayerRef.current = new Audio(recordedAudioUrl);
      userAudioPlayerRef.current.onended = () => setIsPlayingUserAudio(false);
    } else {
      userAudioPlayerRef.current.src = recordedAudioUrl;
    }

    userAudioPlayerRef.current.play();
    setIsPlayingUserAudio(true);
  };

  const toggleSentenceComplete = (sentenceId: number) => {
    setCompletedSentences(prev => {
      const next = prev.includes(sentenceId)
        ? prev.filter(id => id !== sentenceId)
        : [...prev, sentenceId];
      localStorage.setItem(`shadowing_progress_${lessonId}`, JSON.stringify(next));
      return next;
    });
  };

  const progressPercent = lesson ? Math.round((completedSentences.length / lesson.sentences.length) * 100) : 0;

  if (!lesson) {
    return (
      <div className="max-w-4xl mx-auto py-16 text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-red-50 text-[#e11b22] mx-auto flex items-center justify-center font-bold">
          <Volume2 className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-black text-slate-900">Đang tải bài học Shadowing...</h2>
        <Link
          href="/shadowing"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#e11b22] text-white font-bold text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Quay lại kho bài Shadowing
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6 pb-20">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div className="flex items-center gap-3">
          <Link
            href="/shadowing"
            className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-[#e11b22] hover:border-[#e11b22] transition shadow-sm"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-black uppercase tracking-wider text-[#e11b22] bg-red-50 px-2.5 py-0.5 rounded-full border border-red-200">
                {lesson.topic}
              </span>
              <span className="text-xs font-bold text-slate-500">
                {lesson.level}
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-black text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Đồng Bộ Song Song Chữ & Video
              </span>
            </div>
            <h1 className="text-lg sm:text-2xl font-black text-slate-900 line-clamp-1 mt-0.5">
              {lesson.title}
            </h1>
          </div>
        </div>

        {/* Progress Badge */}
        <div className="flex items-center gap-3">
          <div className="bg-white border border-slate-200 px-3.5 py-1.5 rounded-xl shadow-sm flex items-center gap-2">
            <span className="text-xs font-bold text-slate-500">Đã nói trôi chảy:</span>
            <span className="text-xs font-black text-[#e11b22]">
              {completedSentences.length}/{lesson.sentences.length} câu ({progressPercent}%)
            </span>
          </div>
        </div>
      </div>

      {/* Main Studio: Left Video & Live Synced Teleprompter | Right Full Interactive Transcript */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column (7 cols): YouTube Player + Karaoke Subtitle Bar + Studio Controls */}
        <div className="lg:col-span-7 space-y-4">
          {/* YouTube Video Container */}
          <div className="rounded-3xl overflow-hidden bg-black shadow-lg border border-slate-200 aspect-video relative">
            <div id="shadowing-youtube-player" className="w-full h-full" />
          </div>

          {/* REAL-TIME SYNCHRONIZED KARAOKE / TELEPROMPTER SUBTITLE BAR */}
          <div className="rounded-3xl bg-white border-2 border-red-200 p-6 shadow-md space-y-4 relative overflow-hidden">
            {/* Top Indicator */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-xl bg-[#e11b22] text-white font-black text-xs">
                  Câu #{currentSentence?.id || currentSentenceIdx + 1}
                </span>
                <span className="text-xs font-black text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-lg border border-slate-200">
                  {formatSeconds(currentSentence?.startSec || 0)} - {formatSeconds(currentSentence?.endSec || 0)}
                </span>
                {isLoopingCurrent && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-black text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full animate-pulse border border-amber-300">
                    <Repeat className="w-3 h-3" /> Đang lặp lại câu này
                  </span>
                )}
              </div>

              {/* Subtitle Translation Toggle */}
              <button
                onClick={() => setShowViTranslation(!showViTranslation)}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold transition border ${
                  showViTranslation 
                    ? "bg-slate-100 text-slate-800 border-slate-200" 
                    : "bg-white text-slate-400 border-slate-200"
                }`}
              >
                <Languages className="w-3.5 h-3.5" />
                {showViTranslation ? "Bật nghĩa TV" : "Tắt nghĩa TV"}
              </button>
            </div>

            {/* LIVE SONG-SONG SUBTITLE DISPLAY */}
            <div className="p-5 rounded-2xl bg-red-50/60 border border-red-200/80 space-y-2.5 transition">
              <p className="text-xl sm:text-2xl font-black text-slate-900 leading-relaxed tracking-tight">
                "{currentSentence?.en}"
              </p>
              {showViTranslation && currentSentence?.vi && (
                <p className="text-sm font-semibold text-slate-600 border-l-2 border-[#e11b22] pl-3 italic">
                  {currentSentence.vi}
                </p>
              )}
            </div>

            {/* SPEED & LOOP CONTROLS BAR */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-1 text-xs">
              {/* Speed Buttons */}
              <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl">
                <span className="text-[11px] font-bold text-slate-500 px-1.5">Tốc độ:</span>
                {[0.75, 1.0, 1.25].map(speed => (
                  <button
                    key={speed}
                    onClick={() => handleSpeedChange(speed)}
                    className={`px-2.5 py-1 rounded-lg font-black transition ${
                      playbackSpeed === speed 
                        ? "bg-[#e11b22] text-white shadow-sm" 
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {speed}x
                  </button>
                ))}
              </div>

              {/* Loop Current Sentence Toggle */}
              <button
                onClick={() => setIsLoopingCurrent(!isLoopingCurrent)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-bold transition border ${
                  isLoopingCurrent
                    ? "bg-amber-500 text-white border-amber-600 shadow-sm"
                    : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                }`}
              >
                <Repeat className="w-3.5 h-3.5" />
                {isLoopingCurrent ? "Đang Lặp Lại Câu" : "Bật Lặp Lại Câu Này"}
              </button>

              {/* Replay this sentence from start */}
              <button
                onClick={() => jumpToSentence(currentSentenceIdx, true)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-red-50 hover:bg-red-100 text-[#e11b22] font-black transition border border-red-200 shadow-xs active:scale-95"
                title="Tua ngược video về đúng đầu câu này và phát lại ngay"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Tua lại câu này
              </button>
            </div>

            {/* VOICE RECORDING & COMPARISON STUDIO */}
            <div className="pt-3 border-t border-slate-100 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-3">
                {!isRecording ? (
                  <button
                    onClick={handleStartRecording}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#e11b22] text-white font-black text-sm hover:bg-[#b91c1c] transition shadow-md active:scale-95"
                  >
                    <Mic className="w-5 h-5" />
                    Bấm để nói & Ghi âm nhại giọng
                  </button>
                ) : (
                  <button
                    onClick={handleStopRecording}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-amber-600 text-white font-black text-sm hover:bg-amber-700 transition shadow-md animate-pulse active:scale-95"
                  >
                    <Square className="w-5 h-5 fill-white" />
                    Dừng ghi âm ({recordingSeconds}s)
                  </button>
                )}

                {recordedAudioUrl && !isRecording && (
                  <button
                    onClick={handlePlayUserAudio}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-emerald-600 text-white font-black text-sm hover:bg-emerald-700 transition shadow-sm active:scale-95"
                  >
                    <Volume2 className="w-5 h-5" />
                    {isPlayingUserAudio ? "Đang phát..." : "Nghe lại giọng mình"}
                  </button>
                )}
              </div>

              {/* Navigation & Mark Done */}
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      if (currentSentenceIdx > 0) jumpToSentence(currentSentenceIdx - 1, true);
                    }}
                    disabled={currentSentenceIdx === 0}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:border-[#e11b22] hover:text-[#e11b22] disabled:opacity-40 transition active:scale-95"
                    title="Tua ngược video về câu trước đó"
                  >
                    <ChevronLeft className="w-4 h-4" /> Tua lại câu trước
                  </button>
                  <button
                    onClick={() => {
                      if (currentSentenceIdx < lesson.sentences.length - 1) jumpToSentence(currentSentenceIdx + 1, true);
                    }}
                    disabled={currentSentenceIdx === lesson.sentences.length - 1}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:border-[#e11b22] hover:text-[#e11b22] disabled:opacity-40 transition active:scale-95"
                    title="Tua đến câu kế tiếp"
                  >
                    Câu sau <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {currentSentence && (
                  <button
                    onClick={() => toggleSentenceComplete(currentSentence.id)}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition border ${
                      completedSentences.includes(currentSentence.id)
                        ? "bg-emerald-50 text-emerald-700 border-emerald-300"
                        : "bg-slate-50 text-slate-600 border-slate-200 hover:text-slate-900"
                    }`}
                  >
                    <CheckCircle2 className={`w-4 h-4 ${completedSentences.includes(currentSentence.id) ? "text-emerald-600 fill-emerald-100" : "text-slate-400"}`} />
                    {completedSentences.includes(currentSentence.id) ? "Đã nói trôi chảy" : "Đánh dấu đã hoàn thành"}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (5 cols): Complete Segmented Subtitle List with Real-time Sync & Click-to-Jump */}
        <div className="lg:col-span-5 space-y-3">
          <div className="p-4 rounded-3xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <h2 className="text-base font-black text-slate-900">
                Toàn bộ phụ đề ({lesson.sentences.length} câu)
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                Chữ chạy đồng bộ theo video. Click bất kỳ câu nào để video nhảy đến đúng câu đó.
              </p>
            </div>
            <span className="text-xs font-black text-[#e11b22] bg-red-50 px-2.5 py-1 rounded-full border border-red-200 shrink-0">
              {progressPercent}% Xong
            </span>
          </div>

          {/* Scrollable Sentence List with Real-Time Song-Song Active Highlighting */}
          <div 
            ref={transcriptListRef}
            className="max-h-[640px] overflow-y-auto space-y-2.5 pr-1 scroll-smooth"
          >
            {lesson.sentences.map((sent, idx) => {
              const isCurrent = idx === currentSentenceIdx;
              const isDone = completedSentences.includes(sent.id);

              return (
                <div
                  id={`sentence-card-${idx}`}
                  key={sent.id}
                  onClick={() => jumpToSentence(idx, true)}
                  title="Nhấn vào đây để tua ngược video về đúng thời điểm câu này"
                  className={`p-4 rounded-2xl border cursor-pointer transition flex items-start gap-3.5 group ${
                    isCurrent
                      ? "bg-red-50 border-[#e11b22] shadow-md ring-2 ring-red-400/30 scale-[1.01]"
                      : isDone
                      ? "bg-emerald-50/50 border-emerald-200 hover:border-emerald-300"
                      : "bg-white border-slate-200 hover:border-[#e11b22]/50 hover:bg-slate-50/80"
                  }`}
                >
                  <div className="flex flex-col items-center gap-1 shrink-0">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black ${
                      isCurrent
                        ? "bg-[#e11b22] text-white shadow"
                        : isDone
                        ? "bg-emerald-600 text-white"
                        : "bg-slate-100 text-slate-600 group-hover:bg-red-100 group-hover:text-[#e11b22]"
                    }`}>
                      {sent.id}
                    </span>
                    <span className={`text-[10px] font-black px-1.5 py-0.5 rounded transition ${
                      isCurrent ? "bg-red-100 text-[#e11b22]" : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                    }`}>
                      {formatSeconds(sent.startSec)}
                    </span>
                  </div>

                  <div className="flex-1 space-y-1">
                    <p className={`text-sm font-black leading-snug ${isCurrent ? "text-[#e11b22]" : "text-slate-900 group-hover:text-slate-950"}`}>
                      {sent.en}
                    </p>
                    {showViTranslation && (
                      <p className="text-xs text-slate-500 font-medium leading-relaxed">
                        {sent.vi}
                      </p>
                    )}
                  </div>

                  {/* Quick Rewind Action Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      jumpToSentence(idx, true);
                    }}
                    className={`p-1.5 rounded-xl border transition shrink-0 ${
                      isCurrent
                        ? "bg-[#e11b22] text-white border-[#e11b22] shadow-xs"
                        : "bg-slate-50 group-hover:bg-red-50 text-slate-400 group-hover:text-[#e11b22] border-slate-200 group-hover:border-red-200"
                    }`}
                    title="Tua video về câu này và phát ngay"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>

                  {isDone && !isCurrent && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
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
