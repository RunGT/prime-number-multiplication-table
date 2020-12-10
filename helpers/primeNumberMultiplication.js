module.exports = (numArr) => {
  if (numArr.length === 0) {
    return null;
  }

  let firstMultiples = [null, ...numArr];
  let allMultiples = [firstMultiples];

  numArr.forEach((primeRow) => {
    let multiples = [primeRow];
    numArr.forEach((primeColumn) => {
      let multiple = primeRow * primeColumn;

      multiples.push(multiple);
    });
    allMultiples.push(multiples);
  });

  return allMultiples;
};
