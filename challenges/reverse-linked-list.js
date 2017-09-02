/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */


function LinkedList() {
    this.head = null;
    this.tail = null;
  }
  
  function Node(val) {
    this.value = val;
    this.next = null;
  }
  
  LinkedList.prototype.push = function(value) {
    if(!this.head){
      this.head = this.tail = new Node(value)
      return this.head
    }
    this.tail.next = new Node(value)
    this.tail = this.tail.next
  };
  
  LinkedList.prototype.reverseLinkedList = function(value) {
    let arr = []
    while(this.head.next){
      arr.push(this.head.value)
      this.head = this.head.next
    }
    arr.reverse()
    for(let i = 0; i < arr.length; i++){
      this.tail.next = new Node(arr[i])
      this.tail = this.tail.next
    }
      console.log(arr)
    console.log(this.head)
    console.log(this.tail)
   
  };
  
  let list = new LinkedList()
  list.push(1)
  list.push(2)
  list.push(3)
  list.push(4)
  list.push(5)
  list.push(6)
  console.log(list)
  console.log(list.reverseLinkedList())
  
module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
