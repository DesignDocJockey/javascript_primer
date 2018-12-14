'use strict';
const Node = require('./node');

/*
You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order and each of their nodes contain a single digit. 
Add the two numbers and return it as a linked list.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/

const number1List = new Node(1, 
                    new Node(3,
                        new Node(5, null)));

const number2List = new Node(1, 
                    new Node(6, 
                        new Node(7, null)));

//number1 => 1 -> 3 -> 5           
//number2 => 1 -> 6 -> 0
//result => 5 3 1 
// +     => 7 6 1

const convertLinkedListToNumber = (linkedList) => {
    let digits = [];
    let nbrNode = linkedList;
    while (nbrNode !== null)  {  //Runtime is O(N)
        digits.unshift(nbrNode.getValue());
        nbrNode = nbrNode.getNextNode();
    }
    return parseInt(digits.join(''));
};


const digit1 = convertLinkedListToNumber(number1List); //Runtime is O(N)
const digit2 = convertLinkedListToNumber(number2List); //Runtime is O(N)
console.log(digit1 + digit2);