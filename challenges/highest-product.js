/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
   
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
  
  if(productNeg > productPos){
    return productNeg
  } else {
    return productPos
  }
}


module.exports = highestProduct;
