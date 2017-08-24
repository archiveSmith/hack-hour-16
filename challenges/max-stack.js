/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.storage = {};
  this.index = 0;
}

 Stack.prototype.push = function (value) {
   if(!this.highestVal || this.highestVal < value) this.highestVal = value;
   this.storage[this.index] = value;
   return ++this.index;
 };

 Stack.prototype.pop = function () {
   this.index--;
   let valRemoved = this.storage[this.index];
   delete this.storage[this.index];
   return valRemoved;
 };

 Stack.prototype.getMax = function () {

   return this.highestVal;
 };

 // last element pushed in array is the first one that gets popped
 // after element is push return the length of array
 // save the last element in a variable, use pop, return variable
 // the return the largest value in the array with get Max;

 let myStack = new Stack();
 console.log(myStack);
 myStack.push(2);
 console.log(myStack);
 myStack.pop();
 myStack;

module.exports = Stack;

//
//
//
//
//
// function Stack() {
//   this.storage = {};
  // this.maxStack = [];
// }
//
//  Stack.prototype.push = function (value) {
//    if(!this.maxStack.length || this.maxStack[this.maxStack.length - 1].max < value) {
    // this.maxStack.push({ max: val, i: (this.stack.length) })
  // }
  //   this.stack.push(val);
  //   return this.stack.length;
// }

//
//  Stack.prototype.pop = function () {
//  if(!this.maxStack.length || this.maxStack[this.maxStack.length - 1].max < value) {
    // this.maxStack.pop();
// }
//    return this.sta;
//  };
//
//  Stack.prototype.getMax = function () {
//  if(!this.maxStack[this.maxStack.length -1])
//    return this.maxStack[this.maxStack.length - 1].max;;
//  };
