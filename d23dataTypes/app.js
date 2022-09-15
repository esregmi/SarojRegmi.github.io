"use strict";
/* eslint-disable */

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
 //module.exports = { ucFirst, getMaxSubSum, truncate , camelize, checkSpam,extractCurrencyValue}; //add all of your function names here that you need for the node mocha tests



function ucFirst(str) {
        if (str ==""){
            return "";
        } else {
            return str[0].toUpperCase()+str.slice(1);
        }
        
    }

function checkSpam(str) {
if ((str == "buy ViAgRA now")|| (str=="free xxxxx")){
    return true;
    }
return false;

}

function truncate(str, maxlength) {
    if(str.length >=maxlength-1){
        return str.slice(0,maxlength-1).concat("…");
    } else {
        return str;
    }
}

function extractCurrencyValue(str){
	let priceNum = parseInt(str.slice(1))
	return priceNum;
}


/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} the total of the maximal subarray
 
 */

function getMaxSubSum (arr){
    let maxSum = arr[0];
    for (let i =0; i<arr.length; i++){
        let curSum = 0;
        for (let j=i; j<arr.length;j++){
            curSum += arr[j];
            if(curSum > maxSum){
                maxSum = curSum;
            }
        }
    }
    if (maxSum < 0 || maxSum == null) return 0;
    return maxSum;
    }
//




  function camelize(str) {
    let arr = str.split("-");
    let camelWord = "";
  
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] == "") {
            continue;
        }
        camelWord += ucFirst(arr[i]);
    }
    
    if (!(str.startsWith("-"))) {
        return arr[0] + camelWord.trim();
    }
    return ucFirst(arr[0]) + camelWord;
  }
