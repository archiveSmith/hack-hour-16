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
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return 'Inputs need to be arrays'

  let bigArr;
  let smallArr;
  if (arr1.length > arr2.length) {
    bigArr = arr1;
    smallArr = arr2;
  } else {
    bigArr = arr2;
    smallArr = arr1
  }

  for (let i = 0; i < bigArr.length; i++) {
    let max = Math.max(bigArr[i], smallArr[i] || null)
    smallArr.splice(i*2 || 1, 0, max)
  }
  return smallArr
}
console.log(mergeArrays([3,4,6,10,11,15,21], [1,5,8,12,14,19]))

// function mergeArrays(arr1, arr2) {
//
//
//   let mergedArray = [];
//   let bigArr;
//   let smallArr;
//   if (arr1.length > arr2.length) {
//     bigArr = arr1;
//     smallArr = arr2;
//   } else {
//     bigArr = arr2;
//     smallArr = arr1
//   }
//
//   for (let i = 0; i < bigArr.length; i++) {
//     let min = Math.min(bigArr[i] || null, smallArr[i] || null)
//     let max = Math.max(bigArr[i] || null, smallArr[i] || null)
//     if (min) mergedArray.push(min)
//     if (max) mergedArray.push(max)
//   }
//   return mergedArray
// }
// console.log(mergeArrays([3,4,6,10,11,15,21], [1,5,8,12,14,19]))

module.exports = mergeArrays;
