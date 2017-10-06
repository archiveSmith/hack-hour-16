/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  let zippedHead = new Node();
  let next1;
  let next2;
  let flag = false;
  let curNode;
  let didOneRunOut = false;
  let didTwoRunOut = false;
  

  zippedHead.value = l1.value;
  next1 = l1.next;
  next2 = l2;
  curNode = zippedHead;
  // curNode.next = l2;
  // console.log('adding: ', zippedHead.value);
  
  // loop until one of the lists runs out
  while (true) {
    // check if list 1 ran out
    if (next1 === null) {
      // console.log('list 1 ran out'); 
      didOneRunOut = true;
      break;
    }

    // check if list two ran out
    else if (next2 === null) {
      // console.log('list 2 ran out');            
      didTwoRunOut = true;
      break;
    }

    // if true, add from l1

    if (!didOneRunOut && !didTwoRunOut) {
      if (flag) {
        // console.log('adding1: ', next1.value);
        curNode.next = next1;
        next1 = next1.next;
        // curNode.next = next1;  
        curNode = curNode.next;    
        
        flag = false;      
      }

      // else add from l2
      else {
        // console.log('adding2: ', next2.value);      
        curNode.next = next2;
        next2 = next2.next;
        // curNode.next = next2;
        curNode = curNode.next;            
        flag = true;            
      }

    }
  }
  // console.log('zipped next: ', zippedHead.next);

  // console.log('curnode: ', curNode);

  // check if 1 or two ran out
    // add remaining from list 1
  if (didOneRunOut === false) {
    while (didOneRunOut === false) {
      if (next1 === null) didOneRunOut = true;
      else {
        // console.log('finishing1: ', next1.value);              
        curNode.next = next1;
        next1 = next1.next;
        // curNode.next = next1;    
        curNode = curNode.next;    
      }
    }
  }
  // add remaining from list 2
  else {
    while (didTwoRunOut === false) {
      if (next2 === null) didTwoRunOut = true;
      else {
        // console.log('finishing2: ', next2.value);                    
        curNode.next = next2;
        next2 = next2.next;
        // curNode.next = next2;
        curNode = curNode.next;    
        
      }  
    }
  }

  // return the head

  // console.log('********');
  // console.log(zippedHead);
  return zippedHead;
};

// let node1 = new Node(1);
// let node2 = new Node(2);
// let node3 = new Node(3);

// node1.next = node2;
// node2.next = node3;
// node3.next = null;

// let node4 = new Node(4);
// let node5 = new Node(5);
// let node6 = new Node(6);

// node4.next = node5;
// node5.next = node6;
// node6.next = null;

// zip(node1, node4);


module.exports = { Node: Node, zip: zip };


// merge two linked lists
  // add node from l1, then add node from l2
    // check if l2's next node is null
      // if one list runs out, add nodes from other list until it runs out

    // keep track of which node you are on in each list