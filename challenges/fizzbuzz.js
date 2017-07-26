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
    //returns an array
    var newArray = [];
    // 1 to num
    for(var i = 1; i <= num; i++) {
        if(i % 5 ===0 && i % 3 ===0) {
            newArray.push('fizzbuzz')
        } else if ( i % 5 === 0) {
            newArray.push('buzz')
        } else if (i % 3 ===0) {
            newArray.push("fizz")
        } else {
            newArray.push(i)
        }
    }
    //fizz num % 3 === 0
    //buzz num % 5 ===0
    // fizz buzz num % 3 ===0 and num % 5 ===0
    return newArray;
}

module.exports = fizzbuzz;
