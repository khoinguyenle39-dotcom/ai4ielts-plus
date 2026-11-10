// Dữ liệu 31 Chủ đề Từ vựng IELTS & CEFR A1-C2 (9.922 mục từ học thuật, Collocations, Phrasal Verbs & Idioms)
export interface VocabTopicMeta {
  id: string;
  eyebrow: string;
  title: string;
  accent: "blue" | "mint" | "coral" | "yellow";
  description: string;
  cefr?: boolean;
  cardLabel?: string;
  count: number;
}

export interface VocabExamplePair {
  en: string;
  vi: string;
}

export interface VocabItem {
  id: string;
  term: string;
  definition: string;
  pattern: string;
  examples: VocabExamplePair[];
  phonetic: string;
  label: string;
  partOfSpeech: string;
  variant?: string;
  shortContexts?: string[];
  longContexts?: string[];
}

export interface VocabTopicData {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  cefr: boolean;
  count: number;
  items: VocabItem[];
}

export const VOCAB_TOPICS: VocabTopicMeta[] = [
  {
    "id": "oxford-a1",
    "eyebrow": "CEFR · Bậc A1",
    "title": "Từ vựng cơ bản A1",
    "accent": "blue",
    "description": "Trọn bộ từ vựng nền tảng bậc A1 theo chuẩn CEFR, những từ tiếng Anh thông dụng nhất, học dần từ a đến yourself.",
    "cefr": true,
    "cardLabel": "Từ vựng cơ bản · Bậc A1",
    "count": 890
  },
  {
    "id": "oxford-a2",
    "eyebrow": "CEFR · Bậc A2",
    "title": "Từ vựng cơ bản A2",
    "accent": "mint",
    "description": "Trọn bộ từ vựng bậc A2 theo chuẩn CEFR, nối tiếp bậc A1 với từ dùng trong công việc, học tập và đời sống hằng ngày.",
    "cefr": true,
    "cardLabel": "Từ vựng cơ bản · Bậc A2",
    "count": 792
  },
  {
    "id": "oxford-b1",
    "eyebrow": "CEFR · Bậc B1",
    "title": "Từ vựng cơ bản B1",
    "accent": "coral",
    "description": "Trọn bộ từ vựng bậc B1 theo chuẩn CEFR, nối tiếp A1 và A2 với từ dùng cho ý kiến, cảm xúc, học thuật và chủ đề xã hội.",
    "cefr": true,
    "cardLabel": "Từ vựng cơ bản · Bậc B1",
    "count": 688
  },
  {
    "id": "oxford-b2",
    "eyebrow": "CEFR · Bậc B2",
    "title": "Từ vựng cơ bản B2",
    "accent": "yellow",
    "description": "Trọn bộ từ vựng bậc B2 theo chuẩn CEFR, nối tiếp A1-B1 với từ học thuật, trừu tượng và dùng trong tranh luận, phân tích.",
    "cefr": true,
    "cardLabel": "Từ vựng cơ bản · Bậc B2",
    "count": 530
  },
  {
    "id": "oxford-c1",
    "eyebrow": "CEFR · Bậc C1",
    "title": "Từ vựng cơ bản C1",
    "accent": "blue",
    "description": "Trọn bộ từ vựng bậc C1 theo Oxford 5000, nối tiếp A1-B2 với từ học thuật, chuyên ngành và sắc thái tinh tế dùng trong văn viết trang trọng.",
    "cefr": true,
    "cardLabel": "Từ vựng cơ bản · Bậc C1",
    "count": 1300
  },
  {
    "id": "oxford-c2",
    "eyebrow": "CEFR · Bậc C2",
    "title": "Từ vựng cơ bản C2",
    "accent": "coral",
    "description": "Bộ từ vựng bậc C2 chọn lọc: từ học thuật, trừu tượng, văn chương và chuyên ngành ở mức gần như người bản ngữ, hoàn thiện lộ trình A1-C2.",
    "cefr": true,
    "cardLabel": "Từ vựng cơ bản · Bậc C2",
    "count": 722
  },
  {
    "id": "education",
    "eyebrow": "IELTS TOPIC 01",
    "title": "Education & Learning",
    "accent": "mint",
    "description": "Từ vựng về hệ thống giáo dục, cơ hội học tập và quá trình phát triển kỹ năng.",
    "count": 200
  },
  {
    "id": "environment",
    "eyebrow": "IELTS TOPIC 02",
    "title": "Environment & Climate",
    "accent": "coral",
    "description": "Từ vựng về khí hậu, bảo tồn tài nguyên và các chính sách môi trường.",
    "count": 200
  },
  {
    "id": "technology",
    "eyebrow": "IELTS TOPIC 03",
    "title": "Technology & Digital Life",
    "accent": "yellow",
    "description": "Từ vựng về công nghệ số, quyền riêng tư và ảnh hưởng của tự động hoá.",
    "count": 200
  },
  {
    "id": "health",
    "eyebrow": "IELTS TOPIC 04",
    "title": "Health & Well-being",
    "accent": "blue",
    "description": "Từ vựng về y tế dự phòng, sức khỏe tinh thần và khả năng tiếp cận dịch vụ.",
    "count": 200
  },
  {
    "id": "work",
    "eyebrow": "IELTS TOPIC 05",
    "title": "Work & Employment",
    "accent": "mint",
    "description": "Từ vựng về thị trường lao động, điều kiện làm việc và quá trình phát triển nghề nghiệp.",
    "count": 200
  },
  {
    "id": "economy",
    "eyebrow": "IELTS TOPIC 06",
    "title": "Economy & Consumerism",
    "accent": "coral",
    "description": "Từ vựng về tăng trưởng, tài chính cá nhân và trách nhiệm của người tiêu dùng.",
    "count": 200
  },
  {
    "id": "cities",
    "eyebrow": "IELTS TOPIC 07",
    "title": "Cities & Urban Life",
    "accent": "yellow",
    "description": "Từ vựng về quy hoạch đô thị, hạ tầng và chất lượng sống trong thành phố.",
    "count": 200
  },
  {
    "id": "transport",
    "eyebrow": "IELTS TOPIC 08",
    "title": "Transport & Mobility",
    "accent": "blue",
    "description": "Từ vựng về giao thông công cộng, an toàn đường bộ và khả năng di chuyển.",
    "count": 200
  },
  {
    "id": "crime",
    "eyebrow": "IELTS TOPIC 09",
    "title": "Crime & Justice",
    "accent": "mint",
    "description": "Từ vựng về phòng ngừa tội phạm, tư pháp và quá trình tái hòa nhập cộng đồng.",
    "count": 200
  },
  {
    "id": "government",
    "eyebrow": "IELTS TOPIC 10",
    "title": "Government & Policy",
    "accent": "coral",
    "description": "Từ vựng về quản trị công, trách nhiệm giải trình và quá trình xây dựng chính sách.",
    "count": 200
  },
  {
    "id": "media",
    "eyebrow": "IELTS TOPIC 11",
    "title": "Media & Advertising",
    "accent": "yellow",
    "description": "Từ vựng về báo chí, quảng cáo, tin sai lệch và thói quen tiếp nhận thông tin.",
    "count": 200
  },
  {
    "id": "culture",
    "eyebrow": "IELTS TOPIC 12",
    "title": "Culture & Heritage",
    "accent": "blue",
    "description": "Từ vựng về di sản, bản sắc địa phương và hoạt động trao đổi văn hoá.",
    "count": 200
  },
  {
    "id": "globalisation",
    "eyebrow": "IELTS TOPIC 13",
    "title": "Globalisation & Trade",
    "accent": "mint",
    "description": "Từ vựng về thương mại quốc tế, dịch chuyển lao động và hợp tác xuyên biên giới.",
    "count": 200
  },
  {
    "id": "science",
    "eyebrow": "IELTS TOPIC 14",
    "title": "Science & Research",
    "accent": "coral",
    "description": "Từ vựng về nghiên cứu khoa học, bằng chứng và trách nhiệm trong học thuật.",
    "count": 200
  },
  {
    "id": "family",
    "eyebrow": "IELTS TOPIC 15",
    "title": "Family & Children",
    "accent": "yellow",
    "description": "Từ vựng về chăm sóc trẻ em, quan hệ gia đình và hỗ trợ giữa các thế hệ.",
    "count": 200
  },
  {
    "id": "food",
    "eyebrow": "IELTS TOPIC 16",
    "title": "Food & Agriculture",
    "accent": "blue",
    "description": "Từ vựng về sản xuất lương thực, nông nghiệp bền vững và dinh dưỡng.",
    "count": 200
  },
  {
    "id": "tourism",
    "eyebrow": "IELTS TOPIC 17",
    "title": "Tourism & Travel",
    "accent": "mint",
    "description": "Từ vựng về du lịch bền vững, quản lý điểm đến và lợi ích của cộng đồng địa phương.",
    "count": 200
  },
  {
    "id": "housing",
    "eyebrow": "IELTS TOPIC 18",
    "title": "Housing & Communities",
    "accent": "coral",
    "description": "Từ vựng về nhà ở, quyền của người thuê và chất lượng khu dân cư.",
    "count": 200
  },
  {
    "id": "energy",
    "eyebrow": "IELTS TOPIC 19",
    "title": "Energy & Resources",
    "accent": "yellow",
    "description": "Từ vựng về nguồn năng lượng, hiệu suất sử dụng và an ninh năng lượng.",
    "count": 200
  },
  {
    "id": "equality",
    "eyebrow": "IELTS TOPIC 20",
    "title": "Equality & Social Change",
    "accent": "blue",
    "description": "Từ vựng về cơ hội bình đẳng, hòa nhập xã hội và quyền tiếp cận dịch vụ.",
    "count": 200
  },
  {
    "id": "communication",
    "eyebrow": "IELTS TOPIC 21",
    "title": "Language & Communication",
    "accent": "mint",
    "description": "Từ vựng về giao tiếp, khả năng tiếp cận ngôn ngữ và kỹ năng đánh giá thông tin.",
    "count": 200
  },
  {
    "id": "population",
    "eyebrow": "IELTS TOPIC 22",
    "title": "Population & Migration",
    "accent": "coral",
    "description": "Từ vựng về dịch chuyển dân cư, cơ hội xã hội và dịch vụ dành cho các nhóm tuổi.",
    "count": 200
  },
  {
    "id": "active-life",
    "eyebrow": "IELTS TOPIC 23",
    "title": "Sport & Active Lifestyles",
    "accent": "yellow",
    "description": "Từ vựng về vận động, sức khỏe thể chất và điều kiện hỗ trợ lối sống năng động.",
    "count": 200
  },
  {
    "id": "oceans",
    "eyebrow": "IELTS TOPIC 24",
    "title": "Oceans & Water",
    "accent": "blue",
    "description": "Từ vựng về tài nguyên nước, hệ sinh thái biển và bảo vệ vùng ven bờ.",
    "count": 200
  },
  {
    "id": "personal-finance",
    "eyebrow": "IELTS TOPIC 25",
    "title": "Personal Finance & Household Life",
    "accent": "mint",
    "description": "Từ vựng về chi tiêu gia đình, nhà ở, thu nhập và khả năng tiếp cận dịch vụ thiết yếu.",
    "count": 200
  }
];
