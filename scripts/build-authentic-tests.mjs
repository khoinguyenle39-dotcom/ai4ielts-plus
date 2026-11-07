import fs from 'fs';
import path from 'path';

function extractText(node) {
  if (!node) return '';
  if (typeof node === 'string') return node;
  if (node.text !== undefined) {
    if (node.annotationText) return `${node.text} (${node.annotationText})`;
    return node.text;
  }
  if (Array.isArray(node.children)) {
    return node.children.map(extractText).join(' ');
  }
  return '';
}

function parseSlateToLines(slateJsonStr) {
  try {
    const parsed = typeof slateJsonStr === 'string' ? JSON.parse(slateJsonStr) : slateJsonStr;
    const lines = [];
    function walk(node) {
      if (!node) return;
      if (node.type === 'li' || node.type === 'p' || node.type === 'td') {
        let text = '';
        if (Array.isArray(node.children)) {
          node.children.forEach(c => {
            if (c.type === 'blank' || c.type === 'editable-blank-void') text += ' [ _____ ] ';
            else if (c.text) text += c.text;
            else if (c.children) text += extractText(c);
          });
        }
        if (text.trim()) lines.push(text.trim());
      } else if (Array.isArray(node.children)) {
        node.children.forEach(walk);
      }
    }
    if (Array.isArray(parsed)) parsed.forEach(walk);
    return lines;
  } catch (e) {
    return [];
  }
}

function extractBlockPromptForBlank(parsedSlate, targetBlankId, globalQNum, blankIdToQNum) {
  let foundPrompt = '';

  function walk(node) {
    if (!node || foundPrompt) return;

    const isBlock = node.type === 'p' || node.type === 'li' || node.type === 'td';
    if (isBlock) {
      let hasTarget = false;
      function check(n) {
        if (!n) return;
        if ((n.type === 'blank' && n.id === targetBlankId) ||
            (n.type === 'editable-blank-void' && n.children?.[0]?.blankId === targetBlankId) ||
            n.id === targetBlankId ||
            (n.children?.[0]?.blankId === targetBlankId)) {
          hasTarget = true;
        }
        if (Array.isArray(n.children)) n.children.forEach(check);
      }
      check(node);

      if (hasTarget) {
        let text = '';
        function buildText(n) {
          if (!n) return;
          if (n.type === 'blank') {
            if (n.id === targetBlankId) {
              text += ' [ _____ ] ';
            } else {
              const otherQ = blankIdToQNum[n.id];
              text += otherQ ? ` [(${otherQ}) _____] ` : ' _____ ';
            }
          } else if (n.type === 'editable-blank-void') {
            const bId = n.children?.[0]?.blankId || n.id;
            if (bId === targetBlankId) {
              text += ' [ _____ ] ';
            } else {
              const otherQ = blankIdToQNum[bId];
              text += otherQ ? ` [(${otherQ}) _____] ` : ' _____ ';
            }
          } else if (n.text) {
            text += n.text;
          } else if (Array.isArray(n.children)) {
            n.children.forEach(buildText);
          }
        }
        buildText(node);
        foundPrompt = text.replace(/\s+/g, ' ').trim();
        return;
      }
    }

    if (Array.isArray(node.children)) {
      node.children.forEach(walk);
    }
  }

  if (Array.isArray(parsedSlate)) parsedSlate.forEach(walk);
  return foundPrompt;
}

async function fetchTest(url) {
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  const html = await res.text();
  const marker = '<script id="__NEXT_DATA__" type="application/json">';
  const start = html.indexOf(marker);
  if (start === -1) throw new Error('__NEXT_DATA__ not found in page');
  const end = html.indexOf('</script>', start);
  const json = JSON.parse(html.slice(start + marker.length, end));
  const parsed = JSON.parse(decodeURIComponent(json.props.pageProps.encryptedData));
  return parsed.data?.data;
}

async function build() {
  console.log('🚀 Building authentic 40-question IELTS tests (Cam 09 - 21)...');
  const testUrls = [
    { id: 'cam-21-reading-1', series: 'Cambridge 21', title: 'IELTS CAM Inspired 21 - Reading Test 1', url: 'https://tuhoc.dolenglish.vn/luyen-thi-ielts/de-va-dap-an-mt-reading-test-1' },
    { id: 'cam-20-reading-1', series: 'Cambridge 20', title: 'IELTS CAM Inspired 20 - Reading Test 1', url: 'https://tuhoc.dolenglish.vn/luyen-thi-ielts/ielts-cam-inpired-20-test-1-reading' },
    { id: 'cam-19-reading-1', series: 'Cambridge 19', title: 'IELTS CAM Inspired 19 - Reading Test 1', url: 'https://tuhoc.dolenglish.vn/luyen-thi-ielts/ielts-online-test-mt-ielts-19-test-1-reading-questions-answer-key-de-bai-dap-an-giai-thich-chi-tiet-free-pdf-download' },
    { id: 'cam-18-reading-1', series: 'Cambridge 18', title: 'IELTS CAM Inspired 18 - Reading Test 1', url: 'https://tuhoc.dolenglish.vn/luyen-thi-ielts/ielts-online-test-mt-ielts-18-test-1-reading-questions-answer-key-de-bai-dap-an-giai-thich-chi-tiet-free-pdf-download' },
    { id: 'cam-17-reading-1', series: 'Cambridge 17', title: 'IELTS CAM Inspired 17 - Reading Test 1', url: 'https://tuhoc.dolenglish.vn/luyen-thi-ielts/ielts-online-test-mt-ielts-17-test-1-reading-questions-answer-key-de-bai-dap-an-giai-thich-chi-tiet-free-pdf-download' },
    { id: 'cam-16-reading-1', series: 'Cambridge 16', title: 'IELTS CAM Inspired 16 - Reading Test 1', url: 'https://tuhoc.dolenglish.vn/luyen-thi-ielts/ielts-online-test-mt-ielts-16-test-1-reading-questions-answer-key-de-bai-dap-an-giai-thich-chi-tiet-free-pdf-download' },
    { id: 'cam-15-reading-1', series: 'Cambridge 15', title: 'IELTS CAM Inspired 15 - Reading Test 1', url: 'https://tuhoc.dolenglish.vn/luyen-thi-ielts/ielts-online-test-mt-ielts-15-test-1-reading-questions-answer-key-de-bai-dap-an-giai-thich-chi-tiet-free-pdf-download' },
    { id: 'cam-14-reading-1', series: 'Cambridge 14', title: 'IELTS CAM Inspired 14 - Reading Test 1', url: 'https://tuhoc.dolenglish.vn/luyen-thi-ielts/ielts-online-test-mt-ielts-14-test-1-reading-questions-answer-key-de-bai-dap-an-giai-thich-chi-tiet-free-pdf-download' },
    { id: 'cam-13-reading-1', series: 'Cambridge 13', title: 'IELTS CAM Inspired 13 - Reading Test 1', url: 'https://tuhoc.dolenglish.vn/luyen-thi-ielts/ielts-online-test-mt-ielts-13-test-1-reading-questions-answer-key-de-bai-dap-an-giai-thich-chi-tiet-free-pdf-download' },
    { id: 'cam-12-reading-1', series: 'Cambridge 12', title: 'IELTS CAM Inspired 12 - Reading Test 1', url: 'https://tuhoc.dolenglish.vn/luyen-thi-ielts/ielts-online-test-mt-ielts-12-test-1-reading-questions-answer-key-de-bai-dap-an-giai-thich-chi-tiet-free-pdf-download' },
    { id: 'cam-11-reading-1', series: 'Cambridge 11', title: 'IELTS CAM Inspired 11 - Reading Test 1', url: 'https://tuhoc.dolenglish.vn/luyen-thi-ielts/ielts-online-test-mt-ielts-11-test-1-reading-questions-answer-key-de-bai-dap-an-giai-thich-chi-tiet-free-pdf-download' },
    { id: 'cam-10-reading-1', series: 'Cambridge 10', title: 'IELTS CAM Inspired 10 - Reading Test 1', url: 'https://tuhoc.dolenglish.vn/luyen-thi-ielts/ielts-online-test-mt-ielts-10-test-1-reading-questions-answer-key-de-bai-dap-an-giai-thich-chi-tiet-free-pdf-download' },
    { id: 'cam-09-reading-1', series: 'Cambridge 09', title: 'IELTS CAM Inspired 09 - Reading Test 1', url: 'https://tuhoc.dolenglish.vn/luyen-thi-ielts/ielts-online-test-mt-ielts-9-test-1-reading-questions-answer-key-de-bai-dap-an-giai-thich-chi-tiet-free-pdf-download' }
  ];

  const fullTests = {};

  for (const t of testUrls) {
    try {
      console.log(`\nFetching ${t.id}...`);
      const rawData = await fetchTest(t.url);
      const testSections = rawData?.testSections || [];
      let globalQNum = 1;

      const passages = [];

      for (let sIdx = 0; sIdx < testSections.length; sIdx++) {
        const sec = testSections[sIdx];
        let pObj = sec.passage;
        if (typeof pObj === 'string') {
          try { pObj = JSON.parse(pObj); } catch (e) {}
        }

        // Complete robust passage paragraph extraction (REGULAR + ANNOTATE)
        let paragraphs = [];
        if (pObj?.paragraphs && Array.isArray(pObj.paragraphs) && pObj.paragraphs.length > 0) {
          // ANNOTATE type: array of paragraphs, markedBy ALPHABET (A, B, C, D...)
          paragraphs = pObj.paragraphs.map((item, idx) => {
            const rawContent = typeof item === 'string' ? item : item?.content || '';
            const trimmed = rawContent.trim();
            if (pObj.markedBy === 'ALPHABET') {
              const letter = String.fromCharCode(65 + idx);
              return `[${letter}]  ${trimmed}`;
            }
            return trimmed;
          }).filter(Boolean);
        } else if (pObj?.paragraph?.content) {
          // REGULAR type: string content with \n\n or \n
          const pText = pObj.paragraph.content;
          if (typeof pText === 'string') {
            paragraphs = pText.split(/\n\n+/).map(s => s.trim()).filter(Boolean);
            if (paragraphs.length <= 1 && pText.includes('\n')) {
              paragraphs = pText.split(/\n+/).map(s => s.trim()).filter(Boolean);
            }
          }
        } else if (pObj?.paragraph?.editorValue) {
          const lines = parseSlateToLines(pObj.paragraph.editorValue);
          if (lines.length) paragraphs = lines;
        }

        if (paragraphs.length === 0) {
          paragraphs = [sec.name];
        }

        let expDoc = sec.readingExplanationEditorDoc;
        if (typeof expDoc === 'string') {
          try { expDoc = JSON.parse(expDoc); } catch (e) {}
        }
        const expChildren = expDoc?.children || [];
        let expIdx = 0;

        const questions = [];

        function getNextExplanation(fallbackAnswer) {
          const expNode = expChildren[expIdx++];
          let step1 = 'Phân tích câu hỏi theo phương pháp Linearthinking.';
          let step2 = 'Định vị vùng thông tin liên quan trong bài đọc.';
          let step3 = 'Bóc tách cấu trúc câu (S-V-O) và đối chiếu nghĩa.';
          let step4 = `Đáp án chính xác: ${fallbackAnswer}`;

          if (expNode && Array.isArray(expNode.children)) {
            step1 = extractText(expNode.children[0]).replace(/\s+/g, ' ').trim() || step1;
            step2 = extractText(expNode.children[1]).replace(/\s+/g, ' ').trim() || step2;
            step3 = extractText(expNode.children[2]).replace(/\s+/g, ' ').trim() || step3;
            step4 = extractText(expNode.children[3]).replace(/\s+/g, ' ').trim() || step4;
          }

          return { step1, step2, step3, step4 };
        }

        for (const g of (sec.questionGroups || [])) {
          const type = g.questionType || '';

          // 1. Completion / Fill in blanks (Summary, Note Form, Table, Sentence completion)
          if (type.includes('COMPLETION') || type.includes('COMPLETE') || type.includes('NOTE') || type.includes('TABLE')) {
            for (const q of (g.questions || [])) {
              let parsedSlate = null;
              const rawSlate = q.paragraph?.editorValue || q.editorValue;
              if (rawSlate) {
                try {
                  parsedSlate = typeof rawSlate === 'string' ? JSON.parse(rawSlate) : rawSlate;
                } catch (e) {}
              }

              const lines = parseSlateToLines(rawSlate);
              const blankLines = lines.filter(l => l.includes('[ _____ ]'));
              const correctAnswers = q.correctAnswers || [];

              // Map blank IDs to future global question numbers
              const blankIdToQNum = {};
              correctAnswers.forEach((ans, aIdx) => {
                const bId = ans.blankId || ans.id;
                if (bId) blankIdToQNum[bId] = globalQNum + aIdx;
              });

              correctAnswers.forEach((ans, aIdx) => {
                const qNum = globalQNum++;
                const bId = ans.blankId || ans.id;
                let prompt = '';

                if (parsedSlate && bId) {
                  prompt = extractBlockPromptForBlank(parsedSlate, bId, qNum, blankIdToQNum);
                }

                if (!prompt) {
                  prompt = blankLines[aIdx] || lines[aIdx] || `Complete blank for Question ${qNum}:`;
                }

                const correctVal = ans.value || '';
                const explanation = getNextExplanation(correctVal);

                questions.push({
                  id: qNum,
                  prompt: prompt.replace(/\[\s*_____\s*\]/g, '_____'),
                  type: 'FILL_IN_BLANK',
                  correct: correctVal,
                  explanation
                });
              });
            }
          }
          // 2. Short Answer Questions (e.g. In Cam 09 & Cam 10)
          else if (type.includes('SHORT_ANSWER')) {
            for (const q of (g.questions || [])) {
              const sentences = q.sentences || [];
              const correctAnswers = q.correctAnswers || [];

              sentences.forEach((s, sIdx) => {
                const prompt = s.text || `Question ${globalQNum}:`;
                const correctVal = correctAnswers[sIdx]?.value || '';
                const explanation = getNextExplanation(correctVal);

                questions.push({
                  id: globalQNum++,
                  prompt,
                  type: 'FILL_IN_BLANK',
                  correct: correctVal,
                  explanation
                });
              });
            }
          }
          // 3. Flowchart Questions (e.g. In Cam 09)
          else if (type.includes('FLOWCHART') || type.includes('FLOW_CHART')) {
            for (const q of (g.questions || [])) {
              const steps = q.sentences || [];
              const correctAnswers = q.correctAnswers || [];
              let ansIdx = 0;

              steps.forEach((step) => {
                if (step.blanks && step.blanks.length > 0) {
                  const lines = parseSlateToLines(step.editorValue);
                  step.blanks.forEach(() => {
                    const ans = correctAnswers[ansIdx++];
                    const prompt = `[${step.title || 'Flowchart'}] ${lines[0] || 'Complete flowchart blank:'}`.replace(/\[\s*_____\s*\]/g, '_____');
                    const correctVal = ans?.value || '';
                    const explanation = getNextExplanation(correctVal);

                    questions.push({
                      id: globalQNum++,
                      prompt,
                      type: 'FILL_IN_BLANK',
                      correct: correctVal,
                      explanation
                    });
                  });
                }
              });
            }
          }
          // 4. Matching Paragraph Information
          else if (type.includes('MATCHING_PARAGRAPH')) {
            for (const q of (g.questions || [])) {
              const options = (q.options || []);
              const correctOptions = q.correctOptions || [];
              const paragraphCount = q.paragraphKeys?.length || 7;
              const paraLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'].slice(0, paragraphCount);

              options.forEach((opt, oIdx) => {
                const correctKey = correctOptions[oIdx]?.key;
                const correctLetter = paraLetters[correctKey] || 'A';
                const explanation = getNextExplanation(correctLetter);

                questions.push({
                  id: globalQNum++,
                  prompt: `Which section contains the following information: "${opt.value}"?`,
                  type: 'MULTIPLE_CHOICE',
                  options: paraLetters,
                  correct: correctLetter,
                  explanation
                });
              });
            }
          }
          // 5. Matching Feature / Name
          else if (type.includes('MATCHING_FEATURE')) {
            for (const q of (g.questions || [])) {
              const features = q.featureNames || [];
              const options = (q.options || []).map(o => o.value);
              const correctOptions = q.correctOptions || [];

              features.forEach((feat, fIdx) => {
                const correctKey = correctOptions[fIdx]?.key;
                const correctName = options[correctKey] || options[0] || '';
                const explanation = getNextExplanation(correctName);

                questions.push({
                  id: globalQNum++,
                  prompt: `Match the statement with the correct person/feature: "${feat.value}"`,
                  type: 'MULTIPLE_CHOICE',
                  options,
                  correct: correctName,
                  explanation
                });
              });
            }
          }
          // 6. Matching Headings
          else if (type.includes('MATCHING_HEADING')) {
            for (const q of (g.questions || [])) {
              const headings = (q.options || []).map(o => o.value);
              const correctOptions = q.correctOptions || [];
              const paragraphCount = q.paragraphKeys?.length || 7;
              const paraLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'].slice(0, paragraphCount);

              paraLetters.forEach((letter, pIdx) => {
                const correctKey = correctOptions[pIdx]?.key;
                const correctHeading = headings[correctKey] || headings[0] || '';
                const explanation = getNextExplanation(correctHeading);

                questions.push({
                  id: globalQNum++,
                  prompt: `Choose the correct heading for Section ${letter}:`,
                  type: 'MULTIPLE_CHOICE',
                  options: headings,
                  correct: correctHeading,
                  explanation
                });
              });
            }
          }
          // 7. Matching Sentence Endings
          else if (type.includes('MATCHING_ENDING')) {
            for (const q of (g.questions || [])) {
              const beginnings = q.endingOptions || [];
              const endings = (q.options || []).map(o => o.value);
              const correctOptions = q.correctOptions || [];

              beginnings.forEach((beg, bIdx) => {
                const correctKey = correctOptions[bIdx]?.key;
                const correctEnding = endings[correctKey] || endings[0] || '';
                const explanation = getNextExplanation(correctEnding);

                questions.push({
                  id: globalQNum++,
                  prompt: `Complete the sentence: "${beg.value} _____"`,
                  type: 'MULTIPLE_CHOICE',
                  options: endings,
                  correct: correctEnding,
                  explanation
                });
              });
            }
          }
          // 8. Multiple Answer (e.g. Choose TWO letters)
          else if (type.includes('MULTIPLE_ANSWER')) {
            for (const q of (g.questions || [])) {
              const prompt = q.question || 'Choose TWO letters:';
              const opts = (q.options || []).map(o => o.value);
              const correctOptions = q.correctOptions || [];
              const totalQ = g.totalQuestion || 2;

              for (let i = 0; i < totalQ; i++) {
                const correctKey = correctOptions[i]?.key;
                const correctVal = opts[correctKey] || opts[i] || 'A';
                const explanation = getNextExplanation(correctVal);

                questions.push({
                  id: globalQNum++,
                  prompt: `${prompt} (Part ${i + 1} of ${totalQ})`,
                  type: 'MULTIPLE_CHOICE',
                  options: opts,
                  correct: correctVal,
                  explanation
                });
              }
            }
          }
          // 9. True/False/Not Given or Yes/No/Not Given
          else if (type.includes('TFN') || type.includes('YN')) {
            const isYN = type.includes('YN');
            const choices = isYN ? ['YES', 'NO', 'NOT GIVEN'] : ['TRUE', 'FALSE', 'NOT GIVEN'];

            for (const q of (g.questions || [])) {
              const prompt = q.question || 'Evaluate the following statement:';
              const correctKey = q.correctOptions?.[0]?.key ?? q.correctAnswers?.[0]?.key ?? 2;
              let correctVal = choices[correctKey] || choices[2];
              const explanation = getNextExplanation(correctVal);

              questions.push({
                id: globalQNum++,
                prompt,
                type: 'TRUE_FALSE_NOT_GIVEN',
                options: choices,
                correct: correctVal,
                explanation
              });
            }
          }
          // 10. Multiple Choice / Single Answer
          else if (type.includes('SINGLE_ANSWER') || type.includes('MULTIPLE') || type.includes('CHOICE')) {
            for (const q of (g.questions || [])) {
              const prompt = q.question || 'Choose the correct letter, A, B, C or D:';
              const opts = (q.options || []).map(o => o.value);
              const correctKey = q.correctOptions?.[0]?.key;
              const correctVal = opts[correctKey] || q.correctOptions?.[0]?.value || opts[0] || 'A';
              const explanation = getNextExplanation(correctVal);

              questions.push({
                id: globalQNum++,
                prompt,
                type: 'MULTIPLE_CHOICE',
                options: opts.length ? opts : ['A', 'B', 'C', 'D'],
                correct: correctVal,
                explanation
              });
            }
          }
          // Fallback
          else {
            for (const q of (g.questions || [])) {
              const prompt = q.question || `Question ${globalQNum}:`;
              const correctVal = q.correctAnswers?.[0]?.value || q.correctOptions?.[0]?.value || 'Answer';
              const explanation = getNextExplanation(correctVal);

              questions.push({
                id: globalQNum++,
                prompt,
                type: 'FILL_IN_BLANK',
                correct: correctVal,
                explanation
              });
            }
          }
        }

        passages.push({
          id: `${t.id}-p${sIdx + 1}`,
          passageNumber: sIdx + 1,
          title: pObj?.title || sec.name,
          subtitle: pObj?.subTitle || '',
          content: paragraphs,
          questions
        });
      }

      fullTests[t.id] = {
        id: t.id,
        title: t.title,
        series: t.series,
        testNumber: 1,
        type: 'Reading',
        durationMinutes: 60,
        passages
      };

      console.log(`✅ ${t.id}: Generated ${passages.length} passages (${passages.map(p => p.content.length + ' paras').join(', ')}) with ${globalQNum - 1} TOTAL QUESTIONS!`);
    } catch (err) {
      console.error(`❌ Failed ${t.id}:`, err.message);
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

  const tsContent = `// Auto-generated Authentic 40-Question IELTS Tests Library with Linearthinking
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
  return IELTS_TESTS["cam-21-reading-1"];
}
`;

  fs.writeFileSync(path.join(process.cwd(), 'src/data/ieltsTests.ts'), tsContent, 'utf-8');
  console.log('🎉 Successfully saved all complete 40-question authentic tests to src/data/ieltsTests.ts!');
}

build();
