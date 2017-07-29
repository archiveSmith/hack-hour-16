/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 * [1,2,3] check if mode and average is ====
 * 
 * mode is how many times it occurs
 * 
 * 
 */

 array = [1,2,2,3]


function modemean(array) {
    var avg = 0;
    for(var i = 0; i < array.length; i++) {
        avg += array[i]
    }
    avg = Math.floor(avg / array.length); //total = avg

    // {}
    var counter = {};
    // place the number as its key, and value would be the number of time it occurs
    for (var j = 0; j < array.length; j++) {
        if(counter[array[j]] === undefined) {
            counter[array[j]] = 0
        }
        counter[array[j]] ++ 
    } // { '1': 1, '2': 2, '3': 1 }
    var max = 1.1
    var valueOfMax = []
    for(var key in counter) {
        if(counter[key] > max) {
            max = counter[key] // if (max === counter[key]) 
        }
        if(max === counter[key]) {
            valueOfMax.push(key) // [2,5]
        }
    }
    var bigMax= valueOfMax[0]
    for(var k = 0; k < valueOfMax.length; k++) {
        if(valueOfMax[k] > bigMax) {
            bigMax = valueOfMax[k]
        }
    }
    return bigMax === avg

    

   

    // if we have the same value of highest modes, return the largest KEY

}

console.log(modemean(array))

module.exports = modemean;
