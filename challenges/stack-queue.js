/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.stack = new Array()
  }
  let firstStack = (new Stack).stack
  let secondStack = (new Stack).stack
  /**
  * Queue Class
  */
  
  function Queue(f1) {
    this.queue = f1
    
    this.enqueue = (n) => {
      while(f1.length){
        for(let i = 0; i < f1.length; i++){
          secondStack.unshift(f1.pop())
        }
      }
      f1.push(n)
      for(let j = 0; j < secondStack.length; j++){
        f1.push(secondStack[j])
      }
      secondStack = (new Stack).stack
      return f1
    }
    
    this.dequeue = () => {
      return f1.pop()
    }
  }
  let queue = (new Queue([12,3,34,32],secondStack))
  // console.log(queue.enqueue(3), " this is que")
  // console.log(queue.enqueue(4), " this is que")
  // console.log(queue.dequeue())
  // console.log(queue.queue)

module.exports = {Stack: Stack, Queue: Queue};
