'use strict';

const Node = require('./node');

const headNode = new Node(18, null);
const childNodes = 
            new Node(12, 
                new Node(9,
                    new Node (7, 
                        new Node(12, 
                            new Node(15, null)))));

headNode.setNextNode(childNodes);

let node = headNode;
while(node != null) {
    console.log(node.getValue());
    node = node.getNextNode();
}

//console.log(JSON.stringify(headNode, undefined, 1));