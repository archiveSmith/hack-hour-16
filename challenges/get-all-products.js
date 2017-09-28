/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * do not use division, becuase zero might be in the array and you cannot divide by zero
 */

function getAllProducts(array) {
    array.join('')
    var arr = (array + '').split(','),
    permutations = [];   
    function swap(a, b)
    {
      var tmp = arr[a];
      arr[a] = arr[b];
      arr[b] = tmp;
    }
    function generate(n) {
      if (n == 1) {
        permutations.push(arr.join(''));
      } else {
        for (var i = 0; i != n; ++i) {
          generate(n - 1);
          swap(n % 2 ? 0 : i, n - 1);
        }
      }
    }
    generate(arr.length);
    // console.log(permutations);
    var products = [];  
    
    for(var i = 0; i < permutations.length; i++) {
      product = 1;
      findProduct = permutations[i].split('')
      
      for(var j = 1; j < findProduct.length; j++) {
        // console.log(findProduct[j])
        product = product * findProduct[j]
      }
    // console.log(product)
    products.push(product)
    }
    
  var unique = products.filter(function(itm, i, a) {
      return i == products.indexOf(itm);
  });
  return unique
}

module.exports = getAllProducts;
