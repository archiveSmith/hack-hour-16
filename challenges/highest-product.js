/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
<<<<<<< HEAD
  //  check if array is an array and if array has enough elements.
  return !Array.isArray(array) ? 'Argument not an array' : array.length < 3 ? 'Array is too short' :
  //  sort array, then slice all but the highest integers, then reduce to end poduct.
  array.sort((a, b) => a - b).slice(-3).reduce( (a, b) => a *= b );
=======

>>>>>>> 7099535ab5711ee8ffe28a59bda0b9d826338a58
}


module.exports = highestProduct;
