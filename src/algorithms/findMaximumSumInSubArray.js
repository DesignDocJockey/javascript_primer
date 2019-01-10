'use strict';

/**
 Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
 */

 const largestSum = (array) => 
 {
    let largestSumValue = Number.MIN_SAFE_INTEGER;
    let sumCounter = 0;

    for(let i = 0; i < array.length; i++) 
    {
        sumCounter = sumCounter + array[i];
        if(sumCounter > largestSumValue) {
            largestSumValue = sumCounter;
        }

        if (sumCounter < 0) 
            sumCounter = 0; 
    }
    return largestSumValue;
 }

 //const array = [-2,1,-3,4,-1,2,1,-5,4];
 const array = [-2, -3, 4, -1, -2, 1, 5, -3];
 //const array = [-2,-3,-1,-5,-4];
 console.log(largestSum(array));

