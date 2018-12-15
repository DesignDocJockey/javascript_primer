'use strict';

const Node = require('./node');

class LinkedList
{
    constructor() {
        this.head = null;  
    }

    insertFirst(value)  {
        let newNode = new Node(value, this.head);
        this.head = newNode; //OR new Node(value, this.head);
    }

    size() {
        let count = 0;
        let tmp = this.head;
        while(tmp) {
            count++;
            tmp = tmp.getNextNode();
        }
        return count;
    }

    getFirst() {
        return this.head;
    }

    getLast() 
    {
        //if no elements
        if(!this.head) {
            return null;
        }

        let tmp = this.head;
        while(tmp) {
            if(tmp.getNextNode() === null) {
                return tmp;
            }
            tmp = tmp.getNextNode();
        }
    }

    clearList() {
        this.head = null;
    }

    removeHead() 
    {
        if(!this.head) {
            return;
        }

        this.head = this.head.getNextNode();
    }
};

const nodes = new Node(7, 
    new Node(12,
        new Node (18, null)));

let linkLst = new LinkedList();
linkLst.insertFirst(12);
linkLst.insertFirst(18);
linkLst.insertFirst(25);

console.log(JSON.stringify(linkLst, undefined, 1));
console.log(linkLst.size());
console.log(linkLst.getFirst().getValue());
console.log(linkLst.getLast().getValue());