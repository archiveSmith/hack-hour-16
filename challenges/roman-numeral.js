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

  if (Number.isNaN(n)) return undefined;

  let romanString = '';
  let remainder = n;
  let romans = [1000, 'M', 900, 'CM', 500, 'D', 400, 'CD', 100, 'C', 90, 'XC', 50, 'L', 40, 'XL', 10, 'X', 9, 'IX', 5, 'V', 4, 'IV', 1, 'I'];

  for (let i = 0; i < romans.length; i += 2) { checkIfDivisible(romans[i], romans[i+1]); }

  return romanString;

  function checkIfDivisible(numToCheck, romanChar) {
    let numTimesToAdd = Math.floor(remainder / numToCheck);
    romanString += romanChar.repeat(numTimesToAdd)
    remainder = remainder % numToCheck;
  }

}

console.log('1', romanNumeral(1));
console.log('5', romanNumeral(5));
console.log('6', romanNumeral(6));
console.log('103', romanNumeral(103));
console.log('3009', romanNumeral(3009));

module.exports = romanNumeral;
