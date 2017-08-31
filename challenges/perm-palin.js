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
  let cache = {};
  for (let i = 0; i < str.length; i++) {
    if (cache[str[i]]) {
      cache[str[i]] += 1;
    } else {
      cache[str[i]] = 1;
    }
  }
  for (key in cache) {
    if (cache[key] % 2 === 1){
      return false;
    }
  }
  return true;
}

console.log(permPalin('abab'));
console.log(permPalin('cbaba'));
console.log(permPalin('cbac'));
console.log(permPalin('a'));

module.exports = permPalin;