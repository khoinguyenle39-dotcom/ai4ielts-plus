"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Clock, 
  CheckCircle2, 
  X, 
  Layers,
  BookOpen
} from "lucide-react";

const TEST_DETAIL = {
  id: "cam-20-reading-1",
  title: "IELTS CAM Inspired 20 - Reading Test 1",
  passageTitle: "The kākāpō (The vaira)",
  passageContent: `The vaira is a night-active, flightless parrot, now critically endangered and among the rarest of the Kelvan Islands' native birds.

Known to the Rendi people as the vaira and to naturalists as the moss parrot, this large, ground-dwelling bird has a broad, pale, owl-like face. It grows to about 58 centimetres, its plumage mostly a mottled brown-green, with forward-set eyes, a heavy pale beak, sturdy greyish feet, and a tail and wings strikingly short for its bulk. No other parrot is known to have abandoned flight so completely, and few birds of any sort live as long, some reaching 90 years of age.

Solitary by nature, a vaira keeps to one stretch of territory for years on end. Much of its feeding is done on the forest floor, though it also climbs high into the branches, and when it throws itself from a height the best it manages is a clumsy, wing-assisted glide to the ground. Everything it eats comes from plants: besides ferns and the bark, roots and leaves of trees, it takes a good quantity of seeds.

Breeding comes in the warmer months, and then only in seasons when food is plentiful. The male has no share in incubation or in bringing up the young; it falls to the female alone to sit on the eggs and, later, to feed the chicks. Somewhere between one and four eggs are laid in a shallow hollow, which she works over repeatedly both before laying and while she broods.`,
  questions: [
    {
      id: 1,
      prompt: "No other species of parrot lives to the age a vaira can reach.",
      type: "TRUE_FALSE_NOT_GIVEN",
      correct: "NOT GIVEN",
      explanation: {
        step1: "Không loài vẹt nào khác sống đến độ tuổi mà vaira có thể đạt tới. Ý câu hỏi: Cần kiểm tra tuổi thọ của vaira so với các loài vẹt khác, không phải với chim nói chung.",
        step2: "Câu hỏi không có từ khoá đặc biệt; đọc nhanh đến khi gặp cụm mang ý tương đương với 'No other species of parrot'. Ở đoạn 1 có 'No other parrot' => Đây là vùng cần đọc kỹ.",
        step3: "Đoạn 1: 'No other parrot is known to have abandoned flight so completely, and few birds live as long, some reaching 90 years of age.' (Không loài vẹt nào khác từ bỏ khả năng bay triệt để đến thế; và ít loài chim sống lâu bằng vaira, có con đạt tới 90 tuổi).",
        step4: "Câu hỏi nói: Không loài vẹt nào khác sống thọ bằng vaira. Bài đọc nói: Không loài vẹt nào từ bỏ bay triệt để bằng vaira; còn về tuổi thọ, chỉ nói ít loài chim sống lâu bằng (nhưng không nói những loài chim ấy có phải là vẹt hay không). => KHÔNG ĐỦ THÔNG TIN ĐỂ KẾT LUẬN.",
        paraphrase: [
          { q: "No other species of parrot", p: "No other parrot (nhưng bài nói về khả năng bay)" },
          { q: "lives to the age a vaira can reach", p: "few birds live as long (nói về chim nói chung, không nói rõ loài vẹt)" }
        ],
        distractor: "Bẫy Skim/Scan cơ học: Nếu chỉ scan từ khóa 'No other parrot' sẽ vội vàng chọn TRUE ngay, nhưng thực tế cụm đó nói về khả năng bay (abandoned flight) chứ không phải tuổi thọ!"
      }
    },
    {
      id: 2,
      prompt: "The male vaira helps the female build the nest and incubate the eggs.",
      type: "TRUE_FALSE_NOT_GIVEN",
      correct: "FALSE",
      explanation: {
        step1: "Con vaira đực giúp con cái làm tổ và ấp trứng.",
        step2: "Vùng thông tin: Đoạn 3 về sinh sản (Breeding).",
        step3: "Đoạn 3 nói rõ: 'The male has no share in incubation or in bringing up the young; it falls to the female alone to sit on the eggs'.",
        step4: "Thông tin hoàn toàn trái ngược với câu hỏi (The male has no share != male helps) => Chọn FALSE."
      }
    },
    {
      id: 3,
      prompt: "Everything the vaira consumes is plant-based.",
      type: "TRUE_FALSE_NOT_GIVEN",
      correct: "TRUE",
      explanation: {
        step1: "Mọi thứ mà loài vaira ăn đều có nguồn gốc từ thực vật.",
        step2: "Vùng thông tin: Đoạn 2 nói về thức ăn (feeding).",
        step3: "Đoạn 2: 'Everything it eats comes from plants: besides ferns and the bark, roots and leaves of trees, it takes a good quantity of seeds.'",
        step4: "Everything it consumes = Everything it eats comes from plants => Đúng 100% nghĩa => Chọn TRUE."
      }
    }
  ]
};

export default function TestRunnerPage() {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [timeLeft, setTimeLeft] = useState(3600); // 60 mins
  const [score, setScore] = useState<{ correct: number; total: number; band: string } | null>(null);

  useEffect(() => {
    if (isSubmitted) return;
    const timer = setInterval(() => {
      setTimeLeft(t => (t > 0 ? t - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [isSubmitted]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSelectAnswer = (qId: number, val: string) => {
    if (isSubmitted) return;
    setAnswers(prev => ({ ...prev, [qId]: val }));
  };

  const handleSubmit = () => {
    let correctCount = 0;
    TEST_DETAIL.questions.forEach(q => {
      if (answers[q.id] === q.correct) correctCount++;
    });

    let band = "4.5";
    if (correctCount === 3) band = "8.5";
    else if (correctCount === 2) band = "6.5";
    else if (correctCount === 1) band = "5.0";

    setScore({ correct: correctCount, total: TEST_DETAIL.questions.length, band });
    setIsSubmitted(true);
    setShowExplanation(true);
  };

  return (
    <div className="space-y-4 pb-12">
      {/* Top Controller Bar */}
      <div className="sticky top-16 z-40 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
        <Link
          href="/tests"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-600 hover:text-[#e11b22] transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Quay lại danh sách đề</span>
        </Link>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-red-50 text-[#e11b22] font-mono font-bold text-sm border border-red-200">
            <Clock className="w-4 h-4 text-[#e11b22]" />
            {formatTime(timeLeft)}
          </div>

          {!isSubmitted ? (
            <button
              onClick={handleSubmit}
              className="px-5 py-2 rounded-xl bg-[#e11b22] text-white font-bold text-xs sm:text-sm shadow hover:bg-[#b91c1c] transition"
            >
              Nộp Bài Thi
            </button>
          ) : (
            <button
              onClick={() => setShowExplanation(!showExplanation)}
              className="px-4 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs sm:text-sm shadow hover:bg-black transition flex items-center gap-1.5"
            >
              <Layers className="w-4 h-4 text-[#e11b22]" />
              {showExplanation ? "Đóng giải thích" : "Xem giải thích Linear"}
            </button>
          )}
        </div>
      </div>

      {/* Result Alert if submitted */}
      {isSubmitted && score && (
        <div className="p-6 rounded-3xl bg-gradient-to-r from-[#991b1b] via-[#b91c1c] to-[#e11b22] text-white shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-black/20 border border-white/20">
              Kết quả thi thử chuẩn Cambridge
            </span>
            <h2 className="text-2xl font-black mt-1.5">
              Bạn đạt {score.correct} / {score.total} câu đúng • Ước tính Band {score.band}
            </h2>
            <p className="text-xs text-red-100 mt-1 font-medium">
              Bấm nút xem giải thích bên dưới để đối chiếu 4 bước Linearthinking và nhận diện bẫy đề thi thật.
            </p>
          </div>

          <button
            onClick={() => setShowExplanation(true)}
            className="px-5 py-2.5 rounded-xl bg-white text-[#e11b22] font-black text-xs sm:text-sm shadow hover:bg-red-50 transition"
          >
            Mở giải thích 4 bước
          </button>
        </div>
      )}

      {/* Split Screen Container (IDP / BC Test Interface) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-[600px]">
        {/* Left Pane: Reading Passage */}
        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col h-[700px]">
          <div className="border-b border-slate-100 pb-3 mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#e11b22]">Reading Passage 1</span>
            <h2 className="text-xl font-black text-slate-900">{TEST_DETAIL.passageTitle}</h2>
          </div>

          <div className="flex-1 overflow-y-auto pr-2 text-slate-800 leading-relaxed text-sm space-y-4 font-serif">
            {TEST_DETAIL.passageContent.split("\n\n").map((para, i) => (
              <p key={i} className="text-justify leading-7">
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* Right Pane: Questions & Answer Sheet */}
        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col h-[700px]">
          <div className="border-b border-slate-100 pb-3 mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Answer Sheet</span>
            <h3 className="text-sm font-bold text-slate-900">
              Questions 1–3: Do the following statements agree with the information?
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Chọn <b>TRUE</b> (Đúng), <b>FALSE</b> (Sai), hoặc <b>NOT GIVEN</b> (Không có thông tin).
            </p>
          </div>

          <div className="flex-1 overflow-y-auto pr-2 space-y-6">
            {TEST_DETAIL.questions.map((q) => {
              const isCorrect = answers[q.id] === q.correct;

              return (
                <div 
                  key={q.id}
                  className={`p-4 rounded-2xl border transition ${
                    isSubmitted 
                      ? isCorrect ? "bg-emerald-50/60 border-emerald-300" : "bg-red-50/60 border-red-300"
                      : "bg-slate-50/50 border-slate-200"
                  }`}
                >
                  <div className="flex items-start gap-2.5">
                    <span className="w-6 h-6 rounded-lg bg-red-100 text-[#e11b22] font-black text-xs flex items-center justify-center shrink-0">
                      {q.id}
                    </span>
                    <p className="text-sm font-bold text-slate-800 leading-snug">
                      {q.prompt}
                    </p>
                  </div>

                  {/* Options */}
                  <div className="mt-3 flex flex-wrap gap-2 pl-8">
                    {["TRUE", "FALSE", "NOT GIVEN"].map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleSelectAnswer(q.id, opt)}
                        disabled={isSubmitted}
                        className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
                          answers[q.id] === opt
                            ? "bg-[#e11b22] text-white shadow-sm"
                            : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>

                  {/* Show answer status if submitted */}
                  {isSubmitted && (
                    <div className="mt-3 pl-8 text-xs font-bold flex items-center gap-2">
                      {isCorrect ? (
                        <span className="text-emerald-700 flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4" /> Chính xác! Đáp án: {q.correct}
                        </span>
                      ) : (
                        <span className="text-[#e11b22] flex items-center gap-1">
                          <X className="w-4 h-4" /> Sai! Đáp án đúng: <b>{q.correct}</b> (Bạn chọn: {answers[q.id] || "Bỏ trống"})
                        </span>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Linearthinking 4-Step Explanation Modal */}
      {showExplanation && (
        <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-red-200 shadow-2xl space-y-6 animate-in slide-in-from-bottom duration-300">
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-red-50 text-[#e11b22] flex items-center justify-center font-bold">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900">Giải Thích Chi Tiết Theo Phương Pháp Linearthinking</h3>
                <p className="text-xs text-slate-500 font-medium">Được biên soạn theo chuẩn quốc tế AI4IELTS+ - Hệ thống Tiếng Anh Tư Duy</p>
              </div>
            </div>

            <button
              onClick={() => setShowExplanation(false)}
              className="w-8 h-8 rounded-lg bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-slate-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Question 1 Breakdown */}
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-red-50 border border-red-200">
              <div className="font-black text-slate-900 text-sm mb-1">
                Câu 1: "No other species of parrot lives to the age a vaira can reach." $\rightarrow$ Đáp án: <span className="text-[#e11b22]">NOT GIVEN</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#e11b22]">
                  Step 01: Simplify với Linearthinking
                </div>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  {TEST_DETAIL.questions[0].explanation.step1}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#e11b22]">
                  Step 02: Locate bằng chứng
                </div>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  {TEST_DETAIL.questions[0].explanation.step2}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#e11b22]">
                  Step 03: Đọc câu bằng chứng theo Linearthinking
                </div>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  {TEST_DETAIL.questions[0].explanation.step3}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#e11b22]">
                  Step 04: Compare meaning with meaning
                </div>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  {TEST_DETAIL.questions[0].explanation.step4}
                </p>
              </div>
            </div>

            {/* Paraphrasing comparison table */}
            {TEST_DETAIL.questions[0].explanation.paraphrase && (
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Bảng đối chiếu Paraphrasing 2 cột
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="font-bold text-slate-800 bg-white p-2.5 rounded-xl border border-slate-200">
                    Cụm trong câu hỏi
                  </div>
                  <div className="font-bold text-slate-800 bg-white p-2.5 rounded-xl border border-slate-200">
                    Cụm tương ứng trong bài đọc
                  </div>
                  {TEST_DETAIL.questions[0].explanation.paraphrase.map((pair, idx) => (
                    <React.Fragment key={idx}>
                      <div className="bg-white p-2.5 rounded-xl border border-slate-200 text-slate-700 font-medium">
                        {pair.q}
                      </div>
                      <div className="bg-white p-2.5 rounded-xl border border-slate-200 text-slate-700 font-medium">
                        {pair.p}
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}

            {/* Trap warning */}
            {TEST_DETAIL.questions[0].explanation.distractor && (
              <div className="p-4 rounded-2xl bg-red-100/60 border border-red-300 text-xs text-red-900 leading-relaxed">
                <b>⚠️ Cảnh báo bẫy thi thật:</b> {TEST_DETAIL.questions[0].explanation.distractor}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
