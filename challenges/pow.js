/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power, val = 1) {
    if (power === 0) {
        return val;
    }
    val *= base;
    return pow(base, power-1, val);
}

module.exports = pow;
