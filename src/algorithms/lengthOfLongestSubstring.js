'use strict';

/*
Given a string, find the length of the longest substring without repeating characters.
Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

// const longestSubString = (string) => {
//     const substring = [];
//     for(let i = 0; i <= string.length; i++) 
//     {
//         if(i === (string.length - 1))
//             break;

//         console.log(`Current Character: ${string[i]}`);
//         console.log(`Next Character: ${string[i + 1]}`);

//         if(string[i] != string[i+1]) 
//         {   
//             console.log(`Checking if we can add it....`);
//             if(substring.indexOf(string[i]) === -1) {
//                 console.log(`Adding...`);
//                 substring.push(string[i]);
//             }
//         }
//         else {

//         }

//         console.log(`substring: ${substring}`);
//     }
//     return substring.length;
// };

// //const str = 'abcabcbb';
// const str = 'bbbbb'; //'pwwkew'
// const result = longestSubString(str);
// console.log(`Result... ${result}`);