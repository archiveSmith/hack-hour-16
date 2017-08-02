/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

<<<<<<< HEAD
 //setup for testing
function LinkedList() {
  this.head = null;
  this.tail = null;
}

=======
>>>>>>> a0598932afffedeb7098cc55bd823627a768f994
function Node(val) {
  this.value = val;
  this.next = null;
}

<<<<<<< HEAD
LinkedList.prototype.push = function(value) {
  let obj = new Node(value);
  if (!this.head) {
    this.head = obj;
    this.tail = obj;
  } else {
     this.tail.next = obj;
     this.tail = this.tail.next;
    }
  };

const a = new LinkedList('A');
a.push('B');
a.push('C');
a.push('D');
a.push('E');

// console.log(a);
//end setup for testing

function kthToLastNode(k, head) {
    let bind = function () {return function () {return this}};
    head.self = bind();
    thisNode = head.self();
    // console.log(thisNode)
    if (k === 0) {
        return thisNode.value;
    }
    return kthToLastNode(k-1, thisNode)
}

console.log(kthToLastNode(2, a.head));
=======
function kthToLastNode(k, head) {

}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
>>>>>>> a0598932afffedeb7098cc55bd823627a768f994
