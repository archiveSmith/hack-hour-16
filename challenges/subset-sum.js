/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 *
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
  array.sort((a,b) => {
    return b - a;
  });

}

module.exports = subsetSum;


//iterate through the array, after grabbing the number subtract it from the value given
//the final result must equal the value or find a way to make sure the remainder is 0


var array = [1, 5, 15, 2, 25];

console.log(array.sort((a, b) => {
  return b - a;
}));

// 3 + 7 = 5
// 3 + 4 = 5
// 3 + 2 = 5
// 7 + 4 = 5
// 7 + 2 = 5
// 4 + 2 = 5
