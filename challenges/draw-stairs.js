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

function drawStairs(n) {
  if (n > 0 && n <= 100) {
    let steps = '';
    for (let i = 1; i <= n; i++) {
      steps += ' '.repeat(n - i) + '*'.repeat(i) + '\n';
    }
    console.log(steps);
  }
}

// console.log(drawStairs(6));

module.exports = drawStairs;
