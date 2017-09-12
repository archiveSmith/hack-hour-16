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
  if (k === 0) {
  return "please select another k";
}
  // create an array and push head to array
  let arr = [head];
  // assign a variable to to the next node with head.next
  let nextNode = head.next;
  // while looping push all the nodes to array until node.next = null
  while (nextNode !== null) {
    arr.push(nextNode);
    nextNode = nextNode.next;
  }

  return arr[arr.length - k].value;
}
