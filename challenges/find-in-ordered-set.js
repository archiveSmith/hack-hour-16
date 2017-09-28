/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */

 // Checkout Bisection Search! 
 // DONT USE SPLICE BECAUSE IT IS O(N) every time it's called ... 

function findInOrderedSet(arr, target) {
  if (arr.length === 1) return false;
  //   if (arr[0] === target) result = true;
  //   return false;
  // }

  const low = arr.splice(0, Math.floor(arr.length / 2));
  
  if (target === low[low.length - 1]) return true;
  if (target === arr[0]) return true;
  if (target < low[low.length - 1]) return findInOrderedSet(low, target);
  return findInOrderedSet(arr, target);

  // if (highresult === true || lowresult === true) return true;
}

// HACK HOUR SOLUTION ... 
function findInOrderedSetSolution(arr, target) {
  
  function binSearch(start, end) {
    if (start === end) return false;
    const mid = Math.floor((start + end)/2);
    // checking target and mid value
    if (target === arr[mid]) return true;

    if (target > arr[mid]) return binSearch(mid+1, end);
    else return binSearch(0, mid-1);
  }
  return binSearch(0, arr.length-1)
}


var nums = [1, 4, 6, 7, 9, 17, 45]
console.log(findInOrderedSet(nums, 45));

module.exports = findInOrderedSet;
