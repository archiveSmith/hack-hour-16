/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
BinaryTree.prototype.add = function(value) {
  const leaf = new BinaryTree(value);
  if (value > this.value) {
    if (!this.right) this.right = leaf;
    else this.right.add(value);
  } else {
    if (!this.left) this.left = leaf;
    else this.left.add(value);
  }
};

const bst = new BinaryTree();
bst.push(3);
bst.push(2);
bst.push(4);
bst.push(1);
bst.push(5);

function height(tree) {
  if (!tree) return 0;
  return 1 + Math.max(height(tree.left), height(tree.right));
}

function maxDepth(node) {
  if (!node) return 0
  return Math.max(maxDepth(node.right), maxDepth(node.left)) + 1;
}

function minDepth(node) {
  if (!node) return 0;
  return Math.min(minDepth(node.right), minDepth(node.left)) + 1;
}

function superbalanced(tree) {
  const rightHeight = height(tree.right);
  const leftHeight = height(tree.left);
  const maxSide = Math.max(rightHeight, leftHeight);
  const minSide = Math.min(rightHeight, leftHeight);
  const min = minDepth(tree);
  const max = maxDepth(tree);
  return (maxSide - minSide <= 1) && (max - min <= 1);
}


module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
