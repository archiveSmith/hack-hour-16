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

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  let current = head
  let listLength = 0;
// find length of list
  while (current) {
    listLength++;
    current = current.next;
  }
// iterate again up to list-k, and save each node to kNode..return kNode.value
  kNode = head
  for (let i = 0; i < listLength-k; i++) {
    kNode = kNode.next;
  }
  return kNode.value;
}
// const a = new Node('a')
// const b = new Node('b')
// const c = new Node('c')
// const d = new Node('d')
// const e = new Node('e')
// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// console.log(kthToLastNode(2, a))

//  ***2 iterations..can do one??


// /*function list() {
//   this.head = null;
//   this.tail = null;
// }
//
// function Node(val) {
//   this.value = val;
//   this.next = null;
// }
//
// list.prototype.kthToLastNode = function(k) {
//   let current = this.head
//   let listLength = 0;
//
//   while (current) {
//     listLength++;
//     current = current.next;
//   }
//   kNode = this.head
//   for (let i = 0; i < listLength-k; i++) {
//     kNode = kNode.next;
//   }
//   return kNode.value;
//   // return listLength
// }
//
// list.prototype.add = function (value) {
//   let newNode = new Node(value)
//   if (!this.head) {
//     this.head = newNode
//     this.tail = newNode
//   } else {
//    this.tail.next = newNode;
//    this.tail = this.tail.next
//   }
// }
//
// let myList = new list();
// myList.add(3);
// myList.add(4)
// myList.add(5)
// myList.add('hi')
// myList.add(true)
// myList.add('12r1')
// myList.kthToLastNode(4)*/
