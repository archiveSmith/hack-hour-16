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
//loop up to and including n
//console.log a string of stars accordning to i, the iterate of the for loop
//how to make it justify to the right?
//make 6 indexes of the array and add stars to the .length position?
//have 2 counters?

newarray = [];
newstring = '';;

for(k = 1; k < n+1; k++ ){

for(var j = 0; j <= n-k-1; j++){
  newarray.push(' ')
}

for(var i = 0; i+k > 0; i--){
    newarray.push('*')
    }
    

newstring = newstring + newarray.join('')
newstring = newstring + '\n'
newarray = [];


}
    console.log(newstring)
}



module.exports = drawStairs;
