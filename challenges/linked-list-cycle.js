/**
 * We are familar with linked lists being linear and terminating:
 *
 * A->B->C->D
 *
 * However, linked lists can also have cyclical references:
 *
 * A->B->C->D
 *    ^     |
 *    |     V
 *    G<-F<-E
 *
 * Create a function that accepts a linked list and returns true if the linked list has a cyclical reference
 *
 * var node1 = new Node('1');
 * var node2 = node1.next = new Node('2');
 * var node3 = node2.next = new Node('3');
 * var node4 = node3.next = new Node('4');
 * var node5 = node4.next = new Node('5');
 * hasCycle(node1); // => false
 * node5.next = node2;
 * hasCycle(node1); // => true
 *
 * Challenge 1: Do this in linear time
 * Challenge 2: Do this in constant space
 * Challenge 3: Do not mutate the original nodes in any way
 *
 */

var Node = function(value) {
  this.value = value;
  this.next = null;
}

function hasCycle(head) {
  //store values of each node starting from the head? ..is that constant space
  //constant space means the memory you use does not depend on the size of the input
  //if we create a storage to store each node's value it IS depending on the size of the input....TRY AGIAN

  //2 EDGE CASES:
  if (!head || !head.next) return false
  let current1 = head //current will loop one node at a time
  let current2 = head.next //current2 will loop two nodes at a time

  //if the list is circular eventually current2 will meet current1
  while(current1.value !== current2.value) {
    if (!current1.next || !current2.next.next) return false
    current1 = current1.next
    current2 = current2.next.next
  }
  return true
}
let node1 = new Node(1)
let node2 = node1.next = new Node(2)
let node3 = node2.next = new Node(3)

node3.next = node2
// console.log(node1)
console.log(hasCycle(node1))




module.exports = {Node: Node, hasCycle: hasCycle}
