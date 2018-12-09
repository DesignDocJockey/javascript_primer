'use strict';

/* Calculate the Fibonacci Sequence */

const fibonacci = (fibNbr) => {
    let start = 0, prev = 1;
    for(let i = 0; i < fibNbr; i++) {
        let temp = start + prev;
        start = prev;
        prev = temp;
    }
    return start;
}

const fibNbr = fibonacci(7);
console.log(fibNbr);