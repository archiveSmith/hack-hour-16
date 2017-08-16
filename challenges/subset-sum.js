/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
<<<<<<< HEAD
 *
=======
 * 
>>>>>>> 214a70737090c1c96eaccac86fd7f90582adbd23
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
<<<<<<< HEAD
  if (target <= 0) return target === 0;
   result;
   let start = array.length;
   while (target === 0 )
   for (let i = 0; i < array.length; i++) {
     let check = target - a[start];
     if (check === 0) return check === 0;
   }
   return target === 0;
=======

>>>>>>> 214a70737090c1c96eaccac86fd7f90582adbd23
}

module.exports = subsetSum;
