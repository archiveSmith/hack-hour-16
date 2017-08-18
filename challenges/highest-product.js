/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function getPermsNLength(array, n) {
  let permList = [];
  if (n === 1) {
  	for (i = 0; i < array.length; i++) {
  		permList.push([array[i]]);
  	}
  	return permList;
  }
  for (let i = 0; i < array.length - n + 1; i += 1) {
    let item = array.slice(i, i + 1);
    let perm = getPermsNLength(array.slice(i + 1), n - 1);
    for (let j = 0; j < perm.length; j += 1) {
      permList.push(item.concat(perm[j]));
    }
  }
  return permList;
}

function highestProduct(array) {
  let perms = getPermsNLength(array, 3);
  console.log(perms);
  return perms.reduce((max, curr) => {
    let product = curr.reduce((sum, num) => sum *= num);
    if (product > max) max = product;
    return product;
  }, 0);
}

/*
I did this a stupid way. This is way easier!!!

1. Sort the array
2. Multiply left most 3 numbers
3. Multiply first two and last one number
4. Compare the two.
*/


module.exports = highestProduct;

// We take smaller combinations from the subsequent elements
tailcombs = k_combinations(set.slice(i + 1), k - 1);
// For each (k-1)-combination we join it with the current
// and store it to the set of k-combinations.
for (j = 0; j < tailcombs.length; j++) {
  combs.push(head.concat(tailcombs[j]));