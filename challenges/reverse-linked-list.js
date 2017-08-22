/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
  //push to array
  //while this.next !== null
  const myArr = [];
  let myNode = head;
  if (myArr.length > 0){
    while (myNode.next !== null) {
      myArr.push(myNode.value);
      myNode = myNode.next;
    }
  }
  if (myNode.next === null) return myNode;
  myNode.next = new Node(myArr.length - 1);
  myArr.pop();
  reverseLinkedList(myNode.next);
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
