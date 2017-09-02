/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {

    if (a > b) {
        max = a
    } else {
        max = b
    }

    divisors = [];
    for (var i = 0; i < max; i++) {
        if (a % i === 0 && b % i === 0) {
            divisors.push(i)
        }
    }
    console.log(divisors)
    return divisors[divisors.length - 1]
    
}

module.exports = gcd;