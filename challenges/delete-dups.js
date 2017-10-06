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

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


const deleteDups = head => {
  let temp = [];
  let curNode = head;
  let parent = head;

  // loop through nodes
  while (curNode != null) {
    // check if dup
    if (temp.includes(curNode.value)) parent.next = curNode.next;

    else temp.push(curNode.value);

    parent = curNode;
    curNode = curNode.next;
  }

  // test
  // curNode = head;
  // while (curNode != null) {
  //   console.log('node: ', curNode.value);
  //   curNode = curNode.next;
  // }

  return head;
}

// // testing
// const one = new Node(1);
// const two = new Node(2);
// const three = new Node(3);
// const dup = new Node(3);
// const four = new Node(4);

// one.next = two;
// two.next = three;
// three.next = dup;
// dup.next = four;

// console.log(deleteDups(one));

module.exports = deleteDups;
