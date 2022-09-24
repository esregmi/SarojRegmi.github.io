"use strict"
/*elsint-diable*/
// own map
/*
let arr = [1,2,3,4,5];
let res = arr.map((item)=>{return item**2});
console.log(res);
*/
let arr = [1,2,3,4,5];
function myMap(arr, mapFunc){
    let mapArr = [];
    for(let i=0; i<arr.length; i++){
        let result = mapFunc(arr[i],i,arr);
        mapArr.push(result);
    }
    return mapArr;
    }
    
/*
let newMap=myMap(arr,function(item,index,arr){
    return item**2;
});
console.log(newMap);
*/
function squareFunc(item,index,arr){
    return item**2;
};
console.log(myMap(arr,squareFunc));
