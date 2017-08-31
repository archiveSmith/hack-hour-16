/**
 * Create a stack.Then create a queue using two stacks.
 * 
 */


function Stack() {
  this.length = 0;
  this.items = [];
}

Stack.prototype.push = function(val) {
  this.items[this.length] = val;
  this.length++;
}

Stack.prototype.pop = function() {
  this.length--;
  const tmp = this.items[this.length];
  delete this.items[this.length];
  return tmp;
}


/**
* Queue Class
*/

// the queue is two stacks
function Queue() {
  this.stackOne = new Stack;
  this.stackTwo = new Stack;
}

// Add to Queue
Queue.prototype.add = function(val) {
  this.stackOne.push(val);

  // move to stack two when stack 2 is empty
  while (this.stackOne.length > 0) {
    this.stackTwo.push(this.stackOne.pop());
  }
}

// remove from Queue
Queue.prototype.remove = function () {
  if (this.stackOne.length === 0) {
    if (this.stackTwo.length === 0) {
      // console.log('Queue is empty');
      return null;
    }  
    return this.stackTwo.pop();
  }

}

// let myQ = new Queue;

// myQ.add(1);
// myQ.add(2);
// myQ.add(3);
// myQ.add(4);
// myQ.add(5);

// console.log('pop: ', myQ.remove());
// console.log('pop: ', myQ.remove());
// console.log('pop: ', myQ.remove());
// console.log('pop: ', myQ.remove());
// console.log('pop: ', myQ.remove());
// console.log('pop: ', myQ.remove());

module.exports = {Stack: Stack, Queue: Queue};
