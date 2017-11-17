// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers
// divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
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

// Big O = O(n)
function fizzbuzz(num) {
  // check to see if number is less than 1
  if (num < 1) return ('number needs to be greater than or equal to 1');
  // create an array variable
  const result = [];
  // iterate starting at 1 and ending at NUM
  for (let i = 1; i <= num; i += 1) {
    // if the current value is divisable by 15 then push 'fizzbuzz' into array
    if (i % 15 === 0) result.push('fizzbuz');
    // else if the current value is divisable by 3 then push 'fizz' into array
    else if (i % 3 === 0) result.push('fizz');
    // else if the current value is divisable by 5 then push 'buzz' into the array
    else if (i % 5 === 0) result.push('buzz');
    // else push in value
    else result.push(i);
  }
  // return the array
  return result;
}

module.exports = fizzbuzz;
