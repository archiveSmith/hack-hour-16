/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
  -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */
function uniqueNumber(array) {
  array = array.sort();
  for (let i = 0; i < array.length; i += 2) {
    if (array[i] !== array[i + 1]) return array[i];
  }
}

// Add/Remove Duplicates O(n)
function uniqueNumber2(array) {
  var store = {};
  
  for (var i = 0; i < array.length; i++) {
    if (array[i] in store) {
      delete store[array[i]];
    } else {
      store[array[i]] = true;
    }
  }
  
  return Object.keys(store)[0];
}

// Bitwise XOR O(n)
function uniqueNumber3(array) {
  var result = 0;
  for (var i = 0; i < array.length; i++) {
    result = result ^ array[i];
  }
  return result;
}


console.log(uniqueNumber([1,2,1,3,3]));

module.exports = uniqueNumber;
