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

/////////////////////////////////
////////// Solution 1 //////////
///////////////////////////////

function balancedParens(input){
  let counter = 0;
  let counter2 = 0;
  let counter3 = 0;
  let rightSide;
  let rightBrack;
  let rightCurly;
  input.split('').forEach((char) => {
    if (char === '(' || char === ')') {
      if (rightSide === undefined && char === '(') rightSide = true;
      else if (rightSide === undefined && char === ')') rightSide = false;
      counter++;
      if (char === ')') {
        if (counter2 % 2 !== 0 || counter3 % 2 !== 0) rightSide = false;
      }
    }
    else if (char === '[' || char === ']') {
      if (rightBrack === undefined && char === '[') rightBrack = true;
      if (rightBrack === undefined && char === ']') rightBrack = false;
      counter2++;
      if (char === ']') {
        if (counter % 2 !== 0 || counter3 % 2 !== 0) rightBrack = false;
      }
    }
    else if (char === '{' || char === '}') {
      if (rightCurly === undefined && char === '{') rightCurly = true;
      else if (rightCurly === undefined && char === '}') rightCurly = false;
      counter3++;
      if (char === '}') {
        if (counter % 2 !== 0 || counter2 % 2 !== 0) rightCurly = false;
      }
    }
  });
  if (!rightSide || !rightBrack || !rightCurly) return false;
  if (counter % 2 !== 0 || counter2 % 2 !== 0 || counter3 % 2 !== 0) return false;
  return true;
}

 /////////////////////////////////
 ////////// Solution 2 //////////
 ///////////////////////////////

// function balancedParens(string) {
//   let stack = [];
//   let brackets = {
//     '(' : ')',
//     '[' : ']',
//     '{' : '}'
//   };
//   for (let i = 0; i < string.length; i += 1) {
//     if (brackets.hasOwnProperty(string[i])) stack.push(brackets[string[i]]);
//     if ([')', ']', '}'].includes(string[i]) && stack.pop() !== string[i]) return false;
//   }
//   return stack.length === 0;
// }

module.exports = balancedParens;
