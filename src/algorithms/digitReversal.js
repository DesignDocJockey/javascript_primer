'use strict';

//Given a 32-bit signed integer, reverse digits of an integer.
/*
Example 1:

Input: 123
Output: 321

Example 2:
Input: -123
Output: -321

Example 3:
Input: 120
Output: 21
*/

const number = 123;

const reverseNumber = (number) => 
{
    let digits = [];
    let isNegative = false;
     //if its negative make it a positive
     if (number < -1) {
        number *= -1;
        isNegative = true;
     }
     
     //if its just a single digit
     if(number < 10) {
        return (isNegative)? number *= -1 :number;
     }

    //  11 % 10 => 1
    //  push into array
    //  Math.abs(11 / 10) => 
     
     while(number > 0)  //Runtime is O(N) depending on the value of the digit
     {
        console.log(`tempNbr: ${number}`);
        let nbr = (number % 10);
        console.log(`nbr: ${nbr}`);
        digits.push(nbr);
        number = Math.floor(number / 10);
     }

     let reversedNumber = (isNegative)  ? (parseInt(digits.join('')) * -1 ) : parseInt(digits.join(''));
     return reversedNumber;
}

const result = reverseNumber(number);
console.log(result);


const result2 = reverseNumber(-123);
console.log(result2);

// let digit = (number % 10);
// sum += digit;            
// number = Math.floor( (number / 10) );