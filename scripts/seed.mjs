import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { COLLOCATIONS } from '../src/data/collocations';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://lnsjzbovjoxcrjkzgwdg.supabase.co';
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_utSIOOlHXJVY0QQM3sBqDA_vPMyLh5t';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function seedData() {
  console.log('🌱 Bắt đầu đồng bộ dữ liệu lên Supabase...');

  // 1. Seed toàn bộ 108 Collocations kèm giải thích cách dùng, ngữ cảnh, câu mẫu
  const collocationRows = COLLOCATIONS.map((c, index) => ({
    id: index + 1,
    left_word: c.left,
    right_word: c.right,
    vietnamese: c.vi,
    example: JSON.stringify({
      slug: c.id,
      topic: c.topic,
      usage: c.usage,
      context: c.context,
      examples: c.examples,
      alt: c.alt || [],
    }),
    band_level: 7.5,
  }));

  const { error: errColloc } = await supabase
    .from('collocations')
    .upsert(collocationRows, { onConflict: 'id' });

  if (errColloc) {
    console.log('⚠️ Collocations error:', errColloc.message);
  } else {
    console.log(`✅ Đã đồng bộ ${collocationRows.length} cụm Collocation (kèm cách dùng, ngữ cảnh, câu mẫu) lên bảng public.collocations.`);
  }

  // 2. Seed toàn bộ 19 bài Dictation Lessons từ src/data/dictationLessons.json
  const dictationPath = path.join(process.cwd(), 'src/data/dictationLessons.json');
  if (fs.existsSync(dictationPath)) {
    const rawDictations = JSON.parse(fs.readFileSync(dictationPath, 'utf8'));
    const dictationRows = rawDictations.map((d) => ({
      id: d.id,
      title: d.title,
      section: d.section,
      audio_url: d.audioUrl,
      level: d.level || 'Easy',
      total_sentences: d.totalSentences || d.sentences?.length || 0,
      sentences: d.sentences || [],
    }));

    const { error: errDict } = await supabase
      .from('dictation_lessons')
      .upsert(dictationRows, { onConflict: 'id' });

    if (errDict) {
      console.log('⚠️ Dictation error:', errDict.message);
    } else {
      console.log(`✅ Đã đồng bộ ${dictationRows.length} bài Nghe chép chính tả lên bảng public.dictation_lessons.`);
    }
  }

  console.log('🎉 Hoàn tất đồng bộ dữ liệu lên Supabase!');
}

seedData();
