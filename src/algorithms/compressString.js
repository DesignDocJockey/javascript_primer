const compressString = (string) =>{

    let counter = 1;
    let finalString = '';
    let character = '';
    console.log(string);
    let characterArray = string.split('');
    for(let i = 0; i < characterArray.length; i++) 
    {
        console.log(characterArray[i]);
        if (characterArray[i] === characterArray[i + 1])
        {
            character = characterArray[i];
            counter++;
        } 
        else if (characterArray[i] !== characterArray[i + 1])
        {
            let compressed = `${character}${counter}`;
            console.log(compressed);
            finalString += compressed;
            counter = 1;
            character = characterArray[i];
        }
    }
    console.log(finalString);
}

compressString('aaaabbb');