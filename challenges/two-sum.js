/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  for (let i = 0; i < arr.length; i += 1) {
    const target = n - arr[i];
    const searchArea = arr.slice(i);
    if (searchArea.includes(target)) return true;
  }
  return false;
}

module.exports = twoSum;
