/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */

function uniqueNumber(array) {
  // let expectedSum = 0
  // let sum = 0
  // for (let i = 0; i < array.length; i++) {
  //   console.log(expectedSum, sum)
  //   expectedSum += array[i] * 2
  //   sum += array[i]
  // }
  //
  // console.log(expectedSum, sum)
  return array.filter(num => {
    return array.indexOf(num) == array.lastIndexOf(num)
  })
}
// console.log(uniqueNumber([6,4,6,3,3])) //4
// console.log(uniqueNumber([1,2,1,3,3])) //2
console.log(uniqueNumber([7,2,7,5,2])) //5
module.exports = uniqueNumber;

// 1
// 3
// 2
