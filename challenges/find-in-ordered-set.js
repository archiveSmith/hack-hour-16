/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  if (!Array.isArray(arr)) return false
  let min = 0
  let max = arr.length - 1
  let mid;

  while (min <= max) {
    console.log(min, max)
    mid = Math.floor((min + max)/2)
    if (arr[mid] > target) max = mid - 1;
    else if (arr[mid] < target) min = mid + 1;
    else return true
  }
  return false
}
let nums = [1, 4, 6, 7, 9, 17, 45]
console.log(findInOrderedSet(nums, 4))

module.exports = findInOrderedSet;
