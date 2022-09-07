/*
2. Make a defining table and function that will return the balance of a savings account that 
compounds interest monthly. Parameters for the function will be:
• initial amount 
• annual interest rate
• number of years to compound
Do not look up mathematical formulas for how to compute compound interest. Use a for loop that will 
add the appropriate interest each month.
console.log("expect 110.47", compoundInterest(100, 10, 1));
console.log("expect 16470.09", compoundInterest(10000, 5, 10));
*/
/*
Input:Initial amount, Annual interest rate, and no of years
Output: Total balance after given n no of years.
Processing:
*Convert annual interest to month
* Convet the years into month and using loop, keep itleration for the given months.
*find the monthly intrest amount and add it in the balance.
*/

"use strict";

/**
 * 
 * @param {number} initialAmt 
 * @param {number} annualRate 
 * @param {number} years 
 * @returns 
 */
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
console.log("expect 110.47", compoundInterest(100, 10, 1));
console.log("expect 16470.09", compoundInterest(10000, 5, 10));
