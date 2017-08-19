/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  const arr = [];
  let highest = array[0];
  let first;
  array.forEach((ele) => {
    if (ele > highest) {
      arr.push(ele);
      const slices = array.indexOf(ele);
      array.splice(slices, 1);
    }
  });

  array.forEach((ele) => {
    console.log(highest)
    if (ele > highest) {
      highest = ele;
    }
  });
  // console.log(arr);?
  // console.log(array);
}

console.log(highestProduct([6, 3, 5, 8, 1, 3]));
module.exports = highestProduct;
