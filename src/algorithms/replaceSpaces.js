/** 
 * 
 * replace a string containing spaces with the %20
*/

const replaceSpaces = (string) => {

    if(!string || string.length === 0) return;
    
    const newString = [];
    const characterArray = string.split('');
    console.log(characterArray);

    for(let i = 0; i < characterArray.length; i++) 
    {
        if(characterArray[i] !== ' ') {
            newString.push(characterArray[i]);
        }
        else {
            newString.push('%');
            newString.push('2');
            newString.push('0');
        }
    }

    return newString.join('');
}

const string = "hello world how are you?"
console.log(replaceSpaces(string));