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
}
let one = new Node(1);
one.next = new Node(2);;
one.next.next = new Node(3);;
let two = new Node(4);
two.next = new Node(5);
two.next.next = new Node(6);
// function addLinkedList(l1, l2, answer = [l1.value+l2.value]) {
//   if (!l1.next && !l2.next) {
//     return answer
//   }
//   if (l1.next && l2.next) {
//     answer.push(l1.next.value + l2.next.value)
//   }
//   if (l1.next && !l2.next) {
//     answer.push(l1.next.value)
//   }
//   if (!l1.next && l2.next) {
//     answer.push(l2.next.value)
//   }
//   l1 = l1.next
//   addLinkedList(l1, l2, answer)
// }
let answer = new Node()
function addLinkedList(l1, l2, pointer = new Node()) {
  if(!answer.value) answer.value = l1.value + l2.value
  pointer = answer
  if (!l1.next && !l2.next) {
    return answer
  }
  while (l1 && l2) {
    pointer = pointer.next
    l1 = l1.next
    l2 = l2.next
  }
  console.log('answer', answer)
  if (l1.next && !l2.next) {
    answer.next = new Node(l1.next.value)
  }
  if (!l1.next && l2.next) {
    answer.next = new Node(l2.next.value)
  }
  
  return answer
}
console.log(addLinkedList(one,two))
module.exports = {Node: Node, addLinkedList: addLinkedList};
