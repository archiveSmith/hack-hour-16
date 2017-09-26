/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  if (arr.length === 1) return false;
  //   if (arr[0] === target) result = true;
  //   return false;
  // }

  const low = arr.splice(0, Math.floor(arr.length / 2));
  
  if (target === low[low.length - 1]) return true;
  if (target === arr[arr.length - 1]) return true;
  if (target < low[low.length - 1]) return findInOrderedSet(low, target);
  return findInOrderedSet(arr, target);

  // if (highresult === true || lowresult === true) return true;
}

var nums = [1, 4, 6, 7, 9, 17, 45]
console.log(findInOrderedSet(nums, 10));

module.exports = findInOrderedSet;
