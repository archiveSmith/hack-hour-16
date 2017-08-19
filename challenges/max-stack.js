/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

class Stack {
  constructor(value) {
    this.index = 0;
    this.max = null;
    this.stack = [];
  }

  push(value) {
      this.stack.push(value)
      if (value > this.max || !this.max) this.max = value
      return ++this.index
  }

  pop() {
      this.index--;
      let poppedValue = this.stack.pop()
      if (poppedValue === this.max) {
        this.max = Math.max(...this.stack)
      }
      return poppedValue
  }

  getMax() {
    return this.max
  }
}


module.exports = Stack;


let myStack = new Stack();
myStack.push(3)
myStack.push(5)
myStack.push(6)
myStack.pop()
myStack.push(5)
myStack.pop();
myStack.push(500)
console.log(myStack)
console.log(myStack.getMax())
