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
    //mean
    let count = 0;
    let total = array.reduce(function (acc, ele) {
        acc += ele;
        count++;
        return acc;
    }, 0);
    let mean = Math.floor(total / count);
    console.log('mean: ', mean);


    //mode
    let mode = {};
    let maxCount = 0;
    let maxMode;

    array.forEach(function(val) {
        //count of occurances 
        if (!mode[val]) mode[val] = 1;
        else mode[val]++;

        //assign max occurance
        if (mode[val] > maxCount) {
            maxCount = mode[val];
            maxMode = [val];
        }
    });    
    // console.log('mode: ', mode);
    // console.log('maxCount: ', maxCount);
    // console.log('maxMode: ', maxMode);
    // console.log('mode', maxMode[0])
    return (mean === maxMode[0]);
}

var output = (modemean([1,4,5,6,6]));
console.log('------------------------------------');
console.log(output);
console.log('------------------------------------');

module.exports = modemean;
