const { test, describe } = require("node:test");
const assert = require("node:assert");
const { navMarkup, ui } = require("./app.js");

describe("navMarkup", () => {
  test("generates correct HTML navigation links for English translation object", () => {
    const expected = '<a href="#featured">Stories</a><a href="#journal">Guides</a><a href="#passage">Perspectives</a><a href="#about">About</a>';
    const result = navMarkup(ui.en);
    assert.strictEqual(result, expected);
  });

  test("generates correct HTML navigation links for Turkish translation object", () => {
    const expected = '<a href="#featured">Yazılar</a><a href="#journal">Rehberler</a><a href="#passage">Perspektifler</a><a href="#about">Hakkında</a>';
    const result = navMarkup(ui.tr);
    assert.strictEqual(result, expected);
  });

  test("handles empty nav array gracefully", () => {
    const customT = { nav: [] };
    const result = navMarkup(customT);
    assert.strictEqual(result, "");
  });

  test("maps corresponding anchor hrefs according to index order for custom nav items", () => {
    const customT = { nav: ["Item 1", "Item 2", "Item 3", "Item 4"] };
    const expected = '<a href="#featured">Item 1</a><a href="#journal">Item 2</a><a href="#passage">Item 3</a><a href="#about">Item 4</a>';
    const result = navMarkup(customT);
    assert.strictEqual(result, expected);
  });

  test("handles nav array with fewer than 4 items", () => {
    const customT = { nav: ["Only One"] };
    const expected = '<a href="#featured">Only One</a>';
    const result = navMarkup(customT);
    assert.strictEqual(result, expected);
  });

  test("handles nav array with extra items beyond index 3 (mapping undefined href target)", () => {
    const customT = { nav: ["1", "2", "3", "4", "5"] };
    const expected = '<a href="#featured">1</a><a href="#journal">2</a><a href="#passage">3</a><a href="#about">4</a><a href="#undefined">5</a>';
    const result = navMarkup(customT);
    assert.strictEqual(result, expected);
  });
});

describe("escapeHtml and searchResultItemMarkup security tests", () => {
  const { escapeHtml, searchResultItemMarkup } = require("./app.js");

  test("escapeHtml escapes HTML special characters properly", () => {
    assert.strictEqual(escapeHtml('<script>alert("XSS")</script>'), '&lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;');
    assert.strictEqual(escapeHtml("Foo & Bar 'Baz'"), 'Foo &amp; Bar &#39;Baz&#39;');
    assert.strictEqual(escapeHtml(null), '');
    assert.strictEqual(escapeHtml(undefined), '');
  });

  test("searchResultItemMarkup escapes untrusted article content", () => {
    const maliciousArticle = {
      id: 'art-1"><script>alert(1)</script>',
      readTime: 5,
      en: { title: '<img src=x onerror=alert(1)>' },
      tr: { title: 'Test' }
    };
    const markup = searchResultItemMarkup(maliciousArticle);
    assert.ok(!markup.includes('<script>'));
    assert.ok(!markup.includes('<img'));
    assert.ok(markup.includes('&lt;script&gt;alert(1)&lt;/script&gt;'));
    assert.ok(markup.includes('&lt;img src=x onerror=alert(1)&gt;'));
  });
});

describe("precomputed article.search and cardMarkup data-search", () => {
  const fs = require("node:fs");
  const path = require("node:path");
  const vm = require("node:vm");

  function loadContext(lang = "en") {
    const code = fs.readFileSync(path.join(__dirname, "app.js"), "utf8");
    const mockElement = {
      innerHTML: "",
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
        getItem: () => lang,
        setItem: () => {}
      }
    };
    sandbox.global = sandbox;
    const context = vm.createContext(sandbox);
    vm.runInContext(code + "; globalThis.__ARTICLES = articles; globalThis.__CARD_MARKUP = cardMarkup;", context);
    return context;
  }

  test("articles have precomputed search strings for en and tr", () => {
    const context = loadContext("en");
    const articles = context.__ARTICLES;
    assert.strictEqual(articles.length, 10);
    articles.forEach((art) => {
      assert.ok(art.search, `article ${art.id} should have search object`);
      assert.strictEqual(art.search.en, `${art.en.title} ${art.en.excerpt}`.toLowerCase());
      assert.strictEqual(art.search.tr, `${art.tr.title} ${art.tr.excerpt}`.toLowerCase());
    });
  });

  test("cardMarkup generates data-search matching precomputed search string in English", () => {
    const context = loadContext("en");
    const articles = context.__ARTICLES;
    const cardMarkup = context.__CARD_MARKUP;
    articles.forEach((art) => {
      const markup = cardMarkup(art);
      assert.ok(markup.includes(`data-search="${art.search.en}"`));
    });
  });

  test("cardMarkup generates data-search matching precomputed search string in Turkish", () => {
    const context = loadContext("tr");
    const articles = context.__ARTICLES;
    const cardMarkup = context.__CARD_MARKUP;
    articles.forEach((art) => {
      const markup = cardMarkup(art);
      assert.ok(markup.includes(`data-search="${art.search.tr}"`));
    });
  });

  test("cardMarkup falls back safely if article.search is absent", () => {
    const context = loadContext("en");
    const cardMarkup = context.__CARD_MARKUP;
    const customArticle = {
      id: "custom",
      number: "99",
      category: "daily",
      readTime: 3,
      image: "assets/morning-table.png",
      imageClass: "",
      en: { title: "Custom Title", excerpt: "Custom Excerpt" },
      tr: { title: "Ozel Baslik", excerpt: "Ozel Ozet" }
    };
    const markup = cardMarkup(customArticle);
    assert.ok(markup.includes('data-search="custom title custom excerpt"'));
  });
});
