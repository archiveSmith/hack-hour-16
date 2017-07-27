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
    const arr = [];
    for (let x = 0; x < n; x++) {
        arr.push('*');
    }
    let stairs = [];
    for (let x = 0; x < n; x++) {
        stairs = stairs.concat(arr.join(''));
        arr[x] = ' ';
    }
    return stairs.reverse();
}

module.exports = drawStairs;
