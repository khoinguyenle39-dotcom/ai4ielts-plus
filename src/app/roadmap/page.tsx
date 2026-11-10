"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Calendar,
  Clock,
  CheckCircle2,
  Circle,
  ArrowRight,
  Sparkles,
  Target,
  BookOpen,
  Headphones,
  AlertTriangle,
  Award,
  Layers,
  ListChecks,
  Youtube,
  Globe,
  Plus,
  Trash2,
  RotateCcw,
  ExternalLink,
  PenTool,
  Mic,
  CheckSquare,
} from "lucide-react";
import {
  ROADMAP_PHASES,
  SKILL_STRATEGIES,
  DAILY_TIME_BLOCKS,
  WEEKLY_ROTATION_SCHEDULE,
  RECOMMENDED_BOOKS,
  YOUTUBE_CHANNELS,
  PRACTICE_WEBSITES,
  ChecklistTask,
} from "@/data/roadmapData";
import { supabase } from "@/lib/supabase";

const CHECKLIST_STORAGE_KEY = "ai4ielts_roadmap_checklist_v2";
const WEEKLY_CHECK_STORAGE_KEY = "ai4ielts_roadmap_weekly_v2";
const CUSTOM_TASKS_STORAGE_KEY = "ai4ielts_roadmap_custom_tasks_v1";
const KEYWORD_TABLE_STORAGE_KEY = "ai4ielts_keyword_table_v1";

interface CustomChecklistItem {
  id: string;
  phaseId: string;
  category: ChecklistTask["category"];
  title: string;
  targetMetric: string;
}

interface KeywordPair {
  id: string;
  questionWord: string;
  passageParaphrase: string;
  meaningVi: string;
  sourceTest: string;
}

const DEFAULT_KEYWORDS: KeywordPair[] = [
  {
    id: "kw-1",
    questionWord: "a serious threat to marine life",
    passageParaphrase: "endanger ocean ecosystems",
    meaningVi: "đe dọa hệ sinh thái biển",
    sourceTest: "Cam 20 - Test 1",
  },
  {
    id: "kw-2",
    questionWord: "change dramatically",
    passageParaphrase: "undergo a radical transformation",
    meaningVi: "thay đổi mạnh mẽ / toàn diện",
    sourceTest: "Cam 19 - Test 1",
  },
  {
    id: "kw-3",
    questionWord: "financial support from the government",
    passageParaphrase: "state subsidies / public funding",
    meaningVi: "trợ cấp / nguồn vốn nhà nước",
    sourceTest: "Cam 18 - Test 2",
  },
];

export default function RoadmapPage() {
  const [activeTab, setActiveTab] = useState<
    "phases" | "skills" | "schedule" | "resources"
  >("phases");
  const [selectedSkillFilter, setSelectedSkillFilter] = useState<string>("ALL");
  const [activeSkillTab, setActiveSkillTab] = useState<
    "listening" | "reading" | "writing" | "speaking"
  >("listening");

  const [completedTaskIds, setCompletedTaskIds] = useState<string[]>([]);
  const [completedWeeklyIds, setCompletedWeeklyIds] = useState<string[]>([]);
  const [customTasks, setCustomTasks] = useState<CustomChecklistItem[]>([]);
  const [keywordPairs, setKeywordPairs] = useState<KeywordPair[]>(DEFAULT_KEYWORDS);

  // Form thêm mục tiêu cá nhân vào Checklist
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskPhase, setNewTaskPhase] = useState("phase-1");
  const [newTaskCategory, setNewTaskCategory] =
    useState<ChecklistTask["category"]>("Listening");
  const [newTaskMetric, setNewTaskMetric] = useState("Hoàn thành");

  // Form thêm cặp từ vào Keyword Table
  const [kwQuestion, setKwQuestion] = useState("");
  const [kwPassage, setKwPassage] = useState("");
  const [kwMeaning, setKwMeaning] = useState("");
  const [kwSource, setKwSource] = useState("");

  useEffect(() => {
    try {
      const savedTasks = localStorage.getItem(CHECKLIST_STORAGE_KEY);
      if (savedTasks) setCompletedTaskIds(JSON.parse(savedTasks));

      const savedWeekly = localStorage.getItem(WEEKLY_CHECK_STORAGE_KEY);
      if (savedWeekly) setCompletedWeeklyIds(JSON.parse(savedWeekly));

      const savedCustom = localStorage.getItem(CUSTOM_TASKS_STORAGE_KEY);
      if (savedCustom) setCustomTasks(JSON.parse(savedCustom));

      const savedKw = localStorage.getItem(KEYWORD_TABLE_STORAGE_KEY);
      if (savedKw) setKeywordPairs(JSON.parse(savedKw));
    } catch {
      // ignore
    }
  }, []);

  const syncRoadmapToSupabase = async (
    nextTasks: string[],
    nextWeekly: string[]
  ) => {
    try {
      const { data: existing } = await supabase
        .from("user_progress")
        .select("id, completed_tasks")
        .eq("user_id", "default_user")
        .limit(1)
        .maybeSingle();

      const prevArray = Array.isArray(existing?.completed_tasks)
        ? existing.completed_tasks
        : [];
      const firstItem = prevArray[0] && typeof prevArray[0] === "object" ? prevArray[0] : {};

      const updatedPayload = {
        user_id: "default_user",
        completed_tasks: [
          {
            ...firstItem,
            roadmapCompletedIds: nextTasks,
            roadmapWeeklyIds: nextWeekly,
          },
        ],
        last_active: new Date().toISOString(),
      };

      if (existing?.id) {
        await supabase.from("user_progress").update(updatedPayload).eq("id", existing.id);
      } else {
        await supabase.from("user_progress").insert(updatedPayload);
      }
    } catch {
      // offline fallback
    }
  };

  const toggleTask = (taskId: string) => {
    setCompletedTaskIds((prev) => {
      const next = prev.includes(taskId)
        ? prev.filter((id) => id !== taskId)
        : [...prev, taskId];
      localStorage.setItem(CHECKLIST_STORAGE_KEY, JSON.stringify(next));
      void syncRoadmapToSupabase(next, completedWeeklyIds);
      return next;
    });
  };

  const toggleWeeklyItem = (itemId: string) => {
    setCompletedWeeklyIds((prev) => {
      const next = prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId];
      localStorage.setItem(WEEKLY_CHECK_STORAGE_KEY, JSON.stringify(next));
      void syncRoadmapToSupabase(completedTaskIds, next);
      return next;
    });
  };

  const handleAddCustomTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    const item: CustomChecklistItem = {
      id: `custom-${Date.now()}`,
      phaseId: newTaskPhase,
      category: newTaskCategory,
      title: newTaskTitle.trim(),
      targetMetric: newTaskMetric.trim() || "Hoàn thành",
    };
    const next = [...customTasks, item];
    setCustomTasks(next);
    localStorage.setItem(CUSTOM_TASKS_STORAGE_KEY, JSON.stringify(next));
    setNewTaskTitle("");
  };

  const handleDeleteCustomTask = (id: string) => {
    const next = customTasks.filter((t) => t.id !== id);
    setCustomTasks(next);
    localStorage.setItem(CUSTOM_TASKS_STORAGE_KEY, JSON.stringify(next));
  };

  const handleAddKeywordPair = (e: React.FormEvent) => {
    e.preventDefault();
    if (!kwQuestion.trim() || !kwPassage.trim()) return;
    const item: KeywordPair = {
      id: `kw-${Date.now()}`,
      questionWord: kwQuestion.trim(),
      passageParaphrase: kwPassage.trim(),
      meaningVi: kwMeaning.trim() || "Từ đồng nghĩa / Paraphrase",
      sourceTest: kwSource.trim() || "Sổ tay cá nhân",
    };
    const next = [item, ...keywordPairs];
    setKeywordPairs(next);
    localStorage.setItem(KEYWORD_TABLE_STORAGE_KEY, JSON.stringify(next));
    setKwQuestion("");
    setKwPassage("");
    setKwMeaning("");
    setKwSource("");
  };

  const handleDeleteKeywordPair = (id: string) => {
    const next = keywordPairs.filter((k) => k.id !== id);
    setKeywordPairs(next);
    localStorage.setItem(KEYWORD_TABLE_STORAGE_KEY, JSON.stringify(next));
  };

  // Tính toán tổng tiến độ Checklist
  const allBuiltInTasks = ROADMAP_PHASES.flatMap((p) => p.tasks);
  const totalChecklistCount = allBuiltInTasks.length + customTasks.length;
  const doneChecklistCount = [
    ...allBuiltInTasks.map((t) => t.id),
    ...customTasks.map((t) => t.id),
  ].filter((id) => completedTaskIds.includes(id)).length;
  const progressPercent =
    totalChecklistCount > 0
      ? Math.round((doneChecklistCount / totalChecklistCount) * 100)
      : 0;

  const totalWeeklyCount = WEEKLY_ROTATION_SCHEDULE.reduce(
    (sum, d) => sum + d.checklistItems.length,
    0
  );
  const doneWeeklyCount = completedWeeklyIds.length;

  const currentSkillStrategy =
    SKILL_STRATEGIES.find((s) => s.id === activeSkillTab) || SKILL_STRATEGIES[0];

  const categoryBadgeColor = (cat: ChecklistTask["category"]) => {
    switch (cat) {
      case "Listening":
        return "bg-sky-50 text-sky-800 border-sky-200";
      case "Reading":
        return "bg-emerald-50 text-emerald-800 border-emerald-200";
      case "Writing":
        return "bg-purple-50 text-purple-800 border-purple-200";
      case "Speaking":
        return "bg-amber-50 text-amber-800 border-amber-200";
      case "Grammar & Vocab":
        return "bg-rose-50 text-rose-800 border-rose-200";
      default:
        return "bg-indigo-50 text-indigo-800 border-indigo-200";
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-16">
      {/* Hero Banner: Lộ trình 4.5 lên 6.0 - 6.5 (6 - 8 Tháng) */}
      <div className="rounded-3xl bg-[#e11b22] text-white p-6 sm:p-10 shadow-xl border border-red-600 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#e11b22] text-xs font-black uppercase tracking-wider shadow-sm">
            <Target className="w-4 h-4 text-[#e11b22]" />
            Lộ Trình Chuẩn Cá Nhân Hóa • Band 4.5 → 6.0–6.5
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/25 border border-white/20 text-xs font-bold">
            <Clock className="w-3.5 h-3.5" />
            1–2 tiếng/ngày (45–60 giờ/tháng) • Kiên trì 6–8 tháng
          </div>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          Lộ Trình Tự Học IELTS 4.5 Lên 6.5 & Bảng Checklist Kiểm Soát Tiến Độ
        </h1>

        <p className="text-white text-sm sm:text-base leading-relaxed font-medium max-w-4xl opacity-95">
          Ở mức <b>IELTS 4.5 (tương đương B1 thấp)</b>, bạn không phải là người mất gốc hoàn toàn — bạn đã có vốn từ giao tiếp cơ bản, nhưng điểm số bị chững lại do chưa nắm chiến thuật xử lý các dạng bài học thuật (Academic), vốn từ học thuật còn mỏng và hay mắc lỗi ngữ pháp/phát âm âm cuối khi nói hoặc viết câu dài.
        </p>

        {/* Cảnh báo quan trọng */}
        <div className="p-4 rounded-2xl bg-black/25 border border-white/25 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm leading-relaxed">
            <strong className="text-amber-300 uppercase tracking-wide">
              Nguyên tắc sống còn:{" "}
            </strong>
            Sai lầm lớn nhất của học viên band 4.5 là lao ngay vào giải bộ đề Cambridge IELTS rồi nản chí vì không hiểu tại sao mình sai. Hãy đi tuần tự theo <b>3 Giai đoạn</b> và đánh dấu vào <b>Bảng Checklist</b> dưới đây để kiểm soát 100% những gì mình đã học!
          </div>
        </div>

        {/* Thanh tổng quan tiến độ Checklist */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-2xl bg-white text-slate-900 shadow-md space-y-2">
            <div className="flex items-center justify-between text-xs font-black uppercase tracking-wider">
              <span className="text-[#e11b22] flex items-center gap-1.5">
                <ListChecks className="w-4 h-4" />
                Tiến độ Checklist 3 Giai đoạn
              </span>
              <span className="text-slate-900">
                {doneChecklistCount}/{totalChecklistCount} hạng mục ({progressPercent}%)
              </span>
            </div>
            <div className="h-3 rounded-full bg-slate-100 overflow-hidden">
              <div
                className="h-full bg-[#e11b22] transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white text-slate-900 shadow-md space-y-2">
            <div className="flex items-center justify-between text-xs font-black uppercase tracking-wider">
              <span className="text-[#1d2a57] flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#e11b22]" />
                Checklist Lịch Học Tuần Này (Thứ 2 – CN)
              </span>
              <span className="text-slate-900">
                {doneWeeklyCount}/{totalWeeklyCount} buổi hoàn thành
              </span>
            </div>
            <div className="h-3 rounded-full bg-slate-100 overflow-hidden">
              <div
                className="h-full bg-emerald-600 transition-all duration-300"
                style={{
                  width: `${
                    totalWeeklyCount > 0
                      ? Math.round((doneWeeklyCount / totalWeeklyCount) * 100)
                      : 0
                  }%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 4 Main Navigation Tabs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 p-2 rounded-2xl bg-white border border-slate-200 shadow-sm">
        {[
          {
            id: "phases",
            label: "1. Lộ Trình 3 Giai Đoạn & Checklist",
            icon: ListChecks,
          },
          {
            id: "skills",
            label: "2. Chiến Lược 4 Kỹ Năng & Keyword Table",
            icon: Layers,
          },
          {
            id: "schedule",
            label: "3. Khung 90–120p & Lịch 7 Ngày",
            icon: Calendar,
          },
          {
            id: "resources",
            label: "4. Sách, Kênh YouTube & Công Cụ",
            icon: BookOpen,
          },
        ].map((tab) => {
          const Icon = tab.icon;
          const active = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-black transition flex items-center justify-center gap-2 ${
                active
                  ? "bg-[#e11b22] text-white shadow-sm"
                  : "text-slate-700 hover:bg-red-50 hover:text-[#e11b22]"
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span className="truncate">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* ===================================================================== */}
      {/* TAB 1: LỘ TRÌNH 3 GIAI ĐOẠN & BẢNG CHECKLIST KIỂM SOÁT TIẾN ĐỘ        */}
      {/* ===================================================================== */}
      {activeTab === "phases" && (
        <div className="space-y-8">
          {/* Bộ lọc kỹ năng cho Bảng Checklist */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-black uppercase tracking-wider text-slate-400 mr-1">
                Lọc bảng Checklist:
              </span>
              {[
                "ALL",
                "Listening",
                "Reading",
                "Writing",
                "Speaking",
                "Grammar & Vocab",
                "Deep Review",
              ].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedSkillFilter(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                    selectedSkillFilter === cat
                      ? "bg-[#1d2a57] text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {cat === "ALL" ? "Tất cả hạng mục" : cat}
                </button>
              ))}
            </div>

            {doneChecklistCount > 0 && (
              <button
                onClick={() => {
                  setCompletedTaskIds([]);
                  localStorage.removeItem(CHECKLIST_STORAGE_KEY);
                }}
                className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-red-600 transition"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Đặt lại Checklist
              </button>
            )}
          </div>

          {/* Danh sách 3 Giai đoạn */}
          {ROADMAP_PHASES.map((phase) => {
            const phaseCustom = customTasks.filter((c) => c.phaseId === phase.id);
            const allPhaseTasks: ChecklistTask[] = [
              ...phase.tasks,
              ...phaseCustom.map((c) => ({
                id: c.id,
                category: c.category,
                title: c.title,
                detail: "Mục tiêu cá nhân do bạn tự thiết lập.",
                targetMetric: c.targetMetric,
              })),
            ];

            const filteredTasks =
              selectedSkillFilter === "ALL"
                ? allPhaseTasks
                : allPhaseTasks.filter((t) => t.category === selectedSkillFilter);

            const phaseDoneCount = allPhaseTasks.filter((t) =>
              completedTaskIds.includes(t.id)
            ).length;
            const phasePercent =
              allPhaseTasks.length > 0
                ? Math.round((phaseDoneCount / allPhaseTasks.length) * 100)
                : 0;

            return (
              <div
                key={phase.id}
                className="rounded-3xl bg-white border border-slate-200 shadow-sm overflow-hidden"
              >
                {/* Phase Header */}
                <div className="p-6 sm:p-8 bg-slate-900 text-white space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-[#e11b22] text-white text-xs font-black uppercase tracking-wider">
                        {phase.duration}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-900 text-xs font-black">
                        {phase.bandRange}
                      </span>
                    </div>

                    <div className="text-xs font-bold text-emerald-400">
                      Đã hoàn thành: {phaseDoneCount}/{allPhaseTasks.length} mục (
                      {phasePercent}%)
                    </div>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black text-white">
                    {phase.title}
                  </h2>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {phase.summary}
                  </p>

                  {/* 4 Key Goals */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {phase.keyGoals.map((g, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-xs text-slate-200 bg-white/5 p-3 rounded-xl border border-white/10"
                      >
                        <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{g}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bảng Checklist Kiểm Soát */}
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-black uppercase tracking-wider text-slate-700 flex items-center gap-2">
                      <CheckSquare className="w-4 h-4 text-[#e11b22]" />
                      Bảng Checklist Kiểm Soát Nội Dung Đã Học ({filteredTasks.length} mục)
                    </h3>
                    <span className="text-xs text-slate-500">
                      Bấm vào ô tròn để đánh dấu hoàn thành
                    </span>
                  </div>

                  <div className="overflow-x-auto rounded-2xl border border-slate-200">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-black uppercase tracking-wider text-slate-500">
                          <th className="py-3.5 px-4 w-12 text-center">Trạng thái</th>
                          <th className="py-3.5 px-4 w-36">Kỹ năng</th>
                          <th className="py-3.5 px-4">Nội dung & Chiến thuật cần nắm vững</th>
                          <th className="py-3.5 px-4 w-36">Chỉ tiêu (KPI)</th>
                          <th className="py-3.5 px-4 w-40 text-right">Thực hành</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 text-sm">
                        {filteredTasks.map((task) => {
                          const isDone = completedTaskIds.includes(task.id);
                          const isCustom = task.id.startsWith("custom-");

                          return (
                            <tr
                              key={task.id}
                              onClick={() => toggleTask(task.id)}
                              className={`cursor-pointer transition ${
                                isDone
                                  ? "bg-emerald-50/60 hover:bg-emerald-50"
                                  : "bg-white hover:bg-slate-50"
                              }`}
                            >
                              <td className="py-4 px-4 text-center">
                                <button
                                  type="button"
                                  aria-label="Đánh dấu hoàn thành"
                                  className="inline-flex items-center justify-center"
                                >
                                  {isDone ? (
                                    <CheckCircle2 className="w-6 h-6 text-emerald-600 fill-emerald-100" />
                                  ) : (
                                    <Circle className="w-6 h-6 text-slate-300 hover:text-[#e11b22]" />
                                  )}
                                </button>
                              </td>
                              <td className="py-4 px-4">
                                <span
                                  className={`inline-block text-xs font-bold px-2.5 py-1 rounded-lg border ${categoryBadgeColor(
                                    task.category
                                  )}`}
                                >
                                  {task.category}
                                </span>
                              </td>
                              <td className="py-4 px-4">
                                <div
                                  className={`font-black text-slate-900 ${
                                    isDone ? "line-through text-slate-400" : ""
                                  }`}
                                >
                                  {task.title}
                                </div>
                                <div className="text-xs text-slate-500 mt-1 leading-relaxed">
                                  {task.detail}
                                </div>
                              </td>
                              <td className="py-4 px-4">
                                <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 font-bold text-xs">
                                  {task.targetMetric}
                                </span>
                              </td>
                              <td
                                className="py-4 px-4 text-right"
                                onClick={(e) => e.stopPropagation()}
                              >
                                {task.practiceLink ? (
                                  <Link
                                    href={task.practiceLink}
                                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#e11b22] text-white text-xs font-bold hover:bg-[#b91c1c] transition"
                                  >
                                    {task.practiceLabel || "Luyện ngay"}
                                    <ArrowRight className="w-3.5 h-3.5" />
                                  </Link>
                                ) : isCustom ? (
                                  <button
                                    onClick={() => handleDeleteCustomTask(task.id)}
                                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold text-red-600 hover:bg-red-50"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                    Xóa
                                  </button>
                                ) : (
                                  <span className="text-xs font-semibold text-slate-400">
                                    Tự luyện & Ghi chép
                                  </span>
                                )}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Form tự thêm mục tiêu mới vào Bảng Checklist */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2">
              <Plus className="w-5 h-5 text-[#e11b22]" />
              <h3 className="text-base font-black text-slate-900">
                Thêm Mục Tiêu Cá Nhân Vào Bảng Checklist
              </h3>
            </div>
            <form
              onSubmit={handleAddCustomTask}
              className="grid grid-cols-1 sm:grid-cols-12 gap-3"
            >
              <select
                value={newTaskPhase}
                onChange={(e) => setNewTaskPhase(e.target.value)}
                className="sm:col-span-3 px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 bg-slate-50"
              >
                <option value="phase-1">Giai đoạn 1 (4.5 → 5.0)</option>
                <option value="phase-2">Giai đoạn 2 (5.0 → 6.0)</option>
                <option value="phase-3">Giai đoạn 3 (6.0 → 6.5+)</option>
              </select>
              <select
                value={newTaskCategory}
                onChange={(e) =>
                  setNewTaskCategory(e.target.value as ChecklistTask["category"])
                }
                className="sm:col-span-2 px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 bg-slate-50"
              >
                <option value="Listening">Listening</option>
                <option value="Reading">Reading</option>
                <option value="Writing">Writing</option>
                <option value="Speaking">Speaking</option>
                <option value="Grammar & Vocab">Grammar & Vocab</option>
                <option value="Deep Review">Deep Review</option>
              </select>
              <input
                type="text"
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
                placeholder="Nhập nội dung bạn muốn kiểm soát (VD: Học hết 10 bài 6 Minute English)..."
                className="sm:col-span-4 px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm font-medium"
              />
              <input
                type="text"
                value={newTaskMetric}
                onChange={(e) => setNewTaskMetric(e.target.value)}
                placeholder="Chỉ tiêu (VD: 10 bài)"
                className="sm:col-span-2 px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-bold"
              />
              <button
                type="submit"
                className="sm:col-span-1 px-4 py-2.5 rounded-xl bg-[#e11b22] text-white font-black text-xs hover:bg-[#b91c1c] transition"
              >
                Thêm
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ===================================================================== */}
      {/* TAB 2: CHIẾN LƯỢC 4 KỸ NĂNG & CÔNG CỤ LẬP KEYWORD TABLE               */}
      {/* ===================================================================== */}
      {activeTab === "skills" && (
        <div className="space-y-8">
          {/* Bộ chọn 4 kỹ năng */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { id: "listening", label: "Listening (13 → 27/40)", icon: Headphones },
              { id: "reading", label: "Reading (13 → 27/40)", icon: BookOpen },
              { id: "writing", label: "Writing (4.5 → 6.0)", icon: PenTool },
              { id: "speaking", label: "Speaking (4.5 → 6.0)", icon: Mic },
            ].map((s) => {
              const Icon = s.icon;
              const active = activeSkillTab === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveSkillTab(s.id as typeof activeSkillTab)}
                  className={`p-4 rounded-2xl border text-left transition flex items-center gap-3 ${
                    active
                      ? "bg-[#1d2a57] text-white border-[#1d2a57] shadow-md"
                      : "bg-white text-slate-800 border-slate-200 hover:border-[#1d2a57]"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 shrink-0 ${
                      active ? "text-amber-300" : "text-[#e11b22]"
                    }`}
                  />
                  <span className="font-black text-sm">{s.label}</span>
                </button>
              );
            })}
          </div>

          {/* Chi tiết chiến lược kỹ năng đang chọn */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  Chiến Lược Bứt Phá Kỹ Năng {currentSkillStrategy.name}
                </h2>
                <div className="flex flex-wrap items-center gap-2 mt-2 text-xs font-bold">
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                    {currentSkillStrategy.currentScore}
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#e11b22]" />
                  <span className="px-3 py-1 rounded-full bg-red-50 text-[#e11b22] border border-red-200">
                    {currentSkillStrategy.targetScore}
                  </span>
                </div>
              </div>

              <Link
                href={currentSkillStrategy.practiceLink}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#e11b22] text-white font-black text-xs sm:text-sm hover:bg-[#b91c1c] transition shadow-sm"
              >
                {currentSkillStrategy.practiceText}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Chẩn đoán & Trọng tâm ăn điểm */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-1.5">
                <div className="text-xs font-black uppercase tracking-wider text-amber-800">
                  ⚠️ Điểm nghẽn thường gặp ở Band 4.5
                </div>
                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  {currentSkillStrategy.diagnosis}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-1.5">
                <div className="text-xs font-black uppercase tracking-wider text-emerald-800">
                  🎯 Trọng tâm ăn điểm (Core Focus)
                </div>
                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  {currentSkillStrategy.coreFocus}
                </p>
              </div>
            </div>

            {/* 3 Bước phương pháp */}
            <div className="space-y-3">
              <h3 className="text-base font-black text-slate-900">
                {currentSkillStrategy.stepsTitle}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {currentSkillStrategy.steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2"
                  >
                    <span className="inline-block px-2.5 py-0.5 rounded-lg bg-[#1d2a57] text-white text-xs font-black">
                      {step.badge}
                    </span>
                    <h4 className="font-black text-slate-900 text-base leading-snug">
                      {step.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quy tắc vàng */}
            <div className="p-4 rounded-2xl bg-[#1d2a57] text-white flex items-center gap-3">
              <Award className="w-6 h-6 text-amber-300 shrink-0" />
              <div className="text-xs sm:text-sm font-semibold">
                <span className="text-amber-300 font-black uppercase">
                  Quy tắc vàng:{" "}
                </span>
                {currentSkillStrategy.goldenRule}
              </div>
            </div>
          </div>

          {/* BẢNG KEYWORD TABLE 2 CỘT TƯƠNG TÁC (Quy tắc vàng tăng band Reading & Listening) */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-[#e11b22]">
                  Công cụ Deep Review sau mỗi bài Reading & Listening
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  Sổ Tay Keyword Table (Từ Khóa Câu Hỏi ↔ Paraphrase Trong Bài)
                </h3>
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                Đã ghi chép: {keywordPairs.length} cặp Paraphrase
              </span>
            </div>

            <form
              onSubmit={handleAddKeywordPair}
              className="grid grid-cols-1 sm:grid-cols-12 gap-3"
            >
              <input
                type="text"
                value={kwQuestion}
                onChange={(e) => setKwQuestion(e.target.value)}
                placeholder="Từ khóa trong câu hỏi (Question)..."
                className="sm:col-span-3 px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium"
              />
              <input
                type="text"
                value={kwPassage}
                onChange={(e) => setKwPassage(e.target.value)}
                placeholder="Cách viết tương đương trong bài (Synonym/Paraphrase)..."
                className="sm:col-span-4 px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium"
              />
              <input
                type="text"
                value={kwMeaning}
                onChange={(e) => setKwMeaning(e.target.value)}
                placeholder="Nghĩa tiếng Việt..."
                className="sm:col-span-2 px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium"
              />
              <input
                type="text"
                value={kwSource}
                onChange={(e) => setKwSource(e.target.value)}
                placeholder="Đề (VD: Cam 20 T1)"
                className="sm:col-span-2 px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-bold"
              />
              <button
                type="submit"
                className="sm:col-span-1 px-4 py-2.5 rounded-xl bg-[#e11b22] text-white font-black text-xs hover:bg-[#b91c1c] transition"
              >
                Lưu
              </button>
            </form>

            <div className="overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-black uppercase tracking-wider text-slate-500">
                    <th className="py-3 px-4">Cột 1: Từ khóa trong câu hỏi (Question)</th>
                    <th className="py-3 px-4">
                      Cột 2: Cách viết tương đương trong bài đọc/nghe (Paraphrase)
                    </th>
                    <th className="py-3 px-4">Nghĩa tiếng Việt</th>
                    <th className="py-3 px-4">Nguồn đề</th>
                    <th className="py-3 px-4 w-12"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {keywordPairs.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50">
                      <td className="py-3 px-4 font-bold text-slate-900">
                        {item.questionWord}
                      </td>
                      <td className="py-3 px-4 font-bold text-[#e11b22]">
                        {item.passageParaphrase}
                      </td>
                      <td className="py-3 px-4 text-slate-600 text-xs font-semibold">
                        {item.meaningVi}
                      </td>
                      <td className="py-3 px-4 text-xs text-slate-500 font-bold">
                        {item.sourceTest}
                      </td>
                      <td className="py-3 px-4 text-right">
                        <button
                          onClick={() => handleDeleteKeywordPair(item.id)}
                          className="text-slate-400 hover:text-red-600"
                          title="Xóa dòng này"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ===================================================================== */}
      {/* TAB 3: KHUNG CHIA THỜI GIAN 90–120 PHÚT & LỊCH XOAY VÒNG 7 NGÀY       */}
      {/* ===================================================================== */}
      {activeTab === "schedule" && (
        <div className="space-y-8">
          {/* Khung 90 - 120 phút mỗi ngày */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-5">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#e11b22]">
                Công thức phân bổ 90 – 120 phút mỗi ngày
              </span>
              <h2 className="text-2xl font-black text-slate-900 mt-0.5">
                Kết Hợp 1 Kỹ Năng Tiếp Thu + 1 Kỹ Năng Sản Sinh
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Giúp não bộ không bị quá tải mà vẫn duy trì phản xạ toàn diện cả 4 kỹ năng mỗi ngày.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {DAILY_TIME_BLOCKS.map((block, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1d2a57] text-white text-xs font-black">
                      <Clock className="w-3.5 h-3.5 text-amber-300" />
                      {block.duration}
                    </span>
                    <h3 className="text-base font-black text-slate-900">
                      {block.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      {block.goal}
                    </p>
                  </div>

                  <Link
                    href={block.actionLink}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 hover:border-[#e11b22] hover:text-[#e11b22] transition"
                  >
                    {block.actionLabel}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Lịch học xoay vòng 7 ngày trong tuần */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <h2 className="text-2xl font-black text-slate-900">
                  Lịch Học Xoay Vòng 7 Ngày Trong Tuần (Thứ Hai → Chủ Nhật)
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  Tick vào từng ca học mỗi ngày để kiểm soát kỷ luật tự học hàng tuần của bạn.
                </p>
              </div>
              {doneWeeklyCount > 0 && (
                <button
                  onClick={() => {
                    setCompletedWeeklyIds([]);
                    localStorage.removeItem(WEEKLY_CHECK_STORAGE_KEY);
                  }}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-600 hover:text-red-600 transition"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Làm mới tuần học mới
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {WEEKLY_ROTATION_SCHEDULE.map((day) => {
                const dayDoneCount = day.checklistItems.filter((item) =>
                  completedWeeklyIds.includes(item.id)
                ).length;
                const isAllDayDone = dayDoneCount === day.checklistItems.length;

                return (
                  <div
                    key={day.id}
                    className={`p-6 rounded-3xl border shadow-sm transition space-y-4 ${
                      isAllDayDone
                        ? "bg-emerald-50/50 border-emerald-300"
                        : "bg-white border-slate-200"
                    }`}
                  >
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <div className="flex items-center gap-2.5">
                        <span className="w-9 h-9 rounded-xl bg-[#e11b22] text-white font-black text-xs flex items-center justify-center">
                          {day.shortName}
                        </span>
                        <div>
                          <h3 className="font-black text-lg text-slate-900">
                            {day.dayName}
                          </h3>
                          <span className="text-xs font-bold text-slate-400">
                            Hoàn thành {dayDoneCount}/{day.checklistItems.length} mục
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <Link
                          href={day.linkPrimary}
                          className="px-3 py-1.5 rounded-xl bg-[#e11b22] text-white text-xs font-bold hover:bg-[#b91c1c] transition"
                        >
                          {day.labelPrimary}
                        </Link>
                        <Link
                          href={day.linkSecondary}
                          className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold hover:bg-slate-200 transition"
                        >
                          {day.labelSecondary}
                        </Link>
                      </div>
                    </div>

                    <div className="space-y-1.5 text-xs">
                      <div>
                        <span className="font-bold text-slate-500">
                          • Kỹ năng chính (45p):{" "}
                        </span>
                        <span className="font-bold text-slate-900">
                          {day.receptiveSkill}
                        </span>
                      </div>
                      <div>
                        <span className="font-bold text-slate-500">
                          • Kỹ năng kết hợp (45p):{" "}
                        </span>
                        <span className="font-bold text-slate-900">
                          {day.productiveSkill}
                        </span>
                      </div>
                      <div>
                        <span className="font-bold text-slate-500">
                          • Trọng tâm thực hành (15–20p cuối):{" "}
                        </span>
                        <span className="font-semibold text-[#e11b22]">
                          {day.finalPractice}
                        </span>
                      </div>
                    </div>

                    {/* Checklist 3 mục trong ngày */}
                    <div className="pt-2 border-t border-slate-100 space-y-2">
                      {day.checklistItems.map((item) => {
                        const checked = completedWeeklyIds.includes(item.id);
                        return (
                          <button
                            key={item.id}
                            onClick={() => toggleWeeklyItem(item.id)}
                            className={`w-full p-2.5 rounded-xl border text-left text-xs font-bold flex items-center gap-2.5 transition ${
                              checked
                                ? "bg-emerald-100/70 border-emerald-300 text-emerald-900 line-through"
                                : "bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100"
                            }`}
                          >
                            {checked ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            ) : (
                              <Circle className="w-4 h-4 text-slate-400 shrink-0" />
                            )}
                            <span>{item.text}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ===================================================================== */}
      {/* TAB 4: SÁCH GIÁO TRÌNH, KÊNH YOUTUBE & WEBSITE THỰC HÀNH CHUẨN        */}
      {/* ===================================================================== */}
      {activeTab === "resources" && (
        <div className="space-y-8">
          {/* 1. Sách giáo trình */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-5">
            <div className="flex items-center gap-2.5">
              <BookOpen className="w-6 h-6 text-[#e11b22]" />
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Sách Giáo Trình & Luyện Kỹ Năng Cốt Lõi (Theo Đúng Trình Độ)
                </h2>
                <p className="text-xs text-slate-500">
                  Đừng tải hàng chục cuốn sách về máy — ở mỗi giai đoạn chỉ cần học trọn vẹn 1–2 bộ sách cốt lõi dưới đây.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {RECOMMENDED_BOOKS.map((group, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3"
                >
                  <div className="text-xs font-black uppercase tracking-wider text-[#e11b22]">
                    {group.stage}
                  </div>
                  <div className="space-y-3">
                    {group.items.map((book, bIdx) => (
                      <div
                        key={bIdx}
                        className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-1"
                      >
                        <div className="font-black text-sm text-slate-900">
                          {book.title}
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {book.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Kênh YouTube hướng dẫn lộ trình & bài giảng chất lượng */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-5">
            <div className="flex items-center gap-2.5">
              <Youtube className="w-6 h-6 text-[#e11b22]" />
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Kênh YouTube Hướng Dẫn Lộ Trình & Tư Duy Chuẩn Giám Khảo
                </h2>
                <p className="text-xs text-slate-500">
                  Bấm vào từng kênh/video để mở xem hướng dẫn chi tiết.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {YOUTUBE_CHANNELS.map((section, sIdx) => (
                <div key={sIdx} className="space-y-3">
                  <div className="text-xs font-black uppercase tracking-wider text-[#1d2a57]">
                    {section.group}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {section.items.map((vid, vIdx) => (
                      <a
                        key={vIdx}
                        href={vid.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#e11b22] transition flex items-start justify-between gap-3 group"
                      >
                        <div className="space-y-1">
                          <div className="font-black text-sm text-slate-900 group-hover:text-[#e11b22] transition">
                            {vid.title}
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            {vid.desc}
                          </p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#e11b22] shrink-0 mt-1" />
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Website & Từ điển bắt buộc */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-5">
            <div className="flex items-center gap-2.5">
              <Globe className="w-6 h-6 text-[#e11b22]" />
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Website Thực Hành & Từ Điển Bắt Buộc Khi Học Writing / Speaking
                </h2>
                <p className="text-xs text-slate-500">
                  Kết hợp cùng Từ điển Cambridge đã tích hợp sẵn ở cạnh phải màn hình của bạn.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PRACTICE_WEBSITES.map((site, idx) => (
                <a
                  key={idx}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#1d2a57] transition flex items-start justify-between gap-3 group"
                >
                  <div className="space-y-1.5">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-red-50 text-[#e11b22] text-[11px] font-bold border border-red-200">
                      {site.category}
                    </span>
                    <div className="font-black text-base text-slate-900 group-hover:text-[#1d2a57]">
                      {site.title}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {site.desc}
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#1d2a57] shrink-0 mt-1" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
