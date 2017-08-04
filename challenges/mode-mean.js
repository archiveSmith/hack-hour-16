/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
<<<<<<< HEAD
    let args = Array.from(arguments);
    
    /// check for multiple parameters
    if (args.length > 1) {
        console.log("[ERROR]: modemean(array) requires an array of numbers [multiple params passed]");
        return false;
    }

    // catch the junk -> no param, not an array, empty array
    if (!array) { 
        console.log("[ERROR]: modemean(array) requires an array of numbers [no param]");
        return false;
    }    
    else if (Array.isArray(array) === false) {
        console.log("[ERROR]: modemean(array) requires an array of numbers [not an array]");
        return false;
    }
    else if (array.length <= 0) {
        console.log("[ERROR]: modemean(array) requires an array of numbers [empty array]");
        return false;
    }

    // vars to calc mean
    let mean;
    let sum = 0;

    // vars to track mode
    let mode = 0;
    let mostOccuring = 0;
    let numTimesNumShowsUp = {}  // keep track of how many times a number appears, key = number, value = number occurances


    // loop through the array
    // use for loop over forEach(), so that when we find a bad value we can immediately stop looping
    for (let i = 0; i < array.length; i++) {
        let num = array[i];

        // catch the junk -> array has a value that can't be coerced into a number
        if (isNaN(num)) {
            console.log('[ERROR]: not a valid array!!!!!');
            return false;
        }

        // calc mean: add all numbers in array, after loop, divide sum by size
        sum += Number(num);

        // the first time we see a number, 
        if (numTimesNumShowsUp[num] === undefined) { numTimesNumShowsUp[num] = 1; } 
        
        // if we've seen the number, track that we've seen it again
        else { numTimesNumShowsUp[num] += 1; }

        // if the number of times we've seen a number is the same, re-assign the mode only if the new num is larger than the current mode
        if (numTimesNumShowsUp[num] === mostOccuring) {
            if (num >= mode) { mode = num; }
        }

        // otherwise, make the mode the 'new' most occuring number
        else if (numTimesNumShowsUp[num] > mostOccuring) {
            mostOccuring = numTimesNumShowsUp[num]
            mode = num;
        }
    }

    // calculate the mean, then round it down
    mean = Math.floor(sum / array.length);

    //// log the mean and mode for debugging
    // console.log("mean: " + mean);
    // console.log('mode: ' + mode);

    // if mean === mode, return true, else return false
    if (mean === mode) { return true; }
    else { return false; }
}

// ****************
// ** TEST CASES **
// ****************

// 5 = 5; true
let arr = [1,2,3,4,5,6,7,5,5,5,5,5,10,11,12];
console.log("------------------");
console.log(modemean(arr));
console.log("------------------");

// 3 != 5; false
arr = [1,2,3,4,5,6];
console.log("------------------");
console.log(modemean(arr));
console.log("------------------");

// 3 != 6; false
arr = [6,5,4,3,2,1];
console.log("------------------");
console.log(modemean(arr));
console.log("------------------");

// ERROR
arr = [1, 2, 3, 4, 'hello'];
console.log("-------'hello'----------");
console.log(modemean(arr));
console.log("------------------");

// 2 != 4; false
arr = [1, 2, 3, 4, '4'];
console.log("-------'4'----------");
console.log(modemean(arr));
console.log("------------------");

console.log("-------'()'----------");
console.log(modemean());
console.log("------------------");

console.log("-------'(null)'----------");
console.log(modemean(null));
console.log("------------------");

console.log("-------'([]])'----------");
console.log(modemean([]));
console.log("------------------");

console.log("-------'({})'----------");
console.log(modemean({}));
console.log("------------------");

console.log("-------'([1,2,3,4,5], [1,2,3,4,5])'----------");
console.log(modemean([1,2,3,4,5], [1,2,3,4,5]));
console.log("------------------");

=======

}

>>>>>>> a0598932afffedeb7098cc55bd823627a768f994
module.exports = modemean;
