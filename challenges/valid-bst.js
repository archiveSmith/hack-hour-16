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

function validBST(tree) {

}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};


function checkTree(tree) {
  const arr = [];
  function depthFirstIn(tree) {
    if (!tree) return;
    depthFirstIn(tree.left);
    arr.push(tree.value);
    depthFirstIn(tree.right);
  }

  depthFirstIn(tree)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= arr[i + 1]) return false;
  }
  return true;
}
