/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

var temp;
function pow(base, power, count = 1) {
  if(temp === undefined){temp = base}
if(count !== power){
  base = base * temp
  count++
}else {
  return base
}
return pow(base,power,count)
}

module.exports = pow;
