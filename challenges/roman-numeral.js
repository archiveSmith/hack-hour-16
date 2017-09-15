/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * 
 */

function romanNumeral(n) {

<<<<<<< HEAD
romanNum = {
    1 : 'I',
    4 : 'IV',
    5 : 'V',
    9 : 'IX',
   10 : 'X',
   40 : 'XL',
   50 : 'L',
   90 : 'XC',
   100 : 'C',
   400 : 'CD',
   500 : 'D',
   900 : 'CM',
  1000 : 'M',
  }

 console.log('n', n)
  if (n === 0){
    return ''
  } else {
  
  var nums = Object.keys(romanNum)
  var smallNums = [];
  max = 0;
  for(var i = 0; i < nums.length; i++){
    if(parseInt(nums[i]) <= n  && parseInt(nums[i]) > max){
      max = nums[i]
      console.log('max',max)
      
    }
  }
  console.log(romanNum[max])
  return romanNum[max] + romanNumeral(n-max)
  // max = smallNums.reduce(function(a,b){
  //     return Math.max(a,b)
  // })
  

  }
=======
>>>>>>> 20bf7983951a9f5446a0d4d1433eebcf6573c470
}

module.exports = romanNumeral;
