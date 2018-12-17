'use strict';

const printNode = (node) => {
    console.log(JSON.stringify(node));
}

class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    add(value) {
        this.children.push(new Node(value));
    }

    remove(value) {
        this.children = this.children.filter( item => {
            return item !== value;
        });
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    breathFirstTraversal(funcToInvoke) 
    {
        let elements = [];
        elements.push(this.root);
        while(elements.length !== 0) 
        {
            //get the element
            let node = elements.shift();
            if(node.children.length !== 0)  {
                //put the children nodes AT THE END of the array
                for(let child of node.children) {
                    elements.push(child);
                    //ES6 Implementation use the ... operator
                    //elements.push(...node.children);
                } 
            }
            //process the current node 
            console.log(`Value: ${node.value}`); //OR call funcToInvoke(node)
        }
    }

    depthFirstTraversal(funcToInvoke) 
    {
        let elements = [];
        elements.push(this.root);

        while(elements.length !== 0) 
        {
            let node = elements.shift();
            if(node.children !== 0)  {
                //put the children AT THE START of the array
                for(let child of node.children) {
                    elements.unshift(child);
                    //ES6 Implementation use the ... operator
                    //elements.unshift(...node.children);
                }
            }
            //process the current node 
            console.log(`Value: ${node.value}`);  //OR call funcToInvoke(node)
        }
    }

    levelWidth(root) {
        const array = [root, 's'];
        let counter = [0];
        while(array.length > 1) {
            let node = array.shift()
            if(node === 's') {
                counter.push(0);
                array.push('s');
            }else
                array.push(...node.children);
                counter[counter.length - 1]++;
        }
        return counter; 
    }
}


const t = new Tree();
t.root = new Node('a');
t.root.add('b');
t.root.add('c');
t.root.children[0].add('d');

t.breathFirstTraversal(printNode);
t.depthFirstTraversal(printNode);
/*
Breath-First Traversal 
    Top Level
    ->Next Level 
    --->Left to Right

Depth-First Traversal 
    Iterate to the bottom of the tree and go through each of the nodes
    ->In-Order-Traversal
    ->Pre-Order-Traversal
    ->Post-Order-Traversal
*/

/**  Width of the tree at every level of the tree
 *  
 *     0              --Level 0 (1 Element)
 *  |   |   |
 *  1   2   3         --Level 1 (3 Elements)
 * |         |
   4          5       --Level 1 (2 Elements)
Answer[1, 3, 2]

We Need to use Bread-First-Traversal
we nee to 
*/

