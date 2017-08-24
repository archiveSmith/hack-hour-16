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
  let index1 = 0;
  let index2 = 0;
  let merged = [];

  while (index1 < arr1.length && index2 < arr2.length) {
    // if arr1 > arr2
    if (arr1[index1] > arr2[index2]) {
      merged.push(arr2[index2]);
      index2++;
    }
    // if arr1 > arr2
    else if (arr2[index2] > arr1[index1]) {
      merged.push(arr1[index1]);
      index1++;
    }
  }

  // fill in rest of arr1 and arr2
  if (index1 === arr1.length) {
    // finish arr2
    for (let i = index2; index2 < arr2.length; i++) {
      merged.push(arr2[index2]);
    }
  }
  else if (index2 === arr2.length) {
    for (let i = index1; index1 < arr1.lengthl; i++) {
      merged.push(arr1[index1]);
    }
  }

  return merged;
}

var my_array = [3,4,6,10,11,15,21];
var another_array = [1,5,8,12,14,19];
console.log(mergeArrays(my_array, another_array));


module.exports = mergeArrays;
