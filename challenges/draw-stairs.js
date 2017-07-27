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

	// **********************
	// ** Input Validation **
	// **********************

	// check for objects
	if (typeof n === 'object') {
		printError();
	}

	// check for bad numbers
	else if (n < 1 || n > 100) {
		printError();
	}


	// check for strings
	else if (typeof n === 'string') {
		printError();
	}
	if (n > 100) {
		return false;
	}



	// draw stairs, counting up from 1 stair to n
	// pad stairs with spaces, for spaces - i	
	for (let i = 1; i <= n; i++) {
		let current = '';
		let numSpaces = n - i;

		for (let j = 0; j < numSpaces; j++) {
			current += " ";
		}
		for (let j = 0; j < i; j++) {
			current += "*";
		}
		console.log(current);
	}

	function printError() {
		console.log("[Error] invalid input: " + n);
		console.log("Must be num between 1 -> 100");
		return false;
	}

}

console.log("normal (4): ");
drawStairs(4);
console.log("normal: (1): ");
drawStairs(1);

console.log("0: ");
drawStairs(0);
console.log("null: "); 
drawStairs(null);

console.log("undef: ");
drawStairs();

console.log("[]: ");
drawStairs([]);
console.log("[1,2]: ");
drawStairs([1,2]);

console.log("{}");
drawStairs({});
console.log("{a: 'b'}: ");
drawStairs({a: 'b'});

console.log("string ('7'):  ");
drawStairs('7');
console.log("string ('seven'): ");
drawStairs('seven');

console.log("100: ");
drawStairs(100);

console.log("101: ");
drawStairs(101);

console.log("-1: ");
drawStairs(-1);

console.log("-100: " );
drawStairs(-100);


module.exports = drawStairs;
