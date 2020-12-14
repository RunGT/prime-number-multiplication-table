const { test, expect } = require("@jest/globals");
const useInputNumberToCreatePrimeMultiplicationTable = require("../main");

describe("Check N meets requirements", () => {
    test("N is a number", () => {
        expect(useInputNumberToCreatePrimeMultiplicationTable("Three")).toBe("Value entered is not a number");
    });

    test("N is a whole number", () => {
        expect(useInputNumberToCreatePrimeMultiplicationTable(2.5)).toBe("Whole number is required")
    });

    test("Value is at least 1", () => {
        expect(useInputNumberToCreatePrimeMultiplicationTable(0)).toBe("A minimum value of 1 is required")
        expect(useInputNumberToCreatePrimeMultiplicationTable(-1)).toBe("A minimum value of 1 is required")
    });
});


