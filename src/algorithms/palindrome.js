/*
determine if a string is a palindrome
amore roma
*/

/*
easy implementation which is to 
1.break the string down into an array
2.reverse the string
3.compare it to the original string

regular:  amore roma
reversed: amor e roma
*/

const str = 'amore roma';
const word = 'Step on no pets';

//Other solution is to split the array and iterate through the array swaping values and then comparing the contents
const reverseCharactersInWord = (string) => {
        let charArray = string.split('');
        for(let i = 0; i < charArray.length / 2; i++) {
                let idxToSwap = (charArray.length - i) - 1;
                let temp = charArray[i];
                charArray[i] = charArray[idxToSwap];
                charArray[idxToSwap] = temp;
        }
        return charArray.join('');
};

const isPalindrome = (string) => {
    let array = string.toLowerCase().split(' '); 
    let reversed = [];
    let isPal = true;
    console.log(array);

    let midPoint = Math.floor(array.length / 2);
   
    for(let i = midPoint; i < array.length; i++) 
    {
        console.log(`i ... ${i} ...array[i].. ${array[i]}`);
        let w = reverseCharactersInWord(array[i]);
        console.log(`Word Reversed.... ${w}`);
        reversed.unshift(w);
    }
    console.log(reversed);

    for(let j = 0; j < midPoint; j++)
    {
        if(array[j] !== reversed[j]) {
           isPal = false;
           break;
        }
    }
    return isPal;
};

const isPal1 = isPalindrome(word);
console.log(isPal1);

/*
//Pure ES6 Version
const isPaldinedromeES6 = (string) => {
        let removedSpaces = string.split('')
                                  .map( char => (char === ' ') ? '': char)
                                  .join('');

        let reversed = string.split('')
                             .map(char => (char === ' ') ? '': char)
                             .reverse()
                             .join('');

        console.log(removedSpaces);
        console.log(reversed);
        return removedSpaces === reversed;
};

const isPal = isPaldinedromeES6(str);
console.log(isPal);
*/