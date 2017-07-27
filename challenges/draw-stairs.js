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
    let arr = [];
    let revArr = arr.splice().reverse().join('');
    for (let i = 0; i <= n; i++) {
        arr.push(' ');
    }
    for (let i = 0; i <= n; i++) {
        arr[i] = '*';
        console.log(revArr);
    }
}


module.exports = drawStairs;
