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

 // ################
 // ### APPROACH ###
 // ################
 // go through linked list COMPLETELY using a while loop
 // check if k is in bounds
 // keep 


 function LinkedList(...nodes) {
  this.head = null;
  this.tail = null;

  nodes.forEach( node => this.push(node) )
}
//  adds node to end of list
LinkedList.prototype.push = function(value) {
// when first node is created change linkedList. head and .tail to node position in memory
// when add new node the linkedlist.tail value becomes new node position in memory.
//last node created needs to point to node being created

	// make our new node, and assign it to newNode
	let newNode = new Node(value);

	// if no head present
		// make a head
		// point head to first value
	// if (this.head == null) {    //(!this.head)
	if (!this.head) {
		this.head = newNode;
		this.tail = newNode;

		// approach
		// this.head = this.tail = newNode;
	}

	else {
		// let curNode = this.tail 	// defining the last node
		// curNode.next = newNode	// re-wire the last node to the new node
		// this.tail = newNode. 	// re-point the tail


		// approach :
		this.tail.next = newNode;  // old node to new node
		this.tail = this.tail.next // make tail new node
	}
};



function Node(val) {
  this.value = val;
  this.next = null;
}

// Plan: go through the entire linked list. Push node values to an array. 
// Return the value in the array at [Arraylength-k]

function kthToLastNode(k, head) {

  // ********************
  // * INPUT VALIDATION *
  // ********************

  // check if NaN, <= 0, head is null, and if head is not an object
  if (isNaN(k)) return errorMessage();
  if (k <= 0) return errorMessage();
  if (!head || typeof head !== 'object') return errorMessage("[Error] head is empty");

  // ***************
  // * Run Program *
  // ***************

  // an array to hold the values of our nodes
  const arrOfNodeValues = [];

  // start at head
  let curNode = head;

  // iterate through linked list
  // store values of nodes in the array
  // when end of list is reached, stop iterating
  while (curNode.next) {
    arrOfNodeValues.push(curNode.value);
    curNode = curNode.next;
  }
  arrOfNodeValues.push(curNode.value);  // put last node's value in list

  // check if k is out of bounds
  if (arrOfNodeValues.length - k < 0) return errorMessage("[Error] " + k +" is out of bounds");

  // return array[length-k]
  return arrOfNodeValues[arrOfNodeValues.length - k];

  // call and return me if input isn't good!
  function errorMessage(string) {
    if (string) {
      console.log(string);
      return null;
    }
    console.log("[Error] not a valid position in list");
    return null;
  }
} 

// // ***********
// // ** TESTS **
// // ***********

let myList = new LinkedList();
console.log("0 (bad): " + kthToLastNode(1, myList.head));

myList.push(1);
myList.push(2);
myList.push(3);
myList.push(4);
myList.push(5);
myList.push(6);
myList.push(7);
myList.push(8);

// * Good *

console.log("1 (8): " + kthToLastNode(1, myList.head));
console.log("5 (4): " + kthToLastNode(5, myList.head));
console.log("8 (1): " + kthToLastNode(8, myList.head));

// * Out of bounds *

console.log("9 (bad): " + kthToLastNode(9, myList.head));
console.log("1000 (bad): " + kthToLastNode(1000, myList.head));

// * weird things being passed *

console.log("0: " + kthToLastNode(0, myList.head));
console.log("-1: " + kthToLastNode(-1, myList.head));
console.log("[]: " + kthToLastNode([], myList.head));
console.log("{}: " + kthToLastNode({}, myList.head));
console.log("bad head: " + kthToLastNode({}, myList.head));


console.log("bad head: " + kthToLastNode(2, 7));


 function LinkedList(...nodes) {
  this.head = null;
  this.tail = null;

  nodes.forEach( node => this.push(node) )
}
//  adds node to end of list
LinkedList.prototype.push = function(value) {
// when first node is created change linkedList. head and .tail to node position in memory
// when add new node the linkedlist.tail value becomes new node position in memory.
//last node created needs to point to node being created

	// make our new node, and assign it to newNode
	let newNode = new Node(value);

	// if no head present
		// make a head
		// point head to first value
	// if (this.head == null) {    //(!this.head)
	if (!this.head) {
		this.head = newNode;
		this.tail = newNode;

		// approach
		// this.head = this.tail = newNode;
	}

	else {
		// let curNode = this.tail 	// defining the last node
		// curNode.next = newNode	// re-wire the last node to the new node
		// this.tail = newNode. 	// re-point the tail


		// approach :
		this.tail.next = newNode;  // old node to new node
		this.tail = this.tail.next // make tail new node
	}
};

