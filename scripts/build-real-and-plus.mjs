import fs from 'fs';
import path from 'path';
import { fetchTest, parseSections } from './parser-core.mjs';

const booksToBuild = [
  {
    seriesId: 'real-test-2026-q1',
    title: 'IELTS Real Test 2026 - Q1',
    url: 'https://tuhoc.dolenglish.vn/luyen-thi-ielts/real-test-2026-quy-1-reading-listening-test-1-2-3-4-questions-answer-key-de-bai-dap-an-giai-thich-chi-tiet-free-pdf-download',
    badge: 'Đề thi thật Quý 1/2026',
    plays: '142K'
  },
  {
    seriesId: 'real-test-2026-q2',
    title: 'IELTS Real Test 2026 - Q2',
    url: 'https://tuhoc.dolenglish.vn/luyen-thi-ielts/real-test-2026-quy-2-reading-listening-test-1-2-3-4-questions-answer-key-de-bai-dap-an-giai-thich-chi-tiet-free-pdf-download',
    badge: 'Đề thi thật Quý 2/2026',
    plays: '118K'
  },
  {
    seriesId: 'plus-1',
    title: 'IELTS Practice Test Plus 1',
    url: 'https://tuhoc.dolenglish.vn/luyen-thi-ielts/ielts-practice-test-plus-1-reading-listening-test-1-2-3-4-5-6-questions-answer-key-de-bai-dap-an-giai-thich-chi-tiet-free-pdf-download',
    badge: 'Chuẩn Plus 1',
    plays: '280K'
  },
  {
    seriesId: 'plus-2',
    title: 'IELTS Practice Test Plus 2',
    url: 'https://tuhoc.dolenglish.vn/luyen-thi-ielts/ielts-practice-test-plus-2-reading-listening-test-1-2-3-4-5-6-questions-answer-key-de-bai-dap-an-giai-thich-chi-tiet-free-pdf-download',
    badge: 'Chuẩn Plus 2',
    plays: '310K'
  },
  {
    seriesId: 'plus-3',
    title: 'IELTS Practice Test Plus 3',
    url: 'https://tuhoc.dolenglish.vn/luyen-thi-ielts/ielts-practice-test-plus-3-reading-listening-test-1-2-3-4-5-6-7-questions-answer-key-de-bai-dap-an-giai-thich-chi-tiet-free-pdf-download',
    badge: 'Chuẩn Plus 3',
    plays: '390K'
  }
];

async function run() {
  console.log('=== Starting Authentic Build for Real Tests & Practice Test Plus ===\n');

  const fullCatalog = {};
  const allTests = {};

  for (const b of booksToBuild) {
    console.log(`\n--------------------------------------------`);
    console.log(`Processing Book: ${b.title} (${b.seriesId})`);
    console.log(`--------------------------------------------`);

    fullCatalog[b.seriesId] = {
      seriesId: b.seriesId,
      title: b.title,
      badge: b.badge,
      plays: b.plays,
      views: parseInt(b.plays) * 1000,
      reading: [],
      listening: []
    };

    const res = await fetch(b.url);
    const html = await res.text();
    const marker = '<script id="__NEXT_DATA__" type="application/json">';
    const start = html.indexOf(marker);
    const end = html.indexOf('</script>', start);
    const json = JSON.parse(html.slice(start + marker.length, end));
    const decoded = JSON.parse(decodeURIComponent(json.props.pageProps.encryptedData));
    const tests = decoded.data?.bookDetail?.tests || [];

    // Group tests into Reading and Listening
    const rTests = [];
    const lTests = [];

    for (const t of tests) {
      const page = t.pages?.find(x => x.contentType === 'VIEW_SOLUTION') 
        || t.pages?.find(x => x.contentType === 'VIEW_TEST_QUESTION') 
        || t.pages?.find(x => x.contentType === 'DO_TEST');
      if (!page?.url) continue;
      const testUrl = page.url.startsWith('http') ? page.url : `https://tuhoc.dolenglish.vn${page.url}`;
      const numMatch = t.name.match(/\d+/);
      const testNum = numMatch ? parseInt(numMatch[0], 10) : 1;

      if (t.skill === 'READING') {
        rTests.push({ testNum, name: t.name, url: testUrl });
      } else {
        lTests.push({ testNum, name: t.name, url: testUrl });
      }
    }

    rTests.sort((a, b) => a.testNum - b.testNum);
    lTests.sort((a, b) => a.testNum - b.testNum);

    console.log(`Discovered: ${rTests.length} Reading tests, ${lTests.length} Listening tests.`);

    // Crawl & Parse Reading tests
    for (const item of rTests) {
      const testKey = `${b.seriesId}-reading-${item.testNum}`;
      console.log(`  [Reading ${item.testNum}] Fetching ${item.name} ...`);
      try {
        const testData = await fetchTest(item.url);
        const passages = await parseSections(testData.testSections, testKey);
        const totalQ = passages.reduce((s, p) => s + p.questions.length, 0);
        console.log(`    -> Done: ${passages.length} passages, ${totalQ} questions.`);

        const passageTitles = passages.map(p => p.title);
        fullCatalog[b.seriesId].reading.push({
          testNumber: item.testNum,
          id: testKey,
          title: `${b.title} - Reading Test ${item.testNum}`,
          url: item.url,
          passages: passageTitles
        });

        allTests[testKey] = {
          id: testKey,
          title: `${b.title} - Reading Test ${item.testNum}`,
          series: b.title,
          testNumber: item.testNum,
          type: 'Reading',
          durationMinutes: 60,
          passages
        };
      } catch (err) {
        console.error(`    -> ERROR fetching ${testKey}:`, err.message);
      }
    }

    // Crawl & Parse Listening tests
    for (const item of lTests) {
      const testKey = `${b.seriesId}-listening-${item.testNum}`;
      console.log(`  [Listening ${item.testNum}] Fetching ${item.name} ...`);
      try {
        const testData = await fetchTest(item.url);
        const passages = await parseSections(testData.testSections, testKey);
        const totalQ = passages.reduce((s, p) => s + p.questions.length, 0);
        console.log(`    -> Done: ${passages.length} parts, ${totalQ} questions.`);

        const partTitles = passages.map(p => p.title);
        fullCatalog[b.seriesId].listening.push({
          testNumber: item.testNum,
          id: testKey,
          title: `${b.title} - Listening Test ${item.testNum}`,
          url: item.url,
          parts: partTitles
        });

        allTests[testKey] = {
          id: testKey,
          title: `${b.title} - Listening Test ${item.testNum}`,
          series: b.title,
          testNumber: item.testNum,
          type: 'Listening',
          durationMinutes: 30,
          passages
        };
      } catch (err) {
        console.error(`    -> ERROR fetching ${testKey}:`, err.message);
      }
    }
  }

  // Alias `real-test-2026-q1` to `real-test-2026-q1-reading-1`
  if (allTests['real-test-2026-q1-reading-1']) {
    allTests['real-test-2026-q1'] = {
      ...allTests['real-test-2026-q1-reading-1'],
      id: 'real-test-2026-q1',
      title: 'IELTS Real Test 2026 - Q1 (Reading Test 1)'
    };
  }

  // Write catalog to scripts/real-plus-catalog.json
  const catalogPath = path.resolve('scripts/real-plus-catalog.json');
  fs.writeFileSync(catalogPath, JSON.stringify(fullCatalog, null, 2), 'utf8');
  console.log(`\nCatalog written to ${catalogPath}`);

  // Write tests to src/data/realPlusTests.ts
  const testsPath = path.resolve('src/data/realPlusTests.ts');
  const code = `// Auto-generated Real Tests (2026 Q1/Q2) & Practice Test Plus (1, 2, 3)
// Source: Authentic IELTS Practice Tests via DOL Tự Học System
// Generated for AI4IELTS+ Platform

import { IELTSTestItem } from "./ieltsTests";

export const REAL_PLUS_TESTS: Record<string, IELTSTestItem> = ${JSON.stringify(allTests, null, 2)};
`;

  fs.writeFileSync(testsPath, code, 'utf8');
  const stats = fs.statSync(testsPath);
  console.log(`\nTests written to ${testsPath} (${(stats.size / (1024 * 1024)).toFixed(2)} MB)`);
  console.log(`Total tests generated: ${Object.keys(allTests).length}`);
  console.log('=== Build Completed Successfully ===');
}

run().catch(console.error);
