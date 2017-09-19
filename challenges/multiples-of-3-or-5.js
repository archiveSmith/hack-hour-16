'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  let sum = 0;
  let three = 0;
  let five = 0;

  while(three + 3 < 1000){
    three += 3;
    sum += three;
  }

  while(five + 5 < 1000){
    five += 5;
    if( five % 3 === 0){
      
    } else {
    sum += five;
    }
  }

  return sum;
}


// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  let sum = 0;
  let check_x = 0;
  let check_y = 0;

  while(check_x + x < 1000){
    check_x += x;
    sum += check_x;
  }

  while(check_y + y < 1000){
    check_y += y;
    if( check_y % x === 0){
      
    } else {
    sum += check_y;
    }
  }

  return sum;
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
