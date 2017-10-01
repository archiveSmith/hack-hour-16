/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
     
  if(!Array.isArray(array)){
    return 0
  }
  
  if(array.length < 3){
    return 0
  }
  
  

 sortedAry = array.sort(function(a, b){return a - b});
 console.log(sortedAry)
 
 productNeg = 1;
 
 for(var i = 0; i < 3; i++){
  productNeg = productNeg * sortedAry[i]
 }
 //console.log(productNeg) 
  
  productPos = 1;
  
  for(var j = sortedAry.length-1; j > sortedAry.length - 4; j--){
    productPos = productPos * sortedAry [j]
  }
  
  //console.log(productPos)
  
  
  
  //edge case
  //2 lowest negative numbers and highest number.
  
  
  twoLowest = sortedAry.slice(0,3)
  highest = sortedAry[sortedAry.length-1]
  console.log('WTF!',twoLowest,highest)
  var edgeProduct = 1;
  twoLowest.push(highest)
  console.log('werwrw',twoLowest)
  
  for( var k = 0; k < twoLowest.length; k++){
    edgeProduct = edgeProduct * twoLowest[k]
  }

  console.log('wetwere', edgeProduct)
  
  
  whichOne = [edgeProduct, productPos, productNeg]
  whichOne.sort(function(a, b){return a - b})
  return whichOne[whichOne.length-1]
  
}


module.exports = highestProduct;
