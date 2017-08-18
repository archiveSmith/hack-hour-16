/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

////////// APPROACH ///////////
// sort array
// multiply three largest positive numbers
// multiply two smallest negative numbers and largest positive number


function highestProduct(array) {
  arr = array.sort((a,b) => a - b);

  const posNums = arr[arr.length-1] *  arr[arr.length-2] *  arr[arr.length-3];
  const negNums = 

}


module.exports = highestProduct;

highestProduct([1, 2, 3, 4]);

  // // hold the highest value outside

  // // make a recursive function to iterate through array

  // // if recursive value is larger than stored value, re-assign value, otherwise keep going until end is hit

  // function recurProd(array, nums) {
  //   /////// base cases
  //   console.log('nums: ' + nums);

  //   // if no more items in array
  //   if (!array.length) return;

  //   // if we have the things to multiply
  //   // console.log(nums.length === 3);
  //   if (nums.length === 3) {
  //     let prod = nums[0] * nums[1] * nums[2];
  //     console.log('new prod: ' + prod);
  //     console.log('old product: ' + product);
  //     if (prod > product) product = prod;
  //   }

  //   // otherwise build up nums array
  //   nums.push(array[0]);

  //   if (nums.length < 4) {
  //     // push 0
  //     recurProd(array.slice(1), nums);
    
  //     // slice 1, push zero
  //     recurProd(array.slice(2), []);

  //     // slice 0
  //     // recurProd(array.slice(2), []);
  //   }

  //   // slice 0
  //   // recurProd(array.slice(2), []);
  // }

  // let product = 0;
  // let empty = [];
  // recurProd(array, empty);
  // return product;rr[0]' 


