'use strict';

/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
Given nums = [2, 7, 11, 15], target = 9,
*/

const getIndicies = (array, target) => 
{
    let indicies = [];
    for(let i = 0; i < array.length; i++)  //O(N) runtime
    {
        let digitToFind = target - array[i];

        let index = array.indexOf(digitToFind);
        if(index === -1) 
            continue;
        else {
            indicies.push(i);
            indicies.push(index);
            break;
        }
    }
    return indicies;
};

//Total Runtime is O(N)

const nums = [2, 7, 11, 15, 10];
const values = getIndicies(nums, 12);
console.log(values);