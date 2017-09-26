// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {

  for (let i = 0; i < array.length; i++) {
    let temp = array[i]
    var j = i - 1
    while (j >= 0 && temp < array[j]) {
      array[j+1] = array[j]
      j--
    }
    array[j + 1] = temp;
  }
  return array
}
console.log(insertionSort([6,5,4,3,2,1]))
module.exports = insertionSort;
