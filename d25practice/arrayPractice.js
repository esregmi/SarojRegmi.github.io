"use strict"
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
/*
function includesEvenAge(arr){
function maxNumber(arr){
function maxNumber(arr){
    */
   // module.exports = { doubleNums, doubleAges, filterEven, filterOver10, findEvenNum, findEvenAge, includesEvenNum,includesEvenAge,sumOf,avgOf,maxNumber,maxAge}; //add all of your function names here that you need for the node mocha tests

// map
function doubleNums(arr){
return arr.map(num => num * 2);
}
// map---/--
function doubleAges(arr){
    return arr.map(item => ({name : item.name, age : item.age *2}))
}

function filterEven(arr){
return  arr.filter(item => (item%2===0)
);
}

function filterOver10(arr) {
    return arr.filter(item =>(item.age>10))
}

function findEvenNum(arr){
    return arr.find(item => item%2==0)
    
}

function findEvenAge(arr){
    return arr.find(item =>item.age%2 ===0)
}

function includesEvenNum(arr){
return arr.includes(item => item%2===0)
}

function includesEvenAge(arr){
    return arr.includes(item=> item.age%2===0)
}
// Reduce     //
// find sum of number
function sumOf(arr){
    return arr.reduce(((acc,curr)=> acc+=curr),0)
}

function avgOf(arr){
    return arr.reduce((acc,curr)=> acc+=curr/arr.length,0)
}

function maxNumber(arr){
    return arr.reduce(function(acc, curr){
		if(acc > curr){
			curr = acc;
		}
		return curr;
	},0);

}

function maxAge(arr){
    return arr.reduce(function(acc, curr){
		if(acc > curr.age){
			curr.age = acc;
		}
		return curr.age;
	},0);

}

