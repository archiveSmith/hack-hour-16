/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  while (arr.length !== 0) {
    const end = arr.pop();
    arr.forEach((x) => {
      if (x + end === n) {
        return true;
      }
    });
    return false;
  }
}

module.exports = twoSum;

