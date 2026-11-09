"use client";

import React from "react";
import { BookOpen, Lightbulb, MessageSquareQuote, Shuffle, Volume2 } from "lucide-react";
import type { Collocation } from "@/data/collocations";

function speak(text: string) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "en-US";
  u.rate = 0.9;
  window.speechSynthesis.speak(u);
}

/** Thẻ giải thích: nghĩa, cách dùng, ngữ cảnh, câu mẫu, từ thay thế. */
export default function CollocationExplainCard({
  item,
  compact = false,
}: {
  item: Collocation;
  compact?: boolean;
}) {
  const phrase = `${item.left} ${item.right}`;

  return (
    <div className={`rounded-2xl bg-white border border-slate-200 text-left ${compact ? "p-4 space-y-2.5" : "p-5 space-y-3"}`}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">{item.topic}</div>
          <div className="text-lg font-black text-slate-900 leading-snug">{phrase}</div>
          <div className="text-sm font-semibold text-[#e11b22]">{item.vi}</div>
        </div>
        <button
          onClick={() => speak(phrase)}
          className="shrink-0 w-9 h-9 rounded-xl bg-red-50 border border-red-200 text-[#e11b22] flex items-center justify-center hover:bg-red-100 transition"
          title="Nghe phát âm"
        >
          <Volume2 className="w-4 h-4" />
        </button>
      </div>

      <div className="flex gap-2 text-sm text-slate-700">
        <BookOpen className="w-4 h-4 mt-0.5 shrink-0 text-slate-400" />
        <div>
          <span className="font-bold text-slate-900">Cách dùng: </span>
          {item.usage}
        </div>
      </div>

      <div className="flex gap-2 text-sm text-slate-700">
        <Lightbulb className="w-4 h-4 mt-0.5 shrink-0 text-amber-500" />
        <div>
          <span className="font-bold text-slate-900">Ngữ cảnh: </span>
          {item.context}
        </div>
      </div>

      <div className="flex gap-2 text-sm text-slate-700">
        <MessageSquareQuote className="w-4 h-4 mt-0.5 shrink-0 text-emerald-600" />
        <div className="space-y-1 w-full">
          <span className="font-bold text-slate-900">Câu mẫu:</span>
          {item.examples.map((ex) => (
            <button
              key={ex}
              onClick={() => speak(ex)}
              className="block w-full text-left italic font-serif text-slate-700 hover:text-[#e11b22] transition"
              title="Nghe câu mẫu"
            >
              • {ex}
            </button>
          ))}
        </div>
      </div>

      {item.alt && item.alt.length > 0 && (
        <div className="flex gap-2 text-sm text-slate-700">
          <Shuffle className="w-4 h-4 mt-0.5 shrink-0 text-sky-600" />
          <div>
            <span className="font-bold text-slate-900">Cũng có thể nói: </span>
            {item.alt.map((a) => `${a} ${item.right}`).join(" • ")}
          </div>
        </div>
      )}
    </div>
  );
}
