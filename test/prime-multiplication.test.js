// Is is it a whole number?
// Is it at least 1?

const { test } = require("@jest/globals");
const { describe } = require("yargs");
const userInputNumber = require("../main");


    test("N is a number", () => {
        expect(userInputNumber(2)).toBe(2);
    });

