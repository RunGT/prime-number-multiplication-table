const isPrime = require("./helpers/primeNumbers");
const multiplyPrimeArr = require("./helpers/primeNumberMultiplication");

const useInputNumberToCreatePrimeMultiplicationTable = (n) => {
  // Check if n meets all requirements

  if (typeof n !== "number") {
    return "Value entered is not a number";
  }
  if (n % 1 !== 0) {
    return "Whole number is required";
  }
  if (n < 1 || 0) {
    return "A minimum value of 1 is required";
  }

  let numArr = [];
// Loop through the array, check if the number is a prime, if it is push i to numArr
  for (i = 1; n > numArr.length; i++) {
    if (isPrime(i)) {
      numArr.push(i);
    }
  }
  
  return multiplyPrimeArr(numArr);
};
useInputNumberToCreatePrimeMultiplicationTable(3);

module.exports = useInputNumberToCreatePrimeMultiplicationTable;
