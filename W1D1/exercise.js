/* eslint-disable require-jsdoc */
// eslint-disable-next-line strict
"use-strict";
/*Eslint disable*/ 
/*
function maximumSum (arr){
    if (arr==[]) return 0;
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
return maxSum;
}
console.log(maximumSum([-1, 2, 3, -9]));

//reduce the array to the product of the numbers (“expect 120”)
//➢ reduce the array to the max of the numbers (“expect 5”)
let arr = [1, 2, 3, 4, 5];
let result = arr.reduce (function(product,current){return product*current;},1);
console.log(result);
const max = arr.reduce(function(max,current){if (current > max) {return current;} else {return max;}},0);
console.log("Expect :"max);

let arr = [1, 2, 3, 4, 5];
function checkMax(max, current){
    if (current>max){
        return current;
    }else{
        return max;
    }
}
const max = arr.reduce(checkMax,0);
console.log("expect: ", max);
*/
/*
describe("filterRange", function () {
    it("returns the filtered values", function () {
        let arr = [5, 3, 8, 1];
        let filtered = filterRange(arr, 1, 4);
        assert.deepEqual(filtered, [3, 1]);
    });
    */
//function filterRange(arr, a, b) {
/*
function filterRange(arr,a,b){
    arr.filter(nepal);
    function nepal(num){
        if (num>=a && num<=b){
            console.log(num);
        }
    }
}
filterRange([5, 3, 8, 1], 1, 4);

// (arr, [5, 3, 8, 1])

function filterRange(arr,a,b){
    let output = [];
    for (const element of arr){
        if(element>=a && element<=b){
            output.push(element);
        }
    }
    return output;
}
console.log(filterRange([5, 3, 8, 1], 1, 4));

*/
/*
function filterRangeInPlace(arr, a, b) {
    let output = [];
    for (const element of arr){
        if(element>=a && element<=b){
            output.push(element);
        }
    }
    return output;
}
console.log(filterRangeInPlace([5, 3, 8, 1], 1, 4));

*/
