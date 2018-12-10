'use strict';

/*  Removing duplicates of an array and returning an array of only unique elements */

var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

const removeDuplicates = (array) => {
    const lookUpValues = {};
    for(let digit of array)  //Runtime is O(N)
    {
        if(!lookUpValues[digit])
            lookUpValues[digit] = 1;
        else {
            continue;
        }
    }
    return Object.keys(lookUpValues);
};

const noDups = removeDuplicates(array);
console.log(`noDups: ${noDups}`);


//ES6 Solution:
const distinctValuesFromSet = Array.from(new Set(array));
console.log(`ES 6 Solution is to place everything into a Set: ${distinctValuesFromSet}`);

