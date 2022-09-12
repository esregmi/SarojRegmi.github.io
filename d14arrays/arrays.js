"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
/*
module.exports = {
    maxOfThree: maxOfThree,
    sum: sum, 
    multiply: multiply,
    findLongestWord: findLongestWord,
    reverseArray: reverseArray,
    scoreExams: scoreExams,
    generateArray: generateArray

};
*/
//add all of your function names here that you need for the node mocha tests
 
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
// Sum and muntiply of a given array elements
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

// Finding the longest array of strings
/**
 * 
 * @param {Array} arr of strings 
 * @returns {Number} length of longest strings
 */
function findLongestWord(arr){
    let longestStr = arr[0];
     for(let i=0; i<arr.length; i++){
     if(arr[i].length > longestStr.length){
     longestStr = arr[i].length;
     }
     }
     return longestStr;
    }
// Reverse array:
// Missing array in reversePlace;
    /**
     * 
     * @param {Array} arr with elements to reverse
     * @returns {Array} array with reversed elements
     */

function reverseArray(arr){
  let array = [];
  for(let i = arr.length-1; i>=0; i--){
  array.push(arr[i]);
  }
  return array;
}

// SocreExams:
/**
 * 
 * @param {Array} studentAnswers in array 
 * @param {Array} correctAnswers in array 
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
// Generate Array:
/**
 * 
 * @param {Array} a is the length of outside array 
 * @param {Array} b is the inside array 
 * @returns {Array} aLenArr is the inside array 
 */
function generateArray(a, b) {
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
