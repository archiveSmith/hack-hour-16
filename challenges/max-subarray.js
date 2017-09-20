/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
    let storage = {}
    let sum = 0
    for (var k = 0; k < arr.length; k++) {

        for (var i = k; i < arr.length; i++) {
            let sub = arr.slice(k, i + 1)
            let subsum = 0
            for (var j = 0; j < sub.length; j++) {
                subsum = subsum + sub[j]
            }
            storage[subsum] = arr.slice(k, i + 1)
        }

    }

    let maxSum = Object.keys(storage)
    var max = maxSum.reduce(function (a, b) {
        return Math.max(a, b);
    });

    return storage[max]
}

module.exports = maxSubarray;
