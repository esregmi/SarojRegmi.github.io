/*
Write a function that takes x and y co-ordinates of two points as inputs and returns the distance
between these two points based on the formula, d = √( x 2 − x 1 ) 2 + ( y 2 − y 1 ) 2
console.log("expect 7.07 : ", calcDistance (0, 0, 5, 5));
*/
/*
Input: x and y coordinate for two point.
Output: distance between two point
Processing:
* difference of x coordinate.
* difference of y coordinate.
* Squares of both x and y differences from above step.
* Square root of the sum of the x and y squares from above step.
*/

"use strict";
function calcDistance(x1,y1,x2,y2){
	let xCoordinateDiff = x2-x1;
	let yCoordinateDiff = y2-y1;
	let distance = Math.sqrt(Math.pow(xCoordinateDiff,2) + Math.pow(yCoordinateDiff,2));
	distance = Math.floor(distance*100)/100;
	return distance;
}
console.log("expect 7.07 : ", calcDistance (0, 0, 5, 5));