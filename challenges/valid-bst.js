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
// BinaryTree.prototype.add = function(value) {
//   if(!this.value){this.value = value}
//   if(this.value < value){
//     if(!this.right){
//     	this.right = new BinaryTree(value)
//     } else{this.right.add(value)}
//   }
//   if(this.value > value){
//     if(!this.left){
//     	this.left = new BinaryTree(value)
//     } else{this.left.add(value)}
//   } 
// 	return this
// };

function validBST(tree, tracer = Object.assign(tree)) {
  if(tree.value < tree.left.value){return false}
  if(tree.value > tree.right.value){return false}
  function left(tree,tracer){
    if(tracer === null){return true}
    if(tree.left.value < tree.value){
    	tracer = tracer.left
  	}
    console.log('this is the left tracer', tracer)
    return left(tree,tracer)
  }
  function right(tree,tracer){
    if(tracer === null){return true}
		if(tree.right.value > tree.value){
    	tracer = tracer.right
      console.log('this is the right tracer', tracer)
  	}
    return right(tree,tracer)
  }
  return left(tree,tracer) && right(tree,tracer)
}
// let binTree = new BinaryTree(3)
//   binTree.add(2)
//   binTree.add(5)
//   binTree.add(1)
//   binTree.add(6)
//   console.log(binTree)
// console.log(validBST(binTree))


