'use strict';

/* Generate all Permutations of a string */

const string = 'ABC';

const swap = (array, i, j) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp; 
};

//https://www.techiedelight.com/generate-permutations-string-java-recursive-iterative/

const permutation = (string, index) => 
{

    if(string.length == index) 
        console.log(string);
    for(let i = index; i < string.length; i++) {
        swap(string, )
    }
};