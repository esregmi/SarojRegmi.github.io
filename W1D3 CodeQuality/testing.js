/* eslint-disable*/
const functionsModule = require("./function.js");
const isVowel = functionsModule.isVowel; 
const computeSalesCommission = functionsModule.computeSalesCommission;
const calcDownpayment = functionsModule.calcDownpayment;
const calculation = functionsModule.calculation;
const convertFahrenheit = functionsModule.convertFahrenheit;
const calcDistance = functionsModule.calcDistance;


const assert = require("assert");
describe("isVowel", function () {
    it("a is vowel", function () {
    assert.equal(isVowel("a"), true);
    });
    it("e is vowel", function () {
    assert.equal(isVowel("e"), true);
    });
    it("i is vowel", function () {
    assert.equal(isVowel("i"), true);
    });
    it("o is vowel", function () {
    assert.equal(isVowel("o"), true);
    });
    it("u is vowel", function () {
    assert.equal(isVowel("u"), true);
    });
    it("z is not vowel", function () {
    assert.equal(isVowel("z"), false);
    });
    it("5 is not vowel", function () {
    assert.equal(isVowel("5"), false);
    });
   });
   
   //
   
describe("test of ComputSalesCommission", function(){
    it("tests salaried and 200 sales", function(){
    assert.strictEqual(computeSalesCommission(true, 200), 0);
    });
    it("tests not salaried and 200 sales", function(){
    assert.strictEqual(computeSalesCommission(false, 200), 0);
    });
    it("tests salaried and 300 sales", function(){
    assert.strictEqual(computeSalesCommission(true, 300), 3);
    });
    it("tests not salaried and 300 sales", function(){
    assert.strictEqual(computeSalesCommission(false, 300), 6);
    });
    it("tests salaried and 3500 sales", function(){
    assert.strictEqual(computeSalesCommission(true, 3500), 65);
    });
    it("tests not salaried and 3500 sales", function(){
    assert.strictEqual(computeSalesCommission(false, 3500), 100);
    });
   });
   
   //
   
describe("test of calcDownpayment", function(){
    it("expect 2000: ", function(){
    assert.strictEqual(calcDownpayment(40000),2000);
    });
    it("expect 2500:", function(){
    assert.strictEqual(calcDownpayment(50000),2500);
    });
    it("expect 7500:", function(){
    assert.strictEqual(calcDownpayment(100000),7500);
    });
    it("expect 25000:", function(){
    assert.strictEqual(calcDownpayment(250000),25000);
    }); 
});
//
describe("test sum of given digit", function(){
    it("expect 10: ", function(){
    assert.strictEqual(calculation(1234),10);
    });
    it("expect 3:", function(){
    assert.strictEqual(calculation(102),3);
    });
    it("expect 8:", function(){
    assert.strictEqual(calculation(8),8);
    });
});
//
describe("test temperature conversion in celsius", function(){
    it("expect 0: ", function(){
    assert.strictEqual(convertFahrenheit(32),0);
    });
    it("expect -17.7778:", function(){
    assert.strictEqual(convertFahrenheit(0),-17.78);
    });
    it("expect 100:", function(){
    assert.strictEqual(convertFahrenheit(212),100);
    });
});

describe("test distance between two point", function(){
    it("expect 7.07: ", function(){
    assert.strictEqual(calcDistance(0,0,5,5),7.07);
    });
});
