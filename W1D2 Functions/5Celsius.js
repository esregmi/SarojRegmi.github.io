/*
5. Write a function, convertFahrenheit, that takes an input parameter with a temperature in Fahrenheit
and returns the temperature in Celsius.
console.log("expect 0: ", convertFahrenheit (32));
console.log("expect -17.7778: ", convertFahrenheit (0));
console.log("expect 100: ", convertFahrenheit (212));
*/
/*
Input: temperature in farenheit.
Output: temperature in celsius.
Processing:
* muntiply (5/9) by the difference of temperature in farenheit and 32.
* Using Math.floor print the celsius temperature in two digit.
*/

"use strict";
function convertFahrenheit(tempInFarenheit){
	let celsius = (5/9)* (tempInFarenheit-32);
	celsius = Math.floor(celsius*100)/100;
	return celsius;
}
console.log("expect 0: ", convertFahrenheit (32));
console.log("expect -17.7778: ", convertFahrenheit (0));
console.log("expect 100: ", convertFahrenheit (212));