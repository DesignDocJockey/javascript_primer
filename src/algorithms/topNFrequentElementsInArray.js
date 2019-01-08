/*
Given a non-empty array of integers, return the k most frequent elements.
Solution:
 1 Get a count of every occurance for each element in the array
 2 Store count in an array
 3 Sort the array

 Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
*/

const mostFrequentNElements = (array, N) => {
    const occurancesForElements = {};
    for(let e of array) {
        console.log(e);
        if (!occurancesForElements[e]) {
            occurancesForElements[e] = 1;
        }
        else {
            occurancesForElements[e] = occurancesForElements[e] + 1;
        }
    }
    console.log(occurancesForElements);
 
    const orderedList = [];
    for(let key in occurancesForElements) {
        console.log(`Key: ${key}`);
        console.log(`Occurances: ${occurancesForElements[key]}`);
        orderedList.push( [key, occurancesForElements[key]]);
    }

    //sort and take the Nth number of items
    const items = orderedList.sort( (a, b) => b[1] - a[1]).slice(0, N);
    const mostFrequentItems = [];
    for(let i = 0; i < items.length; i++) {
        mostFrequentItems.push(items[i][0]);
    }
    return mostFrequentItems;
}

const lst = [1,1,1,2,2,3];
const a = mostFrequentNElements(lst, 2);
console.log(a);