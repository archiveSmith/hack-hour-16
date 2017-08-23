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

function reverseLinkedList(head) {
    let current = JSON.parse(JSON.stringify(head))
    let dump = [];

    while (current) {
        if (!current.next) {
            dump.push(current)
            break;
        }
        dump.push(current);
        current = current.next;
    }

    for (let i = dump.length - 1; i > -1; i--) {
        dump[i].next = dump[i - 1]
    }

    return dump[dump.length - 1]
}


module.exports = { Node: Node, reverseLinkedList: reverseLinkedList };