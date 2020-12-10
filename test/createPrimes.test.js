const { test, expect } = require("@jest/globals");
const userInputNumber = require("../main");

test("Create an array from N", () => {
 const expected = [2]
  expect(userInputNumber(1)).toStrictEqual(expected);
});

const expected = [2,3,5]
test("Check numbers in the array are prime", () => {
 expect(userInputNumber(3)).toStrictEqual(expected)

})
