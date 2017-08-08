/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * h->e->l->l->o   ===   l->l-o->h->e
 * h->e->l->l->o   !==   o->l-l->h->e
 *
 * For example: stringRotation("hello", "hello") -> true
 *              stringRotation("hello", "llohe") -> true
 *              stringRotation("hello", "he") -> false
 *              stringRotation("hello", "ollhe") -> false (not a rotation, just an anagram)
 */

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {

<<<<<<< HEAD
  // if strings are different length, return false
  if (s1.length != s2.length) return false;
  // if strings are same, return true
  if (s1 === s2) return true;

  // look for rotations: match up an index and loop through both strings, comparing if they are equal
  let startChar = s1[0];
  let indexS2 = s2.indexOf(startChar);
  let flag = true;
  let rotatedString = ''; 

  // use a while loop to go through different indexOf calls
  while (flag) {
    flag = false;
    rotatedString = '';

    for (let i = 0; i < s1.length; i++) {
      if (indexS2 === s2.length) {
        indexS2 = 0;
      }

      rotatedString += s2[indexS2];

      if (s1[i] !== s2[indexS2]) {
        flag = false;
      }

      indexS2++;
    }

    // if a match wasnt found, set the index at the next occurance of the character
    if (flag) {
      indexS2 = s2.indexOf(startChar, indexS2);
    }
    // if the index doesnt exist, the strings do not match
    if (indexS2 === -1) {
      flag = false;
    }
  }

  // at end of while loop, call isSubstring
  return isSubstring(s1, rotatedString);

}

// console.log("true:", stringRotation('hello', 'hello'));
// console.log("true: ", stringRotation('hello', 'llohe'));
// console.log("false: ", stringRotation('hello', 'he'));
// console.log("false: ", stringRotation('hello', 'ollhe'));


=======
}

>>>>>>> 91b31918c5a052210d880b8dd0eb8a18d4d8ce66
module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
