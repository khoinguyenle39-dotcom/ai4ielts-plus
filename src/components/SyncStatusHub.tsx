"use client";

import React, { useState } from "react";
import { RefreshCw, CheckCircle2, Database, ShieldCheck, Sparkles, Cloud } from "lucide-react";

export default function SyncStatusHub() {
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncResult, setSyncResult] = useState<{
    syncedAt: string;
    message: string;
    latest: string[];
  } | null>(null);

  const handleSyncNow = async () => {
    setIsSyncing(true);
    try {
      const res = await fetch("/api/sync", { method: "POST" });
      const data = await res.json();
      if (data.success) {
        setSyncResult({
          syncedAt: new Date().toLocaleTimeString("vi-VN"),
          message: data.message,
          latest: data.latestIncluded || []
        });
      }
    } catch (err) {
      console.error("Sync error:", err);
    } finally {
      setIsSyncing(false);
    }
  };

  return (
    <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-start sm:items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
            <Database className="w-5 h-5 text-emerald-600" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-black text-slate-900">
                Tính Năng Tự Động Cập Nhật & Đồng Bộ Đề Thi (Auto-Sync 24/7)
              </h3>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Live Sync
              </span>
            </div>
            <p className="text-xs text-slate-600 mt-0.5 font-medium">
              Hệ thống kết nối trực tiếp với <b>Supabase Cloud</b>. Mỗi khi các bộ đề mới (Cam 21, Real Test 2026) được phát hành, máy chủ sẽ tự động cào dữ liệu và đồng bộ vào kho đề thi của bạn.
            </p>
          </div>
        </div>

        <button
          onClick={handleSyncNow}
          disabled={isSyncing}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#e11b22] text-white font-black text-xs hover:bg-[#b91c1c] transition shadow-sm active:scale-95 disabled:opacity-60 whitespace-nowrap"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? "animate-spin" : ""}`} />
          {isSyncing ? "Đang đồng bộ từ Cloud..." : "Đồng bộ đề mới ngay"}
        </button>
      </div>

      {syncResult && (
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs space-y-1.5 animate-fadeIn">
          <div className="flex items-center gap-2 font-black text-emerald-800 text-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Đồng bộ thành công lúc {syncResult.syncedAt}!
          </div>
          <p className="font-semibold text-emerald-700">{syncResult.message}</p>
          <div className="flex flex-wrap gap-2 pt-1">
            {syncResult.latest.map((item, idx) => (
              <span key={idx} className="bg-emerald-200/80 px-2 py-0.5 rounded text-[11px] font-bold text-emerald-900">
                ✓ {item}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
