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

function superbalanced(tree, count = 0) {

  // if (value > this.value) {
  //   this.right === null ? this.right = newNode : this.right.add(value);
  // } else {
  //   this.left === null ? this.left = newNode: this.left.add(value);
  // }
  if (tree.left !== null) count++;
  if (tree.right !== null) count--;
  if (tree === null) return count
  return superbalanced(tree.left, count) && superbalanced(tree.right, count)


}
let newTree = new BinaryTree(20)
newTree.left = new BinaryTree(10)
newTree.left.left = new BinaryTree(7)
newTree.left.right = new BinaryTree(12)
newTree.left.right.left = new BinaryTree(10)

newTree.right = new BinaryTree(15)
newTree.right.right = new BinaryTree(18)
console.log(newTree)
console.log(superbalanced(newTree))


module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
