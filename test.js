const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

function loadApp(storedVal) {
  const code = fs.readFileSync(path.join(__dirname, 'app.js'), 'utf8');
  const mockElement = {
    innerHTML: '',
    classList: { add: () => {}, remove: () => {}, toggle: () => {} },
    setAttribute: () => {},
    querySelector: () => mockElement,
    querySelectorAll: () => []
  };
  const sandbox = {
    module: { exports: {} },
    console,
    setTimeout,
    clearTimeout,
    window: {},
    document: {
      documentElement: {},
      querySelector: () => mockElement,
      querySelectorAll: () => [],
      addEventListener: () => {}
    },
    localStorage: {
      getItem: (key) => key === "nar-language" ? storedVal : null,
      setItem: () => {}
    }
  };
  sandbox.global = sandbox;
  const context = vm.createContext(sandbox);
  vm.runInContext(code, context);
  return context.module.exports;
}

const context = loadApp();
const { abstractArt } = context;

test('abstractArt function tests', async (t) => {
  await t.test('returns correct color class for each mapped article ID', () => {
    assert.equal(abstractArt({ id: 'headache' }), '<div class="abstract-art blue" aria-hidden="true"></div>');
    assert.equal(abstractArt({ id: 'meals' }), '<div class="abstract-art green" aria-hidden="true"></div>');
    assert.equal(abstractArt({ id: 'burnout' }), '<div class="abstract-art sand" aria-hidden="true"></div>');
    assert.equal(abstractArt({ id: 'movement' }), '<div class="abstract-art green" aria-hidden="true"></div>');
    assert.equal(abstractArt({ id: 'chronic' }), '<div class="abstract-art blue" aria-hidden="true"></div>');
    assert.equal(abstractArt({ id: 'body' }), '<div class="abstract-art coral" aria-hidden="true"></div>');
    assert.equal(abstractArt({ id: 'symptoms' }), '<div class="abstract-art sand" aria-hidden="true"></div>');
  });

  await t.test('returns default fallback "blue" class for unmapped or missing article IDs', () => {
    assert.equal(abstractArt({ id: 'unknown_id' }), '<div class="abstract-art blue" aria-hidden="true"></div>');
    assert.equal(abstractArt({ id: 'morning' }), '<div class="abstract-art blue" aria-hidden="true"></div>');
    assert.equal(abstractArt({}), '<div class="abstract-art blue" aria-hidden="true"></div>');
  });
});

test('localStorage language validation', async (t) => {
  await t.test('accepts valid "en" language from localStorage', () => {
    const ctx = loadApp('en');
    const lang = ctx.getLanguage();
    assert.equal(lang, 'en');
    assert.equal(ctx.ui[lang].heroTitle, 'A clearer way to care for yourself.');
  });

  await t.test('accepts valid "tr" language from localStorage', () => {
    const ctx = loadApp('tr');
    const lang = ctx.getLanguage();
    assert.equal(lang, 'tr');
    assert.equal(ctx.ui[lang].heroTitle, 'Kendinize bakmanın daha berrak bir yolu.');
  });

  await t.test('falls back to "en" when localStorage contains invalid or unexpected string', () => {
    const ctxFr = loadApp('fr');
    const langFr = ctxFr.getLanguage();
    assert.equal(langFr, 'en');
    assert.equal(ctxFr.ui[langFr].heroTitle, 'A clearer way to care for yourself.');

    const ctxScript = loadApp('<script>alert("xss")</script>');
    const langScript = ctxScript.getLanguage();
    assert.equal(langScript, 'en');
    assert.equal(ctxScript.ui[langScript].heroTitle, 'A clearer way to care for yourself.');
  });

  await t.test('falls back to "en" when localStorage returns null or empty string', () => {
    const ctxNull = loadApp(null);
    const langNull = ctxNull.getLanguage();
    assert.equal(langNull, 'en');
    assert.equal(ctxNull.ui[langNull].heroTitle, 'A clearer way to care for yourself.');

    const ctxEmpty = loadApp('');
    const langEmpty = ctxEmpty.getLanguage();
    assert.equal(langEmpty, 'en');
    assert.equal(ctxEmpty.ui[langEmpty].heroTitle, 'A clearer way to care for yourself.');
  });
});
