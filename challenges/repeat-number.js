/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
	let singles = []
  for(let i = 0; i < array.length; i++) {
    if (singles.indexOf(array[i]) === -1) {
      singles.push(array[i])
    } else {
      return array[i]
    }
  }
}

const repeatNumbersRefractored = (array) => {
  array.sort((a,b) => a-b)
  let expectedSum = 0;
  let actualSum = 0;
  for (let i = 1; i <= array.length; i++) {
    expectedSum += i
  }
  for (let i = 0; i < array.length; i++) {
    actualSum += array[i]
  }
  return actualSum - expectedSum === 0 ? 'no repeats' : expectedSum - actualSum
}
let arr = [1,2,3,3,4,5]

module.exports = repeatNumbers;
