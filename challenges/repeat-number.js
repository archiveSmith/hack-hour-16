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
let arr = [1,2,3,4,5,1,2]
console.log(repeatNumbers(arr))

module.exports = repeatNumbers;
