'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  let sum = 0;
  const threesSum = 3 * ((Math.floor(999 / 3) * (Math.floor(999 / 3) + 1) / 2));
  const fivesSum = 5 * ((Math.floor(999 / 5) * (Math.floor(999 / 5) + 1) / 2));
  const fifteensSum = 15 * ((Math.floor(999 / 15) * (Math.floor(999 / 15) + 1) / 2));
  sum = threesSum + fivesSum - fifteensSum;

  return sum;
  // 233168
}


// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  let sum = 0;

  return sum;
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
