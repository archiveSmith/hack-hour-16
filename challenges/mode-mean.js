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
<<<<<<< HEAD
  let mode;
  const obj = {};

  const mean = array.reduce((acc, ele) => acc + ele, 0) / array.length;

  array.forEach((ele) => {
    if (obj[ele]) {
      obj[ele]++;
    } else {
      obj[ele] = 1;
    }
  });
  const arr = Object.keys(obj);

  mode = obj[arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (obj[arr[i]] > mode) {
      mode = obj[arr[i]];
    }
  }

  return Math.floor(mean) === mode;
}
// console.log(modemean([1, 2, 2, 5]));

=======

}
>>>>>>> a0598932afffedeb7098cc55bd823627a768f994

module.exports = modemean;
