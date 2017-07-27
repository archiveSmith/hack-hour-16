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
  var newString = "";
  for(var i = 0; i < n; i++) {  
    for(var i = 0; i < n-1; i++) {
       newString += " "
     }
    newString += '\n'
  }
  return newString
}

module.exports = drawStairs;
