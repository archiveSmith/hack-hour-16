/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be < its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 * Assume that each value in the tree is unique.
 */


function BinaryTree(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

function validBST(tree, min ,max) {
  if (tree == null) return true; // base case
  if ((min !== null && tree.value <= min) || (max !== null && tree.value >= max)) {
    return false;
  }

  return validBST(tree.left, min, tree.value) && validBST(tree.right, tree.value, max)
}

let bst = new BinaryTree(10)
bst.left = new BinaryTree(5)
bst.right = new BinaryTree(12)
bst.left.left = new BinaryTree(3)
bst.left.right = new BinaryTree(7)
bst.left.left = new BinaryTree(1)
bst.right.left = new BinaryTree(11)
bst.right.right = new BinaryTree(14)
console.log(bst)
console.log(validBST(bst))
module.exports = {BinaryTree: BinaryTree, validBST: validBST};
