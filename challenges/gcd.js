/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */


//Better

function gcd(a, b) {
    return (a * b) / lcm(a, b);
  }
  
  function lcm(a, b){
    let max = Math.max(a, b);
    let min = Math.min(a, b);
    let res;
    
    for (i = 1; i < max; i++){
      if ( (min * i ) % max === 0){ 
        res = min * i;
        break;}
    }
    return res
  }

//A terrible way of doing it
// function gcd(a, b) {
//     let greatest = Math.max(a, b);
//     let lowest = Math.min(a, b);
    
//     let i = 0;
//     let highestDivisor;
    
//     while(i < lowest){
//       if(greatest % i === 0 && lowest % i === 0){
//         highestDivisor = i;
//       }
//       i++;
//     }
    
//     return highestDivisor || 1
// }

module.exports = gcd;