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
  if (string.length === 1) return [string];

  const allAnagrams = [];

  for (let i = 0; i < string.length; i += 1) {
    // Take the current letter in the string to place at first index of this set of anagrams
    const currLetter = string.charAt(i);

    // Slice the current letter out of the string
    const slicedSring = string.slice(0, i) + string.slice(i + 1);

    // Get the anagrams for the sliced string
    const restOfAnagrams = anagrams(slicedSring);

    // Append the current letter to each anagram
    const appended = restOfAnagrams.map(anagram => currLetter + anagram);

    // Push all the anagrams into outputs
    allAnagrams.push(...appended);

    const uniqueAnagrams = [];
  }

  allAnagrams.forEach((anagram) => {
    if (uniqueAnagrams.includes(anagram)) {
      return;
    }
    uniqueAnagrams.push(anagram);
  });
  return uniqueAnagrams;
}

module.exports = anagrams;
