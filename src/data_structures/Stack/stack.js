'use strict';

module.exports = class Stack 
{
    constructor() {
        this._stack = [];
    }

    pop() 
    {
        if(this._stack.length > 0) {
           return this._stack.pop();
        }
    }

    push(value) {
        this._stack.push(value);
    }

    count() {
        return this._stack.length;
    }

    peek() 
    {
        if(this._stack.length > 0) {
            return this._stack[this._stack.length - 1];
        }
    }

    print() {
        for(let i = this._stack.length - 1; i >= 0; i-- ) {
            console.log(this._stack[i]);
        }
    }
};