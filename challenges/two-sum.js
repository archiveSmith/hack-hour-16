/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n, toGo = 2) {
  if (n === 0 && toGo === 0) return false;
  if (!arr.length) return false;
  return twoSum(arr[0], n - 1, toGo - 1) || twoSum(arr[1], n, toGo);
}

module.exports = twoSum;
