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
   return arr1.concat(arr2).sort(function(a,b){
     return a-b;
   });
 //   let longArr;
 //   let shortArr;
 //   if (arr1.length > arr2.length) longArr = arr1, shortArr = arr2;
 //   if (arr1.length < arr2.length) longArr = arr2, shortArr = arr1;
 //   let holder = [];
 //   let result = [];
 //   for (let i = 0; i < longArr.length; i++) {
 //     if (!shortArr[i]) {
 //       result.concat(longArr.splice(i, longArr.length - 1))
 //       break;
 //     }
 //     if (longArr[i] < shortArr[i]) result.push(longArr[i]);
 //     else result.push[shortArr[i]];
 //   }
 //   return result;
 }

module.exports = mergeArrays;
