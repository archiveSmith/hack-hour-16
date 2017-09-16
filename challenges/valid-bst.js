/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be < its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 * Assume that each value in the tree is unique.
 */
 

function Node(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

class BinaryTree{
    constructor(){
        this.root = null;
    }

    add(value){
       const node = new Node(value);
       if(!this.root){
           this.root = node;
           return true;
       } else {
           //Begin traversing the tree
           let current = this.root;
           while(current){



               if(node.value < current.value){
                   if(!current.left){
                       current.left = node;
                       return true;
                   }
                   current = current.left;



               } else if (node.value < current.value){
                   if(!current.right){
                       current.right = node;
                       return true;
                   }
                   current = current.right



               } else {
                   return false;
               }
           }
       }
    }
}

const validBST = new BinaryTree();

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
