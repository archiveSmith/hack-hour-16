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

// check if left depth === right depth
function superbalanced(tree) {
  // check if balanced
  let leftC = 0;
  let rightC = 0;
  // if empty, return true
  if (this.left === null && this.right === null) return true;

  // count up left and right
  traverse(tree);

  // if left === right +/- 1 return true
  console.log(`left: ${leftC},  right: ${rightC}`)
  if (leftC === rightC || leftC === rightC + 1 || leftC === rightC -1) return true
  return false;

  function traverse(node) {
    if (node.left) {
      leftC++
      traverse(node.left);
    }
    if (node.right){
      rightC++;
      traverse(node.right);
    }
  }
}

// make a test tree
const ten = new BinaryTree(10);
const nine = new BinaryTree(9);
const eight = new BinaryTree(8);
const seven = new BinaryTree(7);
const six = new BinaryTree(6);
const five = new BinaryTree(5);

seven.left = six;
six.left = five;
seven.right = nine;
nine.right = ten;
nine.left = eight;

console.log(superbalanced(seven));

// unbalanced tree
const four = new BinaryTree(4);
const three = new BinaryTree(3);
const two = new BinaryTree(2);
five.left = three;
three.left = two;
three.right = four;

console.log(superbalanced(seven));

module.exports = { BinaryTree: BinaryTree, superbalanced: superbalanced };
