/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

// const repeatNumbers = (lists) => {

//   lists.reduce((acc, val) => acc + val) - getSeriesSum(lists.length - 1);

//   const getSeriesSum = length => length * (length + 1)/2;
// }

// const repeatNumbers = (lists) => {
//   let actualSum = 0;
//   let expectedSum = 0;

//   for(let i = 0; i < lists.length; i++){
//     actualSum += lists[i];
//   }

//   for(let i = 1; i < lists.length; i++){

//   return actualSum - expectedSum;
// }
const repeatNumbers = (lists) => {
    let map = [];
    lists.forEach(x => {
      if(map.includes(x)) return x;
      map.push(x);
    })
    return undefined;
}

module.exports = repeatNumbers;
