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
  let mean = Math.floor(array.reduce(function (sum, num) {
  return sum + num
  })/array.length)

  let mode;

  let data = array.reduce(function (list, num) {
  list[num] = (list[num] || 0)+1;
  return list;
  } ,{})

  let highestFrequency = 0;
  for (var number in data) {
    if (data[number] > highestFrequency && data[number] > 1) {
      highestFrequency = data[number]
    }
  }

  let modes = [];

  for (var i  in data) {
    if (data[i] === highestFrequency) {
      modes.push(parseInt(i))
    }
  }

  if (modes.length > 1) {
    mode = Math.max(...modes)
  } else {
    mode = parseInt(modes);
  }

  return mode === mean

}
console.log(modemean([1,2,3,2]))
module.exports = modemean;
