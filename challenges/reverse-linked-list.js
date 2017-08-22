/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
  let current = head;
  let stack = [];

  while (current) {
    stack.push(current.value)
    current = current.next
  }
  let current2 = head
  while (current2) {
    current2.value = stack.pop();
    current2 = current2.next
  }
  return head
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};

let myList = new Node(0);
myList.next = new Node(1);
myList.next.next = new Node(2);
// console.log(myList)
console.log(reverseLinkedList(myList))
