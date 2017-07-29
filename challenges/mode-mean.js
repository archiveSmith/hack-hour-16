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
  if (array.length === 1) return array[0];
  const count = array.reduce((count, num) => {
    if (count[num]) count[num]++;
    else count[num] = 1
    return count;
  }, {});

  const mode = Object.keys(count).reduce((mostRepeated, current) => {
    if (count[current] > count[mostRepeated]) {
      mostRepeated = current;
    }
    return mostRepeated;
  }, array[0]);

  const mean = Math.floor(array.reduce((sum, num) => sum + num) / array.length);
  return mean.toString() === mode;
}

module.exports = modemean;
