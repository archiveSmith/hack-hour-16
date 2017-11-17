// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

// x ← A[j]; A[j] ← A[j-1]; A[j-1] ← x
const insertionSort = (array, sorted = []) => {
  console.log(array,'thisi s array')
  console.log(sorted, 'this is sorted')
  if (!array.length) return sorted;
  if (!sorted.length) {
    sorted.push(array[0]);
    return insertionSort(array.slice(1), sorted);
  }
  if (array[0] < sorted[sorted.length-1]) {
    sorted.push(array[0]);
    while (sorted[sorted.length-1] < sorted[sorted.length-2]) {
			let temp = sorted[sorted.length-1];      
      sorted[sorted.length-2] = sorted[sorted.length-1];
      sorted[sorted.length-1] = temp;
      return insertionSort(array.slice(1),sorted)
    } 
  }
  return sorted
//   else {
//     if (sorted[sorted.length-1] < array[0]) sorted.push(array[0]);
//     else {
//       let temp = array[0];
//       array[0] = array[]
//     }
//   }
  
//   return array.slice(1)
//   for (let i = 1; i < array.length; i++) {
//     let temp = sorted[i-1]
//     if (array[i] < array[i-1]) {
//       sorted[i-1] = array[i]
//       sorted[i] = temp[i-1]
//     } else {
//       sorted.push(array[i])
//     }
//   }
//   return insertionSort(array.slice(1), sorted)
}

let arr = [6, 5, 3, 1, 8, 7, 2, 4];
console.log(insertionSort(arr))
// module.exports = insertionSort;

module.exports = insertionSort;