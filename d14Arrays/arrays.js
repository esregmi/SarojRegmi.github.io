"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
*/ 
module.exports = {maxOfThree: maxOfThree, sum: sum, multiply: multiply, scoreExams: scoreExams, reverseArrayInPlace: reverseArrayInPlace, reverseArray: reverseArray, findLongestWord: findLongestWord, generateArray: generateArray }; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {number} a is a number
 * @param {number} b is a number 
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
function maxOfThree(a, b, c){ 
    if (a>b && a>c) return a;
    if (b>a && b>c) return b;
    if (c>a && c>b) return c;
    
}

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
 function sum(arr){
	let tot = 0;
	for(let number of arr){
		tot = number + tot;
	}
	return tot;
}


/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
 function multiply(arr){
	let tot = 1;
	for(let number of arr){
		tot = number* tot;
	}
	return tot;
}

/**
 * 
 * @param {Array} studentAnswers array of numbers
 * @param {Array} correctAnswers array of numbers
 * @returns 
 */

function scoreExams(studentAnswers,correctAnswers){
	let scoretest = [];
	//let count =0;
	for (let i= 0; i< studentAnswers.length; i++){
        let count =0;
		for (let j =0; j< studentAnswers[i].length; j++){
			if(studentAnswers[i][j] === correctAnswers[j]){
				count++;
			}
		}
		scoretest.push(count);
	}
	return scoretest;
}

/**
 * 
 * @param {array} array with characters
 * @returns return reverse 
 */
 function reverseArray(array) {
    let newarr = [];
    for (const element of array) {
        newarr.unshift(element);
    }

    return newarr;
}
/**
 * 
 * @param {array} array elements
 * @returns return reverse
 */
function reverseArrayInPlace(array) {
    let arr1 = array.splice(0);
    for (let i = arr1.length - 1; i >= 0; i--) {
        array.push(arr1[i]);
    }
    return array;
/*
/**
 * 
 * @param {arr} arr with string
 * @returns longest length
 */
/*
function findLongestWord(arr){
    let longestSize = 0;
    let longestStr;
    for(let i=0; i<arr.length; i++){
    if(arr[i].length > longestSize){
    longestSize = arr[i].length;
    longestStr = arr[i];
    }
    }
    return longestStr;
   }
*/

/**
 * 
 * @param {int } value1 The firts value; 
 * @param {int } value2 The second value;
 * @returns { aLenArr } The array of arrays;
 * */

function generateArray(value1, value2) {
        (a, b) {
        let seqCount = 0;
        let aLenArr = [];
        for(let i=0; i<a; i++) {
            let bLenArr = [];
            for(let j=0; j<b; j++) {
                seqCount++;
                bLenArr.push(seqCount);
            }
            aLenArr.push(bLenArr);
        }
        return aLenArr;
    }