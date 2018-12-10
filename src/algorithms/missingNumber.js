'use strict';

/*
Being told that an unsorted array contains (n - 1) of n consecutive numbers (where the bounds are defined), find the missing number in O(n) time
// The output of the function should be 8
var arrayOfIntegers = [2, 5, 1, 4, 9, 6, 3, 7];
var upperBound = 9;
var lowerBound = 1;
result is 8
*/

const findMissingNumberWithinConsecutiveRange = (array, upperBound, lowerBound) => {
    let missingNumber;
    for(let index = lowerBound; index <= upperBound; index++ ) //O(N) complexity
    {
       if( array.indexOf(index) === -1) { 
           missingNumber = index;
           break;
        }
    }
    return missingNumber;
}
//Total Runtime is O(N)

//const arrayOfIntegers = [2, 5, 1, 4, 9, 6, 3, 7];
const arrayOfIntegers = [2, 5, 8, 4, 9, 6, 3, 7];
const result = findMissingNumberWithinConsecutiveRange(arrayOfIntegers,  9, 1);
console.log(result);