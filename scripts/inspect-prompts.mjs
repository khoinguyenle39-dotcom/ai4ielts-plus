async function inspectPrompts() {
  const url = 'https://tuhoc.dolenglish.vn/luyen-thi-ielts/de-va-dap-an-mt-reading-test-1';
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  const html = await res.text();
  const match = html.match(/<script id="__NEXT_DATA__"[^>]*>(.*?)<\/script>/s);
  const data = JSON.parse(match[1]);
  const parsed = JSON.parse(decodeURIComponent(data.props.pageProps.encryptedData));
  const s0 = parsed.data?.data?.testSections?.[0];

  console.log('--- Note completion questions ---');
  const g0 = s0.questionGroups[0];
  console.log('g0 displayed:', g0.displayedQuestionType);
  const q0 = g0.questions[0];
  console.log('editorValue:', q0.paragraph?.editorValue?.slice(0, 500));
}

inspectPrompts();
