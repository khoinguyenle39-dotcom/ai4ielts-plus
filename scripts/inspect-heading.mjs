const testUrls = [
  'https://tuhoc.dolenglish.vn/luyen-thi-ielts/ielts-online-test-mt-ielts-19-test-1-reading-questions-answer-key-de-bai-dap-an-giai-thich-chi-tiet-free-pdf-download',
  'https://tuhoc.dolenglish.vn/luyen-thi-ielts/ielts-online-test-mt-ielts-18-test-1-reading-questions-answer-key-de-bai-dap-an-giai-thich-chi-tiet-free-pdf-download',
  'https://tuhoc.dolenglish.vn/luyen-thi-ielts/ielts-online-test-mt-ielts-17-test-1-reading-questions-answer-key-de-bai-dap-an-giai-thich-chi-tiet-free-pdf-download',
  'https://tuhoc.dolenglish.vn/luyen-thi-ielts/ielts-online-test-mt-ielts-16-test-1-reading-questions-answer-key-de-bai-dap-an-giai-thich-chi-tiet-free-pdf-download'
];

async function findHeading() {
  for (const url of testUrls) {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    const html = await res.text();
    const match = html.match(/<script id="__NEXT_DATA__"[^>]*>(.*?)<\/script>/s);
    const data = JSON.parse(match[1]);
    const parsed = JSON.parse(decodeURIComponent(data.props.pageProps.encryptedData));
    const testSections = parsed.data?.data?.testSections || [];
    testSections.forEach(s => {
      s.questionGroups.forEach(g => {
        if (g.questionType.includes('HEADING') || g.questionType.includes('MULTIPLE_ANSWER')) {
          console.log(`Found ${g.questionType} in ${s.name}:`);
          console.log('q0 keys:', Object.keys(g.questions[0]));
          console.log('g.totalQuestion:', g.totalQuestion);
          console.log('options length:', g.questions[0].options?.length);
          console.log('headings / paragraphKeys:', g.questions[0].headings || g.questions[0].paragraphKeys || g.questions[0].questions);
        }
      });
    });
  }
}

findHeading();
