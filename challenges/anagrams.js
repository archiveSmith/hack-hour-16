/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example:
  * var result = anagrams('abc');
  * console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

function anagrams(string) {
  let arr = string.split('')
  let result = [];

  function permutations(array, m = []) {
    if (array.length === 0) result.push(m)
    else {
      for (let i = 0; i < array.length; i++) {
        let curr = array.slice();
        let next = curr.splice(i,1)
        permutations(curr.slice(), m.concat(next))
      }
    }
  }
  permutations(arr)
  result = result.map(arr => arr.join(''))
  return result.filter((perm, i) => result.indexOf(perm) === i)
}
console.log(anagrams('bcb'))
module.exports = anagrams;

// function permutations(array, m = []) {
//   if (array.length === 0)
//   else {
//     for (let i = 0; i < array.length; i++) {
//       let curr = array.slice();
//       let next = curr.splice(i,1)
//       permutations(curr.slice(), m.concat(next))
//     }
//   }
// }
