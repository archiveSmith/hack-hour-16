/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {
  array.sort((a, b) => a[0] - b[0]);
  const result = [array[0]];
  let current = result[result.length - 1];

  for (let i = 1; i < array.length; i += 1) {
    if (current[1] >= array[i][0]) {
      if (array[i][1] > current[1]) current[1] = array[i][1];
    } else result.push(array[i]);

    current = result[result.length - 1];
  }

  return result;
}


module.exports = mergeRanges;
