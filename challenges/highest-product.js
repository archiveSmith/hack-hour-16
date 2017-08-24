/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3) return false;

  array.sort(function (a, b) { return b - a})
  console.log('SORTED ARR: ', array)

  const firstThree = array[0]*array[1]*array[2];
  const firstLastTwo = array[array.length-2] * array[array.length-1] * array[0]

  console.log('I am firstThree: ', firstThree)
  console.log('I am firstLastTwo: ', firstLastTwo)

  return firstThree > firstLastTwo ? firstThree: firstLastTwo;
}

module.exports = highestProduct;

console.log(highestProduct([-2,-8,-7,9,4]));
