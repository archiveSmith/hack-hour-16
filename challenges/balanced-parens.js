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
  if(typeof(input) !== "string"){return "not a string"}
  let strArr = input.match(/[^a-z0-9 ]/gi)
  if(strArr[0]===")"||strArr[0]==="}"||strArr[0]==="]"){return false}
  
  let parentheses = "[]{}()",
    stack = [],
    i,
    c; 

  for (i = 0; c = strArr[i++];){
    var position = parentheses.indexOf(c)
    if(position%2===0){
      stack = strArr.slice(i-1,strArr.length-i+1)
      console.log(stack)
      if(parentheses.indexOf(stack[0]) === parentheses.indexOf(stack[stack.length-1])){
        return true
      }
    }
    else{return false}
    if(stack[i-1]==="(" && stack[stack.length-i+1]){console.log("hello")}
    
  
//     console.log(strArr)
//     console.log(stack)
    }
  
  
	return false
}

module.exports = balancedParens;
