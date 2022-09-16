"use strict"

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
// module.exports = { groupById, unique, filterRangeInPlace, filterRange, Calculator }; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {Array} arr of numbers
 * @param {Number} a 
 * @param {Number} b 
 * @returns 
 */
 function filterRange(arr,a,b){
    let output = [];
    for (const element of arr){
        if(element>=a && element<=b){
            output.push(element);
        }
    }
    return output;
  }



 /**
  * 
  * @param {Array} arr of number
  * @param {*} a number 
  * @param {*} b bumber
  */
  function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
      // remove if outside of the interval
      if (arr[i] < a || arr[i] > b) {
        arr.splice(i, 1);
        i--;
      }
    }
  
  }


 


/**
 * @returns{Calculator} it return the object.
 */
 function Calculator() {
    this.methods = {
        ["-"]: (aaa, bbb) => aaa - bbb,
        ["+"]: (aaa, bbb) => aaa + bbb
    };

    this.calculate = function (str) {
        let char = str.split(" ");
        let aaa = +char[0];
        let operator = char[1];
        let bbb = +char[2];

        if (!this.methods[operator]) {
            return NaN;
        }
        return this.methods[operator](aaa, bbb);
    };

    this.addMethod = function (prop, func) {
        this.methods[prop] = func;

    };
}
/**
 * 
 * @param {Array} arr of elements 
 * @returns{string} output is string which are unique 
 */
function unique(arr) {
    let output = [];
  
    for (let str of arr) {
      if (output.indexOf(str)==-1) {
        output.push(str);
      }
    }
  
    return output;
  }


/**
 * 
 * @param {Array} array input an array
 * @returns {Number}reduced number.
 */
 function groupById(array) {

    return array.reduce((user, currentUser) => {
        user[currentUser.id] = currentUser;
        return user;

    }, {});

}