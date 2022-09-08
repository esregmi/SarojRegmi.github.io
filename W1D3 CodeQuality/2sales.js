"use strict";
const assert = require("assert");
function computeSalesCommission(isSalaried ,salesAmt){

    let commission;
    if (isSalaried === true){
        if(salesAmt < 300){
            commission = 0;
        } else if (300 <=salesAmt && salesAmt <= 500){
            commission = (1/100)*salesAmt;
        } else {
            commission = (2/100)*(salesAmt-500) + (1/100)*500;
        }
    } else if(isSalaried  === false){
        if (salesAmt < 300){
            commission = 0;
        } else if (300<=salesAmt && salesAmt <=500) {
            commission = (2/100)*salesAmt;
        } else{
            commission = (3/100)*(salesAmt-500)+(2/100)*500;
        }
    }
    return commission;
}
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
   