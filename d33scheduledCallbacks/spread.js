"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
module.exports = {copyArray, concat, findMin, combineObjs }; //add all of your function names here that you need for the node mocha tests



function copyArray(arr){
let clone= [...arr];
return clone;
}

function concat(arr1, arr2){
let concatIs = [].concat(arr1,arr2);
return concatIs;
}

function findMin(...numbers) {
    return Math.min(...numbers);
}

function findMax(...numbers) {
    return Math.max(...numbers);
}

function combineObjs(obj1, obj2){
let obj = {
 ...obj1,...obj2};
return obj;
}