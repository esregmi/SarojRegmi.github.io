/*
3. Cost of House Down Payment
Make a defining table and then write a function that calculates down payment for a home loan based on
following rules. Your function should have a parameter for the cost and return the down payment
amount.
Cost of House Down Payment
$0 to less than 50K 5% of the cost
$50K to less than 100K $2500 + 10% of (cost - $50K)
$100K to less than 200K $7500 + 15% of (cost - $100K)
$200K and above $20000 + 10% of (cost - $200K)
console.log("expect 2000: ", calcDownpayment(40000));
console.log("expect 2500: ", calcDownpayment(50000));
console.log("expect 7500: ", calcDownpayment(100000));
console.log("expect 25000: ", calcDownpayment(250000));
*/
/*
Input:Cost of a house.
Output: Downpayment amount for given house cost.
Processing:
* Check the condition for corresponding house cost.
* If condition match then start computation inside that condition.
*/

"use strict";
const assert = require("assert");
function calcDownpayment(cost ){
	let downPayment;
	if (0<=cost&& cost<50000){
		downPayment = (5/100)*cost;
	} else if (50000<=cost && cost< 100000){
		downPayment = (10/100)*(cost-50000)+2500;
	}else if(100000<= cost && cost < 200000){
		downPayment = 7500+(cost-100000)*(15/100);
	} else{
		downPayment = 20000+(cost-200000)*(10/100);
	}
	return downPayment;
}

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
