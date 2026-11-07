async function checkFeature() {
  const url = 'https://tuhoc.dolenglish.vn/luyen-thi-ielts/de-va-dap-an-mt-reading-test-1';
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  const html = await res.text();
  const match = html.match(/<script id="__NEXT_DATA__"[^>]*>(.*?)<\/script>/s);
  const data = JSON.parse(match[1]);
  const parsed = JSON.parse(decodeURIComponent(data.props.pageProps.encryptedData));
  const s1 = parsed.data?.data?.testSections?.[1];

  console.log('--- Matching Feature Name ---');
  console.log(JSON.stringify(s1.questionGroups[2], null, 2).slice(0, 1500));
}

checkFeature();
