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

function drawStairs(num) {
  // check to see if 1 <= num <= 100
  if (num >= 1 && num <= 100) {
    // iterate starting from 1 and stop iteration when we reach num
    for (let i = 1; i <= num; i += 1) {
      // print blank spaces = (num - current iterator) and *s = current iterator
      console.log((' ').repeat(num - i) + ('*').repeat(i));
    }
  }
}

module.exports = drawStairs;
