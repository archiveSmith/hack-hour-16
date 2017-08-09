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

const romanPairs = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I']
]

function romanNumeral(n) {
  let result = '';
  for (let i = 0; i < romanPairs.length; i += 1) {
    const div = Math.floor(n / romanPairs[i][0]);
    if (div >= 1) {
      result += romanPairs[i][1].repeat(div);
      n -= (romanPairs[i][0] * div);
    }
  }
  return result;
}

console.log(romanNumeral(135));

module.exports = romanNumeral;
