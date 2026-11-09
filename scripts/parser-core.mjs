function extractText(node) {
  if (!node) return '';
  if (typeof node === 'string') return node;
  if (Array.isArray(node)) return node.map(extractText).join(' ');
  if (node.text) return node.text;
  if (node.value) return node.value;
  if (node.children) return node.children.map(extractText).join(' ');
  return '';
}

function sanitizeBrandText(str) {
  if (!str) return '';
  return str
    .replace(/Hello\s+Dolbie[^.!?\n]*[.!?\n]?\s*/gi, '')
    .replace(/Chúc\s+Dolbie[^.!?\n]*[.!?\n]?\s*/gi, '')
    .replace(/Cùng chinh phục câu hỏi này nhé[^.!?\n]*[.!?\n]?\s*/gi, '')
    .replace(/DOLBIE\s+lưu\s+ý/gi, 'Lưu ý bẫy đề thi')
    .replace(/Dolbie/gi, 'bạn')
    .replace(/DOL\s+Tự\s+Học/gi, 'AI4IELTS+')
    .replace(/DOL\s+English/gi, 'AI4IELTS+')
    .replace(/\bDOL\b/g, 'AI4IELTS+')
    .trim();
}

function formatMsToMinSec(ms) {
  if (typeof ms !== 'number' || isNaN(ms)) return '00:00';
  const totalSec = Math.max(0, Math.floor(ms / 1000));
  const mins = Math.floor(totalSec / 60);
  const secs = totalSec % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
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

function resolveMediaUrl(mediaObj) {
  if (!mediaObj) return undefined;
  if (typeof mediaObj === 'string') {
    return mediaObj.startsWith('http') ? mediaObj : `https://suijm9clouobj.vcdn.cloud/${mediaObj.replace(/^\/+/, '')}`;
  }
  if (mediaObj.url && mediaObj.url.startsWith('http')) return mediaObj.url;
  if (mediaObj.path) {
    return `https://suijm9clouobj.vcdn.cloud/${mediaObj.path.replace(/^\/+/, '')}`;
  }
  return undefined;
}

function extractListeningTranscript(scriptObj) {
  if (!scriptObj || !Array.isArray(scriptObj.subtitle) || scriptObj.subtitle.length === 0) {
    return [];
  }
  const charMap = {};
  if (Array.isArray(scriptObj.characters)) {
    scriptObj.characters.forEach(c => {
      if (c && c.id && c.name) charMap[c.id] = c.name;
    });
  }

  const lines = [];
  let currentSpeaker = null;
  let currentStart = 0;
  let currentBuffer = [];

  for (const item of scriptObj.subtitle) {
    const text = (item?.data?.text || item?.text || '').trim();
    if (!text) continue;
    const speaker = (item.character && charMap[item.character]) ? charMap[item.character] : 'AUDIO';
    const startMs = item?.data?.start ?? 0;

    if (speaker === currentSpeaker && currentBuffer.length < 4) {
      currentBuffer.push(text);
    } else {
      if (currentBuffer.length > 0) {
        const timeTag = formatMsToMinSec(currentStart);
        lines.push(`[${timeTag}] ${currentSpeaker}: ${currentBuffer.join(' ')}`);
      }
      currentSpeaker = speaker;
      currentStart = startMs;
      currentBuffer = [text];
    }
  }
  if (currentBuffer.length > 0) {
    const timeTag = formatMsToMinSec(currentStart);
    lines.push(`[${timeTag}] ${currentSpeaker}: ${currentBuffer.join(' ')}`);
  }

  return lines;
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
  if (!Array.isArray(testSections)) return [];
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

    const audioUrl = resolveMediaUrl(sec.script?.audio || sec.audio);
    const transcript = extractListeningTranscript(sec.script);
    const sectionImages = [];

    let expDoc = sec.readingExplanationEditorDoc || sec.listeningExplanationEditorDoc;
    if (typeof expDoc === 'string') {
      try { expDoc = JSON.parse(expDoc); } catch (e) {}
    }
    const expChildren = expDoc?.children || [];
    let expIdx = 0;

    const questions = [];

    function getNextExplanation(fallbackAnswer) {
      const expNode = expChildren[expIdx++];
      let step1 = 'Phân tích câu hỏi, xác định từ khóa và loại thông tin cần tìm theo Linearthinking.';
      let step2 = 'Định vị vùng thông tin liên quan trong bài đọc / audio.';
      let step3 = 'Bóc tách cấu trúc câu (S-V-O) và đối chiếu nghĩa tương đương (paraphrase).';
      let step4 = `Đáp án chính xác: ${fallbackAnswer}`;

      if (expNode && Array.isArray(expNode.children)) {
        step1 = sanitizeBrandText(extractText(expNode.children[0]).replace(/\s+/g, ' ').trim()) || step1;
        step2 = sanitizeBrandText(extractText(expNode.children[1]).replace(/\s+/g, ' ').trim()) || step2;
        step3 = sanitizeBrandText(extractText(expNode.children[2]).replace(/\s+/g, ' ').trim()) || step3;
        step4 = sanitizeBrandText(extractText(expNode.children[3]).replace(/\s+/g, ' ').trim()) || step4;
      }

      return { step1, step2, step3, step4 };
    }

    function formatExplanation(customExp, fallbackAnswer) {
      const nextFromDoc = expChildren[expIdx++];
      if (customExp) {
        let detailText = '';
        const rawDetail = customExp.detailExplanation || customExp.detailExplanationNonLinear;
        if (rawDetail) {
          try {
            const parsed = typeof rawDetail === 'string' ? JSON.parse(rawDetail) : rawDetail;
            detailText = sanitizeBrandText(extractText(parsed));
          } catch (e) {
            detailText = sanitizeBrandText(String(rawDetail));
          }
        }
        let locatedText = '';
        if (customExp.locatedPassage || customExp.selectedPassage) {
          const rawLoc = customExp.locatedPassage || customExp.selectedPassage;
          try {
            const parsed = typeof rawLoc === 'string' ? JSON.parse(rawLoc) : rawLoc;
            locatedText = sanitizeBrandText(extractText(parsed));
          } catch (e) {
            locatedText = sanitizeBrandText(String(rawLoc));
          }
        }
        if (!locatedText && Array.isArray(customExp.transcripts) && customExp.transcripts.length > 0) {
          locatedText = sanitizeBrandText(extractText(customExp.transcripts));
        }

        let paraText = '';
        if (customExp.paraphrasing || customExp.simplify) {
          const rawPara = customExp.paraphrasing || customExp.simplify;
          try {
            const parsed = typeof rawPara === 'string' ? JSON.parse(rawPara) : rawPara;
            paraText = sanitizeBrandText(extractText(parsed));
          } catch (e) {
            paraText = sanitizeBrandText(String(rawPara));
          }
        }

        if (detailText || locatedText || paraText) {
          return {
            step1: paraText
              ? paraText.replace(/\s+/g, ' ').slice(0, 450)
              : 'Phân tích câu hỏi, xác định từ khóa và dự đoán thông tin theo Linearthinking.',
            step2: locatedText
              ? `Trích dẫn bài đọc / Audio: "${locatedText.replace(/\s+/g, ' ').slice(0, 450)}"`
              : 'Định vị vùng thông tin chứa từ khóa tương đương trong bài.',
            step3: (detailText || paraText || 'Đọc hiểu ý chính câu (Simplify) và đối chiếu với câu hỏi.').replace(/\s+/g, ' ').slice(0, 750),
            step4: `Đáp án chính xác: ${fallbackAnswer}`
          };
        }
      }

      if (nextFromDoc && Array.isArray(nextFromDoc.children)) {
        return {
          step1: sanitizeBrandText(extractText(nextFromDoc.children[0]).replace(/\s+/g, ' ').trim()) || 'Phân tích câu hỏi theo phương pháp Linearthinking.',
          step2: sanitizeBrandText(extractText(nextFromDoc.children[1]).replace(/\s+/g, ' ').trim()) || 'Định vị vùng thông tin liên quan trong bài.',
          step3: sanitizeBrandText(extractText(nextFromDoc.children[2]).replace(/\s+/g, ' ').trim()) || 'Bóc tách cấu trúc câu (S-V-O) và đối chiếu nghĩa.',
          step4: sanitizeBrandText(extractText(nextFromDoc.children[3]).replace(/\s+/g, ' ').trim()) || `Đáp án chính xác: ${fallbackAnswer}`
        };
      }

      return {
        step1: 'Phân tích câu hỏi, xác định từ khóa và loại thông tin cần tìm theo Linearthinking.',
        step2: 'Định vị vùng thông tin liên quan trong bài đọc / audio.',
        step3: 'Bóc tách cấu trúc câu (S-V-O) và đối chiếu nghĩa tương đương (paraphrase).',
        step4: `Đáp án chính xác: ${fallbackAnswer}`
      };
    }

    const listeningContextLines = [];

    for (const g of (sec.questionGroups || [])) {
      const type = g.questionType || '';
      const groupTitle = g.displayedQuestionType || type;

      for (const q of (g.questions || [])) {
        const qImg = resolveMediaUrl(q.image || q.nodeImage);
        if (qImg && !sectionImages.includes(qImg)) {
          sectionImages.push(qImg);
        }
        if (q.heading) {
          listeningContextLines.push(`📌 ${q.heading}`);
        }
        const rawSlate = q.paragraph?.editorValue || q.editorValue;
        if (rawSlate) {
          const sLines = parseSlateToLines(rawSlate);
          sLines.forEach(l => listeningContextLines.push(l));
        }
      }

      // 1. DRAG_OUT (Map / Diagram Labelling with spots)
      if (type.includes('DRAG_OUT')) {
        for (const q of (g.questions || [])) {
          const qImg = resolveMediaUrl(q.image || q.nodeImage);
          const subQuestions = q.questions || [];
          const spots = q.spots || [];
          const spotOptions = spots.map(s => s.text).filter(Boolean);
          const correctOptions = q.correctOptions || [];

          subQuestions.forEach((title, idx) => {
            const qNum = globalQNum++;
            const prompt = `[Map / Diagram Labelling] ${typeof title === 'string' ? title.trim() : title?.text || `Item ${idx + 1}`}:`;
            const key = correctOptions[idx]?.key;
            const correctLetter = spots[key]?.text || spotOptions[key] || 'A';
            const explanation = formatExplanation(correctOptions[idx]?.explanation, correctLetter);

            questions.push({
              id: qNum,
              prompt,
              type: 'MULTIPLE_CHOICE',
              options: spotOptions.length ? spotOptions : ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
              correct: correctLetter,
              imageUrl: idx === 0 ? qImg : undefined,
              explanation
            });
          });
        }
      }
      // 2. DRAG_IN
      else if (type.includes('DRAG_IN')) {
        for (const q of (g.questions || [])) {
          const qImg = resolveMediaUrl(q.image || q.nodeImage);
          const subQuestions = q.questions || [];
          const opts = (q.options || []).map(o => typeof o === 'string' ? o : o.value || o.text).filter(Boolean);
          const correctOptions = q.correctOptions || [];

          subQuestions.forEach((sq, idx) => {
            const qNum = globalQNum++;
            const prompt = `[Diagram / Chart Matching] Item ${sq?.text || idx + 1}:`;
            const key = correctOptions[idx]?.key;
            const correctVal = opts[key] || opts[0] || 'A';
            const explanation = formatExplanation(correctOptions[idx]?.explanation, correctVal);

            questions.push({
              id: qNum,
              prompt,
              type: 'MULTIPLE_CHOICE',
              options: opts.length ? opts : ['A', 'B', 'C'],
              correct: correctVal,
              imageUrl: idx === 0 ? qImg : undefined,
              explanation
            });
          });
        }
      }
      // 3. MATCHING_DRAG_DROP_V2 or MATCHING_FEATURE
      else if (type.includes('MATCHING_DRAG_DROP') || type.includes('MATCHING_FEATURE')) {
        for (const q of (g.questions || [])) {
          const features = q.featureNames || q.features || [];
          const opts = (q.options || []).map(o => typeof o === 'string' ? o : o.value).filter(Boolean);
          const correctOptions = q.correctOptions || [];

          features.forEach((feat, fIdx) => {
            const qNum = globalQNum++;
            const featName = feat.value || feat.name || (typeof feat === 'string' ? feat : `Item ${fIdx + 1}`);
            const prompt = `Match the statement/item with the correct option: "${featName}"`;
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
          const qImg = resolveMediaUrl(q.nodeImage || q.image);
          const correctAnswers = q.correctAnswers || [];
          const correctOptions = q.correctOptions || [];
          const answersList = correctAnswers.length ? correctAnswers : correctOptions;

          let blankLines = [];
          if (Array.isArray(q.nodeBlanks)) {
            q.nodeBlanks.forEach(nb => {
              const l = parseSlateToLines(nb.editorValue);
              blankLines.push(...l);
            });
          }

          answersList.forEach((ans, aIdx) => {
            const qNum = globalQNum++;
            const ctxLine = blankLines[aIdx] ? ` (${blankLines[aIdx].replace(/\[\s*_____\s*\]/g, '_____')})` : '';
            const prompt = `[Diagram Labelling] Complete the label for Question ${qNum}${ctxLine}:`;
            const correctVal = (ans.value || ans.text || '').trim();
            const explanation = formatExplanation(ans.explanation, correctVal);

            questions.push({
              id: qNum,
              prompt,
              type: 'FILL_IN_BLANK',
              correct: correctVal,
              imageUrl: aIdx === 0 ? qImg : undefined,
              explanation
            });
          });
        }
      }
      // 5. NOTE_COMPLETION_WITH_HINT (Summary Completion with word box)
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
          const correctOptions = q.correctOptions || [];
          const opts = (q.options || []).map(o => typeof o === 'string' ? o : o.value).filter(Boolean);
          let ansIdx = 0;

          if (steps.length > 0 && correctAnswers.length > 0) {
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
          } else if (correctOptions.length > 0 && opts.length > 0) {
            correctOptions.forEach((co, cIdx) => {
              const qNum = globalQNum++;
              const correctVal = opts[co.key] || opts[0] || 'A';
              const explanation = formatExplanation(co.explanation, correctVal);
              questions.push({
                id: qNum,
                prompt: `[Flowchart] Choose the correct step for Question ${qNum}:`,
                type: 'MULTIPLE_CHOICE',
                options: opts,
                correct: correctVal,
                explanation
              });
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
          const paragraphCount = q.paragraphKeys?.length || 8;
          const paraLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'].slice(0, paragraphCount);

          options.forEach((opt, oIdx) => {
            const correctKey = correctOptions[oIdx]?.key;
            const correctLetter = paraLetters[correctKey] || 'A';
            const explanation = formatExplanation(correctOptions[oIdx]?.explanation, correctLetter);

            questions.push({
              id: globalQNum++,
              prompt: `Which paragraph/section contains the following information: "${opt.value || opt.text || opt}"?`,
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
          const paragraphCount = q.paragraphKeys?.length || correctOptions.length || 7;
          const paraLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'].slice(0, paragraphCount);

          paraLetters.forEach((letter, pIdx) => {
            if (pIdx >= correctOptions.length && correctOptions.length > 0) return;
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
              prompt: `${prompt} (Answer ${i + 1} of ${totalQ})`,
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

    if (paragraphs.length === 0) {
      if (listeningContextLines.length > 0) {
        paragraphs = listeningContextLines;
      } else if (transcript.length > 0) {
        paragraphs = [
          `🎧 HƯỚNG DẪN NGHE PART ${sIdx + 1}: "${sec.name || `Listening Part ${sIdx + 1}`}"`,
          `Bấm nút Play trên trình phát Audio phía trên để nghe bài thu âm chuẩn quốc tế và hoàn thành các câu hỏi ở cột bên phải. Bạn có thể chuyển sang tab "Transcript Hội Thoại" để đối chiếu lời thoại chi tiết và bấm giờ từng câu.`
        ];
      } else {
        paragraphs = [sec.name || `Section ${sIdx + 1}`];
      }
    }

    passages.push({
      id: `${testId}-p${sIdx + 1}`,
      passageNumber: sIdx + 1,
      title: pObj?.title || sec.name || `Section ${sIdx + 1}`,
      subtitle: pObj?.subTitle || '',
      content: paragraphs,
      audioUrl,
      transcript: transcript.length > 0 ? transcript : undefined,
      images: sectionImages.length > 0 ? sectionImages : undefined,
      questions
    });
  }

  return passages;
}

export { fetchTest };
