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

  mean = array.reduce((acc, ele) => {
    return acc + ele;
  }, 0) / array.length;

  array.forEach((ele) => {
    if (obj[ele]) {
      obj[ele]++;
    } else {
      obj[ele] = 1;
    }
  });
let arr = Object.keys(obj);

mode = obj[arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (obj[arr[i]] > mode) {
      mode = obj[arr[i]];
    }
  }
  
  return Math.floor(mean) === mode;
}
// console.log(modemean([1, 2, 2, 5]));


module.exports = modemean;
