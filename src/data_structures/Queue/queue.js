'use strict';

module.exports = class Queue 
{    
    constructor() {
        this._queue = [];
    }

    enqueue(value) 
    {
        if(this._queue.length === 0){
            this._queue.unshift(value);
        }
        else {
            this._queue.push(value);
        }
    }

    dequeue() {
        if (this._queue.length !== 0) {
            return this._queue.shift();
        }
    }

    count() {
        return this._queue.length;
    }

    peek() {
        if (this._queue.length !== 0) {
            return this._queue[0];
        }
    }

    isEmpty() {
        return (this._queue.length !== 0);
    }

    combineQueues(sourceQueue1, sourceQueue2) 
    {
        let newQueue = new Queue();
        while(sourceQueue1.peek() !== undefined || sourceQueue2.peek() !== undefined) //Runtime is O(N-is-the-size-of-queue1) + O(N-is-the-size-of-queue2)
        {
            if(sourceQueue1.peek()){
                newQueue.enqueue(sourceQueue1.dequeue());
            }

            if(sourceQueue2.peek()){
                newQueue.enqueue(sourceQueue2.dequeue());
            }
        }
        return newQueue;
    }

    print() {
        for(let item of this._queue) {
            console.log(`Item: ${item}`);
        }
    }
};