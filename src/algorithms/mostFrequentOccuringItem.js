'use strict';

/**Find the most frequently occurning number in an array
 * const array = [1, 4, 5, 77, 1, 4, 6, 6, 1, 1, 0] => 1
 */

 const findMostFrequenctlyOccuringNumber = (array) => {
    let occurances = {};
    let frequencyCount = -1; //keep track of highest frequency of a particular number
    let mostFrequentOccuringNumber = null; //keep track of the most frequencly occuring number

    for(let number of array) 
    {
        if(!occurances[number])
            occurances[number] = 1;
        else
            occurances[number] =  occurances[number] + 1;

        if(occurances[number] > frequencyCount) {
            frequencyCount = occurances[number];
            mostFrequentOccuringNumber = number;
        }
    }

    console.log(JSON.stringify(occurances, undefined, 1));
    return mostFrequentOccuringNumber;
 }

 const array = [1, 4, 5, 77, 1, 4, 6, 6, 1, 1, 0];
 const result = findMostFrequenctlyOccuringNumber(array);
 console.log(`Most Frequent Number is... ${result}`);