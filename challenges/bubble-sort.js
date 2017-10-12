// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {

    notSorted = true;
    
        
        do {
          
          
          notSorted = false;
          
          for(var i = 0; i < array.length-1; i++){
            
            if (array[i] > array[i + 1]) {
                temp = array[i]
                array[i] = array[i + 1]
                array[i + 1] = temp
                notSorted = true
                continue;
            }
            
          }
    
        } while (notSorted)
    
    
    return array


}

module.exports = bubbleSort;
