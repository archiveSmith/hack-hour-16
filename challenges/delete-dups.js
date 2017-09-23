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


function deleteDups(head) {
  let inner;
  for (let outer = head; outer; outer = outer.next) {
    // make sure inner and outer start at the same node
    inner = outer;
    while (inner.next) {
      if (outer.value === inner.next.value) inner.next = inner.next.next;
      else inner = inner.next;
    }
  }
  return head;
}

// const Node = (value) => {
//   this.value = value;
//   this.next = null;
// };
// const a = new Node(1);
// const b = new Node(2);
// const c = new Node(2);
// const d = new Node(4);
// const e = new Node(5);
//
// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// console.log(deleteDups(a));


module.exports = deleteDups;
