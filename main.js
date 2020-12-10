// userInputNumber(2)

const userInputNumber = (n) => {
    if ( typeof(n) !== "number") {
 return "Value entered is not a number"
    }
 return n;
};

module.exports =userInputNumber;