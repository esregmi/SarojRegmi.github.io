/* eslint-disable require-jsdoc */
// eslint-disable-next-line strict
"use-strict";
/*Eslint disable*/ 

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
