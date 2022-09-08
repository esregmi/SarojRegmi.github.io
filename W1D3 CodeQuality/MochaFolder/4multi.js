"use strict";
const assert = require("assert");
function calculation (input){
	let multiDigit = 1;
	while (input >0){
		let remainder = input%10;
		multiDigit = multiDigit*remainder;
		input = Math.floor(input/10);
	}
	return multiDigit;
}

describe("test multiplication of given digit", function(){
    it("expect 24: ", function(){
    assert.strictEqual(calculation(1234),24);
    });
    it("expect 0:", function(){
    assert.strictEqual(calculation(102),0);
    });
    it("expect 8:", function(){
    assert.strictEqual(calculation(8),8);
    });
});
