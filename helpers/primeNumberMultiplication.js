module.exports = (numArr) => {
  
  // firstRow is the first row with null and adds the arrary using the spread operator
  let firstRow = [null, ...numArr];
  let allRowsColumns = [firstRow];

  numArr.map((rowOfPrimes) => {
    let multiples = [rowOfPrimes];


    numArr.map((columnOfPrimes) => {
      let multiplication = rowOfPrimes * columnOfPrimes;

      multiples.push(multiplication);
    });
    allRowsColumns.push(multiples);
  });

  return allRowsColumns;
};
