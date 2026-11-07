const testUrls = [
  'https://tuhoc.dolenglish.vn/luyen-thi-ielts/de-va-dap-an-mt-reading-test-1',
  'https://tuhoc.dolenglish.vn/luyen-thi-ielts/ielts-cam-inpired-20-test-1-reading',
  'https://tuhoc.dolenglish.vn/luyen-thi-ielts/ielts-online-test-mt-ielts-19-test-1-reading-questions-answer-key-de-bai-dap-an-giai-thich-chi-tiet-free-pdf-download',
  'https://tuhoc.dolenglish.vn/luyen-thi-ielts/ielts-online-test-mt-ielts-18-test-1-reading-questions-answer-key-de-bai-dap-an-giai-thich-chi-tiet-free-pdf-download',
  'https://tuhoc.dolenglish.vn/luyen-thi-ielts/ielts-online-test-mt-ielts-17-test-1-reading-questions-answer-key-de-bai-dap-an-giai-thich-chi-tiet-free-pdf-download',
  'https://tuhoc.dolenglish.vn/luyen-thi-ielts/ielts-online-test-mt-ielts-16-test-1-reading-questions-answer-key-de-bai-dap-an-giai-thich-chi-tiet-free-pdf-download'
];

async function findTypes() {
  const types = new Set();
  for (const url of testUrls) {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    const html = await res.text();
    const match = html.match(/<script id="__NEXT_DATA__"[^>]*>(.*?)<\/script>/s);
    const data = JSON.parse(match[1]);
    const parsed = JSON.parse(decodeURIComponent(data.props.pageProps.encryptedData));
    const testSections = parsed.data?.data?.testSections || [];
    testSections.forEach(s => {
      s.questionGroups.forEach(g => types.add(g.questionType));
    });
  }
  console.log('All Question Types:', Array.from(types));
}

findTypes();
