// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
  if(typeof(num) !== 'number'){return 'not a number'}
  let twoCount = 0
  if(num < 0){
  	for(let j = 0; j >= num; j--) {
  		let arr = []
    	if(j.toString().indexOf('2') !== -1){
      arr.push(j.toString().match(/[2]/gi));
      twoCount = twoCount + arr[0].length;
    	};
  	};
    return twoCount
  }
	for(let i = 0; i <= num; i++) {
  let arr = []
    if(i.toString().indexOf('2') !== -1){
      arr.push(i.toString().match(/[2]/gi));
      twoCount = twoCount + arr[0].length;
    };
  };
  return twoCount
};

module.exports = countTwos;