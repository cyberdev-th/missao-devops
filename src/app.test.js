// src/app.test.js
const soma = require("./app");

test("soma 1 + 2 para ser igual a 3", () => {
  expect(soma(1, 2)).toBe(3);
});

test("Soma 5 + 5 para ser igual a 10", () => {
  expect(soma(5, 5)).toBe(10);
});
