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
  if (!head || typeof head !== 'object') {
    return undefined;
  }
  if (k <= 0) {
    return undefined;
  }
  let currHead = head;
  let length = 0;
  let count = 0;
  let result;

  while (currHead) {
    currHead = currHead.next;
    length++;
  }
  while (count < length - k) {
    head = head.next;
    result = head.value;
    count++;
  }
  return result;

}

// LinkedList.prototype.push = function(value) {
//   let node = new Node(value);
//   if (!this.head) {
//     this.head = node;
//     this.tail = node;
//   } else {
//     this.tail.next = node;
//     this.tail = this.tail.next
//   }
// }
//
// let user1 = new LinkedList();
//
// user1.push('A');
// user1.push('B');
// user1.push('C');
// user1.push('D');
// user1.push('E');
// console.log(user1);
//
// console.log(user1.head)

// function kthToLastNode(k, head) {
//
// }
