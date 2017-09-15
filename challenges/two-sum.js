/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === n) return true;
    }
  }
  return false;
}

module.exports = twoSum;


// function twoSum(arr, n) {
//   let i = 0;
//   let j = i + 1;
//   while (i < arr.length - 1) {
//     if (arr[i] + arr[j] === n) return true;
//     if (j === arr.length - 1) i++;
//     if (j < arr.length - 1) j++;
//     else j = i + 1;
//   }
//   return false;
// }
