'use strict';

const Queue = require('./queue');

let queue1 = new Queue();
queue1.enqueue(18);
queue1.enqueue(35);
queue1.enqueue(45);
queue1.enqueue(66);

console.log(`Calling Queue1...`);
queue1.print();

let queue2 = new Queue();
queue2.enqueue(12);
queue2.enqueue(33);
queue2.enqueue(55);
queue2.enqueue(92);
queue2.enqueue(99);
queue2.enqueue(105);
console.log(`Calling Queue2...`);
queue2.print();

// const val1 = queue1.dequeue();
// console.log(`Calling Dequeue... ${val1}`);
// queue1.print();

// console.log(`Calling Enqueue...`);
// queue1.enqueue(12);
// queue1.print();

// const peekValue = queue1.peek();
// console.log(`Calling Peek... ${peekValue}`);

//Implement a Weeve Function where we take 2 queues and combine the elements in them alternating between them 

let queue3 = new Queue();

// while(queue1.peek() !== undefined || queue2.peek() !== undefined) 
// {
//     if(queue1.peek()) {
//         queue3.enqueue(queue1.dequeue());
//     }

//     if(queue2.peek()) {
//         queue3.enqueue(queue2.dequeue());
//     }
// }

let combinedQueue = queue3.combineQueues(queue1, queue2);
console.log(`Calling combinedQueue...`);
combinedQueue.print();