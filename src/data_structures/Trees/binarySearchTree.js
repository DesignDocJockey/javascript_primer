'use strict';

/** 
 * A Valid Binary Search 
 *  All Nodes to the Left of the Root Node are < than that of the Root Node
 *  ALl Nodes to the Right of the Root Node are > than that of the Root Node
*/

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        //if the value is less than the current node AND the left node is PRESENT, recursively go the left
        if (value < this.value && this.left) {
            this.left.insert(value);
        }  //if the value is less than the current node AND the left node is NOT PRESENT
        else if( value < this.value) {
            this.left = new Node(value);
        }  //if the value is greater than the current node AND the right node is PRESENT, recursively go the right
        else if (value > this.value && this.right) {
            this.right.insert(value);
        }  //if the value is greater than the current node AND the right node is NOT PRESENT,  
        else if (value > this.value) {
            this.right = new Node(value);
        } 
    }

    contains(value) 
    {
        //base case to see if the node is present
        if(this.value === value) return this;

        //if the value is greater than the current node AND the right node is PRESENT, recursively go the right
        if(value > this.value && this.right) {
            this.right.contains(value);
        } //if the value is greater than the current node AND the left node is PRESENT,  recursively go the left
        else if(value < this.value && this.left) {
            this.left.contains(value);
        }
        return null;
    }

    preOrderTraversal(node) {
        if(node){
            console.log(node.value);
            preOrderTraversal(node.left);
            preOrderTraversal(node.right);
         }
    }

    postOrderTraversal(node) {
        if(node){
            postOrderTraversal(node.left);
            postOrderTraversal(node.right);
            console.log(node.value);
         }
    }

    inOrderTraversal(node) {
        if(node){
            inOrderTraversal(node.left);
            console.log(node.value);
            inOrderTraversal(node.right);
         }
    }

    breathFirstTraversal(callBackMethod) {
        let queue = [];
        queue.push(this);

        while(queue.length !== 0) {
            
            let e = queue.shift();
            if(e.left)
                queue.push(e.left);
            
            if(e.right)
                queue.push(e.right);
            
            //calll callBackMethod to process node
            callBackMethod(e);
        }
    }

    depthFirstTraversal(node) {
        if(node)
        {
          console.log(node.value);
          depthFirstTraversal(node.left);
          depthFirstTraversal(node.right);
        }
    }

    //Given a node, validate the binary search tree, ensuring that every node's left hand child is less than the parent node's value, and that every node's right hand child is greater than the parent
    isValidBinarySearchTree(node, min = null, max = null) 
    {
        if (!node) return true;

        if (max !== null && node.data >= max) {
          return false;
        }

        if (min !== null && node.data <= min) {
          return false;
        }

        if (!left && !isValidBinarySearchTree(node.left, min, node.data))
            return false;

        if(!right && !isValidBinarySearchTree(node.right, node.data, max))
            return false;
    }

    findMinNode(node) {
        if(!node) return 0;
        
        if(node.left) {    
          return findMinNode(node.left)
        }
        return node.value
    }

    
    findMaxNode(node) {
        if(!node) return 0;
    
        if(node.right) {  //For a binary search tree, we need to iterate through the right-hand side to find the largest value
            return findMaxNode(node.right)
        }
        return node.value;
    }

    commonAncestor(node, n1, n2){
        if(!node) return;
        var val = node.value;
        if(n1 < val && n2 <val){
          return commonAncestor(node.left, n1, n2);
        }
        if(n1<val && n2<val){
          return commonAncestor(node.right, n1, n2);
       }
       console.log('lowest common ancestor value: ', val);
       return node;
     }
}

const node = new Node(10);
node.insert(5);
node.insert(15);
node.insert(20);
node.insert(0);
node.insert(-5);
node.insert(3);

//https://khan4019.github.io/front-end-Interview-Questions/bst.html