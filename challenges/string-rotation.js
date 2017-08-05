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
  //have an array of all possible rotations
  var possibleRotations = [];
  
  //split the string into an array
  s1 = s1.split("") 
  
  //do loop, grab last index and unshift once
  for(var i = 0; i < s1.length; i ++) {
    var reversed;
    var temp = s1[s1.length-1] //grab last
    s1.splice(s1.length-1,1) //removes last
    s1.unshift(temp) //add to the front
    reversed = s1.join('')
    possibleRotations.push(reversed)
  }
  return possibleRotations.includes(s2)
  //join the array
  // push to possible rotations
  
  //check if array has same string as s2, use includes
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
