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
  if (s1.length !== s2.length) return false;
  let arr1 = s1.split('');
  let arr2 = s2.split('');
  const start = arr1.indexOf(arr2[0])

  let sub = [arr2[0]];
  let sub2 = [];
  for (let i = 1; i < arr2.length; i++) {
    if (arr2[i] === arr1[start + i]) {
      sub.push(arr2[i])
    } else {
      sub2.push(arr2[i])
    }
  }

  if (sub.concat(sub2).join('') === s1 || sub2.concat(sub).join('') === s1) {
    return true;
  } else {
    return false;
  }

}
console.log(stringRotation('hello', "asd"))
module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
