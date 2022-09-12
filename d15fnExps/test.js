/* 3.	Write a function, myMap, that takes an array and a function and returns a new array that has the function applied to each element of the input array.
*/
/* eslint-disable */

function myMap(array, callback) {
    let mappedArray = [];
    for(const element of array){
        let result = callback(element);

        mappedArray.push(result);
    }

    return mappedArray;
}

function double(num) {
    return num * 2;
}

function times100(num) {
    return num * 100;
}
let testArray = [10,2,0,5,6];
console.log(myMap(testArray, double));
console.log(myMap(testArray, times100));


/*

*/