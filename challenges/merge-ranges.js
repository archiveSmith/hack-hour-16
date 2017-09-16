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
  let sorted = array.slice().sort((a, b) => a[0] > b[0])
  console.log(sorted)
  for(let i = 0; i < sorted.length-1; i++){
    const current = sorted[i]
    const next = sorted[i+1]
    if(current[1] >= next[0]) {
      current[1] = Math.max(current[1], next[1]);
      sorted.splice(i+1, 1);
  	}
  }
	return sorted
}

module.exports = mergeRanges;
