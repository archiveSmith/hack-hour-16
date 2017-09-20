/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(array) {
  let start = 0;
  let end = array[array.legth - 1];
  let max = 0;
  for (let i = 0; i < array.length; i += 1) {
    let current = getSubSum(i, array.length - 1, array)
    if (current > max) {
      max = current;
      start = i;
    }
  }
  for (let i = array.length - 1; i >= start; i -= 1) {
    let current = getSubSum(start, i, array);
    if (current > max) {
      max = current;
      end = i;
    }
  }
  return max;
}

function getSubSum(start, end, array) {
  let sum = 0;
  for (let i = start; i <= end; i += 1) {
    sum += array[i];
  }
  return sum;
}

module.exports = maxSubarray;
