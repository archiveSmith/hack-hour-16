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

function isSubstring(s1, s2, len) {
  return s1.includes(s2) && s2.length === len;
}

function stringRotation(s1, s2, len) {
  const cat = s1 + s2;
  let lenght = s2.length
  return isSubstring(cat, s2);
}


console.log(stringRotation('hello', 'he'))

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
