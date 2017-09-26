// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  for (let i = 1; i < array.length; i += 1) {
    let j = i;
    while (array[j - 1] > array[j] && j >= 0) {
      let temp = array[j - 1];
      array[j - 1] = array[j];
      array[j] = temp;
      j -= 1;
    }
  }
  return array;
}

// console.log(insertionSort([8,2,4,9,3,7,1,9,5]))

module.exports = insertionSort;