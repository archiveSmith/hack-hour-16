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

function fizzbuzz(num) {
    //To recognize places in the array where the element is divisible by 3 and 5
    //Make sure argument input is number
    if (typeof num !== 'number') {
        return 'Input should be a number';
    }
    //create a array so we can push elements in it
    const arr = [];
    //Loop through the number, and if the number is not divisible by 3 and 5, then push it into array.
    for (let x = 1; x < (num + 1); x++) {
        arr.push(x);
    }
    const newarr = arr.map((element) => {
        if ((element % 3 === 0) && (element % 5 === 0)) {
            element = 'fizzbuzz'
        }
        if (element % 3 === 0) {
            element = 'fizz';
        }
        if (element % 5 === 0) {
            element = 'buzz';
        }
        return element;
    });
    return newarr;
    //If it is divisible by 3, put string 'fizz' instead of the number
    //If it is divisible by 5, put string 'buzz' instead of the number, 
    //If it is divible by both, then put 'fizzbuzz' instead of the number.
}
let output = fizzbuzz(16);
console.log(output);
module.exports = fizzbuzz;