'use strict';

//arrow functions are anonymous function expressions
//Because arrow functions allow you to retain the scope of the caller inside the function, you don’t need to create self = this closures or use bind.
//Arrow functions don’t have a prototype property or other internal method hence it is better to use function in the global scope 
//when defining methods for classes and or using the Object.prototype properties
// You can't use an arrow function when a dynamic context is required: defining methods, create objects with constructors, get the target from this when handling events.

module.exports = class Node 
{
    constructor(value, nextNode) {
        this.value = value;
        this.nextNode = nextNode;
    }

    getValue() { return this.value; }
    getNextNode() { return this.nextNode; }

    setValue(value) { this.value = value; }
    setNextNode(nextNode) { this.nextNode = nextNode;}
}
