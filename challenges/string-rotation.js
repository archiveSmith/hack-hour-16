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
    // compare the first half of s1 to the last half of s2
    // access first half thru substring(), start: str.len/2, end: str.len
    const left = s1.substring(s1.length / 2);
    // console.log(left)

    // access last rotated half via substring() start: 0, end: str.len
    const right = s2.substring(0, s2.length);
    // console.log(right)

    // check if s2 half is found in index of s1 -> call isSubstring
    // console.log('isSubstring:' + isSubstring(right, left));
    return isSubstring(right, left);
}

console.log(stringRotation('hello', 'hello'));
console.log(stringRotation('hello', 'llohe'));
console.log(stringRotation('hello', 'he'));
console.log(stringRotation('hello', 'ollhe'));


module.exports = { isSubstring, stringRotation };