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
  let sum =  0;
  let space = 1

  for(let i = binary.length; i >= 0; i--) {
    if (binary[i] === '0') {
      space *= 2;
    } else if (binary[i] === '1') {
      sum += space;
      space *= 2;
    }
  }
  return sum;
}
console.log(binToDec('100'))


module.exports = binToDec;
