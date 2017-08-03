/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    var array = [];
    var result = 1;
    for(var i = 0; i < power; i++) {
        array.push(base)
    }
    
    for(var j = 0; j < array.length; j++) {
      result = result * array[j]
    }
    return result;
}




module.exports = pow;
