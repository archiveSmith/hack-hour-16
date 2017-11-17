/*
Create a doubly linked list with an add and remove method
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

/*
Adds a node to the end of the list
 */
LinkedList.prototype.add = function(val) {
	if(!this.head){
    this.head = this.tail = new Node(val)
    return this.head
  }
	if(!this.tail.next){
    this.tail.next = new Node(val)
    this.tail.next.prev = this.tail.val
    this.tail = this.tail.next
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let temp = Object.assign(Object.create(null), this)
  this.tail = this.head
  if (this.head.val === val) {
    this.head = this.head.next
    return this
  }
  while (this.tail.next) {
    this.tail = this.tail.next
    if(this.tail.val === val && this.tail.next) {
      this.tail = this.tail.next
    }
  }
  console.log('tail', this.tail)
  let answer = new LinkedList()
  answer.add(temp.head.val)
  while (temp.head.next) {
    if (temp.head.val !== val) {
      answer.add(temp.head.val)
    }
    temp.head = temp.head.next
  }
  answer.add(this.tail)
  this.head = answer.head
  this.head = this.head.next
  this.tail = answer.tail.val
  this.tail.next = null
  this.tail.prev = answer.tail.prev\
};

module.exports = LinkedList;
