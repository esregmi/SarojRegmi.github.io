"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
*/ 
module.exports = {double, times100, myMap }; //add all of your function names here that you need for the node mocha tests

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
 * @returns {Array} creates a new array with function mapped to each element
 */
function myMap(){
}
