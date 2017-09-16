/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
  this.length = 0;
}

function addLinkedList(l1, l2, carryover) {
  if(!l1 && !l2 && !carryover) return null;

  let sum = carryover || 0;

  if(l1) sum += l1.value;

  if(l2) sum += l2.value;

  const node = new Node(sum % 10);

  node.next = addLinkedList(
    l1 ? l1.next : null,
    l1 ? l1.next : null,
    sum > 10 ? 1 : 0
  );

  return node;
  
  // let node = new Node();
  // let carried = 0; 

  // while(l1 || l2){
  //   if(l1.value + l2.value >= 10){
  //     carryover = (l1.value + l2.value) % 10
  //   } else if (node.length === 0){
  //     node(l1.value + l2.value + carryover);
  //     this.length++;
  //   } else {
  //     node.next = node(l1.value + l2.value + carryover);
  //     node.length++;
  //   }
  //   l1 = l1.next;
  //   l2 = l2.next;
  // }
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
