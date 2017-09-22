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

function Node(value) {
  this.value = value;
  this.next = null;
}

function deleteDups(head) {
  let current = head
  if (!head) return null

  while (current) {
    let currentValue = current.value
    let current2 = current.next

    console.log('currentValue: ', currentValue)
    while (current2) {
      console.log('next current value: ', current2)
      if (current2.value === currentValue) {
        current2.value = current2.next.value
        current2.next = current2.next.next
      }
      current2 = current2.next
    }
    current = current.next
  }
  return head
}
let list = new Node(1)
list.next = new Node(2)
list.next.next = new Node(2)
list.next.next.next = new Node(3)
console.log(deleteDups(list))
// console.log(list)

module.exports = deleteDups;
