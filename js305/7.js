"use strict";
/* eslint-disable */
// const prompt = require("prompt-sync")();
// function ask(question, yes, no) {
//   let result = prompt(question);
//   if (result === "yes") yes();
//   else no();
// }
// function showOk() {
//   console.log("You agreed.");
// }
// function showCancel() {
//   console.log("You canceled the execution.");
// }
// // ask("Do you agree?", showOk, showCancel);
// ask(
//   "Do you agree?",
//   () => console.log("You agreed."),
//   () => console.log("You canceled the execution.")
// );
let animal = {
  eats: true,
};
function Dog(name) {
  this.name = name;
  this.__proto__ = animal;
}

//Dog.prototype = animal;
let snoopy = new Dog("Snoopy");

console.log(snoopy.eats); // true