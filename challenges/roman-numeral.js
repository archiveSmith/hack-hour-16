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
 const map = [
    1000, 'M', 900, 'CM', 500, 'D', 400, 'CD', 100, 'C', 90, 'XC', 50, 'L',
    40, 'XL', 10, 'X', 9, 'IX', 5, 'V', 4, 'IV', 1, 'I'
  ];
   
  let value = '';
  for (let idx = 0; n > 0 && idx < map.length; idx += 2) {
    console.log(`n:${n},idx:${idx},map[idx]:${map[idx]}`)
    while (n >= map[idx]) {
      console.log(`n is >= map[idx]`)
      value += map[idx + 1];
      n -= map[idx];
    }
  }
  return value;

}

console.log(romanNumeral(6));
module.exports = romanNumeral;
