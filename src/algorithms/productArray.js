'use strict';

/*
Given an array of integers, return an output array such that output[i] is equal to the product of all the elements in the array other than itself. (Solve this in O(n) without division)
var firstArray = [2, 2, 4, 1];
var secondArray = [0, 0, 0, 2];
var thirdArray = [-2, -2, -3, 2];

productExceptSelf(firstArray); // [8, 8, 4, 16]
productExceptSelf(secondArray); // [0, 0, 0, 0]
productExceptSelf(thirdArray); // [12, 12, 8, -12]
*/

const getProductExcludingIndex = (array, indexToExclude) => {
    let result = 1;
    for(let i = 0; i < array.length; i++) {
        if(i == indexToExclude)
            continue;
        result *= array[i]; 
    }
    return result;
}

const array = [1, 2, 3, 10];
let productArray = [];
for(let i = 0; i< array.length; i++) //Runtime of array traversal is O(N)
{
    console.log(`Index: ${i}`);
    let valueAtIndex = getProductExcludingIndex(array, i); //Runtime is O(N)
    console.log(`Value: ${valueAtIndex}`);
    productArray.push(valueAtIndex);
} 

//Total Runtime Complexity is O(N^2)

console.log(productArray);