/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
* 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function binToDec(binary) {

  console.log('input: ' + binary);
  if (Number.isNaN(binary)) return undefined;

  // iterate through numbers backwards
  let binaryArr = String(binary).split('');
  let sum = 0;

  for (let i = binaryArr.length-1; i >= 0; i--) {
    let j = binaryArr.length-1 - i;
    if (binaryArr[i] == 1) sum += Math.pow(2, j);
  }

  return sum;

}

console.log('0 - 0 ', binToDec('0') === 0);
console.log('11 - 3 ', binToDec('11') === 3);
console.log('100 - 4 ', binToDec('100') === 4);
console.log('1000 - 8 ', binToDec('1000') === 8);
console.log('10000 - 16 ', binToDec('10000') === 16);
console.log('0101 - 5 ', binToDec('0101') === 5);

module.exports = binToDec;
