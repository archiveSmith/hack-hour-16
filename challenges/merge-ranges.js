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
// const mergeRanges = (array) => {
  let merged = [];
  // compare meeting time ranges, detect which ones overlap
  for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
      // must be within range of each other
      if (array[i][0] >= array[j][0] || array[i][1] <= array[j][1]) {
        let newArr = [];
        // min and max
        newArr[0] = Math.min(...array[i], ...array[j]);
        newArr[1] = Math.max(...array[i], ...array[j]);
        merged.push(newArr);
      }
    }
  }
  // for elements that overlap, set min to min of both and max time to max of both
    // loop through merged list and delete any that are within range of another
  for (let i = 0; i < merged.lengh; i++) {
    for (let j = 0; j < merged.length; j++) {
      if (merged[j][0] >= merged[i][0] && merged[j][1] <= merged[i][1]) merged.splice(j);
    }
  }

  // eliminate any other arrays that fall between these times
  return merged;
}

const times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]];
console.log(mergeRanges(times));  // [[0, 1], [3, 8], [9, 12]]

// [ [ 0, 5 ], [ 0, 8 ], [ 0, 12 ], [ 0, 10 ], [ 3, 8 ], [ 3, 12 ], [ 3, 10 ], [ 4, 12 ], [ 4, 10 ], [ 9, 12 ] ]
module.exports = mergeRanges;
