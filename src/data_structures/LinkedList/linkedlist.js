'use strict';

const Node = require('./node');

module.exports = class LinkedList 
{
    constructor(headNode) {
        this.headNode = headNode;
        this.tailNode = null;
    }

    insertAtEnd(value) 
    {
        if(!this.headNode.getNextNode())
        {
            this.tailNode = new Node(value);
            this.headNode.setNextNode(this.tailNode);
        }
        else {
            let start = this.headNode;
            while(start) {
                start = start.getNextNode();
            }
            start = new Node(value);
            this.tailNode = start;
        }
    }
}
 


const headNode = new Node(18, null);
const childNodes = 
            new Node(12, 
                new Node(9,
                    new Node (7, 
                        new Node(12, 
                            new Node(15, null)))));

/**** Append nodes to an existing Linked List  ***/                      
headNode.setNextNode(childNodes);

let node = headNode;
while(node != null) {
    console.log(node.getValue());
    node = node.getNextNode();
}

//console.log(JSON.stringify(headNode, undefined, 1));