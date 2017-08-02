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

 //setup for testing
function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.value = val;
  this.next = null;
}

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