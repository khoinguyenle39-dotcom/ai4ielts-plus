"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  INITIAL_SHADOWING_LESSONS, 
  SHADOWING_TOPICS, 
  ShadowingLesson 
} from "@/data/shadowingVideos";
import { 
  Mic, 
  Play, 
  Sparkles, 
  Clock, 
  Search, 
  Youtube, 
  ArrowRight, 
  CheckCircle2, 
  Flame, 
  Filter, 
  PlusCircle, 
  Layers, 
  RefreshCw,
  SlidersHorizontal,
  ExternalLink,
  Compass,
  Check
} from "lucide-react";

export default function ShadowingCatalogPage() {
  const router = useRouter();
  const [selectedTopic, setSelectedTopic] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [youtubeInputUrl, setYoutubeInputUrl] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [generateError, setGenerateError] = useState<string | null>(null);
  
  // Topic Auto-Discovery State
  const [discoverTopicId, setDiscoverTopicId] = useState<string>("cooking");
  const [discoverCustomKeyword, setDiscoverCustomKeyword] = useState<string>("");
  const [isDiscovering, setIsDiscovering] = useState<boolean>(false);
  const [discoverResult, setDiscoverResult] = useState<ShadowingLesson | null>(null);
  const [discoverError, setDiscoverError] = useState<string | null>(null);

  const [lessons, setLessons] = useState<ShadowingLesson[]>(INITIAL_SHADOWING_LESSONS);

  // Handle generating lesson from any specific YouTube URL
  const handleGenerateLesson = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!youtubeInputUrl.trim()) return;

    setIsGenerating(true);
    setGenerateError(null);

    try {
      const res = await fetch("/api/shadowing/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: youtubeInputUrl, topicId: selectedTopic !== "all" ? selectedTopic : "daily-life" })
      });

      const data = await res.json();
      if (!data.success) {
        throw new Error(data.error || "Không thể tạo bài học từ link này.");
      }

      localStorage.setItem(`shadowing_lesson_${data.lesson.id}`, JSON.stringify(data.lesson));

      setLessons(prev => {
        if (prev.some(l => l.id === data.lesson.id)) return prev;
        return [data.lesson, ...prev];
      });

      router.push(`/shadowing/${data.lesson.id}`);
    } catch (err: any) {
      setGenerateError(err.message || "Đã xảy ra lỗi khi tạo bài học.");
    } finally {
      setIsGenerating(false);
    }
  };

  // Handle finding and auto-creating lesson from YouTube by Topic / Keyword
  const handleDiscoverByTopic = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsDiscovering(true);
    setDiscoverError(null);
    setDiscoverResult(null);

    try {
      const res = await fetch("/api/shadowing/discover", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          topicId: discoverTopicId, 
          customQuery: discoverCustomKeyword 
        })
      });

      const data = await res.json();
      if (!data.success) {
        throw new Error(data.error || "Không thể tìm thấy video phù hợp.");
      }

      const newLesson = data.lesson;
      localStorage.setItem(`shadowing_lesson_${newLesson.id}`, JSON.stringify(newLesson));

      setLessons(prev => {
        if (prev.some(l => l.id === newLesson.id)) return prev;
        return [newLesson, ...prev];
      });

      setDiscoverResult(newLesson);
    } catch (err: any) {
      setDiscoverError(err.message || "Đã xảy ra lỗi trong quá trình tìm kiếm.");
    } finally {
      setIsDiscovering(false);
    }
  };

  // Filter lessons
  const filteredLessons = lessons.filter(lesson => {
    const matchesTopic = selectedTopic === "all" || lesson.topicId === selectedTopic;
    const matchesSearch = lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          lesson.channelName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          lesson.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTopic && matchesSearch;
  });

  return (
    <div className="space-y-8 pb-16">
      {/* Top Banner: AI4IELTS+ Brand Red with Crisp 100% White Bold Text */}
      <div className="rounded-3xl bg-[#e11b22] text-white p-6 sm:p-10 shadow-xl border border-red-600 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#e11b22] text-xs font-black uppercase tracking-wider shadow-sm">
          <Mic className="w-4 h-4 text-[#e11b22]" />
          Phòng Luyện Nói Shadowing Qua Video YouTube
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          Luyện Nói & Nhại Giọng Bản Xứ Qua Video Thực Tế
        </h1>

        <p className="text-white text-sm sm:text-base leading-relaxed font-semibold max-w-3xl opacity-95">
          Phương pháp <b>Shadowing</b> giúp bứt phá phản xạ nói trôi chảy: Nghe người bản xứ, nhại lại từng câu có phụ đề song ngữ, ghi âm đối chiếu phát âm và tự động sửa ngữ điệu.
        </p>

        {/* Feature Highlights */}
        <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-black">
          <span className="bg-black/25 px-3.5 py-1.5 rounded-full border border-white/20">
            ✓ 14 Chủ đề đa dạng phong phú
          </span>
          <span className="bg-black/25 px-3.5 py-1.5 rounded-full border border-white/20">
            ✓ Tự động tìm kiếm & tạo bài học từ YouTube
          </span>
          <span className="bg-black/25 px-3.5 py-1.5 rounded-full border border-white/20">
            ✓ Ghi âm & đối chiếu giọng nói với người bản xứ
          </span>
        </div>
      </div>

      {/* FEATURE 1: AI TOPIC DISCOVERY & YOUTUBE AUTO-CREATION (Tính năng chọn chủ đề để hệ thống tự tìm YouTube & tạo bài học) */}
      <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-red-50 text-[#e11b22] flex items-center justify-center font-bold border border-red-200 shrink-0">
            <Compass className="w-6 h-6 text-[#e11b22]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg sm:text-xl font-black text-slate-900">
                Khám Phá Theo Chủ Đề: AI Tự Động Lên YouTube Chọn Video & Tạo Bài Mới
              </h2>
              <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                <Sparkles className="w-3 h-3 text-emerald-600" />
                Tự Động 100%
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              Bạn chỉ cần chọn chủ đề mong muốn (Ẩm thực, Du lịch, Công nghệ, Khởi nghiệp, Lịch sử...) hoặc nhập từ khóa riêng. Hệ thống AI4IELTS+ sẽ tự động truy vấn YouTube, chọn video có giọng bản ngữ chuẩn và sinh bài Shadowing phụ đề song ngữ ngay lập tức.
            </p>
          </div>
        </div>

        <form onSubmit={handleDiscoverByTopic} className="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-1">
          {/* Topic Select */}
          <div className="sm:col-span-5">
            <label className="block text-xs font-black uppercase tracking-wider text-slate-600 mb-1.5">
              1. Chọn chủ đề bạn muốn học:
            </label>
            <select
              value={discoverTopicId}
              onChange={(e) => setDiscoverTopicId(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#e11b22]"
            >
              {SHADOWING_TOPICS.filter(t => t.id !== "all").map(t => (
                <option key={t.id} value={t.id}>
                  {t.name}
                </option>
              ))}
            </select>
          </div>

          {/* Optional Keyword */}
          <div className="sm:col-span-4">
            <label className="block text-xs font-black uppercase tracking-wider text-slate-600 mb-1.5">
              2. Từ khóa cụ thể (tùy chọn):
            </label>
            <input
              type="text"
              value={discoverCustomKeyword}
              onChange={(e) => setDiscoverCustomKeyword(e.target.value)}
              placeholder="VD: Gordon Ramsay, Solo travel, AI robots..."
              className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#e11b22]"
            />
          </div>

          {/* Submit Button */}
          <div className="sm:col-span-3 flex items-end">
            <button
              type="submit"
              disabled={isDiscovering}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#e11b22] text-white font-black text-sm hover:bg-[#b91c1c] transition shadow-md active:scale-95 disabled:opacity-60"
            >
              <RefreshCw className={`w-4 h-4 ${isDiscovering ? "animate-spin" : ""}`} />
              {isDiscovering ? "Đang tìm YouTube..." : "🔍 Tìm & Tạo Bài Mới"}
            </button>
          </div>
        </form>

        {discoverError && (
          <p className="text-xs text-[#e11b22] font-bold">{discoverError}</p>
        )}

        {/* Discovery Success Card */}
        {discoverResult && (
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fadeIn">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 font-bold">
                <Check className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-black uppercase text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                  Đã tạo thành công bài học mới
                </span>
                <h3 className="text-sm font-black text-slate-900 line-clamp-1 mt-0.5">
                  {discoverResult.title}
                </h3>
                <p className="text-xs text-slate-600">
                  Kênh: {discoverResult.channelName} • {discoverResult.sentenceCount} câu phụ đề song ngữ
                </p>
              </div>
            </div>

            <Link
              href={`/shadowing/${discoverResult.id}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-black text-xs hover:bg-emerald-700 transition shadow-sm whitespace-nowrap active:scale-95"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              Vào Luyện Bài Này Ngay
            </Link>
          </div>
        )}
      </div>

      {/* FEATURE 2: INSTANT YOUTUBE URL PASTE (Dán link video cụ thể như Brooklyn Kể Chuyện) */}
      <div className="rounded-3xl bg-slate-50 border border-slate-200 p-5 sm:p-6 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Youtube className="w-5 h-5 text-[#e11b22]" />
            <span className="text-xs font-black uppercase tracking-wider text-slate-700">
              Hoặc dán trực tiếp đường dẫn video YouTube có sẵn:
            </span>
          </div>
          <span className="text-[11px] font-bold text-slate-500">
            Hỗ trợ link youtu.be & youtube.com
          </span>
        </div>

        <form onSubmit={handleGenerateLesson} className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={youtubeInputUrl}
            onChange={(e) => setYoutubeInputUrl(e.target.value)}
            placeholder="Dán đường dẫn YouTube vào đây… (VD: https://youtu.be/YYN9wzkeoDU)"
            className="flex-1 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#e11b22]"
          />

          <button
            type="submit"
            disabled={isGenerating || !youtubeInputUrl.trim()}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-black/80 text-white font-black text-xs hover:bg-black transition active:scale-95 disabled:opacity-60 whitespace-nowrap"
          >
            <Play className={`w-3.5 h-3.5 fill-white ${isGenerating ? "animate-spin" : ""}`} />
            {isGenerating ? "Đang xử lý..." : "▶ Tạo từ Link"}
          </button>
        </form>

        {generateError && (
          <p className="text-xs text-[#e11b22] font-bold">{generateError}</p>
        )}
      </div>

      {/* 14 Rich Topics Filter */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-700">
            <SlidersHorizontal className="w-4 h-4 text-[#e11b22]" />
            Khám Phá Toàn Bộ ({SHADOWING_TOPICS.length} Chủ Đề):
          </div>
          <span className="text-xs font-bold text-slate-500">
            {filteredLessons.length} bài học hiển thị
          </span>
        </div>

        {/* Topic Pills */}
        <div className="flex flex-wrap gap-2">
          {SHADOWING_TOPICS.map((topic) => {
            const isSelected = selectedTopic === topic.id;
            return (
              <button
                key={topic.id}
                onClick={() => setSelectedTopic(topic.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition border ${
                  isSelected
                    ? "bg-[#e11b22] text-white border-[#e11b22] shadow-sm font-black"
                    : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                {topic.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Video Lessons Grid (Covers all 14 topics with verified real videos) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLessons.map((lesson) => (
          <div
            key={lesson.id}
            className="rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-[#e11b22] transition overflow-hidden flex flex-col justify-between group"
          >
            {/* Thumbnail Header */}
            <div>
              <div className="relative aspect-video overflow-hidden bg-slate-100">
                <img
                  src={lesson.thumbnailUrl}
                  alt={lesson.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />

                <span className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-md bg-black/75 text-white text-[11px] font-bold">
                  {lesson.duration}
                </span>

                <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-white/95 text-[#e11b22] text-[11px] font-black shadow-sm">
                  {lesson.topic}
                </span>
              </div>

              {/* Body */}
              <div className="p-5 space-y-2.5">
                <div className="flex items-center justify-between text-xs text-slate-500 font-bold">
                  <span className="line-clamp-1">{lesson.channelName}</span>
                  <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 shrink-0">
                    {lesson.sentenceCount} câu
                  </span>
                </div>

                <h3 className="text-base font-black text-slate-900 group-hover:text-[#e11b22] transition line-clamp-2 leading-snug">
                  {lesson.title}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-2 font-medium leading-relaxed">
                  {lesson.description}
                </p>

                <div className="text-[11px] font-bold text-slate-400">
                  Trình độ: <span className="text-slate-700">{lesson.level}</span>
                </div>
              </div>
            </div>

            {/* Action Bottom */}
            <div className="p-5 pt-0">
              <Link
                href={`/shadowing/${lesson.id}`}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#e11b22] text-white font-black text-xs hover:bg-[#b91c1c] transition shadow-sm active:scale-95"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                Vào Luyện Shadowing Ngay
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
