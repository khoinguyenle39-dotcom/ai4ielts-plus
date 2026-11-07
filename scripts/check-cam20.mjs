async function checkCam20() {
  const url = 'https://tuhoc.dolenglish.vn/luyen-thi-ielts/ielts-cam-inpired-20-test-1-reading';
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  const html = await res.text();
  const match = html.match(/<script id="__NEXT_DATA__"[^>]*>(.*?)<\/script>/s);
  const data = JSON.parse(match[1]);
  const parsed = JSON.parse(decodeURIComponent(data.props.pageProps.encryptedData));
  const testSections = parsed.data?.data?.testSections || [];

  testSections.forEach((s, sIdx) => {
    console.log(`\n=== Section ${sIdx}: ${s.name} (declared: ${s.totalQuestion}) ===`);
    s.questionGroups.forEach((g, gIdx) => {
      console.log(`  Group ${gIdx}: type=${g.questionType}, totalQuestion=${g.totalQuestion}, questions.length=${g.questions?.length}`);
    });
  });
}

checkCam20();
