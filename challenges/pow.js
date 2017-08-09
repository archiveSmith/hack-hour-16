/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */


//MY REFRACTORED SOLUTION
function pow(base, power, temp) {
  if(power === 0){return 1}
  if(temp === undefined){temp = base}
if(power > 1){
  base = base * temp
  power--
}else {
  return base
}
return pow(base,power,temp)
}

//MY OLD SOLUTION
// function pow(base, power, count = 1, temp) {
//   if(temp === undefined){temp = base}
// if(count !== power){
//   base = base * temp
//   count++
// }else {
//   return base
// }
// return pow(base,power,count, temp)
// }

module.exports = pow;
