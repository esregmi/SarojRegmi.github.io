"use strict";
/* eslint-disable */
// function User(name) {
//   console.log("1:", this);
//   this.name = name;
//   console.log("2:", this);
// }
// const tina = {};
// const thisUser = User.bind(tina);
// thisUser("Rujuan");
// thisUser("Tina");
// console.log("3: ", tina);
// const bank = { transactionsDB: [] };
// bank.transactionsDB = [
//   { customerId: 1, customerTransactions: [10, 50, -40] },
//   { customerId: 2, customerTransactions: [10, 10, -10] },
//   { customerId: 3, customerTransactions: [25, -5, 55] },
// ];
// function bankAccount() {
//   const bankArr = [];
//   for (let trans of bank.transactionsDB) {
//     trans.customerTransactions.filter((amt) => {
//       if (amt > 20) {
//         let obj = { custId: trans.customerId, amount: amt };
//         bankArr.push(obj);
//       }
//     });
//   }
//   return bankArr;
// }
// console.log(bankAccount(bank.transactionsDB));

// let vehicle = {
//   transports: true,
// };
// function Auto(brand) {
//   this.brand = brand;
//   this.__proto__ = vehicle;
// }

// Auto.prototype = vehicle;

// let honda = new Auto("Honda");

// console.log(honda.transports); // true

// const abc = {
//   salute: "",
//   greet: function () {
//     this.salute = "Hello";
//     console.log(this.salute); //Hello
//     let setFrench = function (newSalute) {
//       //inner function
//       this.salute = newSalute;
//     };
//     setFrench = setFrench.bind(abc);
//     setFrench("Bonjour");

//     console.log(this.salute); //Bonjour??
//   },
// };
// abc.greet(); //Hello Hello ???
const arr = [
  { name: "john", age: 24 },
  { name: "atheo", age: 18 },
];
let sortingArr = arr.sort((a, b) => {
  if (a.name < b.name) return -1;
  else if (a.name > b.name) return 1;
  else return 0;
});
console.log(sortingArr);
