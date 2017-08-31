/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  // loop through once, loop through twice
  if (!arr) return false;
  if (!n) return false;
  if (!Array.isArray(arr)) return false;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === n) return true;
    }
  }

  return false;
}

// const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// console.log(twoSum(myArr, 20));
// console.log(twoSum(myArr, 4));
// console.log(twoSum());
// console.log(twoSum(myArr));
// console.log(twoSum(20));

const myArr = [1, 2, 5, 5]
console.log(twoSum(myArr, 10));

module.exports = twoSum;
