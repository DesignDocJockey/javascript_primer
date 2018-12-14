'use strict';

/* Write a function that reverses the contents of an array without using any other structure */

const array = [3, 4, 0, 6, 8, 9, 12, 7, 17, 33, 15];

const reverseAnArray = (array) => {
    if(array.length === 1)
        return array;

    let midPoint = array.length / 2;
    for(let i = 0; i < midPoint; i++)  //Runtime is O(N)
    {
        let reverseIndex = (array.length - i) - 1;
        let temp = array[i];
        array[i] = array[reverseIndex];
        array[reverseIndex] = temp;
    }
    
    return array;
};

//Runtime is O(N)

console.log(array);
const reversed = reverseAnArray(array);
console.log(reversed);