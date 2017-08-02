/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power, count, product) {
    if (!count) count = 0;
    if (power === 0) return 1;
    if (count === power) return product;
    if (!product) product = 1;
    product = base * product;
    count++;
    return pow(base, power, count, product);
}

module.exports = pow;
