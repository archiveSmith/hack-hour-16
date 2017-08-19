/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2, value) {
  l1 = new Node(value);
  l2 = new Node(value);
  let head;

  if (l1 === null) return l2;
  if (l2 === null) return l1;

  while (l1.next !== null) {
    if (l1.next.value > l2.value) {
      let temp = l1.next;
      l1.next = l2;
      l2 = temp;
    }
    l1 = l1.next;
  }
  if (l1.next == null) l1.next = l2;
  head = l1;
  return head;
}

module.exports = { Node, zip };
