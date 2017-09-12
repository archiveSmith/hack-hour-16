/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  const sortedArr = array.sort().reverse();
  let highestNum = sortedArr[0] * sortedArr[1] * sortedArr[2];
  const withNeg = sortedArr[0] * sortedArr[sortedArr.length - 1] * sortedArr[sortedArr.length - 2];
  if (sortedArr[sortedArr.length - 1] < 0 && sortedArr[sortedArr.length - 2] < 0) {
    if (highestNum < withNeg) {
      highestNum = sortedArr[0] * sortedArr[sortedArr.length - 1] * sortedArr[sortedArr.length - 2];
    }
  }
  return highestNum;
}


module.exports = highestProduct;
