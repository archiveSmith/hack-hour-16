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

inputAry = input.split('')

newInput = [];

for(var k = 0; k < inputAry.length; k++){
  if(inputAry[k] === '(' || input[k] === '[' || input[k] === '{' || input[k] === ')' || input[k] === ']' || input[k] === '}'){
   
   newInput.push(input[k])
    
  }
}

input = newInput;

//OPEN CASE
if(input[0] === ')' || input[0] === ']' || input[0] === '}'){
  return false
}

//EVEN LENGTH
if (input.length % 2 !== 0){
  console.log('hello')
  return false
}



//SYMMETRICAL CASE
match = 0;
i = 0
j = input.length-1

while(i<j){
  console.log(input[i], input[j])
  if(input[i] === '(' || input[i] === '[' || input[i] === '{' && input[j] === ')' || input[j] === ']' || input[j] === '}'){
    console.log('match')
    match++  
    }
  i++
  j--
  
}

if(match === input.length/2){
 console.log('hello1')
  return true
} 

//NON SYMMETRICAL CASE && (]
var count = 0;

for(var i = 0; i < input.length; i++ ){
  for(var j = 0; j < input.length; j++ ){
    
    if (input[i] === '(' && input[i+1] !== ']' && input[i+1] !== '}' && input[j] === ')'){
      count++;
    }
    
    if (input[i] === '[' && input[i+1] !== ')' && input[i+1] !== '}' && input[j] === ']'){
      count++;
    }
     
    if (input[i] === '{' && input[i+1] !== ')' && input[i+1] !== ']' && input[j] === '}'){
      count++;
    }
    
  }
}

if(count === input.length/2){
  console.log('hello2')
  return true
} else {
  return false
}


}

module.exports = balancedParens;
