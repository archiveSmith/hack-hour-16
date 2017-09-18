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
    if (a[0] === b[0]) return a[1] - b[1]
    return a[0] - b[0]
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

// function mergeRanges2(array) {
//   return array.sort((a, b) => {
//     return a.reduce((acc, el) => acc + el) - b.reduce((acc, el) => acc + el)
//   })
//     .reduce((mergedTimes, time) => {
//       let startTime = time[0]
//       let endTime;
//       array.forEach((arr, index) => {
//         if (time[1] > arr[0]) {
//           console.log('SWITCH')
//           endTime = arr[1]
//           array.splice(index, 1)
//         }
//       })
//       console.log([startTime, endTime])
//     }, [])
//
//
// }
// console.log('------------------------')
// console.log(mergeRanges2([[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]))
