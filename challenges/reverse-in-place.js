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

    // ########################
    // ### INPUT VALIDATION ###
    // ########################
    if (!array) return [];
    if (Array.isArray(array) === false) return undefined;
 

    // iterate through half the array, then swap array[i] with array[length-1-i]        
    for (let i = 0; i < (array.length-1)/2; i++) {
        let end = array.length-1;
        let tmp = array[end-i];

        // put the first value in the last spot
        array[end-i] = array[i];
        // add the last value to the first spot
        array[i] = tmp;
    }
    return array;
}

// // TESTS
// let myArr = [0,1,2,3,4,5,6];
// let myArrEven = [0,1,2,3,4,5,6,7];
// let myChars = ['a', 'b', 'c', 'd'];

// console.log('1 chars', reverseInPlace(['a']));
// console.log('2 chars', reverseInPlace(['a', 'b']));
// console.log('4 chars', reverseInPlace(myChars));
// console.log("1 num", reverseInPlace([1]));
// console.log("2 nums", reverseInPlace([1, 2]));
// console.log("5 nums", reverseInPlace(myArr));
// console.log("6 nums", reverseInPlace(myArrEven));

// console.log("(): ", reverseInPlace());
// console.log("[]: ", reverseInPlace([]));
// console.log("{}: ", reverseInPlace({}));
// console.log("['1', '2', '3']: ", reverseInPlace(['1', '2', '3']));

module.exports = reverseInPlace;
