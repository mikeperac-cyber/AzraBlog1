const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

function loadApp() {
  const code = fs.readFileSync(path.join(__dirname, 'app.js'), 'utf8');
  const mockElement = {
    innerHTML: '',
    classList: { add: () => {}, remove: () => {}, toggle: () => {} },
    setAttribute: () => {},
    querySelector: () => mockElement,
    querySelectorAll: () => []
  };
  const sandbox = {
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
      getItem: () => null,
      setItem: () => {}
    }
  };
  sandbox.global = sandbox;
  const context = vm.createContext(sandbox);
  vm.runInContext(code, context);
  return context;
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
