/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  // check for valid k
  if (k === 0) {
    return 'invalid k';
  }
  // declare a variable values = []
  const values = [head.value];
  let nextNode = head.next;
  // loop through all nodes in head
  while (nextNode) {
    // push value of current node in values array
    values.push(nextNode.value);
    // reassign head to next node
    nextNode = nextNode.next;
  }
  // return kth to last element in values array
  return values[values.length - k];
}
