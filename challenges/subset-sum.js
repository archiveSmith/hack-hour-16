/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 *
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
  if (array.length === 0 || isNaN(target)) return false;

  let combinations = [[]];
  //build all subsets of array
  for (let i = 0; i < array.length; i++) {
    let setLength = combinations.length;
    for (let j = 0; j < setLength; j++) {
      combinations.push(combinations[j].concat(array[i]))
    }
  }
  combinations.shift();

  //get the sums of each subSet and return if there is a sum that matches target
  return combinations.map(function (subSet) {
    return subSet.reduce(function (sum, num) {
      return sum + num
    })
  })
  .filter(function (sum) {
    return sum === target
  }).length > 0

}

console.log(subsetSum([3, 7, 4, 2], 5) == true)
console.log(subsetSum([3, 34, 4, 12, 5, 12], 32) == true)
console.log(subsetSum([8, 2, 4, 12], 13) == false)
console.log(subsetSum([8, -2, 1, -3], 6) == true)
module.exports = subsetSum;
