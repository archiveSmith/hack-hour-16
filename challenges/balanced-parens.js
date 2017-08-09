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
   let counter = 0;
   let counter2 = 0;
   let counter3 = 0;
   let rightSide;
   let rightBrack;
   let rightCurly;
   input.split('').forEach(function(char) {
     // if (counter % 2 === 0 || counter2 % 2 === 0 || counter3 % 2 === 0) {
     // if( counter % 2 !== 0 || counter2 % 2 !== 0 || counter3 % 2 !== 0) return false;
     // }

     if (char === '(' || char === ')') {
      if (rightSide === undefined && char === '(') rightSide = true;
       else if (rightSide === undefined && char === ')') rightSide = false;
       counter++ ;
       if(char === ')') {
         if(counter2 % 2 !== 0 || counter3 % 2 !== 0) rightSide = false;
         //console.log(counter, counter2, counter3);
         // if(counter2 % 2)
       }
     }

     else if (char === '[' || char === ']') {
        if (rightBrack === undefined && char === '[') rightBrack = true;
        if (rightBrack === undefined && char === ']') rightBrack = false;
       counter2++;
       if(char === ']') {
       if(counter % 2 !== 0 || counter3 % 2 !== 0) rightBrack = false;
     }
     }
     else if (char === '{' || char === '}') {
       if (rightCurly === undefined && char === '{') rightCurly = true;
     else if (rightCurly === undefined && char === '}') rightCurly = false;
   counter3++;
   if(char === '}') {
       if(counter % 2 !== 0 || counter2 % 2 !== 0) rightCurly = false;
     }}
   });
   console.log(rightSide, rightBrack, rightCurly);
   if (!rightSide || !rightBrack || !rightCurly) return false;
   if (counter % 2 !== 0 || counter2 % 2 !== 0 || counter3 % 2 !== 0) return false;
   return true;
 }

module.exports = balancedParens;
