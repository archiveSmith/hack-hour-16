/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {

    sumAry = [];
    for(var i = 0; i < arr.length; i++){
      for(var j = 0; j < arr.length+1; j++){
         if(i >= j ){
           continue;
         } else {
          subAry = arr.slice(i, j)
          console.log(subAry)
          //compute sum
          var sum = 0
          for( var k = 0; k < subAry.length; k++){
            sum = sum + subAry[k];
          }
         }
          console.log(sum)
      sumAry.push(sum)
         }
      }
      console.log(sumAry)
      MAX = Math.max(...sumAry)
    return MAX
}

module.exports = maxSubarray;
