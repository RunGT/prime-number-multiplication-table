const { test, expect } = require("@jest/globals");
const { describe } = require("yargs");
const userInputNumber = require("../main");


    test("N is a number", () => {
        expect(userInputNumber(3)).toBe(3);
        expect(userInputNumber("Three")).toBe("Value entered is not a number");
    });
    


