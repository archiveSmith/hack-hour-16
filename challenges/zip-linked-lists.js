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

function zip(l1, l2) {
  // const node1 = new Node();
  // const node2 = new Node();
  // let oldNode1 = l1;
  // let oldNode2 = l2;
  // if (!oldNode1) oldNode1 = node1;
  // if (!oldNode2) oldNode2 = node2;
  // while (l1 && l2) {
  //   oldNode1.next = node1;
  //   oldNode1 = node1;
  //   oldNode2.next = node2;
  //   oldNode2 = node2;
  // }
  console.log('l1: ', l1);
  console.log('l2: ', l2);
  if (!l1) return l2;
  l1.next = zip(l2, l1.next);
  return l1;
}

let myList = new Node(1);
myList.next = new Node(3);
// myList.next.next = new Node(5);
// myList.next.next.next = new Node(10);

let l2 = new Node(2);

zip(myList, l2);

let curr = myList;
while(curr) {
  console.log(curr.value);
  curr = curr.next;
}

module.exports = {Node: Node, zip: zip};
