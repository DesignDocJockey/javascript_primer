'use strict';

/* Find The Maximum Number Within An Array */

const findMaxNumberInArray = (array) => {
   let maxNumber = null;
   if(!array || array.length == 0) return maxNumber;
   else 
   {
        maxNumber = array[0];
        for(let nbr of array) //Runtime is O(N)
        {
            if(nbr > maxNumber) {
                maxNumber = nbr;
            }
        }
   }
   return maxNumber
};

//Total Runtime is O(N)

const array = [12, 25, 11, 20, 18, 24, 31, 23, 55];
const maxNbr = findMaxNumberInArray(array);
console.log(`The Max Number is ${maxNbr}`);