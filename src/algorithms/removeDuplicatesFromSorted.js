'use strict';

/*
Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Given nums = [0,0,1,1,1,2,2,3,3,4],

Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

It doesn't matter what values are set beyond the returned length.

*/

var removeDuplicates = function(nums) {
    //push a end flag
    nums.push(null)

    var prev = null;
    var current = nums.shift();

    while (current !== null)
    {
        if (current !== prev) {
            nums.push(current);
        }
        prev = current;
        current = nums.shift();
    }

    return nums;
};

const array = [0,0,1,1,1,2,2,3,3,4];
const results = removeDuplicates(array);
console.log(results);