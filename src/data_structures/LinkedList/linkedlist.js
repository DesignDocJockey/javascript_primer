'use strict';

const Node = require('./node');

// module.exports = class LinkedList 
// {
//     constructor(headNode) {
//         this.headNode = headNode;
//         this.tailNode = null;
//     }

//     insertAtEnd(value) 
//     {
//         if(!this.headNode.getNextNode())
//         {
//             this.tailNode = new Node(value);
//             this.headNode.setNextNode(this.tailNode);
//         }
//         else {
//             let start = this.headNode;
//             while(start) {
//                 start = start.getNextNode();
//             }
//             start = new Node(value);
//             this.tailNode = start;
//         }
//     }
// }
 
// const headNode = new Node(18, null);
// const childNodes = 
//             new Node(12, 
//                 new Node(9,
//                     new Node (7, 
//                         new Node(12, 
//                             new Node(15, null)))));

// /**** Append nodes to an existing Linked List  ***/                      
// headNode.setNextNode(childNodes);

// let node = headNode;
// while(node != null) {
//     console.log(node.getValue());
//     node = node.getNextNode();
// }

//console.log(JSON.stringify(headNode, undefined, 1));


const list1 = new Node(7, 
                new Node(12,
                    new Node (18, null)));

const list2 = new Node(1, 
                new Node(4, 
                    new Node(8,
                        new Node (13, null))));

let result = [];
let list1Iterator = list1;
let list2Iterator = list2;

while (list1Iterator !== null && list2Iterator !== null) 
{
    if( (list1Iterator.getValue() < list2Iterator.getValue()) ) 
    {
        result.push(list1Iterator.getValue());
        list1Iterator = list1Iterator.getNextNode();
    } 
    else if( (list1Iterator.getValue() > list2Iterator.getValue()) )
    {
        result.push(list2Iterator.getValue());
        list2Iterator = list2Iterator.getNextNode();
    }
    else if (list1Iterator.getValue() === list2Iterator.getValue()) {
        result.push(list1Iterator1.getValue());
        list1Iterator = list1Iterator.getNextNode();
        list2Iterator = list2Iterator.getNextNode();
    }

   
    //console.log(`list2Iterator... ${JSON.stringify(list2Iterator, undefined, 1)}`);;
}

if(!list1Iterator) {
    console.log(`list1Iterator is null...we need to copy the remaining contents of list2Iterator into the array...`);
    let node = list2Iterator;
    console.log(`list1Iterator.. ${JSON.stringify(node)}`);
    while(node) {
        result.push(node.getValue());
        node = list2Iterator.getNextNode();
    }
}

if(!list2Iterator) {
    console.log(`list2Iterator is null...we need to copy the remaining contents of list1Iterator into the array...`);
    let node = list1Iterator;
    console.log(`list1Iterator.. ${JSON.stringify(node)}`);
    while(node) {
        result.push(node.getValue());
        node = list1Iterator.getNextNode();
    }
}

console.log(result);

//TODO::implement a append to end method on the linked list
// let newList = new Node(result[0]);
// for(let i = 1; i < result.length; i++) 
// {
//     let tempNode = new Node(result[i]);
//     newList.setNextNode(tempNode);
// }
// console.log(newList);