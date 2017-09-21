/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example:
  * var result = anagrams('abc');
  * console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

function anagrams(string) {

  function permutationArr(aryStr) {
    
      var arr = (aryStr + '').split(',')
      var permutations = [];   
      
    
      function swap(a, b) {
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
      return permutations;
    }    
  console.log(permutationArr(string.split('')))
    return permutationArr(string.split(''))

}

module.exports = anagrams;
