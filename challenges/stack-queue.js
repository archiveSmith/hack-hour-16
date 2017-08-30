/**
 * Create a stack.Then create a queue using two stacks.
 */

function Stack() {
  this.storage = {};
  this.length = 0;
}

Stack.prototype.push = function (value) {
  this.storage[this.length] = value;
  return ++this.length;
};

Stack.prototype.pop = function () {
  if (!this.length) return;
  const popped = this.storage[this.length - 1];
  // Deletion is optional and not necessary
  delete this.storage[this.length - 1];
  this.length -= 1;
  return popped;
};

/**
* Queue Class
*/

// You could change the frequency of when inbox empties to outbox depending on use
function Queue() {
  this.inbox = new Stack();
  this.outbox = new Stack();
  this.length = 0;
}

Queue.prototype.enqueue = function (item) {
  this.inbox.push(item);
  this.length += 1;
  return this.length;
};

Queue.prototype.dequeue = function () {
  if (!this.length) return;
  if (!this.outbox.length) {
    while (this.inbox.length) {
      this.outbox.push(this.inbox.pop);
    }
  }
  this.length -= 1;
  const dequeued = this.outbox.pop();
  return dequeued;
};

module.exports = {Stack: Stack, Queue: Queue};
