/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.

 For example:
 drawStairs(6) ->
     *
    **
   ***
  ****
 *****
******

*/

// function drawStairs(n) {
//   for (let i = 1; i <= n; i++) {
//     console.log(Array(n-i).fill(' ').concat(Array(i).fill('*')).join(''));
//   }
// }
// drawStairs(500)

function drawStairs2(n) {
  let stair = '';
  for (let i = 0; i <= n; i++) {
    console.log(stair)
    stair = '';
    for (let j = 1; j <= n; j++) {
      if (j >= n - i) {
        stair += ('*')
      } else {
        stair += (' ')
      }
    }
  }
}
drawStairs2(9)
// Hackhour Solution
function drawStairs(n) {
  for (let i = 1; i <= n; i++) {
    console.log(' '.repeat(n - i) + '*'.repeat(i))
  }
}

// The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
// string.repeat(numberOfRepeat)
// module.exports = drawStairs;
