/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

// function Stack() {
//   // body...
// }

class Stack {
  constructor() {
    this.length = 0;
    this.contents = {};
    this.max;
  }

  // add new value at length
  push(num) {
    if (!Number.isNaN(num)) {
      this.contents[this.length] = num;
      if (this.length === 0) this.max = num;
      else if (num > this.max) this.max = num;
      this.length++;      
    }
  }

  // remove value at end
  pop() {
    if (this.length > 0) {
      this.length--;
      let tmp =  this.contents[this.length];  
      delete this.contents[this.length];

      // find new max
      if (this.length === 1) this.max = undefined;
      else if (tmp = this.max && this.length > 0) {
        const keys = Object.keys(this.contents);
        this.max = keys[0];
        keys.forEach((key) => {
          if (this.contents[key] >= this.max) this.max = this.contents[key];
        });
      }

      return tmp;
    }

    // else return console.log('Error: stack is empty!');
  }

  getMax() { 
    console.log('max: ', this.max);
    return this.max; 
  }
}

let myStack = new Stack();

// console.log(myStack.getMax());
// myStack.push(1);
// myStack.push(2);
// myStack.push(3);
// myStack.push(4);

// console.log(myStack.getMax() === 4)

// myStack.push(10);
// myStack.pop();

// console.log(myStack.getMax() === 4);

// myStack.push(499);
// myStack.push(15);
// myStack.push(20);

// console.log(myStack.getMax() === 499);

// myStack.pop();
// myStack.pop();
// myStack.pop();
// myStack.pop();
// myStack.pop();
// myStack.pop();
// myStack.pop();
// myStack.pop();

// console.log(myStack.getMax());

module.exports = Stack;