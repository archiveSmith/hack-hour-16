/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

const la = new Node(1);
la.next = new Node(2);
la.next.next = new Node(3);

console.log(reverseLinkedList(la));

function reverseLinkedList(head) {
  let start = head;
  let subsequent = null;

  while (start) {
    const save = start.next;
    start.next = subsequent;
    subsequent = start;
    start = save;
  }
  return subsequent;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};

/*
start = 1
subs = null
------
save = 2
1.next = subs (null)
subs = 1
start = 2
------
save = 3
2.next = subs (1)
subs = 2
start = 3
------
etc.... until start is null at which point return subs.
*/
