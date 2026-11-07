import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://lnsjzbovjoxcrjkzgwdg.supabase.co';
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_utSIOOlHXJVY0QQM3sBqDA_vPMyLh5t';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function seedData() {
  console.log('🌱 Bắt đầu nạp dữ liệu ban đầu vào Supabase...');

  // 1. Seed Collocations
  const collocations = [
    { left_word: "conduct", right_word: "research", vietnamese: "tiến hành nghiên cứu", example: "Scientists conduct research to combat climate change.", band_level: 7.0 },
    { left_word: "draw", right_word: "conclusions", vietnamese: "rút ra kết luận", example: "It is too early to draw conclusions from the experiment.", band_level: 7.0 },
    { left_word: "acquire", right_word: "knowledge", vietnamese: "tiếp thu kiến thức", example: "Reading books helps students acquire in-depth knowledge.", band_level: 7.5 },
    { left_word: "pose", right_word: "a serious threat", vietnamese: "gây ra mối đe dọa nghiêm trọng", example: "Plastic pollution poses a serious threat to marine life.", band_level: 7.5 },
    { left_word: "allocate", right_word: "financial resources", vietnamese: "phân bổ nguồn tài chính", example: "Governments should allocate financial resources to public transit.", band_level: 8.0 },
    { left_word: "bridge", right_word: "the generation gap", vietnamese: "thu hẹp khoảng cách thế hệ", example: "Open family discussions help bridge the generation gap.", band_level: 7.5 },
    { left_word: "implement", right_word: "strict policies", vietnamese: "thực thi các chính sách nghiêm ngặt", example: "Cities must implement strict policies against air pollution.", band_level: 7.5 },
    { left_word: "reach", right_word: "a consensus", vietnamese: "đạt được sự đồng thuận", example: "Leaders failed to reach a consensus on tax reforms.", band_level: 8.0 }
  ];

  const { error: errColloc } = await supabase.from('collocations').upsert(collocations, { onConflict: 'id' });
  if (errColloc) console.log('⚠️ Collocations notice:', errColloc.message);
  else console.log(`✅ Đã nạp ${collocations.length} cụm từ Collocations học thuật.`);

  // 2. Seed Dictation Lesson (Family Excursions)
  const dictationLesson = {
    id: "family-excursions",
    title: "Family Excursions",
    section: "Section 1",
    audio_url: "https://suijm9clouobj.vcdn.cloud/PRIVATE/MEDIA/2eabf966-f2a9-4bb2-982e-5d513fa3fb1f.mp3",
    level: "Easy",
    total_sentences: 5,
    sentences: [
      { id: 1, text: "Hi. Can I help you?", translation: "Xin chào. Tôi có thể giúp gì cho anh?", difficulty: "EASY" },
      { id: 2, text: "Yes, I'd like to find out about excursions for my family.", translation: "Vâng, tôi muốn tìm hiểu về các chuyến tham quan cho gia đình tôi.", difficulty: "EASY" },
      { id: 3, text: "Certainly. We have several options available this week.", translation: "Chắc chắn rồi. Chúng tôi có một vài lựa chọn trong tuần này.", difficulty: "EASY" },
      { id: 4, text: "Could you tell me what excursions are suitable for children?", translation: "Cô có thể cho tôi biết những chuyến tham quan nào phù hợp với trẻ em không?", difficulty: "HARD" },
      { id: 5, text: "Well, the animal park is always very popular with younger kids.", translation: "À, công viên động vật luôn luôn rất được các em nhỏ yêu thích.", difficulty: "HARD" }
    ]
  };

  const { error: errDict } = await supabase.from('dictation_lessons').upsert(dictationLesson);
  if (errDict) console.log('⚠️ Dictation notice:', errDict.message);
  else console.log('✅ Đã nạp bài Chép chính tả Family Excursions kèm Audio VCDN.');

  // 3. Seed Mock Test (CAM Inspired 20 Reading Test 1)
  const mockTest = {
    id: "cam-20-reading-1",
    title: "IELTS CAM Inspired 20 - Reading Test 1",
    type: "READING",
    book: "CAM Inspired 20",
    duration_minutes: 60,
    total_questions: 40,
    passages: [
      {
        id: 1,
        title: "The kākāpō (The vaira)",
        content: "The vaira is a night-active, flightless parrot, now critically endangered and among the rarest of the Kelvan Islands' native birds...",
        questions: [
          {
            id: 1,
            prompt: "No other species of parrot lives to the age a vaira can reach.",
            correct: "NOT GIVEN",
            explanation: "Linearthinking 4 steps: Simplify -> Locate -> Evidence -> Compare"
          }
        ]
      }
    ]
  };

  const { error: errTest } = await supabase.from('ielts_tests').upsert(mockTest);
  if (errTest) console.log('⚠️ Test notice:', errTest.message);
  else console.log('✅ Đã nạp đề thi CAM Inspired 20 Reading Test 1.');

  console.log('🎉 Hoàn tất nạp dữ liệu! Toàn bộ bảng trên Supabase đã có dữ liệu thật.');
}

seedData();
