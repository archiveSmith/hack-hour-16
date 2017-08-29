// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1,
//                     2,
//                     'fizz',
//                     4,
//                     'buzz',
//                     'fizz',
//                     7,
//                     8,
//                     'fizz',
//                     'buzz',
//                     11,
//                     'fizz',
//                     13,
//                     14,
//                     'fizzbuzz',
//                     16 ]

function fizzbuzz(num) {
	// ****************
	// Input Validation
	//*****************

	// check for NaN
	if (isNaN(num)) { return false; }

	// check if number <= 0   // is this necessary?
	else if (num <= 0) { return false; }

	// check if array -> this is to catch an array of 1 number, ex [10]
	else if (Array.isArray(num)) { return false; }

	// ***********
	// Valid Input
	// ***********

	// declare a container as an empty array
	let container = [];

	// loop through values, starting at 1
	// check 3 conditions and push to container depending on result
	for (let i = 1; i <= num; i++) {

		// divisible by 3 and 5
		if (i % 3 === 0 && i % 5 === 0) { container.push("fizzbuzz"); } 

		// divisible by 3
		else if (i % 3 === 0) { container.push("fizz"); }

		// divisible by 5
		else if (i % 5 === 0) { container.push("buzz"); }

		// not divisible
		else { container.push(i); }
	}
	//return our container
	return container;
}

/// test cases: normal
console.log("normal: " + fizzbuzz(3));
console.log("normal: " + fizzbuzz(0));
console.log("normal: " + fizzbuzz(1));
console.log("normal: " + fizzbuzz(5));
console.log("normal: " + fizzbuzz(200));

/// edge cases
console.log("no number: " + fizzbuzz());
console.log("array: " + fizzbuzz([15]));
console.log("array: " + fizzbuzz([15, 17]));
console.log("object: " + fizzbuzz({a: 15}));
console.log("string num: " + fizzbuzz("15"));
console.log("string: " + fizzbuzz("hello world"));


// another way to do it
// let retArray = [];
// for (let i = 0; i <= n; i++) {
// 	let current = '';
// 	if (i%3 === 0) current += 'fizz';
// 	if (i%5 === 0) current += 'buzz';
// 	if (current) retArray.push(current);
// 	else retArray.push(i);

// 	return retArray;
// }



module.exports = fizzbuzz;
