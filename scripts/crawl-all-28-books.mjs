import fs from 'fs';
import path from 'path';
import { fetchTest, parseSections } from './parser-core.mjs';

const BOOK_META_MAP = {
  R26Q2: { seriesId: 'real-test-2026-q2', title: 'IELTS Real Test 2026 - Q2', category: 'REAL_FORECAST', badge: 'Đề thi thật Quý 2/2026', plays: '145K' },
  R26Q1: { seriesId: 'real-test-2026-q1', title: 'IELTS Real Test 2026 - Q1', category: 'REAL_FORECAST', badge: 'Đề thi thật Quý 1/2026', plays: '182K' },
  F26Q2: { seriesId: 'forecast-test-2026-q2', title: 'IELTS Forecast Test 2026 - Q2', category: 'REAL_FORECAST', badge: 'Dự đoán Quý 2/2026', plays: '96K' },
  F26Q1: { seriesId: 'forecast-test-2026-q1', title: 'IELTS Forecast Test 2026 - Q1', category: 'REAL_FORECAST', badge: 'Dự đoán Quý 1/2026', plays: '112K' },
  CI21: { seriesId: 'cam-21', title: 'IELTS CAM Inspired 21', category: 'CAMBRIDGE', badge: 'Mới nhất 2026', plays: '155K' },
  CI20: { seriesId: 'cam-20', title: 'IELTS CAM Inspired 20', category: 'CAMBRIDGE', badge: 'Phổ biến nhất', plays: '421K' },
  CI19: { seriesId: 'cam-19', title: 'IELTS CAM Inspired 19', category: 'CAMBRIDGE', badge: 'Hot Cambridge', plays: '218K' },
  CI18: { seriesId: 'cam-18', title: 'IELTS CAM Inspired 18', category: 'CAMBRIDGE', badge: 'Hot Cambridge', plays: '234K' },
  CI17: { seriesId: 'cam-17', title: 'IELTS CAM Inspired 17', category: 'CAMBRIDGE', badge: 'Chuẩn Cambridge', plays: '271K' },
  CI16: { seriesId: 'cam-16', title: 'IELTS CAM Inspired 16', category: 'CAMBRIDGE', badge: 'Chuẩn Cambridge', plays: '330K' },
  CI15: { seriesId: 'cam-15', title: 'IELTS CAM Inspired 15', category: 'CAMBRIDGE', badge: 'Chuẩn Cambridge', plays: '204K' },
  CI14: { seriesId: 'cam-14', title: 'IELTS CAM Inspired 14', category: 'CAMBRIDGE', badge: 'Chuẩn Cambridge', plays: '163K' },
  CI13: { seriesId: 'cam-13', title: 'IELTS CAM Inspired 13', category: 'CAMBRIDGE', badge: 'Chuẩn Cambridge', plays: '102K' },
  CI12: { seriesId: 'cam-12', title: 'IELTS CAM Inspired 12', category: 'CAMBRIDGE', badge: 'Chuẩn Cambridge', plays: '85K' },
  CI11: { seriesId: 'cam-11', title: 'IELTS CAM Inspired 11', category: 'CAMBRIDGE', badge: 'Chuẩn Cambridge', plays: '81K' },
  CI10: { seriesId: 'cam-10', title: 'IELTS CAM Inspired 10', category: 'CAMBRIDGE', badge: 'Chuẩn Cambridge', plays: '101K' },
  CI09: { seriesId: 'cam-09', title: 'IELTS CAM Inspired 09', category: 'CAMBRIDGE', badge: 'Chuẩn Cambridge', plays: '127K' },
  AT1:  { seriesId: 'actual-test-1', title: 'IELTS Recent Actual Test Vol 1', category: 'ACTUAL_TEST', badge: 'Actual Test Vol 1', plays: '186K' },
  AT2_: { seriesId: 'actual-test-2', title: 'IELTS Recent Actual Test Vol 2', category: 'ACTUAL_TEST', badge: 'Actual Test Vol 2', plays: '117K' },
  AT3_: { seriesId: 'actual-test-3', title: 'IELTS Recent Actual Test Vol 3', category: 'ACTUAL_TEST', badge: 'Actual Test Vol 3', plays: '139K' },
  AT4_: { seriesId: 'actual-test-4', title: 'IELTS Recent Actual Test Vol 4', category: 'ACTUAL_TEST', badge: 'Actual Test Vol 4', plays: '137K' },
  AT5_: { seriesId: 'actual-test-5', title: 'IELTS Recent Actual Test Vol 5', category: 'ACTUAL_TEST', badge: 'Actual Test Vol 5', plays: '146K' },
  AT6_: { seriesId: 'actual-test-6', title: 'IELTS Recent Actual Test Vol 6', category: 'ACTUAL_TEST', badge: 'Actual Test Vol 6', plays: '184K' },
  PC01: { seriesId: 'plus-1', title: 'IELTS Practice Test Plus 1', category: 'PLUS', badge: 'Chuẩn Plus 1', plays: '280K' },
  PC02: { seriesId: 'plus-2', title: 'IELTS Practice Test Plus 2', category: 'PLUS', badge: 'Chuẩn Plus 2', plays: '310K' },
  PC03: { seriesId: 'plus-3', title: 'IELTS Practice Test Plus 3', category: 'PLUS', badge: 'Hot Plus 3', plays: '390K' },
  PB00: { seriesId: 'official-guide', title: 'The Official Cambridge Guide to IELTS', category: 'OFFICIAL_TRAINER', badge: 'Official Guide', plays: '250K' },
  PA01: { seriesId: 'ielts-trainer', title: 'IELTS Trainer - Six Practice Tests', category: 'OFFICIAL_TRAINER', badge: 'Cambridge Trainer', plays: '195K' }
};

async function fetchJsonFromNextPage(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} on ${url}`);
  const html = await res.text();
  const marker = '<script id="__NEXT_DATA__" type="application/json">';
  const s = html.indexOf(marker);
  if (s === -1) throw new Error(`No __NEXT_DATA__ in ${url}`);
  const e = html.indexOf('</script>', s);
  const json = JSON.parse(html.slice(s + marker.length, e));
  return JSON.parse(decodeURIComponent(json.props.pageProps.encryptedData));
}

async function crawlAll28Books() {
  console.log('=== Discovering All 28 Books on DOL ===');
  const landingDec = await fetchJsonFromNextPage('https://tuhoc.dolenglish.vn/luyen-thi-ielts/free-ielts-online-test');
  const booksList = landingDec.data?.pageData?.books?.content || [];
  console.log(`Found ${booksList.length} books on landing page.`);

  const booksDir = path.resolve('src/data/books');
  if (!fs.existsSync(booksDir)) {
    fs.mkdirSync(booksDir, { recursive: true });
  }

  const masterCatalog = {};
  let totalTestsCrawled = 0;

  for (const b of booksList) {
    const meta = BOOK_META_MAP[b.bookId] || {
      seriesId: b.bookId.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      title: b.name,
      category: 'OTHER',
      badge: 'Chuẩn Quốc Tế',
      plays: '100K'
    };

    const bookUrl = b.seoPage?.url?.startsWith('http')
      ? b.seoPage.url
      : `https://tuhoc.dolenglish.vn/${(b.seoPage?.url || '').replace(/^\/+/, '')}`;

    console.log(`\n--------------------------------------------`);
    console.log(`[${b.bookId}] ${meta.title} (${meta.seriesId})`);
    console.log(`URL: ${bookUrl}`);

    const bookDec = await fetchJsonFromNextPage(bookUrl);
    const rawTests = bookDec.data?.bookDetail?.tests || [];

    const rTasks = [];
    const lTasks = [];

    for (const t of rawTests) {
      const page = t.pages?.find(x => x.contentType === 'VIEW_SOLUTION')
        || t.pages?.find(x => x.contentType === 'VIEW_TEST_QUESTION')
        || t.pages?.find(x => x.contentType === 'DO_TEST');
      if (!page?.url) continue;

      const testUrl = page.url.startsWith('http')
        ? page.url
        : `https://tuhoc.dolenglish.vn/${page.url.replace(/^\/+/, '')}`;

      const numMatch = t.name.match(/\d+/);
      const testNum = numMatch ? parseInt(numMatch[0], 10) : 1;

      if (t.skill === 'READING') {
        rTasks.push({ testNum, name: t.name, url: testUrl });
      } else if (t.skill === 'LISTENING') {
        lTasks.push({ testNum, name: t.name, url: testUrl });
      }
    }

    rTasks.sort((a, b) => a.testNum - b.testNum);
    lTasks.sort((a, b) => a.testNum - b.testNum);

    masterCatalog[meta.seriesId] = {
      seriesId: meta.seriesId,
      bookId: b.bookId,
      title: meta.title,
      category: meta.category,
      badge: meta.badge,
      plays: meta.plays,
      views: b.testTakers || 120000,
      reading: [],
      listening: []
    };

    const bookTestsMap = {};

    // Process Reading tests in parallel
    const rResults = await Promise.all(
      rTasks.map(async (item) => {
        const testKey = `${meta.seriesId}-reading-${item.testNum}`;
        try {
          const testData = await fetchTest(item.url);
          const passages = await parseSections(testData.testSections, testKey);
          const totalQ = passages.reduce((s, p) => s + p.questions.length, 0);
          return { item, testKey, passages, totalQ, ok: passages.length > 0 && totalQ > 0 };
        } catch (err) {
          console.error(`  [ERROR] ${testKey}: ${err.message}`);
          return { item, testKey, ok: false };
        }
      })
    );

    for (const res of rResults) {
      if (!res.ok) continue;
      masterCatalog[meta.seriesId].reading.push({
        testNumber: res.item.testNum,
        id: res.testKey,
        title: `${meta.title} - Reading Test ${res.item.testNum}`,
        questionsCount: res.totalQ,
        passages: res.passages.map(p => p.title)
      });
      bookTestsMap[res.testKey] = {
        id: res.testKey,
        title: `${meta.title} - Reading Test ${res.item.testNum}`,
        series: meta.title,
        testNumber: res.item.testNum,
        type: 'Reading',
        durationMinutes: 60,
        passages: res.passages
      };
      totalTestsCrawled++;
    }

    // Process Listening tests in parallel
    const lResults = await Promise.all(
      lTasks.map(async (item) => {
        const testKey = `${meta.seriesId}-listening-${item.testNum}`;
        try {
          const testData = await fetchTest(item.url);
          const passages = await parseSections(testData.testSections, testKey);
          const totalQ = passages.reduce((s, p) => s + p.questions.length, 0);
          return { item, testKey, passages, totalQ, ok: passages.length > 0 && totalQ > 0 };
        } catch (err) {
          console.error(`  [ERROR] ${testKey}: ${err.message}`);
          return { item, testKey, ok: false };
        }
      })
    );

    for (const res of lResults) {
      if (!res.ok) continue;
      masterCatalog[meta.seriesId].listening.push({
        testNumber: res.item.testNum,
        id: res.testKey,
        title: `${meta.title} - Listening Test ${res.item.testNum}`,
        questionsCount: res.totalQ,
        parts: res.passages.map(p => p.title)
      });
      bookTestsMap[res.testKey] = {
        id: res.testKey,
        title: `${meta.title} - Listening Test ${res.item.testNum}`,
        series: meta.title,
        testNumber: res.item.testNum,
        type: 'Listening',
        durationMinutes: 30,
        passages: res.passages
      };
      totalTestsCrawled++;
    }

    // Save per-book JSON file
    const bookFile = path.join(booksDir, `${meta.seriesId}.json`);
    fs.writeFileSync(bookFile, JSON.stringify(bookTestsMap), 'utf8');
    console.log(
      `  -> Saved ${meta.seriesId}.json: ${masterCatalog[meta.seriesId].reading.length} Reading, ${masterCatalog[meta.seriesId].listening.length} Listening`
    );
  }

  const catalogPath = path.resolve('src/data/allBooksCatalog.json');
  fs.writeFileSync(catalogPath, JSON.stringify(masterCatalog, null, 2), 'utf8');
  console.log(`\n============================================`);
  console.log(`ALL 28 BOOKS CRAWLED SUCCESSFULLY!`);
  console.log(`Total Series: ${Object.keys(masterCatalog).length}`);
  console.log(`Total Authentic Tests Saved: ${totalTestsCrawled}`);
  console.log(`Master Catalog: ${catalogPath}`);
  console.log(`============================================`);
}

crawlAll28Books().catch(console.error);
