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
  //rotate through s2 and check against s1 on each rotation, if s1 === s2 return true else return false at array.length
    if (typeof s1 !== 'string' || typeof s1 !== 'string') return 'invalid input';
  s1 = s1.split('');
  s2 = s2.split('');
  for (let i = 0; i < s1.length; i++){
    
    s1.push(s1.shift());
    if (s1.join('') == s2.join('')){
     return true; 
    }
   
    
  }
  return false
}

function stringRotation(s1, s2) {
  return isSubstring(s1,s2);
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
