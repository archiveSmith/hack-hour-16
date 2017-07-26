// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1,
//                     2,
//                     'fizz',
//                     4,
//                     'buzz',
//                     'fizz',
//                     7,
//                     8,
//                     'fizz',
//                     'buzz',
//                     11,
//                     'fizz',
//                     13,
//                     14,
//                     'fizzbuzz',
//                     16 ]

// end goal: return an array containing numbers, fizz, buzz, and fizzbuzz depending on certain conditions.

// keywords/phrases: array, numbers/fizz/buzz/fizzbuzz, certain conditions.

// array:  returned value, up to 'num' which is provided as a parameter.
// numbers/fizz/etc: must swap num to one of these values.
// certain conditions:  will replace number with above values depending on num's divisibility
// tools/techniques: for loop, if/else statement, array methods

function fizzbuzz(num) {
    //array to be returned
    let result = [];
    //start pushing values to array, up to and including num
    for (let i = 1; i <= num; i++) {
        //check conditions for num before pushing
        if (i % 3 === 0 && i % 5 === 0) {
            result.push('fizzbuzz');
        } else if (i % 5 === 0) {
            result.push('buzz');
        } else if (i % 3 === 0) {
            result.push('fizz');
        } else {
            result.push(i);
        }
    }
    //return newly created array with conditional values
    return result;
}

module.exports = fizzbuzz;
