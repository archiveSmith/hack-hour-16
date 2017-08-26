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
  const charCount = {};
  for (let i = 0; i < str.length; i += 1) {
    if (charCount[str[i]]) charCount[str[i]] += 1;
    else charCount[str[i]] = 1;
  }
  let oddCounts = 0;
  Object.keys(charCount).forEach((count) => {
    if (charCount[count] % 2 !== 0) oddCounts += 1;
  });
  return oddCounts <= 1;
}

module.exports = permPalin;
