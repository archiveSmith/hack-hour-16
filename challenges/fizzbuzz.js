// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in 
// place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" 
// in place of numbers divisble by both 3 and 5
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

// initialize and return result array
// create list of numbers 1 - num in arr
// create string for f / b
// Add fb depending on % 
// insert fb or number

function fizzbuzz(num) {
  const result = [];
  for (let i = 1; i <= num; i += 1) {
    let fb = '';
    if (i % 3 === 0) fb += 'fizz';
    if (i % 5 === 0) fb += 'buzz';
    const resultElem = fb || i;
    result.push(resultElem);
  }
  return result;
}

module.exports = fizzbuzz;
