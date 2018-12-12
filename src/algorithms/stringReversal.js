'use strict';

/*reverse a string 
hello -> olleh
batman -> mantab
*/

const reverse = (sringToReverse) =>{
    const reversed = sringToReverse.split(' ')
                    .reverse()
                    .join(' ');
    console.log(reversed);
    return reversed;
}

// const string = 'Hello World. Does This Work';
// reverse(string);

const reverse2 = (sringToReverse) => {
    let reversed = [];
    let words = sringToReverse.split(' ');
    for(let i = words.length - 1;  0 <= i; i--) {
        reversed.push(words[i]);
    }

    return reversed.join(' ');
}

const string2 = 'Does This Work';
const rez = reverse2(string2);
console.log(rez);