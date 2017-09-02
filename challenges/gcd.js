/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let bigNum;
  let smallNum;
  let result;
  a > b ? (bigNum = a, smallNum = b) : (bigNum = b, smallNum = a);
  for (let i = 1; i < smallNum; i++) {
    if (smallNum % i === 0 && bigNum % i === 0) result = i;
  }
  return result;
}

module.exports = gcd;
