/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  if(!Array.isArray(arr) || typeof(n) !== 'number'){return 'error: not an array or not a number'}
  let numInArr;
	for(let i = 0; i < arr.length; i++){
    numInArr = n - arr[i]
    console.log(numInArr, 'this is numInArr')
    if(arr.indexOf(numInArr) !== -1) return true
  }
  return false
}
let array = [1,2,3,5]
console.log(twoSum(array,10))

module.exports = twoSum;
