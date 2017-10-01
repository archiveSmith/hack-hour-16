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

BinaryTree.prototype.insert = function(value) {
    if (value <= this.value) {  
      if(!this.left) this.left = new BinaryTree(value); 
      else this.left.insert(value); 
    }
    else if (value > this.value){ 
      if (!this.right) this.right = new BinaryTree(value);
      else this.right.insert(value); 
    }
}



BinaryTree.prototype.validBST = function(iteratorFunc) {
  if (this.left) this.left.validBST(iteratorFunc);
  iteratorFunc(this.value);
  if (this.right) this.right.validBST(iteratorFunc);
}

var arr = [];
function log(value) {
arr.push(value) 
}

function isInOrder(arr){
for(var i = 0; i < arr.length; i++){
  if(arr[i] < arr[i+1]) {
    return true
  } else {
    return false
  }
}
}

var bst = new BinaryTree(50);

bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);


bst.validBST(log)
isInOrder(arr)


module.exports = {BinaryTree: BinaryTree, validBST: validBST};
