/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * do not use division, becuase zero might be in the array and you cannot divide by zero
 */

function getAllProducts(array) {
  // Create three arrays - front, back, result
  const front = [];
  const back = [];
  const result = [];
  // define productSoFar, initialize to 1
  let productSoFar = 1;
  // iterate through array forwards - set to 1 to exclude the current value
  for (let i = 0; i < array.length; i += 1) {
    front[i] = productSoFar;
    productSoFar += array[i];
  }
  // iterate through array backwards - same thing
  productSoFar = 1;
  for (let j = array.length - 1; j >= 0; j -= 1) {
    back[j] = productSoFar;
    productSoFar *= array[j];
  }
  // multiply both arrays
  for (let k = 0; k < array.length; k += 1) {
    result[k] = front[k] * back[k];
  }
  return result;
  // original: [1, 7, 3, 4]
  // forward: [1, 1, 7, 3, 4]
  // backward: [84, 12, 4, 1]
  // result: [84, 12, 28, 21]
}

module.exports = getAllProducts;
