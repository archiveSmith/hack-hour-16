// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
    for(let i = 1; i < array.length; i += 1){
        let j =i;
        while(array[j] < array[j-1] && j > 0){
            [array[j-1], array[j]] = [array[j], array[j-1]];
            j -= 1
        }
    }
    return array;

}

module.exports = insertionSort;