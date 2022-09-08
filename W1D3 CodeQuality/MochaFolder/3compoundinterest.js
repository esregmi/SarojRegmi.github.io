"use strict";
const assert = require("assert");
function compoundInterest(initialAmt,annualRate,years){
    let month = years*12;
    let monthyRate = annualRate/1200;
    let balance = initialAmt;
    for (let i=1; i<=month; i++){
        let monthlyAmt = monthyRate*balance;
        balance = balance+monthlyAmt;
        balance = Math.floor(balance*100)/100;
    }
    return balance;
}

describe("test compound interest balance", function(){
    it("expect 110.47: ", function(){
    assert.strictEqual(compoundInterest(100,10,1),110.47);
    });
    it("expect 16470.09:", function(){
    assert.strictEqual(compoundInterest(10000,5,10),16470.09);
    });
});
