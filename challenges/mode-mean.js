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
   let total = array.reduce(function(sum, value) {
     return sum + value;
   });
   let mean = total/array.length
   let mode = {};
   array.forEach(function(element) {
     if (mode[element] === undefined) mode[element] = 1;
     else return mode[element] += 1;
   });
   let countHolder = 0;
   let keyHolder;
   for (let keys in mode) {
     if (mode[keys] > countHolder) {
       countHolder = mode[keys];
       keyHolder = keys;
     }
   }
   if (mean === mode) return true;
   else return false;
 }

module.exports = modemean;
