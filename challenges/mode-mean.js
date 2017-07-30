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
   let sum = array.reduce(function(a, b) {
     return a + b;
   });
   const length = array.length
   let mean = sum / length;

   var countObj = {};
   for (let i = 0; i < array.length; i++) {
     var current = array[i];
     if (!countObj[current]) {
       countObj[current] = 1;
     } else {
       countObj[current] = countObj[current] + 1;
     }
   }
   let counter = 0;
   let arr1 = [];
   for (let key in countObj) {
     if (countObj[key] > counter) {
       counter = countObj[key];
     }
   }
   for (let key in countObj) {
     if (countObj[key] == counter) {
       arr1.push(key);
     }
   }
   var realArr = arr1.map(function(x) {
     return parseInt(x, 10);
   })
   var mode = realArr.reduce(function(a, b) {
     return Math.max(a, b);
   })
   if (mean === mode) {
     return true;
   } else {
     return false;
   }
 }

module.exports = modemean;
