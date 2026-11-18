import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { BookOpen, Headphones, Flame, Map, Gamepad2, RefreshCw, Mic } from "lucide-react";
import ThreeIeltsLogo from "@/components/ThreeIeltsLogo";
import FloatingIeltsBackground from "@/components/FloatingIeltsBackground";
import IglooIntroExperience from "@/components/IglooIntroExperience";
import CambridgeDictionaryDrawer from "@/components/CambridgeDictionaryDrawer";
import { StudyStreakNavbarBadge } from "@/components/StudyStreakTracker";
import {
  DictationDesktopNavLink,
  DictationMobileNavLink,
  DictationUnfinishedToast,
} from "@/components/DictationNavNotification";

export const metadata: Metadata = {
  title: "AI4IELTS+ - Hệ thống Tự học IELTS 4 Kỹ Năng Tư Duy Linearthinking",
  description: "Nền tảng tự học IELTS 4 kỹ năng online tại nhà: Kho đề Cam 09–21, Chép chính tả Section 1–4, Collocations và Lời giải Linearthinking độc quyền.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="min-h-screen bg-slate-50 flex flex-col font-sans antialiased text-slate-800 relative">
        {/* Interactive 3D Scroll Intro (Igloo.inc Style) */}
        <IglooIntroExperience />

        {/* Subtle Interactive Floating Scattered Letters Background (I, E, L, T, S) */}
        <FloatingIeltsBackground />

        {/* Top Notification Announcement Bar - No Hotline, High Contrast */}
        <div className="bg-[#b91c1c] text-white text-xs font-semibold py-1.5 px-4 text-center flex items-center justify-center gap-2">
          <span>AI4IELTS+ • Hệ thống Tự học IELTS 4 Kỹ Năng Online Miễn Phí với phương pháp Linearthinking</span>
          <span className="hidden sm:inline-block opacity-60">•</span>
          <span className="hidden sm:inline-flex items-center gap-1.5 bg-black/25 px-2.5 py-0.5 rounded-full text-[11px] font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Tự động đồng bộ đề mới 24/7
          </span>
        </div>

        {/* Main Navbar */}
        <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 py-2 flex items-center justify-between">
            {/* Logo area with 3D IELTS Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="flex items-center">
                <ThreeIeltsLogo size="sm" />
                <div className="ml-1 flex flex-col">
                  <span className="text-xl font-black tracking-tight text-slate-900 group-hover:text-[#e11b22] transition-colors leading-none">
                    AI4IELTS<span className="text-[#e11b22]">+</span>
                  </span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">
                    Hệ Thống Tiếng Anh Tư Duy
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 text-sm font-semibold">
              <Link
                href="/tests"
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-slate-700 hover:text-[#e11b22] hover:bg-red-50 transition"
              >
                <BookOpen className="w-4 h-4 text-[#e11b22]" />
                IELTS Online Test (Cam 9-21)
              </Link>
              <Link
                href="/shadowing"
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-slate-700 hover:text-[#e11b22] hover:bg-red-50 transition"
              >
                <Mic className="w-4 h-4 text-[#e11b22]" />
                Luyện Nói Shadowing
              </Link>
              <DictationDesktopNavLink />
              <Link
                href="/vocab"
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-slate-700 hover:text-[#e11b22] hover:bg-red-50 transition"
              >
                <BookOpen className="w-4 h-4 text-[#e11b22]" />
                Học Từ Vựng (A1–C2)
              </Link>
              <Link
                href="/games/collocations"
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-slate-700 hover:text-[#e11b22] hover:bg-red-50 transition"
              >
                <Gamepad2 className="w-4 h-4 text-[#e11b22]" />
                Game Collocations
              </Link>
              <Link
                href="/roadmap"
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-slate-700 hover:text-[#e11b22] hover:bg-red-50 transition"
              >
                <Map className="w-4 h-4 text-[#e11b22]" />
                Lộ trình học
              </Link>
            </nav>

            {/* Right User Bar */}
            <div className="flex items-center gap-3">
              <StudyStreakNavbarBadge />

              <div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-slate-700 text-sm">
                KL
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <DictationUnfinishedToast />
          {children}
        </main>

        {/* Floating Cambridge Dictionary Book Button & Drawer (Always on Right Side) */}
        <CambridgeDictionaryDrawer />

        {/* Mobile Bottom Navigation Bar */}
        <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-lg px-2 py-1.5 flex items-center justify-around">
          <Link href="/" className="flex flex-col items-center py-1 px-3 text-slate-600 hover:text-[#e11b22]">
            <BookOpen className="w-5 h-5" />
            <span className="text-[11px] font-semibold mt-0.5">Trang chủ</span>
          </Link>
          <Link href="/shadowing" className="flex flex-col items-center py-1 px-3 text-slate-600 hover:text-[#e11b22]">
            <Mic className="w-5 h-5 text-[#e11b22]" />
            <span className="text-[11px] font-semibold mt-0.5">Nói</span>
          </Link>
          <Link href="/tests" className="flex flex-col items-center py-1 px-3 text-slate-600 hover:text-[#e11b22]">
            <BookOpen className="w-5 h-5 text-[#e11b22]" />
            <span className="text-[11px] font-semibold mt-0.5">Kho đề</span>
          </Link>
          <DictationMobileNavLink />
          <Link href="/roadmap" className="flex flex-col items-center py-1 px-3 text-slate-600 hover:text-[#e11b22]">
            <Map className="w-5 h-5 text-[#e11b22]" />
            <span className="text-[11px] font-semibold mt-0.5">Lộ trình</span>
          </Link>
        </nav>

        {/* Footer */}
        <footer className="hidden lg:block bg-white border-t border-slate-200 py-8 mt-12 text-sm text-slate-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <ThreeIeltsLogo size="sm" />
              <div>
                <p className="font-bold text-slate-900">AI4IELTS+ - Nền Tảng Tự Học IELTS 4 Kỹ Năng Tư Duy</p>
                <p className="text-xs text-slate-500">Ứng dụng phương pháp Linearthinking giúp người học bứt phá band điểm bền vững.</p>
              </div>
            </div>
            <div className="text-xs text-slate-500 text-right">
              <p>© 2026 AI4IELTS+. All rights reserved.</p>
              <p>Nền tảng Tự học IELTS Trực tuyến • Đồng bộ dữ liệu đề thi 24/7 qua Supabase Cloud</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
