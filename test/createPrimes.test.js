const { test, expect } = require("@jest/globals");
const userInputNumber = require("../main");

test("Create an array from N", () => {
  const expected = [2];
  expect(userInputNumber(1)).toStrictEqual(expected);
});

const expected = [
  [null, 2, 3, 5],
  [2, 4, 6, 10],
  [3, 6, 9, 15],
  [5, 10, 15, 25],
];
test("Check prime multiplication table is correct", () => {
  expect(userInputNumber(3)).toStrictEqual(expected);
});
