/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack(value) {
  this.value = value
  this.list = [];
}


/**
* Queue Class
*/


function Queue() {
  this.list = {};
}



let stack1 = new Stack(1)
console.log(stack1);
let stack2 = new Stack(2)


module.exports = {Stack: Stack, Queue: Queue};
