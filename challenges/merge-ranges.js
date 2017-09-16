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
  let mergedTimes = []
  let sortedTimes = array.sort((a, b) => {
    return a.reduce((acc, el) => acc+el) - b.reduce((acc, el) => acc + el)
  })
  console.log(sortedTimes)
  for (let i = 0; i < sortedTimes.length; i++) {
    const startTime = sortedTimes[i][0]
    let endTime = sortedTimes[i][1]
    for (let j = i+1; j < sortedTimes.length; j++) {
      if (endTime >= sortedTimes[j][0]) {
        endTime = sortedTimes[j][1]
        sortedTimes.splice(j, 1)
        console.log('this is endTime: ', endTime)
      }
      mergedTimes[i] = [startTime, endTime]
    }
  }

  return mergedTimes
}
var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
console.log(mergeRanges(times))// [[0, 1], [3, 8], [9, 12]]

module.exports = mergeRanges;
