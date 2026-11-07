const moreUrls = [
  { id: 'cam-17', url: 'https://tuhoc.dolenglish.vn/luyen-thi-ielts/ielts-online-test-mt-ielts-17-test-1-reading-questions-answer-key-de-bai-dap-an-giai-thich-chi-tiet-free-pdf-download' },
  { id: 'cam-16', url: 'https://tuhoc.dolenglish.vn/luyen-thi-ielts/ielts-online-test-mt-ielts-16-test-1-reading-questions-answer-key-de-bai-dap-an-giai-thich-chi-tiet-free-pdf-download' },
  { id: 'cam-15', url: 'https://tuhoc.dolenglish.vn/luyen-thi-ielts/ielts-online-test-mt-ielts-15-test-1-reading-questions-answer-key-de-bai-dap-an-giai-thich-chi-tiet-free-pdf-download' },
  { id: 'cam-14', url: 'https://tuhoc.dolenglish.vn/luyen-thi-ielts/ielts-online-test-mt-ielts-14-test-1-reading-questions-answer-key-de-bai-dap-an-giai-thich-chi-tiet-free-pdf-download' },
  { id: 'cam-13', url: 'https://tuhoc.dolenglish.vn/luyen-thi-ielts/ielts-online-test-mt-ielts-13-test-1-reading-questions-answer-key-de-bai-dap-an-giai-thich-chi-tiet-free-pdf-download' }
];

async function checkMore() {
  for (const item of moreUrls) {
    try {
      const res = await fetch(item.url, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
      });
      const html = await res.text();
      const match = html.match(/<script id="__NEXT_DATA__"[^>]*>(.*?)<\/script>/s);
      if (match) {
        const data = JSON.parse(match[1]);
        const raw = decodeURIComponent(data.props.pageProps.encryptedData);
        const parsed = JSON.parse(raw);
        const sections = parsed.data?.data?.testSections || [];
        const totalQ = sections.reduce((sum, s) => sum + (s.totalQuestion || 0), 0);
        console.log(`✅ [${item.id}] ${totalQ} questions in total:`, sections.map(s => `${s.name} (${s.totalQuestion})`).join(' | '));
      } else {
        console.log(`❌ [${item.id}] __NEXT_DATA__ not found (HTTP ${res.status})`);
      }
    } catch (e) {
      console.error(`❌ [${item.id}] Error:`, e.message);
    }
  }
}

checkMore();
