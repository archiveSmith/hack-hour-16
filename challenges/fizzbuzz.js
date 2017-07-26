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

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

function fizzbuzz(num) {
  return num.map(function(ele) {
    if (ele % 3 === 0 && ele % 5 === 0) return 'fizzbuzz';
    else if (ele % 3 === 0) return 'fizz';
    else if (ele % 5 === 0) return 'buzz';
    else return ele;
  });
}
console.log(fizzbuzz(num));

module.exports = fizzbuzz;
