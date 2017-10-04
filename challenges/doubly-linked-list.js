/*
Create a doubly linked list with an add and remove method
 */
// Advantages of a Singly Linked List:
// Singly Linked List uses less memory per node (one pointer)
// Less housekeeping

// Advantages of a Doubly Linked List:
// Can easily reverse list
// Can traverse list both forward and backwards (useful in scenarios where we know element...)
// Time complexity of insertion and deletion at known position is O(1)...
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
  // declare const node and initialize to new node
  const node = new Node(value);
  // if no head, assign head and tail to node
  if (!this.head) this.head = this.tail = node;
  else {
    // set tail.next = node
    this.tail.next = node;
    // set node.prev = this.tail
    node.prev = this.tail;
    // set tail to node
    this.tail = node;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  // edge case:
  if (!this.head.value === value) {
    // if value = this.head.value, reassign this.head to this.head.next
    this.head = this.head.next;
    // reassign this.head.prev = null
    this.head.prev = null;
    return;
  }
  //check tail:
  else if (this.tail.value === value) {
    const temp = this.tail;
    this.tail.prev.next = null;
    this.tail = temp.prev;
    return;
  } else {
    let current = this.head;
    // loop through linked list
    while (current) {
      // if current.val === val, set current.next.prev to current.prev
      // set current.prev to current.next
      if (current.value === value) {
        current.next.prev = current.prev;
        current.prev.next = current.next;
        return;
      }
      current = current.next;
    }
  }
};

module.exports = LinkedList;
