// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  let end = array.length - 1;
  while (end > 1) {
    for (let i = 0; i < end; i += 1) {
      if (array[i] > array[i + 1]) [array[i], array[i + 1]] = [array[i + 1], array[i]];
    }
    end -= 1;
  }
  return array;
}

console.log(bubbleSort([5,9,6,4,3,7,9,1,6,7]));

module.exports = bubbleSort;
