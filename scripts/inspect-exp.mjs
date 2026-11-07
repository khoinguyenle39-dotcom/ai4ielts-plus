function extractText(node) {
  if (!node) return '';
  if (typeof node === 'string') return node;
  if (node.text) {
    if (node.annotationText) return `[${node.text} (${node.annotationText})]`;
    return node.text;
  }
  if (Array.isArray(node.children)) {
    return node.children.map(extractText).join(' ');
  }
  return '';
}

async function inspectExp() {
  const url = 'https://tuhoc.dolenglish.vn/luyen-thi-ielts/de-va-dap-an-mt-reading-test-1';
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  const html = await res.text();
  const match = html.match(/<script id="__NEXT_DATA__"[^>]*>(.*?)<\/script>/s);
  const data = JSON.parse(match[1]);
  const parsed = JSON.parse(decodeURIComponent(data.props.pageProps.encryptedData));
  const s0 = parsed.data?.data?.testSections?.[0];
  let exp = s0.readingExplanationEditorDoc;
  if (typeof exp === 'string') exp = JSON.parse(exp);

  console.log('--- Extracted Steps for Q1 ---');
  const q1 = exp.children[0];
  q1.children.forEach(step => {
    console.log(`Title: ${step.title}`);
    console.log(`Text: ${extractText(step).replace(/\s+/g, ' ')}\n`);
  });
}

inspectExp();
