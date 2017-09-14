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

function addLinkedList(l1, l2) {
  let num1 = [];
  let num2 = [];
  let total;
  let curNode = l1;

  // loop through both lists to extract number from nodes
  // list 1
  while (curNode) {
    num1.push(curNode.value);
    curNode = curNode.next;
  }

  // list 2
  curNode = l2;
  while (curNode) {
    num2.push(curNode.value);
    curNode = curNode.next;    
  }

  // concat numbers from each list, then reverse
  num1 = Number(num1.reverse().join(''));
  num2 = Number(num2.reverse().join(''));
  // add numbers together
  total = num1 + num2;

  // console.log(`total: ${total} num1: ${num1} num2: ${num2}`)
  // reverse number, then split new number into digits
  total = String(total).split('').reverse();
  
  // put digits inside a linked list
  curNode = new Node(total[0]);
  startNode = curNode;
  for(let i = 1; i < total.length; i++) {
    curNode.next = new Node(total[i]);
    curNode = curNode.next;
  }

  // console.log(startNode);
  return startNode;

}

let l1 = new Node(2);
let n2 = new Node(1);
l1.next = n2;
let n3 = new Node(5);
n2.next = n3;

let l2 = new Node(5);
let n4 = new Node(9);
l2.next = n4;
let n5 = new Node(2);
n4.next = n5

addLinkedList(l1, l2);

// Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
// Output: 7 -> 0 -> 8


module.exports = { Node: Node, addLinkedList: addLinkedList };
