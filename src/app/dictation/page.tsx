import Link from "next/link";
import { Headphones, Play, Filter, CheckCircle2, Search, Volume2 } from "lucide-react";

const LESSONS = [
  {
    id: "family-excursions",
    title: "Family Excursions",
    section: "Section 1",
    totalSentences: 50,
    completed: 7,
    level: "Easy",
    plays: "65K lượt chép",
    audioUrl: "https://suijm9clouobj.vcdn.cloud/PRIVATE/MEDIA/2eabf966-f2a9-4bb2-982e-5d513fa3fb1f.mp3",
    description: "Hội thoại đặt tour du lịch gia đình. Luyện nghe bắt tên riêng, số điện thoại và địa điểm."
  },
  {
    id: "kitchen-assistants",
    title: "Talk to New Kitchen Assistants",
    section: "Section 2",
    totalSentences: 31,
    completed: 0,
    level: "Medium",
    plays: "10K lượt chép",
    audioUrl: "https://suijm9clouobj.vcdn.cloud/PRIVATE/MEDIA/2eabf966-f2a9-4bb2-982e-5d513fa3fb1f.mp3",
    description: "Hướng dẫn nội quy an toàn lao động trong nhà bếp nhà hàng."
  },
  {
    id: "public-libraries",
    title: "Paper on Public Libraries",
    section: "Section 3",
    totalSentences: 53,
    completed: 0,
    level: "Medium",
    plays: "10K lượt chép",
    audioUrl: "https://suijm9clouobj.vcdn.cloud/PRIVATE/MEDIA/2eabf966-f2a9-4bb2-982e-5d513fa3fb1f.mp3",
    description: "Thảo luận giữa sinh viên và giảng viên về đề án thư viện công cộng."
  },
  {
    id: "nanotechnology",
    title: "Nanotechnology 2",
    section: "Section 4",
    totalSentences: 58,
    completed: 0,
    level: "Hard",
    plays: "42K lượt chép",
    audioUrl: "https://media.dolenglish.vn/PRIVATE/MEDIA/TRIE6_L2_P4.mp3",
    description: "Bài giảng học thuật về công nghệ nano và ứng dụng trong y học hiện đại."
  },
  {
    id: "business-values",
    title: "Four Business Values",
    section: "Section 4",
    totalSentences: 54,
    completed: 0,
    level: "Hard",
    plays: "5K lượt chép",
    audioUrl: "https://media.dolenglish.vn/PRIVATE/MEDIA/TRIE6_L2_P4.mp3",
    description: "Thuyết trình chuyên khảo về văn hóa doanh nghiệp và 4 giá trị cốt lõi."
  }
];

export default function DictationPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-[#e11b22] text-xs font-bold mb-2 border border-red-200">
            <Volume2 className="w-3.5 h-3.5" />
            Phương pháp Nghe Chép Chính Tả & Shadowing AI4IELTS+
          </div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Kho Bài Nghe Chép Chính Tả Phân Cấp</h1>
          <p className="text-sm text-slate-500 mt-1">
            Luyện tai bắt âm chuẩn Cambridge: Nghe câu ngắn, gõ chính tả, check lỗi ngay tức thì và luyện nhại giọng Shadowing theo Audio bản quyền.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Tìm bài nghe..."
              className="pl-9 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#e11b22] w-48 sm:w-64"
            />
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 text-sm font-semibold">
        <button className="px-4 py-2 rounded-xl bg-[#e11b22] text-white shadow-sm">
          Tất cả (99+ trang)
        </button>
        <button className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:border-red-300 hover:text-[#e11b22] transition">
          Section 1 (Đời thường)
        </button>
        <button className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:border-red-300 hover:text-[#e11b22] transition">
          Section 2 (Hướng dẫn)
        </button>
        <button className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:border-red-300 hover:text-[#e11b22] transition">
          Section 3 (Thảo luận)
        </button>
        <button className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:border-red-300 hover:text-[#e11b22] transition">
          Section 4 (Chuyên ngành)
        </button>
      </div>

      {/* Lesson List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {LESSONS.map((lesson) => (
          <div
            key={lesson.id}
            className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-[#e11b22] transition flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-red-50 text-[#e11b22] border border-red-200">
                  {lesson.section}
                </span>
                <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                  lesson.level === 'Easy' ? 'bg-emerald-100 text-emerald-800' :
                  lesson.level === 'Medium' ? 'bg-amber-100 text-amber-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {lesson.level}
                </span>
              </div>

              <h3 className="font-bold text-slate-900 text-base leading-snug">
                {lesson.title}
              </h3>

              <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                {lesson.description}
              </p>

              <div className="flex items-center gap-3 text-xs text-slate-500 font-semibold pt-1">
                <span>{lesson.totalSentences} câu ngắn</span>
                <span>•</span>
                <span>{lesson.plays}</span>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
              {lesson.completed > 0 ? (
                <div className="flex items-center gap-1.5 text-xs text-[#e11b22] font-bold">
                  <CheckCircle2 className="w-4 h-4 text-[#e11b22]" />
                  Đang làm: {lesson.completed}/{lesson.totalSentences} câu
                </div>
              ) : (
                <span className="text-xs text-slate-400 font-medium">Chưa bắt đầu</span>
              )}

              <Link
                href={`/dictation/${lesson.id}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#e11b22] text-white font-bold text-xs hover:bg-[#b91c1c] transition shadow-sm"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                {lesson.completed > 0 ? "Chép tiếp" : "Bắt đầu"}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
