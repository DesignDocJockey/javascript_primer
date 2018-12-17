'use strict';

/* Generate all Permutations of a string */

const string = 'ABC';

/*
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

*/
//https/*://initjs.org/all-permutations-of-a-set-f1be174c79f8

/*
getAllPermutations(abc) = a + getAllPermutations(bc) +
                          b + getAllPermutations(ac) +
                          c + getAllPermutations(ab)
getAllPermutations(ab) = a + getAllPermutations(b) +
                         b + getAllPermutations(a)
getAllPermutations(a) = a
*/

const getAllPermutations = (string) => {
    var results = [];
  
    if (string.length === 1) {
        results.push(string);
        return results;
    }
  
    for (var i = 0; i < string.length; i++) //Runtime is O(N^2 + N!)
    {
      var firstChar = string[i];
      var charsLeft = string.substring(0, i) + string.substring(i + 1);
      var innerPermutations = getAllPermutations(charsLeft);
      for (var j = 0; j < innerPermutations.length; j++) {
            results.push(firstChar + innerPermutations[j]);
      }
    }
    return results;
  }
  //Big O is O(N ^2 N!)  

  const result = getAllPermutations(string);
  console.log(result);