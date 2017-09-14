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
link1 = new Node(2)
link2 = new Node(5)

link1.next = new Node(1)
link2.next = new Node(9)

link1.next.next = new Node(5)
link2.next.next = new Node(2)
function addLinkedList(l1, l2) {
  let addOn = 0;

    while (l1) {
      let holder = (l1.value + l2.value + addOn)
      holder = holder.toString().split('')

      if (holder.length > 1) {
        addOn = 0;
        addOn = parseInt(holder[0])
        let newLL = new Node(holder[holder.length -1])

      } else {

        var newLL = new Node(parseInt(holder))
        console.log(newLL)

      }
      l1 = l1.next
    }
    return newLL
}
addLinkedList(link1, link2)


module.exports = {Node: Node, addLinkedList: addLinkedList};
