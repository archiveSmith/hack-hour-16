/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.
 
 For example:     
 drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/

function drawStairs(n) {

	// ********************************************
	// ** Input Validation - return false if bad **
	// ********************************************

	// check for objects
	if (typeof n === 'object') { return printError(); }

	// check for numbers out of range
	else if (n < 1 || n > 100) { return printError(); }

	// check for strings
	else if (typeof n === 'string') { return printError(); }

	// *****************
	// ** Run program **
	// *****************
	let space = ' ';
	let stair = '*';

	// loop through numbers
	for (let i = 1; i <= n; i++) {
		let current = '';

		// assign number of spaces
		let numSpaces = n - i;

		// add to space padding
		for (let j = 0; j < numSpaces; j++) {
			current += space;
		}

		// add stairss
		for (let j = 0; j < i; j++) {
			current += stair;
		}

		// print out current level of stairs
		console.log(current);
	}

	// this is used to log invalid parameters and return false
	function printError() {
		console.log("[Error] invalid input: " + n);
		console.log("Must be num between 1 -> 100");
		return false;
	}

}

// ***********
// test cases: 
// ***********

//// valid
// console.log("100: ");
// drawStairs(100);

// console.log("normal (4): ");
// drawStairs(4);
// console.log("normal: (1): ");
// drawStairs(1);


// // invalid
// console.log("0: ");
// drawStairs(0);
// console.log("null: "); 
// drawStairs(null);

// console.log("undef: ");
// drawStairs();

// console.log("[]: ");
// drawStairs([]);
// console.log("[1,2]: ");
// drawStairs([1,2]);

// console.log("{}");
// drawStairs({});
// console.log("{a: 'b'}: ");
// drawStairs({a: 'b'});

// console.log("string ('7'):  ");
// drawStairs('7');
// console.log("string ('seven'): ");
// drawStairs('seven');

// console.log("101: ");
// drawStairs(101);

// console.log("-1: ");
// drawStairs(-1);

// console.log("-100: " );
// drawStairs(-100);


module.exports = drawStairs;
