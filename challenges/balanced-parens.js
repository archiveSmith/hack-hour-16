/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function balancedParens(input){
  if (input.length < 2) return false;
  // pair { open brace: closing brace }
  const pair = {
    '[' : ']',
    '(' : ')',
    '{' : '}'
  }
  //filter out ALL non-brace characters
  let bracesArray = input.split('').filter(char => {
    const braces = ['[',']','(',')','{','}'];
    return braces.indexOf(char) > -1
  })
  //push all open braces
  let stack = [];
  //check if current element is a closing brace, and match with last opening brace
  for (let i = 0; i < bracesArray.length; i++) {
    let current = bracesArray[i]

    if (current === '[' || current === '(' || current === '{') {
      stack.push(current)
    } else {
      if (current === pair[stack[stack.length - 1]]) {
        stack.pop();
      } else {
        return false
      }
    }
  }

  return stack.length === 0 ? true : false;
}
//

console.log(balancedParens(' var hubble = function() { telescopes.awesome();') === false)
console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }') === true)
console.log(balancedParens('[](){}[]') === true)
console.log(balancedParens('[](){}') === true)
console.log(balancedParens('[({})]') === true)
console.log(balancedParens('[(]{)}') === false)
console.log(balancedParens('))))))') === false)
module.exports = balancedParens;
