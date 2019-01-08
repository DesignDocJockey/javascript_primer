/* 
Given a string, find the length of the longest substring without repeating characters.

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 

*/

const longestSubstringWithoutRepeatingCharacters = (string) => {
    let individualLetters = string.split('');
    let substr = [];
    let maxLength = 0;
    let maxSubstring  = '';
    for(let i = 0; i < individualLetters.length; i++ ) {
        let char = individualLetters[i];
        if(substr.indexOf(char) === -1) {
            substr.push(char);   
        }
        else {
            console.log(`current values in substr... ${substr}`);
            let str = substr.join('');
            if(str.length > maxLength) {
                maxLength = str.length;
                maxSubstring = str;
            }
            substr = [];
            substr.push(char);
        }
    }
    return maxSubstring;
};


//const substring = longestSubstringWithoutRepeatingCharacters("pwwkew");
//const substring = longestSubstringWithoutRepeatingCharacters("abcabcbb");
const substring = longestSubstringWithoutRepeatingCharacters("bbbbb");
console.log(`Longest Substring... ${substring}`);