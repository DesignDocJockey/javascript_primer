'use strict';

const Stack = require('./stack');

let stack1 = new Stack();
stack1.push(18);
stack1.push(35);
stack1.push(45);
stack1.push(66);

console.log(`Calling Stack 1...`);
stack1.print();

let value = stack1.pop();
;

console.log(`Calling Stack 1...After A Pop`);
stack1.print();