/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
    //   console.log(array, "this new array")
    //   console.log(target, "thisnewtarget")
      if(array.length===0){return false}
      if(array.length === 1 && array[0] === target){return true}
      array = array.sort(function(a,b){return b-a})
      let subSet;
      for(let j = 0; j < array.length; j++){
        subSet = target - array[j]
        if(array.indexOf(subSet)!== -1){return true}
      }
      let targetStore = target
        for(let i = 0; i < array.length; i++){
        if(target < array[i]){array.shift()}
        else{target -= array.shift()}
    //     console.log(array)
    //     console.log(target)
        
          if(target > 0){return subsetSum(array,target)}
        
      }
      return false
    }

module.exports = subsetSum;
