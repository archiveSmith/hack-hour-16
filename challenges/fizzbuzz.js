// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1,
//                     2,
//                     'fizz',
//                     4,
//                     'buzz',
//                     'fizz',
//                     7,
//                     8,
//                     'fizz',
//                     'buzz',
//                     11,
//                     'fizz',
//                     13,
//                     14,
//                     'fizzbuzz',
//                     16 ]
function fizzbuzz(num) {
    var arr = []
    for(var j = 1; j <= num; j++){
      arr.push(j)
    }
    for(var i = 1; i <= arr.length; i++){
        if(arr[i]%3===0 && arr[i]%5 !== 0){arr[i] = "fizz"}
        if(arr[i]%5===0 && arr[i]%3 !== 0){arr[i] = "buzz"}
        if(arr[i]%3===0 && arr[i]%5===0){arr[i] = "fizzbuzz"}
        
    }
    return arr
}
module.exports = fizzbuzz;
