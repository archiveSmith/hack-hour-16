/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let divisorA = []
  let divisorB = []
  if(a>b){
    for(let i = 0; i <= b; i++){
      if(a%i===0){divisorA.push(i)}
      if(b%i===0 && divisorA.indexOf(i) !== -1){divisorB.push(i)}
    }
    return divisorB[divisorB.length-1]
  } else{
    for(let i = 0; i <= a; i++){
      if(b%i===0){divisorB.push(i)}
      if(a%i===0 && divisorB.indexOf(i) !== -1){divisorA.push(i)}
    }
    return divisorA[divisorA.length-1]
  }
}
conso

module.exports = gcd;