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

// store values in a tmp array, reverse that array, then rejoin list
function reverseLinkedList(head) {
	let curNode = head;
	let next = curNode.next;

	let arr = [];

	while (curNode) {
		console.log(curNode.value);		
		arr.push(curNode);
		curNode = curNode.next;
	}

	arr = arr.reverse();

	for (let i = 0; i < arr.length; i++) {
		arr[i].next = arr[i+1];
		console.log('node: ', arr[i].value);
	}
	arr[arr.length-1].next = null;

	return arr[0];
}

// let node1 = new Node(1);
// let node2 = new Node(2);
// node1.next = node2;
// let node3 = new Node(3);
// node2.next = node3;
// let node4 = new Node(4);
// node3.next = node4;
// let node5 = new Node(5);
// node4.next = node5;
// let node6 = new Node(6);
// node5.next = node6;
// node6.next = null;

// console.log(reverseLinkedList(node1));

module.exports = { Node: Node, reverseLinkedList: reverseLinkedList };
