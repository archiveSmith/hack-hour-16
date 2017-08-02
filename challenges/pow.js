/*
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
/*
function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  let currHead = head;
  let length = 0;
  let count = 0;
  let result;
  
  while(currHead){
    currHead = currHead.next;
    length++;
  }
  
  while(count < length - k){
    head = head.next;
    result = head.value;
    count++;
  }
  return result;
}
*/

/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

//Refactored and reduced by 5 lines when executed; not much of a Maverick
function pow(base, power) {

    function checkMe(x, y) {
        x *= x;
        y -= 2;
        if (y !== 1) return checkMe(x, y);
        return x * base;
    }
    return checkMe(base, power)
}


//With Recusrion I suppose:
/*
function pow(base, power) {
    let store = 1;

    function checkMe(contain, x, y) {
        contain *= x;
        y--;
        if (y !== 0) return checkMe(contain, x, y);
        return contain * x;
    }
    return checkMe(store, base, power)
}
*/

//Initial:
/*
function pow(base, power) {
    if (base === 0 || power === 0) return 1;
    let store = 1;
    let i = 0;
    while (i < power) {
        store *= base;
        i++;
    }

    return store;
}
*/
module.exports = pow;