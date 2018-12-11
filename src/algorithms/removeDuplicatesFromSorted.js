'use strict';

/*
Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Given nums = [0,0,1,1,1,2,2,3,3,4],

Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

It doesn't matter what values are set beyond the returned length.

*/

var removeDuplicatesFromSortedArray = function(nums) {
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
const results = removeDuplicatesFromSortedArray(array);
console.log(results);


const removeDuplicates = (array) => {
    const length = array.length; 
    if(length == 0 || length == 1) return length;
    
    let i = 1; 
    for(let j = 1; j < length; j++) 
    {
      if(array[j] != array[j-1])
      {
        array[i] = array[j]; 
        i++; 
      }
    }
    if(i<length) array[i]='\0';
    // return i; 
  }

  let array2 = [0,0,1,1,1,2,2,3,3,4];
  removeDuplicates(array2);
  console.log(array2);