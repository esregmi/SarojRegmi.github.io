"use strict";
/* eslint-disable */
let array = [-10, 10, 20, -20, -10, 30];
let returnVal = array.filter((positive) => positive > 0);
console.log(returnVal);
let negReturn = array.filter((negative) => negative < 0);
console.log(negReturn);

console.log(array);