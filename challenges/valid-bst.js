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
;
function validBST(tree) {
  node = new BinaryTree();
  if (tree.value > node.value && tree.left === undefined) {
    tree.left = node;
  } else if (tree.value > node.value) {
    validBST(tree.left);
  } else if (tree.value < node.value && tree.right === undefined) {
    tree.right = node;
  } else if (tree.value < node.value) {
    recurse(tree.right);
  }
}


module.exports = {BinaryTree: BinaryTree, validBST: validBST};
