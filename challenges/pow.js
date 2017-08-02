/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  // let res = 1
  // if (power === 0) { return 1 }
  // while (power > 0) {
  //   res = res * base
  //   power--;
  // }
  // return res

  if (power === 1) { return base }
  return base * pow(base, power-1)
}
console.log(pow(3, 3))
module.exports = pow;
