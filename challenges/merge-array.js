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

 const mergeArrays = (array) => {
   // sort array
   array.sort((a,b) => {
     // if first item in both arrays is the same, sort them according to last item
     // otherwise, sort them according to first item
     if (a[0] === b[0]) return a[1] - b[1];
     return a[0] - b[0];
   });

   for (let i = 1; i < array.length i+= 1) {
     const curr = array[i];
     const prev = array[i - 1];
     const next = array[i + 1];

     // check for encapsulated times (looking one ahead)
     if (next && next[0] >= prev[0] && next[next.length -1] <= curr[curr.length - 1]) {
       array.splice(i + 1], 1);
     }

     // if first item in curr <= last item in prev, merge them
     if(curr[0] <= prev([rev.length -1]) {
       const merged = prev.concat(curr);
       // sort merged and splice out all values except for first and last
       merged.sort((a,b) => a - b).splice(1, merged.length -2);
       // splice out two overlapping arrays and insert merged array
       array.splice(i - 1, 2, merged);
       // decrement i (since we replaced two overlapping arrays with one merged array)
       i -= 1;
     }
   }
   return array;
 }


module.exports = mergeArrays;
