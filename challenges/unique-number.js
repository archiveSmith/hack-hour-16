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
  // sort array
  array = array.sort()

  // loop through aray
  for (let i = 0; i < array.length; i += 2) {
    // check if i == i+1
    if (array[i] !== array[i + 1]) return array[i]
  }
  return false
}

// [1, 1, 2, 2, 3, 4]
const myArr = [1, 2, 1, 3, 3, 2, 8, 8, 5] // 2
console.log(uniqueNumber(myArr));

module.exports = uniqueNumber;
