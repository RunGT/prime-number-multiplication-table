const { test, expect } = require("@jest/globals");
const useInputNumberToCreatePrimeMultiplicationTable = require("../main");

test("Create an array length of only prime numbers from N including null", () => {
  expect(useInputNumberToCreatePrimeMultiplicationTable(3).length).toBe(4);
});

const expected = [
  ['x', 2, 3, 5],
  [2, 4, 6, 10],
  [3, 6, 9, 15],
  [5, 10, 15, 25],
];
test("Check prime multiplication table is correct", () => {
  expect(useInputNumberToCreatePrimeMultiplicationTable(3)).toStrictEqual(expected);
});
