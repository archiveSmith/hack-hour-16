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
  if(typeof(s1) !== "string"||typeof(s2) !== "string"){return "not a string"}
	let str1 = s1.match(/[a-z]/gi)
  let str2 = s2.split("")
  let temp = []
  let answer;
  for(let i = 0; i < str1.length; i++){
    if(str2.indexOf(str1[i]) !== -1){
      temp.push(str1[i])
      if(temp.length === str2.length){break}
     }
  }
  let tempIndex = str2.indexOf(temp[0])
  answer = str2.slice(tempIndex)
  for(let j = 0; j < tempIndex; j++){
    answer.push(str2[j])
  }
  temp = temp.join("")
  answer = answer.join("")
 	if(isSubstring(temp,answer)){return true}
  return false
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
