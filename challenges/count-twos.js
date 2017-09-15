// Write a function "countTwos" that takes a number as an argument, n. The
// function will return the number of 2s encountered when counting from 1 to n (inclusive).
// 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
  if (num < 0) num = Math.abs(num)
  let count = 0;
  for (let i = 1; i <= num; i++) {
    for (let j = 0; j < i.toString().length; j++) {
      if (parseInt(i.toString()[j]) === 2) {
        count++;
      }
    }
  }
  return count
}
console.log(countTwos(1) == 0)
console.log(countTwos(3) == 1)
console.log(countTwos(13) == 2)
console.log(countTwos(1000) == 300)
console.log(countTwos(11420) == 4483)
console.log(`There are ${countTwos(-13)} twos when counting from 1 to -13`)
module.exports = countTwos;

function recursiveCountTwos(num, count = 0) {
  if (num === 0) return count
  num.toString()
    .split('')
    .forEach(dig => {
    if (parseInt(dig) === 2) count++
  })
  return recursiveCountTwos(--num, count)
}
console.log(recursiveCountTwos(1) == 0)
console.log(recursiveCountTwos(3) == 1)
console.log(recursiveCountTwos(13) == 2)
console.log(recursiveCountTwos(1000) == 300)
console.log(recursiveCountTwos(11420) == 4483)
console.log(`There are also ${recursiveCountTwos(1000)} twos in this function`)
console.log(`There are ${recursiveCountTwos(11420)} twos when counting from 1 to 11420`)
