export interface ChecklistTask {
  id: string;
  category: "Listening" | "Reading" | "Writing" | "Speaking" | "Grammar & Vocab" | "Deep Review";
  title: string;
  detail: string;
  targetMetric: string;
  practiceLink?: string;
  practiceLabel?: string;
}

export interface RoadmapPhase {
  id: string;
  phaseNumber: number;
  title: string;
  bandRange: string;
  duration: string;
  summary: string;
  warningOrTip: string;
  keyGoals: string[];
  tasks: ChecklistTask[];
}

export interface SkillStrategy {
  id: "listening" | "reading" | "writing" | "speaking";
  name: string;
  currentScore: string;
  targetScore: string;
  diagnosis: string;
  coreFocus: string;
  stepsTitle: string;
  steps: {
    badge: string;
    title: string;
    desc: string;
  }[];
  goldenRule: string;
  practiceLink: string;
  practiceText: string;
}

export interface DailyBlock {
  duration: string;
  title: string;
  subtitle: string;
  goal: string;
  actionLink: string;
  actionLabel: string;
}

export interface WeeklyDayPlan {
  id: string;
  dayName: string;
  shortName: string;
  receptiveSkill: string;
  productiveSkill: string;
  finalPractice: string;
  linkPrimary: string;
  labelPrimary: string;
  linkSecondary: string;
  labelSecondary: string;
  checklistItems: {
    id: string;
    text: string;
  }[];
}

export const DAILY_TIME_BLOCKS: DailyBlock[] = [
  {
    duration: "15 – 20 phút đầu",
    title: "Ôn từ vựng & Ngữ pháp (Spaced Repetition)",
    subtitle: "Khởi động trí nhớ dài hạn",
    goal: "Ôn lại 10–15 từ/cụm từ (collocations) của ngày hôm trước qua Flashcard/Mini-game và tự đặt câu ngắn.",
    actionLink: "/games/collocations",
    actionLabel: "Ôn Collocations",
  },
  {
    duration: "40 – 45 phút giữa",
    title: "Kỹ năng tiếp thu (Listening HOẶC Reading)",
    subtitle: "Rèn chiến thuật xử lý từng dạng câu hỏi",
    goal: "Làm 1–2 phần bài tập theo dạng câu hỏi + dành ít nhất 20 phút để tra transcript / lập bảng Keyword Table.",
    actionLink: "/tests",
    actionLabel: "Luyện Reading/Listening",
  },
  {
    duration: "35 – 45 phút cuối",
    title: "Kỹ năng sản sinh (Speaking HOẶC Writing)",
    subtitle: "Chuyển hóa từ vựng thành phản xạ nói & viết",
    goal: "Viết 1 đoạn văn (Body paragraph / Overview) hoặc ghi âm trả lời 4–5 câu hỏi Speaking và tự nghe lại để sửa lỗi.",
    actionLink: "/shadowing",
    actionLabel: "Luyện nói Shadowing",
  },
];

export const ROADMAP_PHASES: RoadmapPhase[] = [
  {
    id: "phase-1",
    phaseNumber: 1,
    title: "Giai đoạn 1: Gia cố nền tảng & Làm quen Format",
    bandRange: "Band 4.5 → 5.0",
    duration: "Tháng 1 – Tháng 2 (8 tuần đầu)",
    summary:
      "Chưa giải đề full test. Tập trung chuẩn hóa phát âm (IPA, âm cuối), ôn lại 6 chủ điểm ngữ pháp cốt lõi phục vụ Writing/Speaking, tích lũy từ vựng theo 10 chủ đề phổ biến và làm quen từng dạng câu hỏi đơn lẻ của Listening Part 1–2 và Reading Passage 1.",
    warningOrTip:
      "Sai lầm lớn nhất của học viên band 4.5 là lao ngay vào giải bộ đề Cambridge IELTS rồi nản chí vì không hiểu tại sao mình sai. Hãy xây chắc móng trong 2 tháng đầu!",
    keyGoals: [
      "Nắm vững 44 âm IPA, Ending sounds (/s/, /z/, /t/, /d/, /k/, /v/) & cụm phụ âm",
      "Sử dụng chính xác 6 cấu trúc ngữ pháp cốt lõi không mắc lỗi câu cụt/sai thì",
      "Tích lũy 300+ từ vựng & Collocations theo 10 chủ đề IELTS phổ biến",
      "Làm quen dạng điền từ đơn lẻ ở Listening Part 1–2 & Reading Passage 1",
    ],
    tasks: [
      {
        id: "p1-pron-ipa",
        category: "Speaking",
        title: "Chuẩn hóa bảng âm IPA & Ending Sounds (/s/, /z/, /t/, /d/, /k/, /v/)",
        detail: "Luyện phát âm chuẩn từng âm đuôi và cụm phụ âm (str-, pr-, pl-) qua các bài Shadowing ngắn.",
        targetMetric: "10 bài Shadowing",
        practiceLink: "/shadowing",
        practiceLabel: "Luyện Shadowing",
      },
      {
        id: "p1-gram-complex",
        category: "Grammar & Vocab",
        title: "Ngữ pháp 1–2: Câu ghép, câu phức (although, while, whereas, despite) & Mệnh đề quan hệ",
        detail: "Tập viết câu ghép, câu phức và rút gọn mệnh đề quan hệ (which, who, where) không sai dấu câu.",
        targetMetric: "Viết 30 câu chuẩn",
      },
      {
        id: "p1-gram-passive",
        category: "Grammar & Vocab",
        title: "Ngữ pháp 3–4: Câu bị động (Process/Map) & Cụm danh từ mở rộng (Noun Phrases)",
        detail: "Ứng dụng câu bị động và cụm danh từ mở rộng để nâng văn phong lên chuẩn Academic.",
        targetMetric: "Viết 20 cụm N-Phrase",
      },
      {
        id: "p1-gram-tense",
        category: "Grammar & Vocab",
        title: "Ngữ pháp 5–6: Hòa hợp chủ ngữ - động từ, Thì quá khứ/hiện tại hoàn thành & Cấu trúc so sánh",
        detail: "Sửa triệt để lỗi chia động từ số ít/nhiều và dùng đúng thì khi mô tả số liệu có năm tháng.",
        targetMetric: "Hoàn thành 100%",
      },
      {
        id: "p1-vocab-10topics",
        category: "Grammar & Vocab",
        title: "Tích lũy Collocations theo 10 chủ đề cốt lõi (Environment, Education, Health, Work...)",
        detail: "Học nghĩa, cách dùng, ngữ cảnh và câu mẫu của bộ 108 cụm Collocation học thuật.",
        targetMetric: "Thuộc 60+ cụm",
        practiceLink: "/games/collocations",
        practiceLabel: "Học Collocations",
      },
      {
        id: "p1-lis-dictation",
        category: "Listening",
        title: "Luyện nghe bắt số điện thoại, tên riêng, ngày tháng & Chép chính tả Section 1",
        detail: "Dành 15 phút mỗi ngày nghe chép các câu chứa đáp án Part 1 để sửa lỗi thiếu âm đuôi -s/-es, -ed.",
        targetMetric: "8 bài Section 1",
        practiceLink: "/dictation",
        practiceLabel: "Vào Chép chính tả",
      },
      {
        id: "p1-read-scan",
        category: "Reading",
        title: "Làm quen Reading Passage 1: Nhóm điền từ (Note/Summary Completion, Short Answer)",
        detail: "Áp dụng kỹ thuật Scanning (quét tên riêng, năm tháng, thuật ngữ) để định vị đáp án theo đúng thứ tự.",
        targetMetric: "Đúng 10–12/13 câu P1",
        practiceLink: "/tests/series/cam-20",
        practiceLabel: "Luyện Passage 1",
      },
    ],
  },
  {
    id: "phase-2",
    phaseNumber: 2,
    title: "Giai đoạn 2: Nắm vững chiến thuật từng dạng bài",
    bandRange: "Band 5.0 → 6.0",
    duration: "Tháng 3 – Tháng 5 (12 tuần trọng tâm)",
    summary:
      "Đi sâu vào kỹ thuật xử lý các dạng bài khó hơn (True/False/Not Given, Matching Headings, Listening Part 3–4). Luyện viết hoàn chỉnh từng đoạn và cả bài cho Writing Task 1 & Task 2; luyện phản xạ trả lời dài cho Speaking Part 2 & Part 3.",
    warningOrTip:
      "Ở giai đoạn này, đừng chạy theo số lượng đề. Hãy áp dụng Quy trình Nghe 3 bước và công thức viết P.E.E.L / nói A.R.E.A một cách kỷ luật.",
    keyGoals: [
      "Listening: Đạt vững 16–18/20 câu ở Part 1 & Part 2; nắm cách bắt Paraphrase ở Part 3",
      "Reading: Phân biệt rõ False vs Not Given; dùng Skimming xử lý Matching Headings",
      "Writing Task 1: Thành thạo bố cục 4 đoạn (đặc biệt đoạn Overview 2 câu tóm tắt xu hướng)",
      "Writing Task 2 & Speaking: Viết thân bài theo P.E.E.L; nói Part 2 theo 4 nhóm gốc & Part 3 theo A.R.E.A",
    ],
    tasks: [
      {
        id: "p2-lis-p1p2",
        category: "Listening",
        title: "Chinh phục Listening Part 1 & Part 2 (Form/Note, Multiple Choice, Map Labeling)",
        detail: "Áp dụng quy trình Nghe 3 bước: Làm như thi thật → Nghe lại câu sai → Mở Transcript gạch chân Paraphrase + Shadowing.",
        targetMetric: "Đạt 16–18/20 câu P1–2",
        practiceLink: "/tests/cam-20-listening-1",
        practiceLabel: "Làm Listening",
      },
      {
        id: "p2-lis-p3",
        category: "Listening",
        title: "Làm quen Listening Part 3 (Thảo luận học thuật) & Chép chính tả Section 2–3",
        detail: "Tập nghe phân biệt ý kiến giữa các nhân vật và tránh bẫy thông tin bị đổi ý (but, however, actually).",
        targetMetric: "6 bài Section 2–3",
        practiceLink: "/dictation",
        practiceLabel: "Chép Section 2–3",
      },
      {
        id: "p2-read-tfng",
        category: "Reading",
        title: "Làm chủ dạng True/False/Not Given & Yes/No/Not Given ở Passage 1–2",
        detail: "Phân biệt rõ False/No (thông tin ngược hẳn/mâu thuẫn với câu hỏi) và Not Given (bài đọc không đề cập).",
        targetMetric: "Độ chính xác >80%",
        practiceLink: "/tests/cam-20-reading-1",
        practiceLabel: "Luyện T/F/NG",
      },
      {
        id: "p2-read-matching",
        category: "Reading",
        title: "Luyện kỹ thuật Skimming cho Matching Headings, Matching Information & Multiple Choice",
        detail: "Đọc câu mở đầu và câu kết của đoạn văn để nắm ý bao quát (Linearthinking) thay vì dịch từng từ.",
        targetMetric: "Đạt 18–20/26 câu P1–2",
        practiceLink: "/tests/cam-19-reading-1",
        practiceLabel: "Luyện Matching",
      },
      {
        id: "p2-write-task1",
        category: "Writing",
        title: "Writing Task 1 (150 từ – 20 phút): Bố cục 4 đoạn chuẩn & Bộ từ vựng xu hướng / so sánh",
        detail: "Viết chuẩn Introduction → Overview (2 câu nêu xu hướng chính + cực trị) → Body 1 → Body 2 (increase, fluctuate, account for...).",
        targetMetric: "Viết 10 bài Task 1",
      },
      {
        id: "p2-write-task2",
        category: "Writing",
        title: "Writing Task 2 (250 từ – 40 phút): 4 dạng đề chính & Công thức đoạn văn P.E.E.L",
        detail: "Luyện Opinion, Discussion, Problem–Solution, Two-part Question theo khung Point → Explanation → Example → Link.",
        targetMetric: "Viết 10 bài Task 2",
      },
      {
        id: "p2-speak-p123",
        category: "Speaking",
        title: "Speaking Part 1 (Direct + Reason), Part 2 (4 nhóm Person/Place/Object/Event) & Part 3 (A.R.E.A)",
        detail: "Lập dàn ý 1 phút cho 4 nhóm chủ đề gốc Part 2 và mở rộng góc nhìn xã hội ở Part 3 theo Answer → Reason → Example → Alternative.",
        targetMetric: "Ghi âm 15 chủ đề",
        practiceLink: "/shadowing",
        practiceLabel: "Luyện phòng nói",
      },
    ],
  },
  {
    id: "phase-3",
    phaseNumber: 3,
    title: "Giai đoạn 3: Luyện đề thực chiến & Tối ưu tốc độ",
    bandRange: "Band 6.0 → 6.5+",
    duration: "Tháng 6 – Tháng 8 (8–12 tuần về đích)",
    summary:
      "Giải đề trong bộ Cambridge IELTS (Cam 12 – Cam 21) và Real Test 2026 dưới áp lực thời gian thật. Trọng tâm không nằm ở số lượng đề làm được, mà ở bước Chữa chi tiết (Deep Review): lập bảng từ đồng nghĩa (Keyword Table), phân tích bẫy và viết lại các bài Writing đã được sửa lỗi.",
    warningOrTip:
      "1 đề được chữa chi tiết (Deep Review + Keyword Table + Shadowing lại transcript) có giá trị hơn 5 đề chỉ bấm xem đáp án rồi bỏ qua!",
    keyGoals: [
      "Listening: Đạt ổn định 23–27/40 câu (Band 6.0–6.5) dưới áp lực 30 phút",
      "Reading: Đạt ổn định 23–27/40 câu trong đúng 60 phút, không bị thiếu giờ",
      "Deep Review: Lập bảng Keyword Table (10+ cặp Synonym/Paraphrase sau mỗi đề)",
      "Writing & Speaking: Hoàn thiện tốc độ viết 60 phút (Task 1 + Task 2) và thi thử Speaking 3 Parts",
    ],
    tasks: [
      {
        id: "p3-cam-reading",
        category: "Reading",
        title: "Giải Full Test Reading bấm giờ 60 phút (Bộ Cambridge 15 – 21 & Real Test 2026)",
        detail: "Phân bổ thời gian chuẩn: 15 phút cho Passage 1, 20 phút cho Passage 2, 25 phút cho Passage 3.",
        targetMetric: "Đạt 23–27/40 câu",
        practiceLink: "/tests/series/cam-21",
        practiceLabel: "Thi thử Cam 21",
      },
      {
        id: "p3-cam-listening",
        category: "Listening",
        title: "Giải Full Test Listening 4 Parts (Bộ Cambridge 15 – 21 & Forecast 2026)",
        detail: "Giữ vững độ chính xác ở Part 1–2 và tối ưu điểm số ở Part 3–4 bằng đọc trước từ khóa.",
        targetMetric: "Đạt 23–27/40 câu",
        practiceLink: "/tests/cam-21-listening-1",
        practiceLabel: "Thi Listening Cam 21",
      },
      {
        id: "p3-keyword-table",
        category: "Deep Review",
        title: "Lập bảng Keyword Table 2 cột (Từ trong câu hỏi ↔ Paraphrase trong bài) sau mỗi đề",
        detail: "Ghi chép ít nhất 10 cặp từ đồng nghĩa/diễn đạt tương đương sau mỗi bài Reading & Listening.",
        targetMetric: "Tối thiểu 150 cặp từ",
      },
      {
        id: "p3-writing-rewrite",
        category: "Writing",
        title: "Viết lại (Rewrite) các bài Writing Task 1 & Task 2 sau khi đã rà soát lỗi ngữ pháp/từ vựng",
        detail: "Tập bấm giờ 60 phút cho cả 2 Task (20p Task 1 + 40p Task 2) và nâng cấp Collocations.",
        targetMetric: "8 bộ đề Full Writing",
        practiceLink: "/games/collocations/quiz",
        practiceLabel: "Kiểm tra Collocation",
      },
      {
        id: "p3-speaking-mock",
        category: "Speaking",
        title: "Thi thử Speaking đầy đủ 3 Parts (11–14 phút) & Nghe lại bản thu âm tự sửa lỗi",
        detail: "Kiểm tra độ trôi chảy, phát âm âm cuối và việc áp dụng công thức Direct+Reason / A.R.E.A.",
        targetMetric: "6 buổi Mock Speaking",
        practiceLink: "/shadowing",
        practiceLabel: "Vào phòng luyện nói",
      },
    ],
  },
];

export const SKILL_STRATEGIES: SkillStrategy[] = [
  {
    id: "listening",
    name: "Listening",
    currentScore: "Hiện tại ~13–15/40 câu (Band 4.5)",
    targetScore: "Mục tiêu 23–27/40 câu (Band 6.0–6.5)",
    diagnosis:
      "Ở mức 4.5, bạn thường nghe bắt từ rời rạc (nghe thấy từ nào giống trong đề là chọn ngay nên rất dễ sập bẫy của bài thi).",
    coreFocus:
      "Tập trung tối đa vào Part 1 (hội thoại đời sống: điền thông tin, số điện thoại, tên riêng, ngày tháng) và Part 2 (độc thoại hướng dẫn, bản đồ, trắc nghiệm ngắn). Đặt mục tiêu đúng tối thiểu 16–18/20 câu ở hai phần này trước khi nghĩ đến Part 3 và Part 4.",
    stepsTitle: "Phương pháp học hiệu quả (3 Mũi nhọn)",
    steps: [
      {
        badge: "Bước 1",
        title: "Làm bài theo dạng (Question Types)",
        desc: "Luyện riêng dạng Form/Note Completion trước để ăn trọn điểm điền từ, sau đó mới chuyển sang Multiple Choice và Map Labeling.",
      },
      {
        badge: "Bước 2",
        title: "Quy trình Nghe 3 bước chuẩn",
        desc: "Lần 1: Làm bài như thi thật → Lần 2: Nghe lại câu sai (chưa mở đáp án) xem có tự phát hiện chỗ lỡ thông tin không → Lần 3: Mở Transcript gạch chân cụm paraphrase và vừa nghe vừa nhại theo (Shadowing).",
      },
      {
        badge: "Bước 3",
        title: "Nghe chép chính tả (Dictation 15 phút/ngày)",
        desc: "Tập nghe chép các câu chứa đáp án trong Part 1 & Part 2 để sửa triệt để lỗi thiếu âm đuôi (-s/-es, -ed).",
      },
    ],
    goldenRule:
      "Đừng bao giờ chọn đáp án chỉ vì nghe thấy đúng 1 từ giống hệt trên đề — đáp án đúng luôn đi kèm Paraphrase!",
    practiceLink: "/dictation",
    practiceText: "Luyện Nghe Chép Chính Tả Part 1–4",
  },
  {
    id: "reading",
    name: "Reading",
    currentScore: "Hiện tại ~13–15/40 câu (Band 4.5)",
    targetScore: "Mục tiêu 23–27/40 câu (Band 6.0–6.5)",
    diagnosis:
      "Thói quen dịch từng từ từ đầu đến cuối bài sẽ khiến bạn hết sạch 60 phút khi mới làm tới giữa bài đọc số 2.",
    coreFocus:
      "Dồn sức làm chắc Passage 1 và Passage 2 (mục tiêu đúng 18–20/26 câu). Học các dạng bài theo thứ tự từ dễ đến khó.",
    stepsTitle: "Thứ tự học các dạng bài (Từ dễ đến khó)",
    steps: [
      {
        badge: "Nhóm 1 (Dễ)",
        title: "Điền từ & Trả lời ngắn (Sentence/Note/Summary Completion, Short Answer)",
        desc: "Đáp án hầu hết xuất hiện theo đúng thứ tự câu hỏi. Dùng kỹ thuật Scanning (quét nhanh tên riêng, năm tháng, thuật ngữ) để định vị đoạn chứa thông tin.",
      },
      {
        badge: "Nhóm 2 (Vừa)",
        title: "Kiểm tra thông tin (True/False/Not Given & Yes/No/Not Given)",
        desc: "Phân biệt rõ giữa False/No (thông tin trong bài ngược hẳn hoặc mâu thuẫn với câu hỏi) và Not Given (bài đọc không hề đề cập tới khía cạnh đó).",
      },
      {
        badge: "Nhóm 3 (Khó)",
        title: "Tìm ý chính & Ghép nối (Matching Headings, Matching Info, Multiple Choice)",
        desc: "Học ở Giai đoạn 2 bằng kỹ thuật Skimming (đọc câu mở đầu và câu kết của đoạn văn để nắm ý bao quát thay vì sa đà vào chi tiết phụ).",
      },
    ],
    goldenRule:
      "Quy tắc vàng sau mỗi bài đọc: Lập bảng Keyword Table gồm 2 cột (Từ khóa trong câu hỏi ↔ Synonym/Paraphrase trong bài đọc). Đây là cách tăng band Reading nhanh nhất!",
    practiceLink: "/tests",
    practiceText: "Vào Kho 28 Bộ Đề Reading",
  },
  {
    id: "writing",
    name: "Writing",
    currentScore: "Thường ở mức 4.0–4.5",
    targetScore: "Mục tiêu 6.0 vững chắc",
    diagnosis:
      "Với người mới bắt đầu từ 4.5, đừng vội học từ vựng 'đao to búa lớn'. Giám khảo IELTS chấm rất nặng lỗi ngữ pháp cơ bản và lỗi lạc đề.",
    coreFocus:
      "Tháng 1–2 xây nền viết câu với 6 cấu trúc ngữ pháp cốt lõi; từ Tháng 3 trở đi luyện bố cục 4 đoạn chuẩn cho Task 1 và công thức P.E.E.L cho Task 2.",
    stepsTitle: "Lộ trình chinh phục Writing Task 1 & Task 2",
    steps: [
      {
        badge: "Tháng 1–2",
        title: "Xây nền 6 cấu trúc ngữ pháp (Grammatical Range & Accuracy)",
        desc: "(1) Câu ghép & câu phức (although, while, whereas, despite) • (2) Mệnh đề quan hệ & rút gọn • (3) Câu bị động cho Process/Map • (4) Cụm danh từ mở rộng (Noun Phrases).",
      },
      {
        badge: "Task 1 (20p)",
        title: "Writing Task 1 (150 từ) – Bố cục 4 đoạn chuẩn",
        desc: "Học từ vựng xu hướng (increase, fluctuate, reach a peak) & so sánh (account for, twice as much as). Bố cục: Introduction → Overview (2 câu tóm tắt xu hướng nổi bật & cực trị — thiếu đoạn này không thể qua 5.0) → Body 1 → Body 2.",
      },
      {
        badge: "Task 2 (40p)",
        title: "Writing Task 2 (250 từ) – Công thức đoạn thân bài P.E.E.L",
        desc: "Nắm 4 dạng đề (Opinion, Discussion, Problem–Solution, Two-part Question). Viết đoạn thân bài theo P.E.E.L: Point (Luận điểm) → Explanation (Giải thích) → Example (Ví dụ cụ thể) → Link (Gắn kết lại đề bài).",
      },
    ],
    goldenRule:
      "Luôn dành 3–5 phút đầu lập dàn ý và 3 phút cuối rà soát lỗi chia động từ, mạo từ (a/an/the) và danh từ số nhiều!",
    practiceLink: "/games/collocations",
    practiceText: "Học Collocation cho Writing Task 2",
  },
  {
    id: "speaking",
    name: "Speaking",
    currentScore: "Hiện tại 4.5",
    targetScore: "Mục tiêu 6.0 tự tin",
    diagnosis:
      "Ở band 4.5, thí sinh thường trả lời cụt lủn 1 câu rồi dừng, phát âm mất âm cuối và hay dịch từng chữ từ tiếng Việt sang tiếng Anh trong đầu.",
    coreFocus:
      "Chuẩn hóa phát âm IPA, đặc biệt chú ý Ending sounds (/s/, /z/, /t/, /d/, /k/, /v/), Cụm phụ âm (str-, pr-, pl-) và áp dụng công thức mở rộng câu trả lời cho từng Part.",
    stepsTitle: "Chiến thuật mở rộng câu trả lời cho 3 Parts",
    steps: [
      {
        badge: "Part 1 (4–5p)",
        title: "Hỏi đáp bản thân: Direct Answer + Reason / Example",
        desc: "Luôn trả lời trong 2–3 câu: 1 câu trả lời trực tiếp + 1–2 câu giải thích lý do hoặc nêu tần suất/kỷ niệm ngắn.",
      },
      {
        badge: "Part 2 (2p)",
        title: "Độc thoại 2 phút: Gom về 4 nhóm chủ đề gốc",
        desc: "Gom hàng chục đề về 4 nhóm: Person (Người), Place (Địa điểm), Object (Đồ vật/Công nghệ), Event/Journey (Sự kiện/Chuyến đi). Trong 1 phút chuẩn bị, gạch nhanh Keywords theo sườn: What – When/Where – Who – How – Why memorable.",
      },
      {
        badge: "Part 3 (4–5p)",
        title: "Thảo luận xã hội: Công thức A.R.E.A",
        desc: "Không nói về cá nhân ('I like...') mà mở rộng ra xã hội: Answer (Quan điểm) → Reason (Nguyên nhân) → Example (Ví dụ thực tế tại VN/thế giới) → Alternative (Góc nhìn ngược lại).",
      },
    ],
    goldenRule:
      "Ghi âm lại mọi câu trả lời của mình và nghe lại ngay — bạn sẽ tự phát hiện ra 80% lỗi mất âm cuối và ngập ngừng!",
    practiceLink: "/shadowing",
    practiceText: "Vào Phòng Luyện Nói Shadowing",
  },
];

export const WEEKLY_ROTATION_SCHEDULE: WeeklyDayPlan[] = [
  {
    id: "mon",
    dayName: "Thứ Hai",
    shortName: "T2",
    receptiveSkill: "Listening (Luyện dạng bài Part 1 & Part 2)",
    productiveSkill: "Speaking Part 1 (3 chủ đề quen thuộc theo Direct + Reason)",
    finalPractice: "Nghe chép chính tả 1 đoạn ngắn + Ghi âm trả lời Speaking.",
    linkPrimary: "/dictation/family-excursions",
    labelPrimary: "Chép Part 1",
    linkSecondary: "/shadowing",
    labelSecondary: "Nói Part 1",
    checklistItems: [
      { id: "mon-1", text: "15p đầu: Ôn 10–15 Collocations & đặt câu ngắn" },
      { id: "mon-2", text: "45p giữa: Luyện Listening Part 1 & 2 theo dạng Form/Note" },
      { id: "mon-3", text: "45p cuối: Luyện Speaking Part 1 (3 chủ đề) + Chép chính tả 1 đoạn ngắn" },
    ],
  },
  {
    id: "tue",
    dayName: "Thứ Ba",
    shortName: "T3",
    receptiveSkill: "Reading (Luyện dạng bài Passage 1 – Scanning điền từ)",
    productiveSkill: "Writing Task 1 (Phân tích biểu đồ & viết Overview + câu mô tả)",
    finalPractice: "Lập bảng Keyword Table (10 cặp từ đồng nghĩa từ bài đọc).",
    linkPrimary: "/tests/cam-20-reading-1",
    labelPrimary: "Làm Passage 1",
    linkSecondary: "/games/collocations",
    labelSecondary: "Tra từ vựng",
    checklistItems: [
      { id: "tue-1", text: "15p đầu: Ôn từ vựng Spaced Repetition ngày hôm trước" },
      { id: "tue-2", text: "45p giữa: Làm Reading Passage 1 + Lập bảng Keyword Table 10 cặp từ" },
      { id: "tue-3", text: "45p cuối: Phân tích biểu đồ Writing Task 1 & viết Introduction + Overview" },
    ],
  },
  {
    id: "wed",
    dayName: "Thứ Tư",
    shortName: "T4",
    receptiveSkill: "Listening (Luyện Part 2 & làm quen Part 3)",
    productiveSkill: "Speaking Part 2 (Lập dàn ý 1 phút & nói 2 phút theo 4 nhóm gốc)",
    finalPractice: "Luyện Shadowing (nhại theo ngữ điệu người bản xứ trong audio).",
    linkPrimary: "/dictation/talk-to-new-kitchen-assistants",
    labelPrimary: "Luyện Part 2",
    linkSecondary: "/shadowing",
    labelSecondary: "Luyện Shadowing",
    checklistItems: [
      { id: "wed-1", text: "15p đầu: Ôn 10–15 Collocations & cấu trúc câu phức" },
      { id: "wed-2", text: "45p giữa: Luyện Listening Part 2 & 3 theo Quy trình 3 bước" },
      { id: "wed-3", text: "45p cuối: Lập dàn ý 1 phút & nói 2 phút Speaking Part 2 + Shadowing" },
    ],
  },
  {
    id: "thu",
    dayName: "Thứ Năm",
    shortName: "T5",
    receptiveSkill: "Reading (Luyện dạng bài Passage 2 – T/F/NG & Matching)",
    productiveSkill: "Writing Task 2 (Lập dàn ý & viết đoạn thân bài theo P.E.E.L)",
    finalPractice: "Tra cứu từ điển Collocation cho chủ đề vừa viết.",
    linkPrimary: "/tests/cam-19-reading-1",
    labelPrimary: "Làm Passage 2",
    linkSecondary: "/games/collocations",
    labelSecondary: "Tra Collocations",
    checklistItems: [
      { id: "thu-1", text: "15p đầu: Ôn lại bảng Keyword Table của Thứ Ba" },
      { id: "thu-2", text: "45p giữa: Làm Reading Passage 2 + Phân tích câu sai T/F/NG" },
      { id: "thu-3", text: "45p cuối: Viết đoạn thân bài Writing Task 2 theo P.E.E.L + Tra Collocation" },
    ],
  },
  {
    id: "fri",
    dayName: "Thứ Sáu",
    shortName: "T6",
    receptiveSkill: "Listening (Tổng hợp + sửa lỗi sai bằng Transcript)",
    productiveSkill: "Speaking Part 2 & Part 3 (Mở rộng ý tưởng xã hội theo A.R.E.A)",
    finalPractice: "Ghi âm bài nói hoàn chỉnh, tự chấm lại các lỗi ngữ pháp và phát âm.",
    linkPrimary: "/tests/cam-20-listening-1",
    labelPrimary: "Nghe & Sửa lỗi",
    linkSecondary: "/shadowing",
    labelSecondary: "Ghi âm Part 2–3",
    checklistItems: [
      { id: "fri-1", text: "15p đầu: Ôn từ vựng & luyện phát âm Ending sounds" },
      { id: "fri-2", text: "45p giữa: Nghe lại các bài Listening trong tuần, gạch chân Paraphrase" },
      { id: "fri-3", text: "45p cuối: Ghi âm hoàn chỉnh Speaking Part 2 & Part 3 (A.R.E.A) và tự sửa lỗi" },
    ],
  },
  {
    id: "sat",
    dayName: "Thứ Bảy",
    shortName: "T7",
    receptiveSkill: "Reading + Writing kết hợp",
    productiveSkill: "Hoàn chỉnh 1 bài Writing Task 1 hoặc Task 2 bấm giờ",
    finalPractice: "Tự rà soát hoặc dùng công cụ chấm chữa chi tiết lỗi ngữ pháp/từ vựng.",
    linkPrimary: "/tests/real-test-2026-q2-reading-1",
    labelPrimary: "Luyện Reading",
    linkSecondary: "/games/collocations/quiz",
    labelSecondary: "Kiểm tra từ vựng",
    checklistItems: [
      { id: "sat-1", text: "45p đầu: Giải bài tập Reading tổng hợp & cập nhật Keyword Table" },
      { id: "sat-2", text: "45p giữa: Viết hoàn chỉnh 1 bài Writing Task 1 (20p) hoặc Task 2 (40p)" },
      { id: "sat-3", text: "20p cuối: Chữa chi tiết lỗi ngữ pháp, mạo từ, chia động từ và viết lại câu sai" },
    ],
  },
  {
    id: "sun",
    dayName: "Chủ Nhật",
    shortName: "CN",
    receptiveSkill: "Tổng ôn tuần (Weekly Review Day)",
    productiveSkill: "Ôn toàn bộ từ vựng trong tuần + Xem lại sổ tay lỗi sai",
    finalPractice: "Làm bài kiểm tra Collocation định kỳ 7 ngày + Nghe thụ động Podcast/YouTube.",
    linkPrimary: "/games/collocations/quiz",
    labelPrimary: "Làm Quiz Tuần",
    linkSecondary: "/dictation",
    labelSecondary: "Nghe thư giãn",
    checklistItems: [
      { id: "sun-1", text: "Hoàn thành Bài kiểm tra Collocation định kỳ 7 ngày" },
      { id: "sun-2", text: "Ôn lại toàn bộ bảng Keyword Table & sổ tay lỗi sai Writing/Speaking trong tuần" },
      { id: "sun-3", text: "Nghe thụ động 6 Minute English / Podcast tiếng Anh thư giãn" },
    ],
  },
];

export const RECOMMENDED_BOOKS = [
  {
    stage: "Giáo trình xây nền (4.5 → 5.5)",
    items: [
      {
        title: "Complete IELTS Bands 4.0–5.0 (Cambridge)",
        desc: "Thiết kế cực kỳ bài bản cho người mới bắt đầu, tích hợp đủ 4 kỹ năng, từ vựng và ngữ pháp theo từng chủ đề.",
      },
      {
        title: "Mindset for IELTS – Level 1 (Cambridge)",
        desc: "Chia nhỏ từng bước làm bài, rất phù hợp để tự học từng dạng câu hỏi mà không bị ngợp.",
      },
    ],
  },
  {
    stage: "Sách bổ trợ Ngữ pháp & Từ vựng",
    items: [
      {
        title: "Cambridge Grammar for IELTS",
        desc: "Hệ thống toàn bộ chủ điểm ngữ pháp xuất hiện trực tiếp trong bài thi kèm bài tập nghe và viết.",
      },
      {
        title: "Collins Vocabulary for IELTS / English Vocabulary in Use (Pre-intermediate & Intermediate)",
        desc: "Học từ vựng đặt trong ngữ cảnh học thuật thay vì học danh sách từ rời rạc.",
      },
    ],
  },
  {
    stage: "Sách nâng cấp từng kỹ năng (5.0 → 6.5)",
    items: [
      {
        title: "Bộ Collins English for IELTS / Improve Your Skills for IELTS (4.5–6.0)",
        desc: "Rèn chuyên sâu từng kỹ năng Listening, Reading, Writing, Speaking theo từng dạng bài.",
      },
      {
        title: "Basic IELTS Listening",
        desc: "Dành cho những tuần đầu nếu bạn còn yếu kỹ năng nghe bắt số điện thoại, tên riêng, ngày tháng, địa chỉ.",
      },
    ],
  },
  {
    stage: "Sách luyện đề thực chiến (Chỉ dùng từ Giai đoạn 2 & 3)",
    items: [
      {
        title: "Bộ Cambridge IELTS 12 – 21 (Đã tích hợp sẵn trên AI4IELTS+)",
        desc: "Nguồn đề chuẩn xác nhất từ đơn vị ra đề thi thật, kèm giải thích chi tiết từng câu trên hệ thống.",
      },
    ],
  },
];

export const YOUTUBE_CHANNELS = [
  {
    group: "Hướng dẫn lộ trình & phương pháp tự học (Tiếng Việt)",
    items: [
      {
        title: "Lộ trình học IELTS 6.5 cho người mới bắt đầu – IELTS Nguyễn Huyền",
        desc: "Video hướng dẫn chi tiết cách chia giai đoạn và ghi chép từ vựng từ con số 0.",
        url: "http://www.youtube.com/watch?v=fPL3-cODrVU",
      },
      {
        title: "Lộ trình tự học 1 năm từ mất gốc lên 6.5? – Datio English",
        desc: "Phân tích kế hoạch tự học dài hạn và cách phân bổ thời gian từng kỹ năng.",
        url: "http://www.youtube.com/watch?v=Rj0gkfJOG9Y",
      },
      {
        title: "Lộ trình tự học IELTS chi tiết đến 6.5 – Sophia Here",
        desc: "Chia sẻ kinh nghiệm phân bổ tài liệu và lịch học hằng ngày thực tế.",
        url: "http://www.youtube.com/watch?v=DYhZvZTJUT0",
      },
      {
        title: "Cách tự học IELTS Tiết Kiệm và Cực Hiệu Quả – Khánh Vy OFFICIAL",
        desc: "Kinh nghiệm tự học tiết kiệm và phương pháp luyện phản xạ thực tế.",
        url: "http://www.youtube.com/watch?v=oafyFIOqtsw",
      },
      {
        title: "Kênh Lilie IELTS – Chiến thuật Reading & Listening",
        desc: "Giải thích chiến thuật xử lý bài đọc & bài nghe trực quan, dễ áp dụng.",
        url: "http://www.youtube.com/channel/UC-j9j47gvpnDJpSGL_45ijg",
      },
    ],
  },
  {
    group: "Kênh YouTube học thuật quốc tế (Tư duy chuẩn giám khảo)",
    items: [
      {
        title: "IELTS Liz & IELTS Advantage",
        desc: "Hai kênh kinh điển dạy cách viết Writing Task 1, Task 2 và trả lời Speaking ngắn gọn, đúng tiêu chí chấm điểm mà không dùng từ ngữ màu mè.",
        url: "https://www.youtube.com/@IELTSAdvantage",
      },
      {
        title: "BBC Learning English (6 Minute English)",
        desc: "Nguồn nghe 6 phút mỗi ngày với tốc độ vừa phải, giải thích từ vựng theo chủ đề rất hợp với band 4.5–5.5.",
        url: "https://www.youtube.com/@bbclearningenglish",
      },
    ],
  },
];

export const PRACTICE_WEBSITES = [
  {
    title: "Mini-IELTS & IELTS Online Tests",
    category: "Listening & Reading theo dạng bài",
    desc: "Các bài nghe và đọc ngắn 5–10 phút, lọc được theo từng dạng câu hỏi như True/False/Not Given hay Matching.",
    url: "https://mini-ielts.com",
  },
  {
    title: "DailyDictation & Listen A Minute",
    category: "Luyện nghe chép chính tả",
    desc: "Các bài nghe ngắn có sẵn chỗ trống để gõ lại từng câu, rèn tai bắt âm cuối.",
    url: "https://dailydictation.com",
  },
  {
    title: "Oxford Learner's Dictionaries",
    category: "Từ điển phát âm IPA & Cách dùng câu",
    desc: "Tra phát âm chuẩn IPA Anh–Anh / Anh–Mỹ và cấu trúc ngữ pháp đi kèm của từng từ.",
    url: "https://www.oxfordlearnersdictionaries.com",
  },
  {
    title: "Ozdic Collocation Dictionary",
    category: "Từ điển kết hợp từ (Collocations)",
    desc: "Chỉ cần gõ 1 danh từ (VD: environment hoặc traffic), trang sẽ liệt kê toàn bộ tính từ và động từ đi kèm tự nhiên nhất.",
    url: "https://ozdic.com",
  },
];
