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
  var char;
  for (let x = 1; x <= n; x++) {
    char = char + '*';
    for (let y = 1; y < x; y++) {
      console.log(char);
      char = '';
    }
  }
}
drawStairs(10);

module.exports = drawStairs;
