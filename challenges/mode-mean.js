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
    const mean = array.reduce((acu, cur) => {
        return (acu + cur);
    }) / 2;
    var modeMap = {};
    for (var x = 0; x < array.length; x++) {
        modeMap.mode = array[x];
        modeMap.count = 0;
        for (var i = x; i < array.length; i++) {
            if (modeMap.mode === array[i]) {
                modeMap.count++;
            }
        }
    }
    return count;
}
var output = modemean([1, 2, 3, 4, 5, 6, 4, 3, 7, 3, 5]);
console.log(output);
module.exports = modemean;
