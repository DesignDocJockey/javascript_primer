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
/** Check to see if a given expression is balanced
 * isMatchingBrackets("(){}")); // returns true
   isMatchingBrackets("[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]")); // returns true
   isMatchingBrackets("({(()))}}"));  // returns false
 */

 const isMatchingBrackets = (string) => {
    let stack = [];
    const characterMap = {
        '(': ')',
        '[':']',
        '{':'}'
    }

    for(let c of string) 
    {
        console.log(c);
        if(c === '(' || c === '[' || c === '{') {
            stack.push(c);
        }
        else {
            let opening = stack.pop();
            if(c !== characterMap[opening] ) {
                return false;
            }
        }
    }

    return stack.length === 0;
 };

console.log(isMatchingBrackets("(){}"));
