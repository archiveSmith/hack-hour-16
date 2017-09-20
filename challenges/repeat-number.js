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
  const store = {};
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] in store) return array[i];
    store[array[i]] = true;
  }
}

// Or find sum of non repeating sequence as n(n+1)/2. Then subtract this from actual sum of sequence to give single number that repeats.


module.exports = repeatNumbers;
