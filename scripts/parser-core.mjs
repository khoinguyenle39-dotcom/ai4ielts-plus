
function extractText(node) {
  if (!node) return '';
  if (typeof node === 'string') return node;
  if (Array.isArray(node)) return node.map(extractText).join(' ');
  if (node.text) return node.text;
  if (node.value) return node.value;
  if (node.children) return node.children.map(extractText).join(' ');
  return '';
}

function parseSlateToLines(editorValue) {
  if (!editorValue) return [];
  let parsed = null;
  try {
    parsed = typeof editorValue === 'string' ? JSON.parse(editorValue) : editorValue;
  } catch (e) {
    return [];
  }
  if (!Array.isArray(parsed)) return [];

  const lines = [];
  function walk(node) {
    if (!node) return '';
    if (typeof node === 'string') return node;
    if (node.type === 'editable-blank-void' || node.type === 'blank' || node.blankId) {
      return '[ _____ ]';
    }
    if (node.text !== undefined) return node.text;
    if (Array.isArray(node.children)) {
      return node.children.map(walk).join('');
    }
    return '';
  }

  for (const block of parsed) {
    const text = walk(block).trim();
    if (text) lines.push(text);
  }
  return lines;
}

function extractBlockPromptForBlank(parsedSlate, targetBlankId, qNum, blankIdToQNum = {}) {
  if (!Array.isArray(parsedSlate)) return '';

  for (const block of parsedSlate) {
    let hasTarget = false;
    function check(n) {
      if (!n) return;
      if (n.blankId === targetBlankId || (n.children && n.children.some(c => c.blankId === targetBlankId))) {
        hasTarget = true;
      }
      if (Array.isArray(n.children)) n.children.forEach(check);
    }
    check(block);

    if (hasTarget) {
      function renderBlock(n) {
        if (!n) return '';
        if (n.type === 'editable-blank-void' || n.type === 'blank' || n.blankId) {
          const bId = n.blankId || n.id;
          const assignedNum = blankIdToQNum[bId] || qNum;
          return ` [__Q${assignedNum}__] `;
        }
        if (n.text !== undefined) return n.text;
        if (Array.isArray(n.children)) {
          return n.children.map(renderBlock).join('');
        }
        return '';
      }
      let prompt = renderBlock(block).replace(/\s+/g, ' ').trim();
      return prompt;
    }
  }
  return '';
}

async function fetchTest(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} fetching ${url}`);
  const html = await res.text();
  const marker = '<script id="__NEXT_DATA__" type="application/json">';
  const start = html.indexOf(marker);
  if (start === -1) throw new Error(`Cannot find __NEXT_DATA__ in ${url}`);
  const end = html.indexOf('</script>', start);
  const json = JSON.parse(html.slice(start + marker.length, end));
  const decoded = JSON.parse(decodeURIComponent(json.props.pageProps.encryptedData));
  let testDetail = decoded.data?.testDetail || decoded.data?.data || decoded.data || decoded;
  if (testDetail?.data?.testSections) testDetail = testDetail.data;
  return testDetail;
}

export async function parseSections(testSections, testId) {
  let globalQNum = 1;
  const passages = [];

  for (let sIdx = 0; sIdx < testSections.length; sIdx++) {
    const sec = testSections[sIdx];
    let pObj = sec.passage;
    if (typeof pObj === 'string') {
      try { pObj = JSON.parse(pObj); } catch (e) {}
    }

    let paragraphs = [];
    if (pObj?.paragraphs && Array.isArray(pObj.paragraphs) && pObj.paragraphs.length > 0) {
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
      paragraphs = [sec.name || `Section ${sIdx + 1}`];
    }

    let expDoc = sec.readingExplanationEditorDoc || sec.listeningExplanationEditorDoc;
    if (typeof expDoc === 'string') {
      try { expDoc = JSON.parse(expDoc); } catch (e) {}
    }
    const expChildren = expDoc?.children || [];
    let expIdx = 0;

    const questions = [];

    function getNextExplanation(fallbackAnswer) {
      const expNode = expChildren[expIdx++];
      let step1 = 'Phân tích câu hỏi theo phương pháp Linearthinking.';
      let step2 = 'Định vị vùng thông tin liên quan trong bài đọc / audio.';
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

    function formatExplanation(customExp, fallbackAnswer) {
      if (customExp) {
        let detailText = '';
        if (customExp.detailExplanation) {
          try {
            const parsed = typeof customExp.detailExplanation === 'string' ? JSON.parse(customExp.detailExplanation) : customExp.detailExplanation;
            detailText = extractText(parsed);
          } catch (e) {
            detailText = String(customExp.detailExplanation);
          }
        }
        let locatedText = '';
        if (customExp.locatedPassage) {
          try {
            const parsed = typeof customExp.locatedPassage === 'string' ? JSON.parse(customExp.locatedPassage) : customExp.locatedPassage;
            locatedText = extractText(parsed);
          } catch (e) {
            locatedText = String(customExp.locatedPassage);
          }
        }
        let paraText = '';
        if (customExp.paraphrasing) {
          try {
            const parsed = typeof customExp.paraphrasing === 'string' ? JSON.parse(customExp.paraphrasing) : customExp.paraphrasing;
            paraText = extractText(parsed);
          } catch (e) {
            paraText = String(customExp.paraphrasing);
          }
        }

        if (detailText || locatedText) {
          return {
            step1: 'Phân tích câu hỏi theo phương pháp Linearthinking.',
            step2: locatedText ? `Thông tin trích dẫn: "${locatedText.slice(0, 250)}"` : 'Định vị vùng thông tin liên quan trong bài đọc / audio.',
            step3: (detailText || paraText || 'Bóc tách cấu trúc câu (S-V-O) và đối chiếu nghĩa.').replace(/\s+/g, ' ').slice(0, 400),
            step4: `Đáp án chính xác: ${fallbackAnswer}`
          };
        }
      }
      return getNextExplanation(fallbackAnswer);
    }

    for (const g of (sec.questionGroups || [])) {
      const type = g.questionType || '';

      // 1. DRAG_OUT (Map / Diagram Labelling with spots)
      if (type.includes('DRAG_OUT')) {
        for (const q of (g.questions || [])) {
          const subQuestions = q.questions || [];
          const spots = q.spots || [];
          const spotOptions = spots.map(s => s.text);
          const correctOptions = q.correctOptions || [];

          subQuestions.forEach((title, idx) => {
            const qNum = globalQNum++;
            const prompt = `[Map / Diagram Labelling] ${typeof title === 'string' ? title.trim() : title?.text || `Feature ${idx + 1}`}:`;
            const key = correctOptions[idx]?.key;
            const correctLetter = spots[key]?.text || spotOptions[key] || 'A';
            const explanation = formatExplanation(correctOptions[idx]?.explanation, correctLetter);

            questions.push({
              id: qNum,
              prompt,
              type: 'MULTIPLE_CHOICE',
              options: spotOptions.length ? spotOptions : ['A', 'B', 'C', 'D', 'E', 'F'],
              correct: correctLetter,
              explanation
            });
          });
        }
      }
      // 2. DRAG_IN
      else if (type.includes('DRAG_IN')) {
        for (const q of (g.questions || [])) {
          const subQuestions = q.questions || [];
          const opts = (q.options || []).map(o => typeof o === 'string' ? o : o.value || o.text);
          const correctOptions = q.correctOptions || [];

          subQuestions.forEach((sq, idx) => {
            const qNum = globalQNum++;
            const prompt = `[Categorization] Item ${sq?.text || idx + 1}:`;
            const key = correctOptions[idx]?.key;
            const correctVal = opts[key] || opts[0] || 'A';
            const explanation = formatExplanation(correctOptions[idx]?.explanation, correctVal);

            questions.push({
              id: qNum,
              prompt,
              type: 'MULTIPLE_CHOICE',
              options: opts.length ? opts : ['A', 'B', 'C'],
              correct: correctVal,
              explanation
            });
          });
        }
      }
      // 3. MATCHING_DRAG_DROP_V2 or MATCHING_FEATURE
      else if (type.includes('MATCHING_DRAG_DROP') || type.includes('MATCHING_FEATURE')) {
        for (const q of (g.questions || [])) {
          const features = q.featureNames || q.features || [];
          const opts = (q.options || []).map(o => typeof o === 'string' ? o : o.value);
          const correctOptions = q.correctOptions || [];

          features.forEach((feat, fIdx) => {
            const qNum = globalQNum++;
            const featName = feat.value || feat.name || (typeof feat === 'string' ? feat : `Item ${fIdx + 1}`);
            const prompt = `Match the statement/person with the correct option: "${featName}"`;
            const correctKey = correctOptions[fIdx]?.key;
            const correctName = opts[correctKey] || opts[0] || 'A';
            const explanation = formatExplanation(correctOptions[fIdx]?.explanation, correctName);

            questions.push({
              id: qNum,
              prompt,
              type: 'MULTIPLE_CHOICE',
              options: opts.length ? opts : ['A', 'B', 'C', 'D'],
              correct: correctName,
              explanation
            });
          });
        }
      }
      // 4. DIAGRAM_LABEL_COMPLETION
      else if (type.includes('DIAGRAM_LABEL')) {
        for (const q of (g.questions || [])) {
          const correctAnswers = q.correctAnswers || [];
          const correctOptions = q.correctOptions || [];
          const answersList = correctAnswers.length ? correctAnswers : correctOptions;

          answersList.forEach((ans, aIdx) => {
            const qNum = globalQNum++;
            const prompt = `[Diagram Labelling] Complete the label for item ${qNum}:`;
            const correctVal = (ans.value || ans.text || '').trim();
            const explanation = formatExplanation(ans.explanation, correctVal);

            questions.push({
              id: qNum,
              prompt,
              type: 'FILL_IN_BLANK',
              correct: correctVal,
              explanation
            });
          });
        }
      }
      // 5. NOTE_COMPLETION_WITH_HINT (Summary Completion with box of choices)
      else if (type.includes('WITH_HINT')) {
        for (const q of (g.questions || [])) {
          const opts = (q.options || []).map((o, idx) => {
            const val = typeof o === 'string' ? o : o.value;
            return `${String.fromCharCode(65 + idx)}. ${val}`;
          });
          const correctAnswers = q.correctAnswers || q.correctOptions || [];
          let parsedSlate = null;
          const rawSlate = q.paragraph?.editorValue || q.editorValue;
          if (rawSlate) {
            try { parsedSlate = typeof rawSlate === 'string' ? JSON.parse(rawSlate) : rawSlate; } catch (e) {}
          }
          const lines = parseSlateToLines(rawSlate);

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
              prompt = lines[aIdx] || `Complete blank ${qNum} using words from the box:`;
            }

            const correctKey = ans.key !== undefined ? ans.key : aIdx;
            const correctVal = opts[correctKey] || ans.value || 'A';
            const explanation = formatExplanation(ans.explanation, correctVal);

            questions.push({
              id: qNum,
              prompt: prompt.replace(/\[\s*_____\s*\]/g, '_____'),
              type: 'MULTIPLE_CHOICE',
              options: opts.length ? opts : ['A', 'B', 'C', 'D'],
              correct: correctVal,
              explanation
            });
          });
        }
      }
      // 6. GENERAL COMPLETION / NOTE / TABLE / SENTENCE
      else if (type.includes('COMPLETION') || type.includes('COMPLETE') || type.includes('NOTE') || type.includes('TABLE') || type.includes('SENTENCE')) {
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

            const correctVal = (ans.value || '').trim();
            const explanation = formatExplanation(ans.explanation, correctVal);

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
      // 7. SHORT_ANSWER
      else if (type.includes('SHORT_ANSWER')) {
        for (const q of (g.questions || [])) {
          const sentences = q.sentences || [];
          const correctAnswers = q.correctAnswers || [];

          sentences.forEach((s, sIdx) => {
            const prompt = s.text || `Question ${globalQNum}:`;
            const correctVal = (correctAnswers[sIdx]?.value || '').trim();
            const explanation = formatExplanation(correctAnswers[sIdx]?.explanation, correctVal);

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
      // 8. FLOWCHART
      else if (type.includes('FLOWCHART') || type.includes('FLOW_CHART')) {
        for (const q of (g.questions || [])) {
          const steps = q.sentences || [];
          const correctAnswers = q.correctAnswers || [];
          let ansIdx = 0;

          if (steps.length > 0) {
            steps.forEach((step) => {
              if (step.blanks && step.blanks.length > 0) {
                const lines = parseSlateToLines(step.editorValue);
                step.blanks.forEach(() => {
                  const ans = correctAnswers[ansIdx++];
                  const prompt = `[${step.title || 'Flowchart'}] ${lines[0] || 'Complete flowchart blank:'}`.replace(/\[\s*_____\s*\]/g, '_____');
                  const correctVal = (ans?.value || '').trim();
                  const explanation = formatExplanation(ans?.explanation, correctVal);

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
          } else if (correctAnswers.length > 0) {
            correctAnswers.forEach((ans) => {
              const qNum = globalQNum++;
              const correctVal = (ans?.value || '').trim();
              const explanation = formatExplanation(ans?.explanation, correctVal);
              questions.push({
                id: qNum,
                prompt: `[Flowchart] Complete step for Question ${qNum}:`,
                type: 'FILL_IN_BLANK',
                correct: correctVal,
                explanation
              });
            });
          }
        }
      }
      // 9. MATCHING_PARAGRAPH
      else if (type.includes('MATCHING_PARAGRAPH')) {
        for (const q of (g.questions || [])) {
          const options = (q.options || []);
          const correctOptions = q.correctOptions || [];
          const paragraphCount = q.paragraphKeys?.length || 7;
          const paraLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'].slice(0, paragraphCount);

          options.forEach((opt, oIdx) => {
            const correctKey = correctOptions[oIdx]?.key;
            const correctLetter = paraLetters[correctKey] || 'A';
            const explanation = formatExplanation(correctOptions[oIdx]?.explanation, correctLetter);

            questions.push({
              id: globalQNum++,
              prompt: `Which section contains the following information: "${opt.value || opt.text || opt}"?`,
              type: 'MULTIPLE_CHOICE',
              options: paraLetters,
              correct: correctLetter,
              explanation
            });
          });
        }
      }
      // 10. MATCHING_HEADING
      else if (type.includes('MATCHING_HEADING')) {
        for (const q of (g.questions || [])) {
          const headings = (q.options || []).map(o => o.value || o.text || o);
          const correctOptions = q.correctOptions || [];
          const paragraphCount = q.paragraphKeys?.length || 7;
          const paraLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'].slice(0, paragraphCount);

          paraLetters.forEach((letter, pIdx) => {
            const correctKey = correctOptions[pIdx]?.key;
            const correctHeading = headings[correctKey] || headings[0] || '';
            const explanation = formatExplanation(correctOptions[pIdx]?.explanation, correctHeading);

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
      // 11. MATCHING_ENDING
      else if (type.includes('MATCHING_ENDING')) {
        for (const q of (g.questions || [])) {
          const beginnings = q.endingOptions || [];
          const endings = (q.options || []).map(o => o.value || o.text || o);
          const correctOptions = q.correctOptions || [];

          beginnings.forEach((beg, bIdx) => {
            const correctKey = correctOptions[bIdx]?.key;
            const correctEnding = endings[correctKey] || endings[0] || '';
            const explanation = formatExplanation(correctOptions[bIdx]?.explanation, correctEnding);

            questions.push({
              id: globalQNum++,
              prompt: `Complete the sentence: "${beg.value || beg.text || beg} _____"`,
              type: 'MULTIPLE_CHOICE',
              options: endings,
              correct: correctEnding,
              explanation
            });
          });
        }
      }
      // 12. MULTIPLE_ANSWER (Choose TWO / THREE letters)
      else if (type.includes('MULTIPLE_ANSWER')) {
        for (const q of (g.questions || [])) {
          const prompt = q.question || 'Choose the correct letters:';
          const opts = (q.options || []).map(o => o.value || o.text || o);
          const correctOptions = q.correctOptions || [];
          const totalQ = correctOptions.length || 2;

          for (let i = 0; i < totalQ; i++) {
            const correctKey = correctOptions[i]?.key;
            const correctVal = opts[correctKey] || opts[i] || 'A';
            const explanation = formatExplanation(correctOptions[i]?.explanation, correctVal);

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
      // 13. TRUE / FALSE / NOT GIVEN or YES / NO / NOT GIVEN
      else if (type.includes('TFN') || type.includes('YN')) {
        const isYN = type.includes('YN');
        const choices = isYN ? ['YES', 'NO', 'NOT GIVEN'] : ['TRUE', 'FALSE', 'NOT GIVEN'];

        for (const q of (g.questions || [])) {
          const prompt = q.question || 'Evaluate the following statement:';
          const correctKey = q.correctOptions?.[0]?.key ?? q.correctAnswers?.[0]?.key ?? 2;
          let correctVal = choices[correctKey] || choices[2];
          const explanation = formatExplanation(q.correctOptions?.[0]?.explanation || q.correctAnswers?.[0]?.explanation, correctVal);

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
      // 14. SINGLE_ANSWER / MULTIPLE_CHOICE
      else if (type.includes('SINGLE_ANSWER') || type.includes('CHOICE')) {
        for (const q of (g.questions || [])) {
          const prompt = q.question || 'Choose the correct letter, A, B, C or D:';
          const opts = (q.options || []).map(o => o.value || o.text || o);
          const correctKey = q.correctOptions?.[0]?.key;
          const correctVal = opts[correctKey] || q.correctOptions?.[0]?.value || opts[0] || 'A';
          const explanation = formatExplanation(q.correctOptions?.[0]?.explanation, correctVal);

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
      // 15. FALLBACK
      else {
        for (const q of (g.questions || [])) {
          const prompt = q.question || `Question ${globalQNum}:`;
          const correctVal = (q.correctAnswers?.[0]?.value || q.correctOptions?.[0]?.value || 'Answer').trim();
          const explanation = formatExplanation(q.correctAnswers?.[0]?.explanation || q.correctOptions?.[0]?.explanation, correctVal);

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
      id: `${testId}-p${sIdx + 1}`,
      passageNumber: sIdx + 1,
      title: pObj?.title || sec.name,
      subtitle: pObj?.subTitle || '',
      content: paragraphs,
      questions
    });
  }

  return passages;
}

export { fetchTest };
