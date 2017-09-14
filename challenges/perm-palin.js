/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
  let arr = str.split('');
  let palindrome = str.split('').reverse().join('')
  // let permutations = [[]];
  //
  // for (let i = 0; i < arr.length; i++) {
  //   let setLength = permutations.length
  //   for (let j = 0; j < setLength; j++) {
  //     permutations.push(permutations[j].concat(arr[i]))
  //   }
  // }
  // permutations.shift();
  // console.log('PERMUTATIONS: ', permutations)
  // console.log('PALINDROME ', palindrome)
  // return permutations.filter(wordArr => {
  //   return wordArr.join('') === palindrome
  // })
  console.log('PALINDROME: ', palindrome)
  for (let i = 0; i < palindrome.length; i++) {
    let index = arr.indexOf(palindrome[i])
    if (index > -1) {
      arr.splice(index, 1)
    } else {
      return false
    }
  }
  if (arr.length === 0) {
    return true
  }

}
console.log(permPalin('abab'))
console.log(permPalin('cbaba'))
console.log(permPalin('cbac'))
console.log(permPalin('a'))
module.exports = permPalin;
