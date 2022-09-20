"use strict";
/*
const team= ["Bob","Fred","jim"];
// assigning individual varible to array element
let [bob, , jim]= team;
console.log(bob);
console.log(jim);
*/
/*// const team = { point: "Bob", shooting: "Fred", power: "Jim", small: "Al", center: "Big Sleep" }
const team = {power: "Jim", center: "Big Sleep" }
let {power,center} = team;
console.log("expect Big Sleep", center);
console.log("expect Jim", power);
*/
let user = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
user = JSON.parse(user);
alert( user.friends[1] ); // 1
//create and log to the console a json string from john. Then create a new instance of john, johnClone, using
// JSON.parse. Is john === johnClone?
const john = {
name: "John",
surname: "Smith",
isAdmin: false,
birthday: {"year": 2000, "month": "February", "day": 3},
friends: [0,1,2,3]
};
const jonhJSON = JSON.stringify(john);
console.log("John string is :", jonhJSON);
const johnClone = JSON.parse(johnJSON);
