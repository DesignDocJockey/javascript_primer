'use strict';
/**
 * Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) — Push element x onto stack.
pop() — Removes the element on top of the stack.
top() — Get the top element.
getMin() — Retrieve the minimum element in the stack.
 
The key to this is to have another stack that keeps track of the minimum element 
Whenever we push an element to the stack, we have to add the minimum element to the secondary stack
To push into the secondary stack, we compare the value what we are pushing with the top value in the secondary stack,
Whichever value is smaller gets pushed into the secondary stack
Whenever we pop, we also have to pop from the secondary stack
*/

const Stack = require('./stack');

class MinStack {

    constructor() {
        this.regStack = new Stack();
        this.minStack = new Stack();
    }

    push(value) {
        this.regStack.push(value);

        if(this.minStack.count() === 0) {
            this.minStack.push(value);
        }
        else {
            let currentMinElementInMinStack = this.minStack.peek();
            if(currentMinElementInMinStack < value) {
                this.minStack.push(currentMinElementInMinStack);
            } else {
                this.minStack.push(value);
            }
        }
    } 

    pop() {
        this.minStack.pop();
        const value = this.regStack.pop();
        return value;
    }

    top() {
        return this.regStack.peek();
    }

    getMin() {
        return this.minStack.peek();
    }
}

const minstack = new MinStack();
minstack.push(1);
minstack.push(8);
minstack.push(10);
minstack.push(2);
minstack.push(0);

console.log(minstack.getMin());
