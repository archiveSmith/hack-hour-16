/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
    let resultsofa = [];
    let resultsofb = [];
    let common = [];

    for(var i = 0; i< a; i++) {
        if(a % i === 0) {
            resultsofa.push(i)
        }
    }
    
    for(var j = 0; j< b; j++) {
      if(b % j === 0) {
        resultsofb.push(j)
      }
    }
    
    
    for(var k = 0; k < resultsofa.length; k ++ ) {
      if(resultsofb.indexOf(resultsofa[k]) !== -1) {
        common.push(resultsofa[k])
      }
    }
    
    return Math.max(...common)

}

module.exports = gcd;