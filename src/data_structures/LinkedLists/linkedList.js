'use strict';

const Node = require('./node');

class LinkedList
{
    constructor() {
        this.head = null;  
    }

    insertFirst(value)  {
        this.head = new Node(value, this.head);
    }

    size() {
        let count = 0;
        //set a pointer to the start of the list
        let tmp = this.head;
        while(tmp) {
            count++;
            tmp = tmp.getNextNode(); //iterate through the list
        }
        return count;
    }

    getFirst() {
        return this.head;
    }

    getLast() 
    {
        //if no elements
        if(!this.head) { return null; }

        let tmp = this.head;
        while(tmp) {
            //if the next node is null, we are at the end of the list
            if(tmp.getNextNode() === null) { return tmp; }
            tmp = tmp.getNextNode();
        }
    }

    clearList() {
        this.head = null;
    }

    removeHead() 
    {
        //if no eleements
        if(!this.head) { return; }
        //move the head of the list to the next element to make that the new Head of the list
        this.head = this.head.getNextNode();
    }

    removeLast()
    {   
        //if the list is empty 
        if(!this.head) return;
        
        if (this.size() == 1) this.head = null;

        //set up a previous node to keep track of the last node that we iterate through the list
        let prev = this.head;
        //set up a current node to keep track of the current node as we iterate through the list
        let currentNode = this.head.getNextNode();
        
        while(currentNode.getNextNode()) {
            prev = currentNode;                         //keep track of the last node we iterated over
            currentNode = currentNode.getNextNode();    //move to the next node
        }

        //at the end of the while loop, the prev node is the last node
        prev.setNextNode(null);
    }

    //iterate through the list to the end and at the end of the list, set a new node
    insertAtEnd(value) 
    {    
        if(!this.head) 
            this.head = new Node(value, null);
        //start at the beginning of the list
        let lastElement = this.head; 
        while(lastElement) 
        {
            //condition to see that we are at the last node
            if(lastElement.getNextNode() === null) {
                lastElement.setNextNode(new Node(value, null));
                break;
            }
            lastElement = lastElement.getNextNode();
        }
    }

    //retrieve an element at a specific index
    getAtIndex(index) 
    {
        //no items in the list
        if(!this.head) return -1;

        let counter = 0;
        //start at the beginning of the list
        let currentNode = this.head
        while(currentNode) 
        {
            if(counter === index) {
                return currentNode;
            }
            currentNode = currentNode.getNextNode();
            counter++;
        }
        return -1;
    }

    removeAtIndex(index) 
    {
        //no items in the list
        if(!this.head) return;

        //edge case to handle removal of element at the head of the list
        if(index === 0) {
            this.head = this.head.getNextNode();
            return;
        }

        //get the previous node of the current node that we are deleting
        let previousNode = this.getAtIndex(index - 1);

        //handles the scenerio when there is no value at the given index
        //OR when there is no next node(i.e when we are at the end of the list)
        if(!previousNode || !previousNode.getNextNode()) return;

        //retrieve the next node  of the current node that we are deleting
        let newNextNode = previousNode.getNextNode().getNextNode();
        //set the previous node to the nextNode of the current node that we are deleting
        previousNode.setNextNode(newNextNode);
    }

    insertAtIndex(value, index) 
    {    
        //edge case::: for empty list or when the index is 0
        if(!this.head) {
            this.head = new Node(value, null);
            return;
        }

        if(index === 0) {
            this.head = new Node(value, this.head);
            return;
        }

        let previousNode = this.getAtIndex(index - 1);
        
        //edge case::when the index specified is at the end of the list or out of bounds (we need to insert at the end of the list)
        if (!previousNode) {
            previousNode = this.getLast();
        }

        let newNode = new Node(value, previousNode.getNextNode());
        previousNode.setNextNode(newNode);
    }

    getMidPointOfLinkedList(list) {
        let slow = this.head;
        let fast = this.head;

        while(fast.getNextNode() && fast.getNextNode().getNextNode()) {
            slow = slow.getNextNode() //get the next value;
            fast = fast.getNextNode().getNextNode() //jump 2 nodes ahead
        }

        return slow;
    }

    isCircularLinkedList()  {
        let slow = this.head;
        let fast = this.head;
    
        while(fast.getNextNode()  && fast.getNextNode().getNextNode()) {

            slow = slow.getNextNode();
            fast = fast.getNextNode().getNextNode();

            if(slow === fast)
                return true;
        }
        return false;
    }

     getNthElementFromLast(list, n) {
        let slow = list.getFirst();
        let fast = list.getFirst();
      
        while (n > 0) {
          fast = fast.next;
          n--;
        }
      
        while (fast.next) {
          slow = slow.next;
          fast = fast.next;
        }
      
        return slow;
      }

};

const nodes = new Node(7, 
    new Node(12,
        new Node (18, null)));

let linkLst = new LinkedList();
linkLst.insertFirst(12);
linkLst.insertFirst(18); 
linkLst.insertFirst(2);


console.log(JSON.stringify(linkLst, undefined, 1));
console.log(linkLst.size());
console.log(linkLst.getFirst().getValue());
console.log(linkLst.getLast().getValue());

linkLst.removeLast();

linkLst.insertAtEnd(77);
console.log(`Value at Index 0.... ${linkLst.getAtIndex(0).getValue()}`);
console.log(JSON.stringify(linkLst, undefined, 1));