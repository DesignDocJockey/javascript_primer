/* Check If A Number Is Prime */

const isPrime = (nbr) => {

    if(nbr % 2 === 0) return false;

    for(let i = 3; i < nbr; i++) {
        if( nbr % i === 0)
            return false;
    }
    return true;
}

console.log(isPrime(7));
console.log(isPrime(18));
console.log(isPrime(23));