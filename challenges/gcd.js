/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  
  // start at smallest number
    // count down from smallest, checking when / if both are divisible, if so, return
  const min = Math.min(a, b);

  for (let i = min; i > 0; i--) {
    if (a % i === 0 && b % i === 0) return i;
  }
  return 1;
}


module.exports = gcd;