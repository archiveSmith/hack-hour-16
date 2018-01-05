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
  // declare variable total = 0
  let total = 0;
  // declare variable mode = []
  let mode = [];
  // decalre variable cache = {}
  const cache = {};
  // declare variable max = 0
  let max = 0;
  // loop through array
  array.forEach((val) => {
    // add current val to total
    total += val;
    // if current val exists in cache then += 1 to cache[val]
    if (cache[val]) cache[val] += 1;
    // if not then cache[val] = 1
    else cache[val] = 1;
    // if cache[val] === max then push current val to mode
    if (cache[val] === max) mode.push(val);
    // if cache[val > max then mode = [current val] and max = cache[val]
    if (cache[val] > max) {
      mode = [val];
      max = cache[val];
    }
  });
  // calculate mean 
  const mean = Math.floor(total / array.length);
  // caculate mode
  mode = Math.max(...mode);
  // if mean === mode return true
  if (mean === mode) return true;
  // else return false
  return false;
}

module.exports = modemean;
