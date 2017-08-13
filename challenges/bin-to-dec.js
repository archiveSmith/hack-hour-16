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
    let number = 0;
    binary = binary.split(""); //['1','1']
    let pow = binary.length - 1
    newNumbers = binary.map(function (element) {
        return Number(element)
    })
    for (var i = 0; i < binary.length; i++) {
        number = number + binary[i] * Math.pow(2, pow)
        pow--
    }
    return number
    //loop through the array
    //grab each number and mulitply by 2 ^ pow 
    // decrement pow
}

function decToBin(dec) {
    var binary = ""
    something = 2
    for (var i = something; i >= 0; i--) {
        if (dec >= Math.pow(2, something)) {
            
            binary = binary + "1"
            dec = dec - Math.pow(2, something)
            something--
        } else {
            binary = binary + "0"
        }
    }
    return binary
}

console.log(decToBin(5))

module.exports = binToDec;
