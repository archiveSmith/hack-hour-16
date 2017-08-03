/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    var array = [];
    for(var i = 0; i < power; i++) {
        array.push(base)
    }
    return array;
}

console.log(pow(2,1))


module.exports = pow;
