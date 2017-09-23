/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */

function Node(value) {
  this.value = value;
  this.next = null;
}

let ll = new Node(1);
ll.next = new Node(2);
ll.next.next = new Node(2);
ll.next.next.next = new Node(3);
ll.next.next.next.next = new Node(3);
ll.next.next.next.next.next = new Node(3);


function deleteDups(head) {
  let curr = head;
  const dups = {};
  while (curr.next) {

    console.log(dups);
    console.log(curr.next.value);
    console.log(curr.next.value in dups);

    if (curr.next.value in dups) {
      curr.next = curr.next.next;
    } else dups[curr.next.value] = true;
    curr = curr.next;
  }
  return head;
}

console.log(deleteDups(ll).next);

module.exports = deleteDups;
