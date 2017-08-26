/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 * 
 * BONUS: 
 * Complete in O(n) time and O(n) space 
 *
 */

function mergeArrays(arr1, arr2) {
    let longerArr = arr1.length > arr2.length ? arr1 : arr2
    let shorterArr = longerArr === arr1 ? arr2 : arr1
    console.log(longerArr)
    console.log(shorterArr)
    let answer = []
      for(let i = 0; i < longerArr.length; i++){
        if(longerArr[i] < shorterArr[i]){
          answer.push(longerArr[i])
          if(shorterArr[i]){answer.push(shorterArr[i])}
        } else {
          if(shorterArr[i]){answer.push(shorterArr[i])}
          answer.push(longerArr[i])
        }
      }
      return answer
  
  }

module.exports = mergeArrays;
