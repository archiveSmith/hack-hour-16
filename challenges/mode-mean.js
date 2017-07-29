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
var mean = 0;
var mode = 0;
for(var i = 0; i < array.length; i++){
    mean += array[i]
}
mean = Math.floor(mean/array.length);
var midInd = array.length%2 === 1 ? Math.floor(array.length/2) : Math.ceil(array.length/2)
array.sort(function(a,b){return a-b});
mode = array[midInd];
return mode === mean;
}


module.exports = modemean;
