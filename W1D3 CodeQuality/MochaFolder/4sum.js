"use strict";
const assert = require("assert");
function calculation (input){
	let sumDigit =0;
	let multiDigit = 1;
	while (input >0){
		let remainder = input%10;
		sumDigit = sumDigit+remainder;
		multiDigit = multiDigit*remainder;
		input = Math.floor(input/10);
	}
	return sumDigit;
}
/*
console.log(calculation(1234));
console.log(calculation(102));
console.log(calculation(8));
*/

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
