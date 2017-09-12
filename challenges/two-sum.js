/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > n) {
            arr.splice(i, 1)
        }
    }

    for(var j = 0; j < arr.length; j++) {
        let need= n - arr[j]
        if(arr.indexOf(need) !== -1) {
            return true 
        } else {
            continue
        }
    }
}

module.exports = twoSum;
