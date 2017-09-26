// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array){
    
    for(var i = 0; i < array.length; i++){
      // console.log(array[i])
      if(array[i-1] === undefined) {
        continue;
      }
      
      if(array[i-1] < array[i]){
        continue;
      } else {
        j = i;
        temp = array[i]
        
        while(array[j] < array[j-1]){
          temp2 = array[j]
          array[j] = array[j-1]
          array[j-1] = temp2 
        j--
        }
        
        }
        // console.log(array)
    }
    // array[j] = array[i]
  return array
  }

module.exports = insertionSort;