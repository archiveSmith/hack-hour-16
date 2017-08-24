/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 * 
 * BONUS: 
 * Complete in O(n) time and O(n) space 
 *
 */

function mergeArrays(arr1, arr2) {
    // one loop on every other iteration splice in arr2.shift
  if (!Array.isArray(arr1) || arr1.length === 0){
   return !Array.isArray(arr2) ? 'invalid arguments' : arr2.length !== 0 ? arr2 : 'invalid arguments';
  }
  for (let i = 1; arr2.length > 0; i++) {
    if (i % 2 !== 0) {
      const merger = arr2.shift();
      arr1.splice(i, 0, merger)
    }
  }
  return arr1;
}

module.exports = mergeArrays;
