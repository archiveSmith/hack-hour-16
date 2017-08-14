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

    if (array.length === 1 && array[0] === target) {
        return true

    }

    var sum = 0;

    for (var i = 0; i < array.length; i++) {
        sum = sum + array[i]
    }

    while (sum != target && array.length !== 0) {

        diffSumTarget = sum - target;

        var closestTodiffSumTarget = array[0];
        for (var j = 1; j < array.length; j++) {
            if (Math.abs(diffSumTarget - array[j]) < Math.abs(diffSumTarget - closestTodiffSumTarget))
                closestTodiffSumTarget = array[j]
        }

        index = array.indexOf(closestTodiffSumTarget);

        if (index > -1) {
            array.splice(index, 1);
        }

        sum = sum - closestTodiffSumTarget
        if (sum === target) {
            return true
        }

    }

    return false


}

module.exports = subsetSum;
