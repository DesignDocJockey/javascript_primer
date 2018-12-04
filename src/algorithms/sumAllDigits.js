'use strict';

/* 
Given 777 is number

777 % 10 = 7
777 / 10 = 77

77 % 10 = 7
77 / 10 = 7

7 % 10 = 7
7 / 10 = 0
*/
const sumAllDigits = (number) => 
{
    let num = Math.abs(number);
    if( num < 10)
        return num;
    else 
    {
        let sum = 0;
        while(number !== 0)  {
            let digit = (number % 10);
            sum += digit;            
            number = Math.floor( (number / 10) );
        }
        return sum;
    }
};
const result = sumAllDigits(555);
console.log(result);

const sumAllDigits2 = (number) => 
{
    let num = Math.abs(number) + '';
    const digits = num.split('');
    let result = 0;
    for(let strDigit of digits) {
        let numberDigit = parseInt(strDigit);
        result += numberDigit;
    }
    return result;
};

const sumAllDigits_1_Result = sumAllDigits(555);
console.log(`sumAllDigits_1_Result: ${sumAllDigits_1_Result}`);

const sumAllDigits_2_Result = sumAllDigits2(555);
console.log(`sumAllDigits_2_Result: ${sumAllDigits_2_Result}`);