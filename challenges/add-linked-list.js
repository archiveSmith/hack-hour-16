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
  let newList = new Node(l1.value + l2.value)
  let current1 = l1.next
  let current2 = l2.next

  while(current1) {
    console.log('abc', new Node(current1.value + current2.value))
    newList.next = new Node(current1.value + current2.value)

    current1 = current1.next
    current2 = current2.next
    newList = newList.next
  }
  return newList
}

// console.log(list1)
// console.log(list2)
// console.log(addLinkedList(list1, list2))
module.exports = {Node: Node, addLinkedList: addLinkedList};

let list1 = new Node(2)
list1.next = new Node(1)
list1.next.next = new Node(5)

let list2 = new Node(5)
list2.next = new Node(9)
list2.next.next = new Node(2)

function addLinkedList2(l1, l2) {
  let current1 = l1
  let current2 = l2

  let sum1 = [];
  let sum2 = [];
  while (current1) {
    sum1.push(current1.value)
    sum2.push(current2.value)
    current1 = current1.next
    current2 = current2.next
  }
  sum1.reverse()
  sum2.reverse()
  let sum = (parseInt(sum1.join('')) + parseInt(sum2.join(''))).toString().split('')
  sum.reverse()
  let l3 = new Node(sum[0])
  let current = l3
  for (let i = 1; i < sum.length; i++) {
    current.next = new Node(sum[i])
    current = current.next

  }
  return l3
}

console.log(addLinkedList2(list1, list2))
