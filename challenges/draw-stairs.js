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
    //loop through the til n-1, add " "
    //add " " + "*" to the string[n] + '/n'
    //return string

    let spaces = '';
    let splats = '';
    for(let i = 1; i <=n; i++) {
        spaces = " ".repeat(n-i);
        splats = "*".repeat(i);
        console.log(spaces + splats);
    }
}

function drawStairs2(n) {
    for(let i = 1; i <=n; i+=1) {
        console.log(" ".repeat(n-i) + "*".repeat(i))
    }
}

module.exports = drawStairs;
