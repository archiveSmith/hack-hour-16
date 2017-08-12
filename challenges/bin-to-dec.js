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
    // 	return parseInt(binary,2)
      if(typeof binary !== 'string'){return false}
      if(binary === '0'){return 0}
      if(binary === '1'){return 1}
      var answer = 0
      var binNum = [1]
      for(var i = 1; i < 16; i++){
            binNum[i] = binNum[i-1] * 2
      }
      binary = binary.split("").reverse()
      for(var i = 0; i < binary.length; i++){
        if(binary[i] === '1'){answer+=binNum[i]}
      }
      return answer
    } 
    // console.log(binToDec('010110110')===parseInt('010110110',2))

module.exports = binToDec;
