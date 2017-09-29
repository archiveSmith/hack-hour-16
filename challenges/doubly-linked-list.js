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
LinkedList.prototype.add = function (val) {
  const newNode = new Node(val)
  const tail = this.tail
  newNode.prev = tail
  tail.next = newNode
  this.tail = newNode

};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function (val) {
  // traverse list
  let curNode = this.head
  if (curNode.val === val) {
    const removed = curNode.val
    this.head = curNode.next
    return removed
  }

  while (curNode) {
    if (curNode.next.val === val) {
      const removed = curNode.next.val
      // removed curNode.next
      curNode.next = curNode.next.next

      // attach curNode.next.next to curNode
      curNode.next.next.prev = curNode
      return removed
    }
    else curNode = curNode.next
  }

};

module.exports = LinkedList;
