/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */
class Stack {
  constructor(){ 
    this.stack = []
  }
 
  push(value){
   this.stack[this.stack.length] = value
   return this.stack.length
  }
  pop(){
   return this.stack.splice(this.stack.length-1, 1)[0]
   }
   getMax(){
     if(!this.stack.length){return "empty array"}
     if(this.stack.toString().match(/[0-9]+/gi).length != this.stack.length){return "one of your elements is not a number"}
     return Math.max(...this.stack)
   }
 }
let stack = new Stack()
module.exports = Stack;