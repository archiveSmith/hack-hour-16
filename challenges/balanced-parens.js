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
	//iterate through and count each bracket

	//use reduce?
	if (input.length%2 !== 0) return false

	let square = 0;
	let curly = 0;
	let peren = 0;

	for (let i = 0; i < input.length; i++){
		input[i] == '[' ? square++ : 
		input[i] == ']' ? square-- :
		input[i] == '{' ? curly++ : 
		input[i] == '}' ? curly-- :
		input[i] == '(' ? peren++ : 
		input[i] == ')' ? peren-- : true
}
		return square === 0 && curly === 0 && peren === 0

	}

module.exports = balancedParens;
