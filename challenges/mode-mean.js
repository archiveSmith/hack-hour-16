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
const arr = [13, 13, 13, 13, 14, 14, 16, 18, 21];

function modemean(array) {
  let mean;
  let mode;
  const obj = {};

  array.reduce((acc, ele) => {
    acc + ele;
    mean = acc / array.length;
  }, 0);

  array.forEach((ele) => {
    if (obj[ele]) {
      obj[ele]++;
    } else {
      obj[ele] = 1;
    }
  });
  const arr = Object.keys(obj);
  mode = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (obj[arr[i]] > obj[mode]) {
      obj[mode] = obj[arr[i]];
    }
  }
  return Math.floor(mean) === mode;
}
// console.log(modemean([arr]));


module.exports = modemean;
