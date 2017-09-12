/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  let divisor = 1;
  const min = Math.min(a, b);
  for (let i = 2; i <= min; i += 1) {
    if (a % i === 0 && b % i === 0) divisor = i;
  }
  return divisor;
}

// Number.isInteger returns boolean if whole number!

module.exports = gcd;
