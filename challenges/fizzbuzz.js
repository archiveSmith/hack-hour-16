// Write a function that returns an array containing the numbers 1 to NUM. 
// Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers
// divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5

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

// SUCESS CASE - return an array 1-NUM with "fizz" for num/3 and "buzz" for num/5 and "fizzbuzz" for num / 3 & 5
// OBSERVE: num is given parameter; for loop to push nums 1 - num into our final output array
// STORE: need an empty array to store new array with nums and fizz/buzz values
// RECOGNIZE: set conditons to check for divisibility criteria if (num / 3) -> fizz; if num/5 -> buzz; if 3 && 5 - > fizbuzz 
// return modified array

function fizzbuzz(num) {
      var output = [];
  for(var i = 1; i <= num; i++){
    if(i%3 === 0 && i%5 === 0){
      output.push("fizzbuzz")
    } else if(i%3 === 0) {
          output.push("fizz");
        } else if (i%5 === 0){
          output.push("buzz");
        } else {
          output.push(i);
        }
    } //end of loop
   return output;
}

module.exports = fizzbuzz;
