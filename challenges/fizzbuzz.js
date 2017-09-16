
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
