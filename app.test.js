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
