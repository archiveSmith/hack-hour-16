/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  for (let i = 0; i < arr.length; i += 1) {
    const target = n - arr[i];
    const searchArea = arr.slice(i + 1);
    if (searchArea.includes(target)) return true;
  }
  return false;
}

// Needs fixing
function twoSumRecurs(arr, n, toGo = 2) {
  if (n === 0 && toGo === 0) return true;
  if (!arr.length || toGo < 0) return false;
  return twoSumRecurs(arr.slice(1), n - arr[0], 1) || twoSumRecurs(arr.slice(1), n, 2);
}
module.exports = twoSum;
