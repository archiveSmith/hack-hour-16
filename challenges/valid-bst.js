/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
* a valid binary search tree if it satisfies the following constraints:
*      at any given node, the value of all the nodes in its left tree must be < its value
*      at any given node, the value of all the nodes in its right tree must be > its value
* Assume that each value in the tree is unique.
*/

/**
* start at head, go left
  check left value, ensure it is less than prev value
  check right value, ensure it is less than prev value
    else return false

  if any values have returned false, immediately return false

*/


function BinaryTree(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

function validBST(tree) {
  // check left
  if (tree.left && tree.right) {
    
    if (tree.left.value > tree.value) { 
      return false;
    }

    if (tree.right.value < tree.value) {
      return false;
    }

    // if left is less, tree is valid
    if (tree.left.value < tree.value && tree.right.value > tree.value) {
      return validBST(tree.left) || validBST(tree.right);
    }
    if (tree.left.value < tree.value) return validBST(tree.left);
    if (tree.right.value > tree.value) return validBST(tree.right);

  }

  if (tree.left) {
    // if left is greater, tree is invalid
    if (tree.left.value > tree.value) { 
      return false;
    }
    // if left is less, tree is valid
    if (tree.left.value < tree.value) return validBST(tree.left);
  }
  if (tree.right) {
    if (tree.right.value < tree.value) {
      return false;
    }
    if (tree.right.value > tree.value) return validBST(tree.right);
  }

  return true;
}

// let myTree = new BinaryTree(5);
// myTree.left = new BinaryTree(3);
// myTree.left.left = new BinaryTree(1);
// myTree.left.right = new BinaryTree(4);

// myTree.right = new BinaryTree(7);
// myTree.right.right = new BinaryTree(8);
// myTree.right.left = new BinaryTree(6);

// console.log(validBST(myTree));

module.exports = { BinaryTree: BinaryTree, validBST: validBST };