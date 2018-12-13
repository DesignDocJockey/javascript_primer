'use strict';

/* Generate all Permutations of a string */

const string = 'ABC';

const swap = (array, i, j) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp; 
};


const permutation = (characterArray, index) => 
{
    //base case
    if(index == 1) 
        console.log(characterArray);

    for(let i = 0; i < index; i++) 
    {
        swap(characterArray, i, index - 1);
        permutation(characterArray, index - 1);
        swap(characterArray, i, index - 1);
    }
};

let characterArray = string.split('');
permutation(characterArray, characterArray.length);