/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {

//this find the mean of the array
let mean = Math.floor((array.reduce((a,b) => a + b ))/array.length)

//this line finds the number of occerences and index them to an object
	let mode = array.reduce(function (acc, curr) {
  		if (typeof acc[curr] == 'undefined') {
    		acc[curr] = 1;
  		} else {
    		acc[curr] += 1;
  		}

  		return acc;
	}, {});


//container for key with highest value
let container = 0

//container to iterate through mode object values
let modeArr = Object.keys(mode)

//determining highest key value and reassigns container. also parses key string to number value
	for (let i = 0; i < modeArr.length; i++){
		if (mode[modeArr[i]] > container){
			container = parseInt(modeArr[i]);
		}
	}

//boolean to determine equivalency
return mean === container

}


module.exports = modemean;
