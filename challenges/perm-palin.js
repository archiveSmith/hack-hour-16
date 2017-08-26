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
  if(!str.length){return 'error'}
  if(typeof(str)!=='string'){return 'error'}
  if(str.length === 1){return true}
  if(str.length === 2){return Palindrome(str)}
  let singles = []
	function Palindrome(str){
    let arr = str.match(/[a-z]+/gi).join('')
    let reverse = str.match(/[a-z]/gi).reverse().join('')
    return arr === reverse
  }
  for(let i = 0; i < str.length; i++){
    let arr = []
    arr.push(str[0])
    for(let j = 1; j < str.length; j++){
      if(str[j] == arr[0]){arr.push(str[j])}
    }
    if(arr.length % 2 === 1){
      singles.push(arr[0])
      arr = []
    }
  }
  return singles.length <= 1
}

module.exports = permPalin;