/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
    let final = 0;
    let middleG;
    let i = 1;
    
    for(i; i < (arr.length/2) + 1; i++){
      let mid = arr.slice(Math.floor((arr.length/2) - i), Math.floor((arr.length/2) + i));
      let compare = mid.reduce((a, b) => a + b, 0);
      if(compare > final){
        final = compare;
        middleG = mid;
      }
      compare = 0;
    }
    
    return final
}

module.exports = maxSubarray;
