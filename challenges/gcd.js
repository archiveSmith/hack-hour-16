/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let div1 = [];
  let div2 = [];

  for (let i = 1; i < Math.max(a, b); i++) {
    if (a % i === 0) div1.push(i)
    if (b % i === 0) div2.push(i)
  }
  console.log(div1);
  console.log(div2);
  return div1.reduce((gcd, num) => {
    if (div2.indexOf(num) > -1 && num > gcd) gcd = num
    return gcd
  })
}
console.log(gcd(10,8))
module.exports = gcd;
