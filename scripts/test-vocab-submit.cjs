const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');
const path = require('node:path');
const key = 'ai4ielts_forumflash_vocab_v1';
const root = path.resolve(__dirname, '..');
const compile = file => ts.transpileModule(fs.readFileSync(file, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.React, esModuleInterop: true }
}).outputText;
const dataModule = { exports: {} };
vm.runInNewContext(compile(path.join(root, 'src/data/vocabTopics.ts')), { exports: dataModule.exports, module: dataModule });
const card = JSON.parse(fs.readFileSync(path.join(root, 'public/vocab-data/education.json'))).items[0];
const initial = { xp: 0, stars: {}, topicPassed: {}, libraryPositions: {}, srsDeck: {}, totalCorrect: 0, totalAttempts: 0 };
const session = { topicId: 'education', lessonIdx: 0, modeId: 'tap', difficulty: 'easy', cards: [card],
  questions: [{ id: 'q-0', kind: 'truefalse', card, prompt: 'Test question', options: ['Đúng', 'Sai'], answer: 'Đúng', explain: 'Explanation' }],
  step: 0, cardFrontLang: 'en', cardFlipped: false, cardRecallInput: '', cardRecallChecked: false,
  needReviewIds: [], selectedAnswer: '', checked: false, lastCorrect: false, correctCount: 0, wrongRecords: [], completed: false,
  matchLeftSelected: null, matchedPairs: {}, speechTranscript: '', isListeningSpeech: false };
const fixture = { ...initial, checkpoint: { session, topicId: 'education', track: 'ielts', libraryOpen: false, libraryIdx: 0 } };
let stored = JSON.stringify(fixture), writes = 0, failWrite = false, remoteReads = 0;
function mount() {
  const slots = [], effects = []; let cursor = 0, tree;
  const memo = (fn, deps) => { const i = cursor++; const old = slots[i];
    if (!old || deps.some((d, j) => !Object.is(d, old.deps[j]))) slots[i] = { value: fn(), deps };
    return slots[i].value;
  };
  const react = {
    createElement: (type, props, ...children) => ({ type, props: props || {}, children }),
    useState: initial => { const i = cursor++; if (!(i in slots)) slots[i] = typeof initial === 'function' ? initial() : initial;
      return [slots[i], next => { slots[i] = typeof next === 'function' ? next(slots[i]) : next; }]; },
    useRef: value => memo(() => ({ current: value }), []),
    useMemo: memo, useCallback: (fn, deps) => memo(() => fn, deps),
    useEffect: (fn, deps) => memo(() => { effects.push(fn); }, deps || [])
  };
  const module = { exports: {} };
  const query = new Proxy({}, { get: (_, name) => name === 'then'
    ? resolve => { remoteReads++; resolve({data: null, error: null}); }
    : () => query });
  vm.runInNewContext(compile(path.join(root, 'src/components/ForumFlashVocabSystem.tsx')), {
    exports: module.exports, module, console, AbortSignal,
    require: name => {
      if (name === 'react') return react;
      if (name === '@/data/vocabTopics') return dataModule.exports;
      if (name === '@/lib/supabase') return { supabase: { from: () => query } };
      if (name === '@/lib/streakManager') return { recordDailyStudyVisit: () => {} };
      if (name === 'lucide-react') return new Proxy({}, { get: (_, name) => name });
      throw Error(name);
    },
    localStorage: { getItem: () => stored, setItem: (k, value) => { assert.equal(k, key); if (failWrite) throw Error('quota'); stored = value; writes++; } },
    window: { addEventListener() {}, removeEventListener() {} },
    fetch: async () => ({ ok: true, json: async () => ({ id: 'education', items: [card] }) })
  });
  async function render() { for (let i = 0; i < 6; i++) { cursor = 0; tree = module.exports.default();
    for (const effect of effects.splice(0)) effect(); await Promise.resolve(); } return tree; }
  const text = node => Array.isArray(node) ? node.map(text).join('') : node && typeof node === 'object' ? text(node.children) : String(node ?? '');
  function nodes(node) { return Array.isArray(node) ? node.flatMap(nodes) : node && typeof node === 'object' ? [node, ...nodes(node.children)] : []; }
  return { render, text: () => text(tree), click: async label => {
    const button = nodes(tree).find(n => n.type === 'button' && text(n).trim() === label);
    assert.ok(button, `Missing button: ${label}; found ${nodes(tree).filter(n => n.type === 'button').map(text).join(' | ')}`); assert.ok(!button.props.disabled);
    button.props.onClick(); await render();
  } };
}
(async () => {
  let app = mount(); await app.render();
  assert.equal(remoteReads, 0, 'Local checkpoint must win over remote progress');
  await app.click('AĐúng'); assert.equal(writes, 0, 'Answering must not persist');
  assert.equal(JSON.parse(stored).checkpoint.session.checked, false);
  app = mount(); await app.render(); await app.click('BSai');
  await app.click('Submit'); assert.equal(writes, 1);
  assert.equal(JSON.parse(stored).checkpoint.session.selectedAnswer, 'Sai');
  assert.equal(JSON.parse(stored).checkpoint.session.checked, true);
  app = mount(); await app.render(); assert.ok(app.text().includes('Tiến độ đã lưu'));
  const saved = stored; await app.click('Submit'); assert.equal(stored, saved, 'Repeated Submit must be idempotent');
  failWrite = true; await app.click('Submit'); assert.ok(app.text().includes('Chưa lưu được tiến độ'));
  assert.equal(stored, saved, 'Failed Submit must preserve previous checkpoint'); failWrite = false;
  // A completed lesson restores its summary without granting XP again.
  const completed = JSON.parse(saved); completed.xp = 35; completed.stars = { 'education:1:hoc': 1 };
  completed.checkpoint.session.modeId = 'hoc'; completed.checkpoint.session.completed = true;
  stored = JSON.stringify(completed); app = mount(); await app.render(); await app.click('Submit');
  assert.equal(JSON.parse(stored).xp, 35);
  assert.equal(JSON.parse(stored).checkpoint.session.completed, true);
  console.log('PASS: draft discard, quiz resume, local precedence, idempotence, quota failure, completed lesson restore');
})().catch(error => { console.error(error); process.exitCode = 1; });



