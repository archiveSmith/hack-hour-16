/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3) return false;
  array.sort((a, b) => {
    return a-b;
  });
  let product = array[array.length-1] * array[array.length-2] * array[array.length-3];
  let otherProduct = array[0] * array[1] * array[array.length-1];
  if (product > otherProduct) {
    return product;
  } else {
    return otherProduct;
  }
}

console.log((highestProduct([10, -20, 0, -2, 5, 100, -50])));

module.exports = highestProduct;
