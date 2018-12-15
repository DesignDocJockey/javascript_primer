'use strict';

/**
 * Linear Search searches every individual element one by one
 * i.e includes() and indexOf()
 */

 const linearSearch = (array, valueToFind) => {
    let foundIndex = -1;
    for(let i = 0; i < array.length; i++)  //Runtime is O(N)
    {
        if(array[i] === valueToFind) {   
            foundIndex = i;
            break;
        }
    }
    return foundIndex;
 };

 const array = [1, 3, 5, 9, 2, 11];
 let foundIndex = linearSearch(array, 2);
 console.log(foundIndex);