/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  let answer = []
	let max = Math.max.apply(null,arr);
  answer.push(max);
  let index = arr.indexOf(max);
  for (let i = index; i >= 0; i--) {
    if (arr[i-1] >= 0 && arr[i] > 0) {
      answer.unshift(arr[i-1])
    }
    if (arr[i-1] < 0 && (arr[i-2] + arr[i-1]) > 0) {
      answer.unshift(arr[i-1]);
      answer.unshift(arr[i-2]);
    }
  }
  for ( let i = index; i < arr.length; i++) {
    if (arr[i+1] >= 0 && arr[i] > 0) {
      answer.push(arr[i+1])
    }
    if (arr[i+1] < 0 && (arr[i+2] + arr[i+1]) > 0) {
      answer.push(arr[i+1]);
      answer.push(arr[i+2]);
    }
  }
  return answer.reduce(function(a,b){return a+b})
}

module.exports = maxSubarray;
