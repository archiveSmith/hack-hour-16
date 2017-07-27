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
    var arr = ["*"]
    var space = [" "]
    var count = 0
for(var i = 0; i < n-1; i++){
  space.push(" ")
 
}
for(var i = n; i > 0; i--){
  console.log(space.concat(arr))
  arr.push("*")
  space.pop()
}

    
}
drawStairs(4)
module.exports = drawStairs;
