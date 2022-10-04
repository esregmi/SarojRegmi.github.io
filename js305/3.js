"use strict";
/* eslint-disable */
function thisProgramIsBest(obj1, obj2, callBack) {
  if (obj1.age === obj2.age) {
    return "same age";
  } else return callBack();
}

function cbFun() {
  return "Different age";
}
let person1 = { age: 18 };
let person2 = { age: 19 };
console.log(thisProgramIsBest(person1, person2, cbFun));