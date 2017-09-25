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
    let combinations = [];
    let newString = string;
  
    while(!combinations.includes(newString)){
      combinations.push(newString);
      let splitString = newString.split('').slice(0, newString.length);
      let lastCombo = splitString.pop()
      splitString.unshift(lastCombo)
      newString = splitString.join('')
      splitString[splitString.length - 2] = splitString.splice(splitString.length - 1, 1, splitString[splitString.length - 2])[0];
      if(!combinations.includes(splitString.join(''))) combinations.push(splitString.join(''))
    }
    return combinations;
  }

module.exports = anagrams;
