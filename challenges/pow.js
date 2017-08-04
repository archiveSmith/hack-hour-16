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

  if (power === 0) { return 1 }
  return base * pow(base, power-1)
}
console.log(pow(3, 3))
module.exports = pow;
//  3^3 = 3 * 3 * 3;
//  base stays the same
// 3 ^ 0 = 1  --> base case;
//   3 * pow(3, 3) -->
//   3 * pow(3, 2) -->
//   3 * pow(3, 1)
//   3 * pow(3, 0) --> 3 * 1 = 3
