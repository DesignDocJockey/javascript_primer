'use strict';

/*
First non-repeating character using one traversal of string. Set 2. Given a string, find the first non-repeating character in it. 
For example, if the input string is “GeeksforGeeks”, then output should be 'f' and if input string is “GeeksQuiz”, then output should be 'G'.

non_repeating("abcab") # should return 'c'
non_repeating("abab") # should return None
non_repeating("aabbbc") # should return 'c'
non_repeating("aabbdbc") # should return 'd'

*/

const nonRepeatingCharacter = (string) => {
    let hashTable = {};
    let nonRepeatingCharacter;
    for(let char of string) 
    {
        if(!hashTable[char])
            hashTable[char] = 1;
        else
            hashTable[char] = hashTable[char] + 1; 
    }

    for(let key in hashTable) 
    {
        if(hashTable[key] === 1)
        {
            nonRepeatingCharacter = key;
            break;
        }
    }
    return nonRepeatingCharacter;
};

const str = 'aabbbc';
const nonRepatingCharacter = nonRepeatingCharacter(str);
console.log(nonRepatingCharacter);