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
  // iterate through len of input, each i -> pow of 2, base len-1-i
  // (11) --> 0 x 2 + 1 = 1 -> 1 x 2 + 1 = 3 - 11->3


  let res = 0;
  const len = binary.length;
  //   console.log(`len:${len}`);

  for (let i = len - 1; i >= 0; i--) {
    // console.log(`i:${i}`);

    const j = len - 1 - i;
    // console.log(`j:${j}`);

    const num = parseInt(binary.charAt(i));
    // console.log(`num:${num}`);

    const addTwo = num * Math.pow(2, j);
    res += addTwo;
  }

  return res;
}

console.log(binToDec('0'));
console.log(binToDec('11'));
console.log(binToDec('100'));
console.log(binToDec('101'));
console.log(binToDec('0101'));


module.exports = binToDec;
