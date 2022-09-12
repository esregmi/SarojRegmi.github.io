/* 3.	Write a function, myMap, that takes an array and a function and returns a new array that has the function applied to each element of the input array.
*/

/* eslint-disable */
function doubleCheck (){
    let output = [];
    for (let i=0; i<test.length; i++){
        output.push(test[i]*2);
    }
    // return output;
}
// console.log(doubleCheck ([10,2,0,5,6]));

// function myMap(array, callback){
    //     return callback();
    // }
    // let test= [10,2,0,5,6];
    // console.log(myMap(test,doubleCheck));
    
let testArray = [10,2,0,5,6];


function myMap(array, callback) {
    let mappedArray = [];

    for(const element of array){
        let result = callback(element);

        mappedArray.push(result);
    }

    return mappedArray;
}

function double(num) {
    return num * 2;
}

function times100(num) {
    return num * 100;
}

function getString(value){
    testArray.push(5);
    return "given value is " + value;
}
console.log(myMap(testArray, getString));


console.log(myMap(testArray, double));
console.log(myMap(testArray, times100));
