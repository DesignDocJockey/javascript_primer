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

const isPaldinedrome = (string) => {
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

const isPal = isPaldinedrome(str);
console.log(isPal);