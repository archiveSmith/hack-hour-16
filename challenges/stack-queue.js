/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = {};
  this.length = 0;
}

Stack.prototype.push = (value) => {
  this.storage[this.length] = value;
  this.length += 1;
};

Stack.prototype.pop = () => {
  const popped = this.storage[this.length - 1];
  delete this.storage[this.length - 1];
  this.length -= 1;
  return popped;
};

/**
* Queue Class
*/


function Queue() {
  this.stack1 = new Stack();
  this.stack2 = new Stack();
}

Queue.prototype.enqueue = (item) => {
  this.stack1.push(item);
};

Queue.prototype.dequeue = () => {
  if (!this.stack2.length) {
    if (!this.stack1.length) return null;
    while (this.stack1.length) {
      this.stack2.push(this.stack1.pop);
    }
  }
  return this.stack2.pop();
};

module.exports = {Stack: Stack, Queue: Queue};
