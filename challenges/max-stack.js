/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */


//first in, last out

function Stack() {
  this.storage = {};
  this.index = 0;
}

Stack.prototype.push = function (value) {
  this.storage[this.index] = value;
  this.index++;
}

Stack.prototype.pop = function() {
  if(this.index === 0) {return undefined}
  var deleted = this.storage[this.index-1]
  delete this.storage[this.index-1]
  this.index--
  return deleted;
}

Stack.prototype.getMax= function() {
  if(this.index === 0) {return undefined}
  let maxValue = this.storage[0]
  for(var key in this.storage) {
    if(this.storage[key] > maxValue) {
      maxValue = this.storage[key]
    }
  }
  return maxValue
}


module.exports = Stack;