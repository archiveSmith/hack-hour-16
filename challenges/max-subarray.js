/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {

  // start at num > 0
  // sum += next num
  // if next num  is negative && greater than sum, start over past the negative

  let starts = [];
  let sum = [];

  // get start indexes
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) starts.push(i);
  }

  for (let j = 0; j < starts.length; j++) {
    const num = starts[j]
    let total = 0;

    for (let i = j; i < arr.length; i++) {
      // console.log(arr[i])
      sum.push(total)
      if (Math.abs(arr[i]) > total && arr[i] < 0) {

        // now need to test if going further makes a bigger number

        // console.log(`${total} < ${arr[i]}`)
        // console.log('break')
        sum.push(total);
        break;
      }
      else {
        // console.log(`${total} += ${arr[i]} === ${total + arr[i]}`)
        total += arr[i]
        if (i === arr.length - 1) sum.push(total)
      }
    }
  }
  // console.log(sum)
  return Math.max(...sum);
}

console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5])) // 18 from [3, 10, -4, 7, 2]
console.log(maxSubarray([15, 20, -5, 10]))
module.exports = maxSubarray;
