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
//

function binToDec(binary) {
      // start at right n = 1 each number to the left is multiplied by 2 unless element = 0
  const toBinary = binary.split('');
  let decimal = 0;
  let digit = 1;
  for (let i = binary.length-1; i >= 0; i--) {
    if (parseInt(toBinary[i]) === 1) {
      decimal += digit;
    }
    digit *= 2;
  }
  return decimal;
}


module.exports = binToDec;
