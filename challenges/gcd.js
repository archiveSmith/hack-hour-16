/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  const bigNum = Math.max(a, b);
  const smallNum = Math.min(a, b);
  let result;
  for (let i = 1; i < smallNum; i++) {
    if (smallNum % i === 0 && bigNum % i === 0) result = i;
  }
  return result;
}

module.exports = gcd;
