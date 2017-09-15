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
    let store = {}
    for (var i = 0; i < array.length; i++) {

        if (store[array[i]] === 0) {

            store[array[i]] = store[array[i]] + 1
        } else {
            store[array[i]] = 0
        }
    }

    for (key in store) {
        if (store[key] === 1) return Number(key)
    }

}

module.exports = repeatNumbers;
