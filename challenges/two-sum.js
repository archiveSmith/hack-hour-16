/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  if (arr.length < 2) return false

  for (let i = 0; i < arr.length; i++) {
    let diff = n - arr[i]
    if (arr.indexOf(diff) > -1 && arr.indexOf(diff) !== i) {
      console.log(arr[i], diff)
      return true
    }
  }
  return false
}
console.log(twoSum([1,2,5], 10))
module.exports = twoSum;
