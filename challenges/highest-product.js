/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {

    let arr = [];

    array.forEach((x) => {
        arr.push(Math.abs(x))
    })

    arr.sort(function(a, b) {
        return a - b;
    });

    return arr[arr.length - 1] * arr[arr.length - 2] * arr[arr.length - 3];
}

module.exports = highestProduct;