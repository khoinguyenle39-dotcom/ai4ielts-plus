async function inspect() {
  const url = 'https://tuhoc.dolenglish.vn/luyen-thi-ielts/de-va-dap-an-mt-reading-test-1';
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  const html = await res.text();
  const match = html.match(/<script id="__NEXT_DATA__"[^>]*>(.*?)<\/script>/s);
  const data = JSON.parse(match[1]);
  const parsed = JSON.parse(decodeURIComponent(data.props.pageProps.encryptedData));
  const s0 = parsed.data?.data?.testSections?.[0];
  
  console.log('--- Section 0 Overview ---');
  console.log('Name:', s0.name);
  console.log('Passage type:', typeof s0.passage);
  let p = s0.passage;
  if (typeof p === 'string') p = JSON.parse(p);
  console.log('Passage keys:', Object.keys(p || {}));
  console.log('Passage title:', p.title);
  console.log('Paragraph sample:', typeof p.paragraph?.content === 'string' ? p.paragraph.content.slice(0, 200) : 'not string');

  console.log('\n--- Question Groups ---');
  s0.questionGroups.forEach((g, gIdx) => {
    console.log(`Group ${gIdx}: ${g.questionType} (${g.totalQuestion} questions)`);
    g.questions.forEach((q, qIdx) => {
      console.log(`  Q ${qIdx}: uuid=${q.uuid}, question=${q.question?.slice(0, 50)}, correctAnswers=`, q.correctAnswers || q.correctOptions);
    });
  });

  console.log('\n--- Explanation Doc ---');
  console.log('Doc type:', typeof s0.readingExplanationEditorDoc);
  let exp = s0.readingExplanationEditorDoc;
  if (typeof exp === 'string') exp = JSON.parse(exp);
  console.log('Exp keys:', Object.keys(exp || {}));
  console.log('Children count:', exp?.children?.length);
  if (exp?.children?.length > 0) {
    console.log('Child 0 type:', exp.children[0]?.type);
  }
}

inspect();
