/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 *
 */

function romanNumeral(n) {
  let RN = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M'
  }
  let base = 0
// if (RN[n]) return RN[n]
// let stack = [];
// let num = n.toString().split('');
// .....................??????
// ?!?!??!?!!??!?!?
  for (var fixedNum in RN) {
    if (RN[fixedNum - n]) {
      base = fixedNum;
    
    }
  }
return fixedNum

}
console.log(romanNumeral(501))
module.exports = romanNumeral;
