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

const la = new Node(1);
l1.next = new Node(2);

const lb = new Node(3);
l2.next = new Node(4);


function zip(l1, l2) {
  if (!l1) return l2;
  const zipped = l1;
  while (l2) {
    let temp = l1.next;
    l1.next = l2;
    l1 = l2;
    l2 = temp;
  }
  return zipped;
}

function zipR(l1, l2) {
  if (!l1) return l2;
  l1.next = zipR(l2, l1.next);
  return l1;
}

module.exports = {Node: Node, zip: zip};
