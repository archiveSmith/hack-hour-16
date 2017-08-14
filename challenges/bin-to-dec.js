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
  let trimmedBinary = binary.substring(binary.indexOf('1'));
  let sum = 0;
  for (let i = trimmedBinary.length - 2; i >= 0; i--) {
    if (trimmedBinary[i].indexOf('1') == 0) {
      let current = Math.pow(2, i+1);
      sum += current;
    } else {
      return sum;
    }
  }
  if (trimmedBinary[trimmedBinary.length-1] == "1") {
    return sum + 1;
  }
  return sum;
}

console.log(binToDec('111111111'));

module.exports = binToDec;
