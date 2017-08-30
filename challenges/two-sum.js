/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
    
    for(let x = 0; x < arr.length; x++){
        for(let y = 0; y < arr.length; y++){
            if(arr[x] + arr[y] === n || arr[x] - arr[y] === n || arr[y] - arr[x] === n) return true;
        }
    }
    return false;
}

module.exports = twoSum;
