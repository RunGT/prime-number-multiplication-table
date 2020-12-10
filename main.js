const userInputNumber = (n) => {
  if (typeof n !== "number") {
    return "Value entered is not a number";
  }
  if (n % 1 !== 0) {
    return "Whole number is required";
  }
  if (n < 1 || 0){
      return "A minimum value of 1 is required"
  }
  return n;
};

module.exports = userInputNumber;
