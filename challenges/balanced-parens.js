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
*																					(){())}
*
*/

function balancedParens(input){

	// the pattern to test
	// let brackets = /[\{\}\(\)\[\]]/;
	// let opening = /[\{\(\[]/;
	// let closing = /[\}\)\]]/;

	// filter out all chars we are not interested in
	let filtered = input.split('').filter(function(char) {
			// console.log(char);
			if(brackets.test(char)) return char;
	});

	// loop through array

		// work from middle out -> find first closing brace
		// go backwards to find opening brace
			// if it's not opening, return fail
			// else, remove the opening and the closing from the aray

	let counter = 1;
	while (counter < filtered.length) {
		if (filtered[counter] === ')' && filtered[counter-1] === '(') {
			filtered.splice(counter-1, 2);
			counter = 0; 
		}		
		
		else if (filtered[counter] === ']' && filtered[counter-1] === '[') {
			filtered.splice(counter-1, 2);
			counter = 0; 
		}		
		
		else if (filtered[counter] === '}' && filtered[counter-1] === '{') {
			filtered.splice(counter-1, 2);
			counter = 0; 
		}
				
		// console.log('counter', counter);
		counter++;
	}

	if (filtered.length === 0) return true;
	return false;
}

// console.log(balancedParens('var wow  = { yo: thisIsAwesome() }'));
console.log(balancedParens('[](){}')); // true
console.log(balancedParens('[({})]'));   // true
console.log(balancedParens('[(]{)}')); // false

console.log(balancedParens('('));  // false
console.log(balancedParens('()')); // true
console.log(balancedParens(')('));  // false
console.log(balancedParens('(())'));  // true

console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }')); // true
console.log(balancedParens(' var hubble = function() { telescopes.awesome();')); // false

module.exports = balancedParens;



	// while (filtered.length > 0) {
	// 	// if first char is closing brace, fail
	// 	if (closing.test(filtered[0])) return false;

	// 	// for (let i = 0; i < filtered.length; i++) {
	// 		let first = filtered.indexOf('(');
	// 		let last = filtered.indexOf(')');

	// 		// make sure theres no closing's betweeen first and last
	// 		for (let i = last; i >= first; i--) {
	// 			if ()
	// 		}

	// 		// if first and last were found, remove from array
	// 		if (first != -1 && last != -1) {
	// 			filtered.splice(last, 1);
	// 			filtered.splice(first, 1);
	// 		}

	// 		else if (first >= 0 && last === -1) return false;
	// 		else if (last >= 0 && first === -1) return false;

	// 		first = filtered.indexOf('[');
	// 		last = filtered.indexOf(']');

	// 		// if first and last were found, remove from array
	// 		if (first != -1 && last != -1) {
	// 			filtered.splice(last, 1);
	// 			filtered.splice(first, 1);
	// 		}

	// 		else if (first >= 0 && last === -1) return false;
	// 		else if (last >= 0 && first === -1) return false;

	// 		first = filtered.indexOf('{');
	// 		last = filtered.indexOf('}');

	// 		// if first and last were found, remove from array
	// 		if (first != -1 && last != -1) {
	// 			filtered.splice(last, 1);
	// 			filtered.splice(first, 1);
	// 		}

	// 		else if (first >= 0 && last === -1) return false;
	// 		else if (last >= 0 && first === -1) return false;

	// 	}

	// 	return true;
