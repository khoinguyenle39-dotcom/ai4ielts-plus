async function inspectSpecial() {
  const url = 'https://tuhoc.dolenglish.vn/luyen-thi-ielts/ielts-cam-inpired-20-test-1-reading';
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  const html = await res.text();
  const match = html.match(/<script id="__NEXT_DATA__"[^>]*>(.*?)<\/script>/s);
  const data = JSON.parse(match[1]);
  const parsed = JSON.parse(decodeURIComponent(data.props.pageProps.encryptedData));
  const q = parsed.data?.data?.testSections?.[2]?.questionGroups?.[1]?.questions?.[0];

  console.log('q.options (count ' + q.options.length + '):', q.options.slice(0, 2));
  console.log('q.endingOptions (count ' + q.endingOptions.length + '):', q.endingOptions.slice(0, 2));
}

inspectSpecial();
