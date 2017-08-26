/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
    
     
      var arr = (str + '').split(''),
      permutations = [];   
    
      function swap(a, b)
      {
        var tmp = arr[a];
        arr[a] = arr[b];
        arr[b] = tmp;
      }
    
      function generate(n) {
        if (n == 1) {
          permutations.push(arr.join());
        } else {
          for (var i = 0; i != n; ++i) {
            generate(n - 1);
            swap(n % 2 ? 0 : i, n - 1);
          }
        }
      }
    
      generate(arr.length);

for(var i = 0; i < permutations.length; i++){
   if(permutations[i].split(',').join('') === permutations[i].split(',').reverse().join('')) {
     return true
   }
}
return false
  
   
}

module.exports = permPalin;