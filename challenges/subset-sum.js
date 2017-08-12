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
    // recurssion base case if i > array.length || sum === target
    // check if total array == target
    // remove first element then second and so on adding each back in then remove next

    //alternatively add all numbers then begin subtracting each element. then each element with one additional element
    // base case is 0 for true or end of array for false

    // perhapse use slice to remove numbers in the middle
}

module.exports = subsetSum;
