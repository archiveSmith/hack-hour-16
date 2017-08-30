/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = {};
  this.index = 0;
}

Stack.prototype.push = (value) => {
  this.storage[this.index] = value;
  this.index += 1;
};

Stack.prototype.pop = () => {
  this.index -= 1;
  const tempValue = this.storage[this.index];
  delete this.storage[this.index];
  return tempValue;
};


/**
* Queue Class
*/


function Queue() {

}

module.exports = {Stack: Stack, Queue: Queue};
