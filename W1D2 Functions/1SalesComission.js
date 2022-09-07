/*
1. Write a function, computeSalesCommission that takes a Boolean argument for salaried and 
number argument for salesAmount. It should return the sales commission based on following 
rules. First make a defining table for the function
1. Write a function, computeSalesCommission that takes a Boolean argument for salaried and 
number argument for salesAmount. It should return the sales commission based on following 
rules. First make a defining table for the function.
• If the salesman is salaried then
• These is no commission for sales below $300
• 1% for sales between $300 and $500 (inclusive, and commission on the entire amount)
• 2% for sales above $500 (only for the portion above 500 plus the 1% commission on the 
first 500)
• If the salesman is not salaried then
• no commission for sales below $300
• 2% for sales between $300 and $500 (inclusive, and commission on the entire amount)
• 3% for sales above $500 (only for the portion above 500 plus the 2% commission on the 
first 500)
console.log("expect 0: ", computeSalesCommission(true, 200));
console.log("expect 0: ", computeSalesCommission(false, 200));
console.log("expect 3: ", computeSalesCommission(true, 300));
console.log("expect 6: ", computeSalesCommission(false, 300));
console.log("expect 65: ", computeSalesCommission(true, 3500));
console.log("expect 100: ", computeSalesCommission(false, 3500));
*/
/*
Input:* Salesman Salaried or not and * total sales amount.
Output: Total commission of sales.
Processing:
*Check condition salesman is salaried or not, if salaried (true) if not (false)
*If any condition match, Check for condition of sales, and do computation.
*/
"use strict";
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
console.log("expect 0: ", computeSalesCommission(true, 200));
console.log("expect 0: ", computeSalesCommission(false, 200));
console.log("expect 3: ", computeSalesCommission(true, 300));
console.log("expect 6: ", computeSalesCommission(false, 300));
console.log("expect 65: ", computeSalesCommission(true, 3500));
console.log("expect 100: ", computeSalesCommission(false, 3500));