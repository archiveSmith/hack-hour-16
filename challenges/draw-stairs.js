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
  let result = '';
  let starQty = 1;
  let spaceQty = n - starQty;
  while (starQty <= n) {
    for (let i = 0; i < spaceQty; i += 1) {
      result += ' ';
    }
    for (let i = 0; i < starQty; i += 1) {
      result += '*';
    }
    if (starQty !== n) result += '\n';
    starQty += 1;
    spaceQty -= 1;
  }
  console.log(result);
}

drawStairs(10)


// module.exports = drawStairs;
