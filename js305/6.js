//"use strict";
/* eslint-disable */
// const abc = {
//   salute: "",
//   greet: function () {
//     this.salute = "Hello";
//     console.log(this.salute); //Hello
//     const setFrench = function (newSalute) {
//       //inner function
//       this.salute = newSalute;
//     };
//     setFrench("Bonjour");
//     console.log(this.salute); //Bonjour??
//   },
// };
// abc.greet();
const abc = {
    salute: "",
    greet: function () {
      const self = this;
      this.salute = "Hello";
      console.log(this.salute); //Hello
      self.salute = function (newSalute) {
        //inner function
        this.salute = newSalute;
      };
      setFrench("Bonjour");
      console.log(this.salute); //Bonjour??
    },
  };
  abc.greet();