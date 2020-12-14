module.exports = (numArr) => {
  // firstRow is the first row with null and adds the arrary using the spread operator
  let firstRow = [null, ...numArr];
  let allRowsColumns = [firstRow];

  // Iterate through the array of prime numbers (numArr).
  numArr.map((numberInRowOfPrimes) => {
    let multiplesOfNumbers = [numberInRowOfPrimes];

    // For each interation multiply by each number and push the multiplication result to the multiplesOfNumbers array

    numArr.map((numberInColumnOfPrimes) => {
      let multiplication = numberInRowOfPrimes * numberInColumnOfPrimes;

      multiplesOfNumbers.push(multiplication);
    });

    allRowsColumns.push(multiplesOfNumbers);
  });

  return allRowsColumns;
};
