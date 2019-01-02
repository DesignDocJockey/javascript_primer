'use strict';

//https://www.geeksforgeeks.org/top-10-algorithms-in-interview-questions/

/*Given an expression, check to see if it is balanced...
i.e String exp = "{()}[{}]"; => balanced
*/

const isBalanced = (expression) => {
    const expressionStack = [];

    for(let char of expression) 
    {
        console.log(char);
        if (char === '{' || char === '(' || char === '[') {
            expressionStack.push(char);
        }

        if (char === '}' || char === ')' || char === ']') 
        {
            let openingCharacter = expressionStack.pop();
            if ((openingCharacter === '(' && char !== ')') ||
                (openingCharacter === '{' && char !== '}') ||
                (openingCharacter === '[' && char !== ']')) {
                return false;
            }
        }
    }

    return (expressionStack.length === 0);
}

let expression = "{()}[{}]";
const bBalanced = isBalanced(expression);
console.log(bBalanced);