/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

// multiply a number by itself power number of times (base^power)
function pow(base, power) {

    // ###########
    // this works
    // ###########
    // let number = base;
    // for (let i = 1; i < power; i++) {
    //     number = number * base;
    // }
    // return number;

    // count down from power to 1
        // at one, return the number
        // then return number * number 
    
    // ###########
    // this works too
    // ###########
    // if (power === 1) return base;
    // else return base * pow(base, power-1);

    // **********************
    // ** input validation **
    // **********************
    if (typeof base === 'object' || typeof power === 'object') {
        console.log("[Error] paramaters invalid: " + base + " " + power)
        return 'undefined';
    }
    if (base === undefined || power === undefined) {
        console.log("[Error] paramaters invalid: " + base + " " + power)
        return 'undefined';
    }


    if (base === null || power === null) {
        console.log("[Error] paramaters invalid: " + base + " " + power)
        return 'undefined';
    }
    if (isNaN(base) || isNaN(power)) {
        console.log("[Error] paramaters invalid: " + base + " " + power)
        return 'undefined';
    }

    // explicitly coerce string numbers to their correct numerical values
    base = Number(base);
    power = Number(power);

    // handle 0
    if (base === 0 && power === 0) return 1;
    else if (base === 0) return 0;

    // the logic:
    return power === 1 ? base : base * pow(base, power-1);


}

// ****************
// ** Test Cases **
// ****************

// good
console.log('0, 0: ' + (pow(0,0) === 1));
console.log('0, 9: ' + (pow(0,9) === 0));
// console.log('0, 0 (1): ' + pow(0,0));
// console.log('0, 9: ' + pow(0,9));


console.log('1, 8: ' + (pow(1,8) === 1));
console.log('1, 1: ' + (pow(1,1) === 1));

console.log('2, 8: ' + (pow(2,8) === 256));
console.log('5, 3: ' + (pow(5,3) === 125));
console.log('4, 1: ' + (pow(4,10) === 1048576));
console.log('10, 7: ' + (pow(10,7) === 10000000));

// bad
console.log('2 : ' + pow(2));
console.log('() : ' + pow());
console.log('[] : ' + pow(4, []));
console.log('{} : ' + pow(5, {}));
console.log('null : ' + pow(null, null));
console.log('undefined : ' + pow(undefined, undefined));


module.exports = pow;
