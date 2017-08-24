/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 * 
 * BONUS: 
 * Complete in O(n) time and O(n) space 
 *
 */

function mergeArrays(arr1, arr2) {
    //This one takes more steps
    // if(!Array.isArray(arr1) || !Array.isArray(arr2)) return [];

    //     let arr3 = arr1.concat(arr2);

    //     return arr3.sort((a,b) => {return a-b})


    //Below kinda works, it is off by certain values

    if (!Array.isArray(arr1) || !Array.isArray(arr2)) return [];

    const minVal = Math.min(arr1.length, arr2.length);

    let store = [];

    for (let i = 0; i < minVal; i++) {
        if (arr1[i] < arr2[i]) {
            store.push(arr1[i]);
            store.push(arr2[i]);
        } else {
            store.push(arr2[i]);
            store.push(arr1[i]);
        }
    }

    store.concat(arr1.splice(minVal, arr1.length - 1)) || store.concat(arr2.splice(minVal, arr2.length - 1));

    return store.sort((a, b) => { return a - b });
}

module.exports = mergeArrays;