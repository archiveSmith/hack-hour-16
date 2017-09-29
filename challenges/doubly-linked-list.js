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

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);


a.next = b;
b.prev = a;
b.next = c;
c.prev = b;

const myLL = new LinkedList();
myLL.head = a;
myLL.tail = c;

/*
Adds a node to the end of the list
 */
LinkedList.prototype.add = function(val) {
  const node = new Node(val);
  this.tail.next = node;
  node.prev = this.tail;
  this.tail = node;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let node = this.head;
  while (node) {
    if (node.val === val) {
      // adjust adjacent next / prev vals and return
      if (this.head === node) this.head = node.next;
      if (this.tail === node) this.tail = node.prev;
      if (node.prev) node.prev.next = node.next;
      if (node.next) node.next.prev = node.prev;
      return val;
    }
    node = node.next;
  }
  return 'value not found';
};

module.exports = LinkedList;
