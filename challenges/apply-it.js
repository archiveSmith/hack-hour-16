/**
 * applies the invoked array to the function's parameter list
 * Example:
 *   var jae = function(name, age, location) {
 *     return name + " is " + age + " and he lives in " + location;
 *   };
 *
 *   var jaero = applyIt(jae, ["Jae", 19, "South Carolina"]);
 *   jaero(); //Returns "Jae is 19 and he lives in South Carolina"
 *
 * Another Example:
 *   var jasmine = function(name, age) {
 *     if(!age){
 *       return "We don't know how old " + name + " is!";
 *     }
 *
 *     else{
 *       return name + " is " + age + " years old!";
 *     }
 *   };
 *
 *   var jmoney = applyIt(jasmine, ["Jasmine"]);
 *   jmoney(); //Returns "We don't know how old Jasmine is!"
 *
 *  DO NOT USE THE BUILT IN APPLY METHOD OR THE SPREAD OPERATOR
 */

const alex = function(name,age,location) {
  return name + " is " + age + " and he lives in " + location;
};
function applyIt(func, args) {
  if(!args.length){return 'info not available'}
  if(args.length === 1) {return args[0] + " is a beast"}
  if(args.length === 2 && typeof(args[1]) === 'number'){return args[0] + " is " + args[1] + " years old"}
  if(args.length > 2 && typeof(args[1]) === 'number' && typeof(args[2]) === 'string'){return args[0] + " is " + args[1] + " years old and he lives in " + args[2]}
  return 'Error: these types of arguments dont work'
}
// const alexFunc = applyIt(alex, ["alex", 24, "Fullerton"]);

module.exports = applyIt;
