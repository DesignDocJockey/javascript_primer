'use strict';

//Find the most common elements in 2 sorted arrays
//array1 => [2, 7, 11, 15, 25, 38]
//array2 => [2, 7, 11, 25, 38, 55]

const array1 = [2, 7, 11, 15, 25, 38];
const array2 = [2, 7, 11, 25, 38, 55];

const findCommonElementsInSortedArray = (array1, array2) => {

    let array1Index = 0, array2Index = 0;
    let commonElements = [];

    while(array1Index < array1.length && array2Index < array2.length) 
    {
        if(array1[array1Index] === array2[array2Index]) {
            commonElements.push(array1[array1Index]);
            array1Index++;
            array2Index++;
        }
        else if((array1[array1Index] > array2[array2Index])) {
            array2Index++;
        }
        else if((array2[array2Index] > array1[array1Index])) {
            array1Index++;
        }
    }

    return commonElements;
};

const array = findCommonElementsInSortedArray(array1, array2);
console.log(array);