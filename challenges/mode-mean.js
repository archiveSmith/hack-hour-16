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

//mean is average of all values || sum array/array.length
//mode returns value that frequently appears
// return mean === mode
function modemean(array) {
  if(typeof array[0] !== 'number'){
    return false;
  }

  let mean = 0;
  let mode = 0;

  array.forEach(x =>{
      mean += x;
  });

  let counter = 0;
  let testcase = 0;

  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array.length; j++){
      if(array[i] === array[j]){
        counter += 1;
      }
    }
    if(counter > testcase){
    testcase = counter;
    mode = array[i];
    }
    counter = 0
  }

  mean = Math.floor(mean / array.length);


  return mean === mode;
}


/*
Spare time trying to refactor; always returns true :(

function modemean(array) {
  if(typeof array[0] !== 'number'){
    return false;
  }

  let mean = 0;
  let mode = 0;

  //mean
  array.forEach(x =>{
      mean += x;
  });

  mean = Math.floor(mean / array.length);

  let counter = 0;
  let testcase = 0;

  //mode
  let sort = array.sort();

  sort.forEach(y => {
    let i = 0;
    if(y === sort[i]){
      counter += 1;
    } else{
      if(counter > testcase){
        testcase = counter;
        mode = y;
      }
      counter = 0;
    }
  });


  return mean === mode;
}


let test = [1,4,5,6,6]

console.log(modemean(test))
*/


module.exports = modemean;
