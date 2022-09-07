/*
4. Write functions sumDigits and multDigits that take an integer parameter and return the sum or
product of the digits in the number. Use the / and % operators to find the digits.
Input sumDigits Output multDigits Output
input   sum multiplication
1234    10  24
102     3   0
8       8   8
*/
/*
Input: Then number is input here
Output: Sum of digit and its multiplication.
Processing:
* Here we dont know the loop end point, so we run while loop.
* Inside, while loop find the remainder and add the remainder and store in the sumDigit.
* For the same remainder muntiply and store ins the variable muntiDigit.
* After remainder we need to divide by 10, and keeps itleration until the input is greater than 0.
*/

function calculation (input){
	let sumDigit =0;
	let multiDigit = 1;
	while (input >0){
		let remainder = input%10;
		sumDigit = sumDigit+remainder;
		multiDigit = multiDigit*remainder;
		input = Math.floor(input/10);
	}
	return sumDigit +" " +multiDigit;
}
console.log(calculation(1234));
console.log(calculation(102));
console.log(calculation(8));