const { test, expect } = require("@jest/globals");
const userInputNumber = require("../main");

describe("Check N meets requirements", () => {
    test("N is a number", () => {
        expect(userInputNumber("Three")).toBe("Value entered is not a number");
    });

    test("N is a whole number", () => {
        expect(userInputNumber(2.5)).toBe("Whole number is required")
    });

    test("Value is at least 1", () => {
        expect(userInputNumber(0)).toBe("A minimum value of 1 is required")
        expect(userInputNumber(-1)).toBe("A minimum value of 1 is required")
    });
});


