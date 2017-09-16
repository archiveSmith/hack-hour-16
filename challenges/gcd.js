/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let divisor = []
  if(a>b){
    for(let i = 0; i <= b; i++){
      if(a%i===0 && b%i===0){divisor.push(i)}
    }
    return divisor[divisor.length-1]
  } else{
    for(let i = 0; i <= a; i++){
      if(a%i===0 && b%i===0){divisor.push(i)}
    }
    return divisor[divisor.length-1]
  }
}

module.exports = gcd;