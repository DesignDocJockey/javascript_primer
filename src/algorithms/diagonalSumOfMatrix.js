'use strict';

const populateMatrix = (size) => {
    let matrix = [];
    for(let i = 0; i< size; i++) {
        matrix[i] = [];
        for(let j = 0; j < size; j++) {
            matrix[i][j] = Math.floor(Math.random() * 10);
        }
    }
    return matrix;
}

const diagonalSumOfAMatrix = (matrixArray) => 
{
    let total = 0;
    for(let i = 0; i < matrixArray.length; i++) {
        total += matrixArray[i][i];
    }
    return total;
}

const reverseDiagonalSumOfAMatrix = (matrixArray) => 
{
    let total = 0;
    for(let i = 0; i < matrixArray.length; i++) {
        const revIdx = (matrixArray.length - 1) - i;
        total +=  matrixArray[i][revIdx]
    }
    return total;
}

const getMatrx = populateMatrix(5);
console.log(getMatrx);
const sum = diagonalSumOfAMatrix(getMatrx);

const reverseSum = reverseDiagonalSumOfAMatrix(getMatrx);
console.log(reverseSum);