"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser.
*/
// module.exports = { myMap, myFilter, myReduce }; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {*} arr 
 * @param {*} func 
 * @returns 
 */
function myMap(arr, func) {
//IMPLEMENTATION NEEDED
let mappedArr =[];
for(let i=0; i< arr.length; i++){
    let newArr = func(arr[i],i,arr);
    mappedArr.push(newArr);
}
return mappedArr;
}
/**
 * 
 * @param {*} arr 
 * @param {*} func 
 * @returns 
 */

 function myFilter(arr, func) {
    let filteredArr = [];
    for(let i=0; i< arr.length; i++){
        if(func(arr[i],i)){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

/**
 * 
 * @param {*} arr 
 * @param {*} func 
 * @param {*} initialValue 
 * @returns 
 */

    
 function myReduce(arr, func, initialValue) {
    //IMPLEMENTATION NEEDED
    let value = initialValue; 
    for(let i = 0; i<arr.length; i++){
         value = func(value, arr[i],i );         
    }

    return value ;
    }
    