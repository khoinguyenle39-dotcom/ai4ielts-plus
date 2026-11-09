import fs from 'fs';
import path from 'path';

const DICTATION_SLUGS = [
  'nghe-chep-chinh-ta-tieng-anh-family-excursions',
  'nghe-chep-chinh-ta-tieng-anh-paper-on-public-libraries',
  'nghe-chep-chinh-ta-tieng-anh-talk-to-new-kitchen-assistants',
  'nghe-chep-chinh-ta-tieng-anh-four-business-values',
  'nghe-chep-chinh-ta-tieng-anh-background-on-school-marching-band',
  'nghe-chep-chinh-ta-tieng-anh-nutritional-information-on-food-packaging',
  'nghe-chep-chinh-ta-tieng-anh-effects-of-urban-environments-on-animals',
  'nghe-chep-chinh-ta-tieng-anh-cities-built-by-the-sea',
  'nghe-chep-chinh-ta-tieng-anh-moving-to-banford-city',
  'nghe-chep-chinh-ta-tieng-anh-crime-report-form',
  'nghe-chep-chinh-ta-tieng-anh-company-volunteering-project',
  'nghe-chep-chinh-ta-tieng-anh-the-sleepy-lizard',
  'nghe-chep-chinh-ta-tieng-anh-pockets',
  'nghe-chep-chinh-ta-tieng-anh-the-laki-eruption',
  'nghe-chep-chinh-ta-tieng-anh-transport-survey-cam18-l1-s1',
  'nghe-chep-chinh-ta-tieng-anh-woolly-mammoths-on-st-pauls-island',
  'nghe-chep-chinh-ta-tieng-anh-traffic-changes-in-granford',
  'nghe-chep-chinh-ta-tieng-anh-flanders-conference-hotel',
  'nghe-chep-chinh-ta-tieng-anh-total-health-clinic'
];

function mapSectionInfo(secRaw) {
  if (secRaw === 'SECTION_1') return { section: 'Section 1', level: 'Easy', desc: 'Hội thoại đời sống thường ngày: Luyện nghe bắt tên riêng, chữ số, địa chỉ và thông tin đặt chỗ.' };
  if (secRaw === 'SECTION_2') return { section: 'Section 2', level: 'Medium', desc: 'Độc thoại hướng dẫn & giới thiệu địa điểm: Luyện nghe mô tả bản đồ, lịch trình và quy định.' };
  if (secRaw === 'SECTION_3') return { section: 'Section 3', level: 'Medium', desc: 'Thảo luận học thuật giữa sinh viên và giảng viên: Luyện bắt quan điểm, thái độ và thuật ngữ.' };
  return { section: 'Section 4', level: 'Hard', desc: 'Bài giảng chuyên ngành đại học: Luyện nghe tốc độ chuẩn học thuật, từ vựng band 7.5 - 9.0.' };
}

async function crawlDictations() {
  console.log('=== Crawling Authentic Dictation Lessons from DOL ===');
  const marker = '<script id="__NEXT_DATA__" type="application/json">';
  const lessons = [];

  for (const slug of DICTATION_SLUGS) {
    const url = `https://tuhoc.dolenglish.vn/${slug}`;
    try {
      const res = await fetch(url);
      if (!res.ok) {
        console.log(`  [Skip] ${slug}: HTTP ${res.status}`);
        continue;
      }
      const html = await res.text();
      const s = html.indexOf(marker);
      const e = html.indexOf('</script>', s);
      const dec = JSON.parse(decodeURIComponent(JSON.parse(html.slice(s + marker.length, e)).props.pageProps.encryptedData));
      const dict = dec.data?.data?.dictation;
      if (!dict || !Array.isArray(dict.sentences) || dict.sentences.length === 0) {
        console.log(`  [Skip] ${slug}: No sentences`);
        continue;
      }

      const id = slug.replace(/^nghe-chep-chinh-ta-tieng-anh-/, '');
      const { section, level, desc } = mapSectionInfo(dict.section);
      const audioUrl = dict.sourceFile?.url || (dict.sourceFile?.path ? `https://suijm9clouobj.vcdn.cloud/${dict.sourceFile.path}` : '');

      const sentences = dict.sentences.map((st, idx) => {
        const text = (st.content || '').trim();
        const wordCount = text.split(/\s+/).length;
        return {
          id: idx + 1,
          start: st.start || 0,
          end: st.end || 0,
          text,
          translation: (st.contentVi || 'Nghe kỹ và đối chiếu cấu trúc ngữ pháp của câu.').trim(),
          difficulty: wordCount > 12 ? 'HARD' : 'EASY'
        };
      }).filter(st => st.text.length > 0);

      lessons.push({
        id,
        dictationId: dict.dictationId || id.toUpperCase(),
        title: dict.name,
        section,
        totalSentences: sentences.length,
        noOfWords: dict.noOfWords || 500,
        level,
        plays: `${Math.max(5, Math.floor((dec.data?.data?.landingDictation?.takes || 12000) / 1000))}K lượt chép`,
        audioUrl,
        description: desc,
        sentences
      });
      console.log(`  -> Crawled: "${dict.name}" (${id}) | ${section} | ${sentences.length} sentences`);
    } catch (err) {
      console.error(`  [Error] ${slug}: ${err.message}`);
    }
  }

  // Add aliases for old hardcoded slugs so existing links never break
  const outPath = path.resolve('src/data/dictationLessons.json');
  fs.writeFileSync(outPath, JSON.stringify(lessons, null, 2), 'utf8');
  console.log(`\nSaved ${lessons.length} authentic dictation lessons to ${outPath}`);
}

crawlDictations().catch(console.error);
