/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
    index = Math.floor(arr.length/2)

    if(arr[index] === target){
        return true
    }

    if(nums[index] > num[index + 1]){
        recArr = slice(0,index)
    } else {
        recArr = slice(index, arr.length)
    }
findInOrderedSet(recArr, target)
}

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4); // -> true
findInOrderedSet(nums, 2); // -> false

module.exports = findInOrderedSet;
