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
  let l3;

  let current1 = l1;
  let current2 = l2;
  let current3 = l3;
  while (current1 || current2) {
    if (!l3) {
      l3 = new Node(current1.value)
      l3.next = new Node(current2.value)

      current1 = l1.next;
      current2 = l2.next;
      current3 = l3.next;
      console.log("initial list3: ", l3)
      console.log("i am initial current3 tail: ", current3)
    } else {
      console.log("--------------------------------------------------------")
      console.log("i am current1 node: ", current1)
      console.log("i am current2 node: ", current2)
      console.log("i am current3 node: ", current3)
      current3.next = new Node(current1.value);
      current3.next.next = new Node(current2.value);

      console.log("linked list3: ", l3)

      current1 = current1.next;
      current2 = current2.next;
      current3 = current3.next.next;
    }
  }
  return l3
};
let list1 = new Node('a');
let list2 = new Node(0);

list1.next = new Node('b');
list2.next = new Node(1);

list1.next.next = new Node('c');
list2.next.next = new Node(2);

console.log(zip(list1, list2))





module.exports = {Node: Node, zip: zip};
