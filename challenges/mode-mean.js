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
    /*
    1. calculate mean -> this will be all of the numbers in the array divided by the number of items in the array
    2. calculate mode -> this will be the number that is repeated the most in the array
    3. compare the two values to see if they are equal to each other
    */

    //first grab the sum of all numbers in the array
    let sum = 0;
    array.forEach(x => {
        sum += x;
    });
    //mean will be the sum divided by the number of elements
    //using Math.floor will ensure that we're dealing solely with whole numbers
    let mean = Math.floor(sum / array.length);
    //keep a running count of how many times an element is repeated
    let repeats = 0;
    //calculate how often an element is repeated, and return the most repeated one
    let mode = array.reduce(function(acc, x){
        let lengthOfX = array.filter(y => {return y === x}).length;
        //if an element is repeated the same number of times, we want to use the higher number
        if (lengthOfX >= repeats && x > acc) {
            repeats = array.filter(y => {return y === x}).length;
            acc = x;
        }
        return acc;
    });
    //finally, compare the calculated values to return `true` if the same, or `false` if not
    return mean === mode;
}

//test cases
//modemean([1, 2, 2, 3]) -> true;
//modemean([1,4,5,6,6]) -> false;

module.exports = modemean;
