/* eslint-disable*/
"use strict";
module.exports = {isVowel,computeSalesCommission,calcDownpayment,calculation,convertFahrenheit,calcDistance};

const assert = require("assert");
function isVowel (str){
    if (str === "a" || str == "e" || str ==="i" || str =="o" || str ==="u"){
        return true;
    }
    return false;
  }
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
//
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
//
function convertFahrenheit(tempInFarenheit){
	let celsius = (5/9)* (tempInFarenheit-32);
	celsius = Math.floor(celsius*100)/100;
	return celsius;
}
//
function calcDistance(x1,y1,x2,y2){
	let xCoordinateDiff = x2-x1;
	let yCoordinateDiff = y2-y1;
	let distance = Math.sqrt(Math.pow(xCoordinateDiff,2) + Math.pow(yCoordinateDiff,2));
	distance = Math.floor(distance*100)/100;
	return distance;
}