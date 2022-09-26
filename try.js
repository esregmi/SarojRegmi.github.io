 "use strict";
// /*
// 21.	Create bank object, bank, with methods:
// a.	debit(id, amount) , adds negative amount to customer transaction list, but only if the amount is greater than the current balance.
// b.	credit(id, amount), adds positive amount to customer transaction list
// c.	getBalance(id) returns current balance of that customer.  The balance should be computed as the sum of all recorded transaction amounts.
// d/  saveTransaction(id, amount) saves this transaction amount to the customerTransactions list for this customer
// e.	getBankBalance:  returns sum of all customer balances
// The bank object should have a transactionsDB property, which will be an array of objects containing all of the customer objects.
//   Customer objects will have properties customerId and customerTransactions, e.g., 
// {customerId: 1234, customerTransactions: [10, 50, -40] } would be one element of the array.
// */

// const bank = {
//     transactionsDB: [],
// };
// bank.transactionsDB = [
//     { customerId: 1, customerTransactions: [10, 50, -40] },
//     { customerId: 2, customerTransactions: [10, 10, -10] },
//     { customerId: 3, customerTransactions: [5, -5, 55] }];


// /* this is complete, no need to modify.
// Saves this amount to the customerTransactions array for customerId id. */
// bank.saveTransaction = function (id, amount) {
//     const customer = bank.transactionsDB.find(customer => customer.customerId === id);
//     customer.customerTransactions.push(amount);

// };

// bank.debit = function (id, amount) {
//     /* make sure current balance is > amount */
//     //IMPLEMENT THIS
//     if (bank.getBalance(id) > amount) {
//         bank.saveTransaction(id, -amount)
//     }
// };

// bank.credit = function (id, amount) {
//     this.saveTransaction(id, amount);
// };

// bank.getBalance = function (id) {
//     //IMPLEMENT THIS
//     let customerBalance = 0;
//     const customer = bank.transactionsDB.find(customer => customer.customerId === id);

//     for (let i = 0; i < customer.customerTransactions.length; i++) {
//         customerBalance += customer.customerTransactions[i];
//     }
//     return customerBalance;
//     //IMPLEMENT THIS
// };



// /**
//  * @returns {number}  returns sum of all balances
//  */
// bank.bankBalance = function () {
//     //IMPLEMENT THIS
//     let balance = 0;
//     for (let element of bank.transactionsDB) {
//         for (let i = 0; i < element.customerTransactions.length; i++) {
//             balance += element.customerTransactions[i];
//         }
//     }
//     return balance;
// };
////////////////////////quiz//////////////////////////////////
// const quiz = {};
// quiz.students = [{ sid: 10, answers: [{ qid: 2, ans: "b" }, { qid: 3, ans: "a" }, { qid: 1, ans: "b" }] },
// { sid: 11, answers: [{ qid: 1, ans: "e" }, { qid: 2, ans: "a" }, { qid: 3, ans: "b" }] },
// { sid: 12, answers: [{ qid: 3, ans: "b" }, { qid: 2, ans: "a" }, { qid: 1, ans: "d" }] }];
// quiz.key = [{ qid: 1, ans: "b" }, { qid: 2, ans: "a" }, { qid: 3, ans: "b" }];

// /**
//  * 
//  * @param {Object} ans1 is an answer object
//  * @param {Object} ans2 is an answer object 
//  * @returns {number} difference of the identifiers
//  */
// function answerComparator(ans1, ans2) {
//     return ans1.qid - ans2.qid;
// }
// /**
//  * 
//  * @param {*} sid student id
//  * @returns {number} score for student
//  * find this student
//  * sort the student answers
//  * compare them against key and add up matches
//  */
// quiz.scoreStudent = function (sid) {
// //IMPLEMENT THIS
// const student = this.students.find(aStudent => sid === aStudent.sid);
// const studentAnswers = student.answers.sort(answerComparator);
// const key = this.key;
// let score = 0;
// for (let i = 0; i < key.length; i++) {
//     if (studentAnswers[i].ans === key[i].ans) {
//         score++;
//     }
// }
// return score;
// };

// /**
//  * @returns {number} average score of all students
//  * go through list of students and get score of each, then the average
//  */
// quiz.getAverage = function(){
// //IMPLEMENT THIS
// let sum = 0;
// for (let student of this.students){
//     sum += this.scoreStudent(student.sid);
// }
// return sum/this.students.length;

// };

// object constructor and prototype// ///
/*
function Car (brand, model, year){
    this.brand= brand,
    this.model= model,
    this.year= year
};
let car1 = new Car("suziki","altro",2015);
let car2 = new Car("bmw","fire",2016);
console.log(car1);
car1.fourWheel = true; // problem in adding properties:
*/
/*
// Inherit properties//
let animal = {
    eat:true
}
let rabbit ={
    jumps:true,
    __proto__ :  animal
}
// rabbit.__proto__ =  animal;
console.log(rabbit.eat);
*/
// Inherit methods:
/*
let animal = {
    eat:true,
    walk: function(){
        console.log("Animal walk");
    }
}
let rabbit = {
    jump:true,
    __proto__: animal
}
// rabbit.__proto__ = animal;
rabbit.walk();
*/
// prototype chain//
/*
let animal ={
    eat: true
}
let rabbit={
    jump: true,
    __proto__: animal
}
let longEar={
    length:10,
    __proto__: longEar
}
console.log(rabbit.eat);
*/
/*
let head = {
    glasses: 1
    };
    let table = {
    pen: 3
    };
    let bed = {
    sheet: 1,
    pillow: 2
    };
    let pockets = {
    money: 2000,

    };
    console.log("expect 3: ", pockets.pen);
    console.log("expect 1: ", bed.glasses);
    //---
    //---
    */
   /*
   
    let animal = {
        jumps: null
      };
      let rabbit = {
        __proto__: animal,
        jumps: true
      };
      
      alert( rabbit.jumps ); // ? (1) true
      
      delete rabbit.jumps; // remove from rabbit object
      
      alert( rabbit.jumps ); // ? (2) // null
      
      delete animal.jumps; // remove from animal object
      
      alert( rabbit.jumps ); // undefinded
      */

      /* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
      // module.exports = { Accumulator, Calculator }; //add all of your function names here that you need for the node mocha tests
      
    //   /**
    //    * 
    //    * @returns {Accumulator} constructor function
    //    */
    //    function Accumulator(initialValue, increment){
    //       //implement this
    //       this.increment = increment,
    //       this.currentValue = initialValue,
          
    //       this.accumulate = function (){
    //           this.currentValue = this.currentValue + this.increment;
    //       };
          
    //       this.report= function(){ 
    //           return this.currentValue; 
    //       };
          
    //   }
      
    //   /**
    //    * @returns {Calculator} this is a constructor function
    //    */
    //    function Calculator() {
    //       this.setValues = function (a, b){
    //           this.a =a;
    //           this.b = b;
    //        };
    //        this.sum = function (){
    //           return this.a + this.b;
    //        };
    //        this.mul = function (){
    //           return this.a * this.b;
    //        };
    //        }
      
      

// constructor assignment:

function accumulate(initialValue, increment){
    this.currentValue = currentValue,
    this.increment= increment,


    this.accumulated = function(){
        this.currentValue = this.currentValue+this.increment;
    }
}