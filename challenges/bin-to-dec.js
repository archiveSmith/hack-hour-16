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

//return parseInt(binary, 2)
//blah blah blah
    binaryAry = binary.split('')

    console.log(binaryAry.length)
    sum = 0;

    j = binaryAry.length - 1

    for (var i = 0; i < binaryAry.length; i++) {

        console.log('binary', binaryAry[i])
        console.log('power', Math.pow(2, j))
        sum = sum + binaryAry[i] * Math.pow(2, j)
        j--
    }


    return sum


}

module.exports = binToDec;
