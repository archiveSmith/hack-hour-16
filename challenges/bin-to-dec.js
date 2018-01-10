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
  // create a variable power = 1;
  let power = 1;
  // create variable result = 0;
  let result = 0;
  // loop through binary from right to left
  for (let i = binary.length - 1; i >= 0; i -= 1) {
    // add result with (the current parsed element multiplied by power)
    result += parseInt(binary[i], 10) * power;
    // multiply power by 2
    power *= 2;
  }
  // return result
  return result;
}

module.exports = binToDec;
