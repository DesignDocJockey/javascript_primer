'use strict';

const Stack = require('./stack');

class Queue 
{
    constructor() {
        this._dataStack = new Stack();
        this._tempStack = new Stack();
     
    }

    enqueue(value) {
        this._dataStack.push(value);
    }

    dequeue() {
        this.transferBetweenStacks(this._dataStack, this._tempStack);
        let value = this._tempStack.pop();
        this.transferBetweenStacks(this._tempStack, this._dataStack);
        return value;
    }

    peek() {
        this.transferBetweenStacks(this._dataStack, this._tempStack);
        let value = this._tempStack.peek();
        this.transferBetweenStacks(this._tempStack, this._dataStack);
        return value;
    }

    transferBetweenStacks(source, target)
     {
        while(source.peek() !== undefined) 
        {
            let value = source.pop();
            target.push(value);
        }
    }
}