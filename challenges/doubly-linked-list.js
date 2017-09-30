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
  const newNode = new Node(val)
  if (!this.head) {
    this.head = newNode
    this.tail = newNode
  } else {
    const previousNode = this.tail
    this.tail.next = newNode
    this.tail = newNode
    this.tail.prev = previousNode
  }
}
/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let current = this.head
  while (current) {
    if (current.val === val) {
      if (current === this.head && current === this.tail) {
        //only one item in list
        this.head = null
        this.tail = null
        break
      } else if (current === this.head) {
        this.head = this.head.next
        this.head.prev = null
        break
      } else if (current === this.tail) {
        //last item on the list
        this.tail = this.tail.prev
        this.tail.next = null
        break
      } else {
        current.prev.next = current.next
        current.next.prev = current.prev
        break
      }
    }
    current = current.next
  }
};

let list = new LinkedList()
// list.add('hi')
list.add(1)
list.add(1)
list.remove(1)
// list.remove(1)
console.log(list)

module.exports = LinkedList;
