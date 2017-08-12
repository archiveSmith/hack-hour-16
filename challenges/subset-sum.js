/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {

  // go through array, look if target === element
    // loop through array, check if elem + 1 other elem === target (test all combinations)

    // loop through array for elem + elem + elem

  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return true;
  }

  let result = false;

  recurSubset(array, target, 0, 1);

  function recurSubset(array, target, index, numElemsToSum) {
    let temp;

    // number of times to do addition
    let testArr = array.slice(index, numElemsToSum+1);
    let sum = 0;
    for (let i = 0; i < testArr.length; i++) {
      sum += testArr[i];
    }

    if (sum === target) return true;
    else {
      // recurse
    }


    // then start skipping
      // test a new array with one spot removed
    let newArr = array.



    if (temp === target) return true;
    numElemsToSum++;
    if (numElemsToSum === array.length) return false;

    // recurse
    recurSubset(array, target, 0, numElemsToSum);

  }


}

module.exports = subsetSum;







// subset also includes an empty array '[]'
if target === 0 return true

// if arr is empty adn target is not zero, we wont hit the target
if (!arr.length) return false

// make two recursive calls to subsetSum(), one that counts arr[0] and one that doesnt
// if one will return true, true will be returned
return subsetSum(arr.slice(1), target - arr[0]) || subsetSum(slice(1), target);



// traversing left side will include the first item, traversing the right side will NOT include the first item
  /// the first item is '-arr[0]' 

























