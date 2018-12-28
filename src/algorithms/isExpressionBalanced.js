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