'use strict';
/**
 * Write a function to reverse an array in place
 *
 * "In place" means "without creating a new object in memory"
 *
 * In some languages, strings are mutable (like in Ruby). In other languages,
 * such as Python and Javascript, strings are immutable, meaning they cannot
 * be changed after they're created.
 *
 * Since strings are immutable in javascript, we will be reversing an array of characters instead.
 *
 * DO NOT USE THE BUILT IN REVERSE METHOD
 */

function reverseInPlace(array) {
  // loop through half of array
  for (let i = 0; i < array.length / 2; i += 1) {
    // store current element as a variable
    const curr = array[i];
    // set current element = array[array.length - (iterator + 1)];
    array[i] = array[array.length - (i + 1)];
    // set array[array.length - (iterator + 1)] = stored variable
    array[array.length - (i + 1)] = curr;
  }
  // return the array
  return array;
}

module.exports = reverseInPlace;
