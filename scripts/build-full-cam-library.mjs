import fs from 'fs';
import path from 'path';
import { parseSections, fetchTest } from './parser-core.mjs';

async function buildAll() {
  console.log('🚀 Building complete Cambridge IELTS tests library (Cam 09 - 21)...');
  const catalog = JSON.parse(fs.readFileSync('scripts/cam-books-catalog.json', 'utf8'));

  const fullTests = {};

  for (const sId of Object.keys(catalog)) {
    const book = catalog[sId];
    console.log(`\n=== Processing ${book.title} (${sId}) ===`);

    for (const r of book.reading) {
      const testId = `${sId}-reading-${r.testNumber}`;
      console.log(`  Fetching ${testId}: ${r.url}...`);
      try {
        const rawData = await fetchTest(r.url);
        const testSections = rawData?.testSections || [];
        if (!testSections.length) {
          console.log(`    ⚠️ No sections found for ${testId}`);
          continue;
        }

        const passages = await parseSections(testSections, testId);
        const totalQ = passages.reduce((sum, p) => sum + p.questions.length, 0);

        fullTests[testId] = {
          id: testId,
          title: `${book.title} - Reading Test ${r.testNumber}`,
          series: book.title,
          testNumber: r.testNumber,
          type: 'Reading',
          durationMinutes: 60,
          passages
        };

        console.log(`    ✅ ${testId}: ${passages.length} passages, ${totalQ} questions`);
      } catch (err) {
        console.error(`    ❌ Error on ${testId}:`, err.message);
      }
    }
  }

  // Also include Real Test 2026
  fullTests['real-test-2026-q1'] = {
    id: 'real-test-2026-q1',
    title: 'IELTS Real Test 2026 - Q1 (Reading)',
    series: 'Actual Test 2026',
    testNumber: 1,
    type: 'Reading',
    durationMinutes: 60,
    passages: [
      {
        id: 'rt-2026-q1-p1',
        passageNumber: 1,
        title: 'AI in Modern Healthcare & Remote Diagnostics',
        subtitle: 'How neural networks and wearable biosensors are transforming early pathology detection in rural and under-resourced clinics.',
        content: [
          'In early 2025, regional medical clinics across Southeast Asia and Sub-Saharan Africa began field trials for an autonomous diagnostic system powered by multimodal artificial intelligence.',
          'Trained on millions of anonymised retinal scans, dermatological photographs, and chest radiographs, the system operates locally on low-cost tablet computers without requiring high-speed cloud connectivity. The algorithm matches or exceeds certified radiologists in identifying early-stage diabetic retinopathy, melanoma, and pulmonary tuberculosis.',
          'Beyond visual recognition, new generations of microfluidic patches and wearable biosensors stream real-time physiological metrics directly to clinical AI agents. These continuously monitor biomarkers including interstitial glucose, cardiac troponin, and cortisol, detecting acute cardiac infarction hours before patients exhibit overt physical symptoms.',
          'Despite immense promise, ethicists urge cautious oversight. Algorithmic bias resulting from unrepresentative training datasets has historically led to higher false-negative rates in under-represented demographic groups. Regulators stress that AI must serve as an empowering assistant to local nurses and general practitioners rather than an unaccountable surrogate decision-maker.'
        ],
        questions: [
          {
            id: 1,
            prompt: 'The diagnostic AI system requires continuous high-speed internet connection to operate.',
            type: 'TRUE_FALSE_NOT_GIVEN',
            options: ['TRUE', 'FALSE', 'NOT GIVEN'],
            correct: 'FALSE',
            explanation: {
              step1: 'Phân tích nhận định: Hệ thống AI cần kết nối internet tốc độ cao liên tục.',
              step2: 'Đoạn 2: "operates locally on low-cost tablet computers without requiring high-speed cloud connectivity."',
              step3: 'Đối chiếu: "without requiring high-speed connectivity" trái ngược hoàn toàn với "requires continuous high-speed internet".',
              step4: 'Đáp án là FALSE.'
            }
          },
          {
            id: 2,
            prompt: 'The multimodal AI algorithm has demonstrated clinical accuracy comparable to human radiologists in spotting early diabetic retinopathy.',
            type: 'TRUE_FALSE_NOT_GIVEN',
            options: ['TRUE', 'FALSE', 'NOT GIVEN'],
            correct: 'TRUE',
            explanation: {
              step1: 'Phân tích: Thuật toán AI đạt độ chính xác tương đương bác sĩ chẩn đoán hình ảnh đối với bệnh võng mạc tiểu đường giai đoạn đầu.',
              step2: 'Đoạn 2: "matches or exceeds certified radiologists in identifying early-stage diabetic retinopathy".',
              step3: 'Đối chiếu: "matches or exceeds" = tương đương hoặc vượt trội hơn.',
              step4: 'Đáp án là TRUE.'
            }
          },
          {
            id: 3,
            prompt: 'Choose the correct biomarker continuously monitored by biosensors to detect early acute cardiac infarction:',
            type: 'MULTIPLE_CHOICE',
            options: ['Interstitial glucose', 'Cardiac troponin', 'Melanoma', 'Cortisol'],
            correct: 'Cardiac troponin',
            explanation: {
              step1: 'Tìm biomarker giúp phát hiện sớm nhồi máu cơ tim (cardiac infarction).',
              step2: 'Đoạn 3: "biomarkers including interstitial glucose, cardiac troponin, and cortisol, detecting acute cardiac infarction...".',
              step3: 'Troponin là chỉ dấu sinh học đặc hiệu cho tim.',
              step4: 'Đáp án là Cardiac troponin.'
            }
          }
        ]
      }
    ]
  };

  const tsContent = `// Auto-generated Complete Cambridge IELTS Library (Cam 09 - 21)
// Source: Cambridge IELTS Authentic Practice Tests via DOL Tự Học System
// Generated for AI4IELTS+ Platform

export interface QuestionExplanation {
  step1: string;
  step2: string;
  step3: string;
  step4?: string;
  distractor?: string;
}

export interface TestQuestion {
  id: number;
  prompt: string;
  type: "TRUE_FALSE_NOT_GIVEN" | "MULTIPLE_CHOICE" | "FILL_IN_BLANK";
  options?: string[];
  correct: string;
  explanation: QuestionExplanation;
}

export interface TestPassage {
  id: string;
  passageNumber: number;
  title: string;
  subtitle?: string;
  content: string[];
  questions: TestQuestion[];
}

export interface IELTSTestItem {
  id: string;
  title: string;
  series: string;
  testNumber: number;
  type: "Reading" | "Listening";
  durationMinutes: number;
  passages: TestPassage[];
}

export const IELTS_TESTS: Record<string, IELTSTestItem> = ${JSON.stringify(fullTests, null, 2)};

export function getIELTSTestById(id: string): IELTSTestItem {
  if (IELTS_TESTS[id]) {
    return IELTS_TESTS[id];
  }
  // Try fallback to reading-1 of same series
  const seriesMatch = id.match(/^(cam-\\d+)/);
  if (seriesMatch) {
    const baseId = \`\${seriesMatch[1]}-reading-1\`;
    if (IELTS_TESTS[baseId]) return IELTS_TESTS[baseId];
  }
  return IELTS_TESTS["cam-21-reading-1"];
}
`;

  fs.writeFileSync(path.join(process.cwd(), 'src/data/ieltsTests.ts'), tsContent, 'utf-8');
  console.log(`🎉 Successfully saved ${Object.keys(fullTests).length} tests to src/data/ieltsTests.ts!`);
}

buildAll();
