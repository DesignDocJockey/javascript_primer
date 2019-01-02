/**
 * Given an array that contains other arrays and single elements, flatten it into a single array
 * flattenArray([1,[2,[3]],[4]]);  => [1,2,3,4]
 */

 const flattenArray = (array) => {
    if(!array || array.length === 0) {
        return;
    }

    let flattenedArray = [];
    while(array.length > 0) {
        let value = array.shift();
        if(Array.isArray(value)) {
            array = value.concat(array);
        } 
        else{
            flattenedArray.push(value);
        }
    }
    return flattenedArray;
};

const flattened = flattenArray([1,[2,[3]],[4]]);
console.log(flattened);