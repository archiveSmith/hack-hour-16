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
<<<<<<< HEAD
    //MODE
  //The number that occur the most
  //iterate through the array and record the occurances in an Object
  //iterate through the object to find the key with the greatest occurance
  
  var obj ={};

    for(var i = 0; i < array.length; i++){
        if(obj[array[i]] === undefined){
          obj[array[i]] = 1
        } else {
        obj[array[i]]++
    }
    
    }
    
    theKeys = Object.keys(obj)
    mostOccur = theKeys[0]
    
    for(var j = 1; j < theKeys.length; j++){
      if (obj[theKeys[j]] >= obj[mostOccur]) {
        mostOccur = theKeys[j]
      }
    }

  mode = mostOccur

  
  var sum = 0;
  //find the sum
  for(var k = 0; k < array.length; k++){
    sum = sum + array[k]
  }
  
  //Divide the sum by length
   length = array.length

  mean = sum/length 
  mean = Math.floor(mean)
  
//   console.log('mode', mode)
//   console.log('mean', mean)
//   console.log('objmode', obj)
  
  if(mean === parseInt(mode)){
    return true
  } else {
    return false
  }
  
  
=======

>>>>>>> a0598932afffedeb7098cc55bd823627a768f994
}

module.exports = modemean;
