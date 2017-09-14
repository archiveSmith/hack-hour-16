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
  let buffer = [];
  for (let i = head; i; i = i.next) {
    buffer.unshift(i.val);
  }
  for (let i = head; i; i = i.next) {
    i.val = buffer.shift();
  }
  return head;
}

let a = new Node(1);
let b = new Node(2);
let c = new Node(3);


module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};

// function reverseLinkedList(head) {
// let prev = null;
// let curr = head;
// let next;
//
// while (curr) {
//   next = curr.next;
//   curr.next = prev;
//   prev = curr;
//   curr = next;
// }
//
// head = prev;
// return head;
// }
