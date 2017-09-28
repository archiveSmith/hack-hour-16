/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  // declare currMax variable to keep running count
  let currMax = -Infinity;
  // use reduce() to reduce array to single value
  return arr.reduce((finalMax, curr) => {
    // reassign currMax to Math.max() of curr and currMax + currMax
    currMax = Math.max(curr, currMax + curr);
    // return Math.max() of finalMax(our accumulator) and currMax
    return Math.max(finalMax, currMax);
  }, -Infinity);
}

module.exports = maxSubarray;
