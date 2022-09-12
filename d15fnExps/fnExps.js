"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
*/ 
/*
module.exports = {double, times100, myMap }; //add all of your function names here that you need for the node mocha tests
*/
/**
 * 
 * @param {Number} number is the numeric value to double
 * @returns {Number} doubleValue returns twice of number
 */

 function double (number){
    let doubleValue = 2*number;
    return doubleValue;
}

/**
 * 
 * @param {Number} number passed for 100 times 
 * @returns {number} 100 times of number
 */
 function times100(number){
    return 100*number;
}
console.log(times100(20));


/**
 * 
 * @param {array} array of element passed
 * @param {function} callback function
 * @returns 
 */

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
// let testArray = [10,2,0,5,6];
// console.log(myMap(testArray, double));
// console.log(myMap(testArray, times100));
