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

  // check if divisible by 1000
  checkIfDivisible(1000, 'M');

  // check if divisibly by 900
  checkIfDivisible(900, 'CM');

  // check if divisible by 500
  checkIfDivisible(500, 'D');

  // check if divisible by 400
  checkIfDivisible(400, 'CD');

  // check if divisible by 100
  checkIfDivisible(100, 'C');

  // check if divisible by 90
  checkIfDivisible(90, 'XC');

  // check if divisible by 50
    checkIfDivisible(50, 'L');

  // check if divisible by 40
    checkIfDivisible(40, 'XL');

  // check if divisible by 10
    checkIfDivisible(10, 'X');

  // check if divisible by 9
    checkIfDivisible(9, 'IX');

  // check if divisible by 5
    checkIfDivisible(5, 'V');

  // check if divisible by 4
    checkIfDivisible(4, 'IV');

  // check if divisible by 1
    checkIfDivisible(1, 'I');

  return romanString;

  function checkIfDivisible(numToCheck, romanChar) {
    let numTimesToAdd = Math.floor(remainder / numToCheck);
    romanString += romanChar.repeat(numTimesToAdd)
    remainder = remainder % numToCheck;
  }

}

// console.log('1', romanNumeral(1));
// console.log('5', romanNumeral(5));
// console.log('6', romanNumeral(6));
// console.log('103', romanNumeral(103));
// console.log('3009', romanNumeral(3009));

module.exports = romanNumeral;
