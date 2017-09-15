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
  let curr1 = l1;
  let curr2 = l2;

  const result = new Node((curr1.value + curr2.value) % 10);
  let tail = result;
  let carry = (curr1.value + curr2.value) - result.value;
  curr1 = curr1.next;
  curr2 = curr2.next;

  while (curr1 && curr2) {
    const val = (curr1.value + curr2.value + carry) % 10;
    carry = ((curr1.value + curr2.value) - val) / 10;
    const node = new Node(val);
    tail.next = node;
    tail = node;

    curr1 = curr1.next;
    curr2 = curr2.next;
  }

  return result;
}

function addll(l1, l2, carry) {
  if (!l1 && l2 && !carry) return null;
  let sum = carry || 0;
  if (l1) sum += l1.value;
  if (l2) sum += l2.value;
  const node = new Node(sum % 10);
  node.next = addll(
    l1 ? l1.next : null,
    l2 ? l2.next : null,
    sum > 0 ? 1 : 0,
  );
  return node;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
