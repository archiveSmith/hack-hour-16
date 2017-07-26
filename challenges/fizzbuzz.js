// Write a function that returns an array containing the numbers 1 to NUM. 
//Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, 
//and "fizzbuzz" in place of numbers divisble by both 3 and 5
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
//num is a number... you build an array of numbers leading up to that number from 1
//divide each number by 3 and 5 to idenfity if they're divisible by 3 and 5
//divisible by 3 = "fizz"
//divisible by 5 = "buzz"
//divisible by 3 and 5 = "fizzbuzz"

ary = [];
answerAry = [];

//create the array of numbers
for(var i = 1; i <= num; i++){
    ary.push(i)
}

//iterate through the array of numbers and divide each by 3 and 5
for(var j = 0; j < ary.length; j++){
  //check with an if statement if they're divisible by 3 or 5 or both. Both first.
  if(ary[j] % 3 === 0 && ary[j] % 5 === 0){
    answerAry.push('fizzbuzz')
  } else if(ary[j] % 3 === 0) {
    answerAry.push('fizz')
  } else if(ary[j] % 5 === 0){
    answerAry.push('buzz')
  } else {
    answerAry.push(ary[j])
  }
}
return answerAry

}

module.exports = fizzbuzz;
