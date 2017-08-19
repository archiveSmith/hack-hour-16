/**
 * Given an array of integers, find the highest product 
 * you can get from three of the integers.
 */

function highestProduct(array) {

    newArray = array.sort((a, b) => a - b)

    let bigNumber = newArray[newArray.length - 1] * newArray[newArray.length - 2] * newArray[newArray.length - 3];

    let smallNumber = newArray[0] * newArray[1] * newArray[newArray.length - 1]

    return Math.max(bigNumber, smallNumber)
}


module.exports = highestProduct;
