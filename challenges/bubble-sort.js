// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  if (!Array.isArray(array)) return undefined
  if (!array.length) return []

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i; j++) {
      let first = array[j];
      let second = array[j+1]
      if (first > second) {
        array[j] = second
        array[j+1] = first
      }
    }
  }
  return array
}
console.log(bubbleSort([2,4,8,5,1]))

module.exports = bubbleSort;

// function bubbleSort(arr) {
//   for (i = 1; i < arr.length; i++) {
//     for (j = 0; j < arr.length-i; j++) {
//       let max = 0;
//       let min = 0;
//       max = Math.max(arr[j], arr[j+1]);
//       min = Math.min(arr[j], arr[j+1]);
//       arr[j] = min;
//       arr[j+1] = max
//     }
//   }
// return arr
// }
