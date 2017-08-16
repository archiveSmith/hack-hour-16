/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  let highestNum;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (!highestNum) highestNum = array[i] * array[j];
      if (array[i] * array[j] > highestNum) highestNum = array[i] * array[j];
    }
  }
  return highestNum;
}


module.exports = highestProduct;
