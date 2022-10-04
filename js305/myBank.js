"use strict"
/*eslint-disable */
// 21.	Create bank object, bank, with methods:
// a.	debit(id, amount) , adds negative amount to customer transaction list, but only if the amount is greater than the current balance.
// b.	credit(id, amount), adds positive amount to customer transaction list
// c.	getBalance(id) returns current balance of that customer.  The balance should be computed as the sum of all recorded transaction amounts.
// d/  saveTransaction(id, amount) saves this transaction amount to the customerTransactions list for this customer
// e.	getBankBalance:  returns sum of all customer balances
// The bank object should have a transactionsDB property, which will be an array of objects containing all of the customer objects.
//   Customer objects will have properties customerId and customerTransactions, e.g., 
// {customerId: 1234, customerTransactions: [10, 50, -40] } would be one element of the array.

const bank = {
        transactionsDB: [],
    };
    bank.transactionsDB = [
        { customerId: 1, customerTransactions: [10, 50, -40] },
        { customerId: 2, customerTransactions: [10, 10, -10] },
        { customerId: 3, customerTransactions: [5, -5, 55] }];
        /*
// to show all the transaction is greater than 20
function getCustomersWithDeposit10(bank){
    let arr = [];
    for(const trans of bank.transactionsDB){
        for (const cosTrans of trans.customerTransactions){
            if (cosTrans >= 10){
                arr.push({costumerID:trans.customerId, transcation:cosTrans});
                break;
            }
        }

    }
    return arr;
}
console.log(getCustomersWithDeposit10(bank));
*/
// filter the one which is greater than 10
function find
