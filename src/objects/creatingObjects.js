'use strict';

//constructor function
function player(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

let tomBrady = new player('Tom', 'Brady');
let drewBrees = new player('Drew', 'Brees');


//using the Object.Create method
let tomBrady = Object.create(Object.prototype, {
    firstName: {
        value: "Tom",
        enumerable: true,
        writable: true,
        configurable: true
    },
    lastName: {
        value: "Brady",
        enumerable: true,
        writable: true,
        configurable: true
    }
});

let tomBrady = Object.create(Object.prototype, {
    firstName: {
        value: "Drew",
        enumerable: true,
        writable: true,
        configurable: true
    },
    lastName: {
        value: "Brees",
        enumerable: true,
        writable: true,
        configurable: true
    }
});

//using the class structure from ES6
class player {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getPlayerName() {
        return `${this.firstName} ${this.lastName}`;
    }
}