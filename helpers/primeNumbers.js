// A function to check if n is a prime number

const isPrime = (n) => {
  for (let i = 2; i < n; i++) if (n % i === 0) return false;
  return n > 1;
};

module.exports = isPrime;