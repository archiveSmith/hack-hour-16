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
  var num = 0;
  
	for (var i = 0; i < array.length; i++) {
    num += array[i];
  }
  
  var mean = Math.floor(num / array.length);
  
  var mode = {};
  
  for (var i = 0; i < array.length; i++) {
     if (mode[array[i]]) {
       mode[array[i]]++;
     } else {
       mode[array[i]] = 1;
     }
  }
  
	mode = Object.values(mode).reduce(function(prev, cur) {
    return prev > cur ? prev : cur;
  });

  
  console.log(mode)
  return mean === mode;
}

module.exports = modemean;
