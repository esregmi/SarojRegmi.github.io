"use strict";

// const acc = require("./account.js");//with node need the name of your file with your functions here
// const Account = acc.Account;  //do this for all of the functions used in the Mocha tests

/**
 * Savings account class which extends the Account class
 */
class SavingsAccount extends Account {
    /**
     * Constructor of savings account
     * @param {number} number Savings account number
     * @param {number} interest Interest rate
     */
    constructor(number, interest) {
        super(number);
        this._interest = interest;

    }

    /**
     * Getter for the interest rate
     * @returns {number} Interest rate
     */
    getInterest() {
        return this._interest;
    }

    /**
     * Setter for the interest rate
     * @param {number} interest New interest rate
     * 
     * @returns {undefined}
     */
    setInterest(interest) {
        this._interest = interest;
    }

    /**
     * Updates balance by adding the interest amount
     * @returns {number} Balance including interest
     */
    addInterest() {
        return this._balance += (this._balance * this._interest / 100);
    }


    /**
     * 
     * @returns {string} String representation of the savings account status
     */
    toString() {
        return "SavingsAccount " + this._number + ": balance: " + this._balance + " interest: " + this.getInterest();
    }

    /**
     * 
     * @returns {string} End of month notification, if any
     */
    endOfMonth() {
        this.addInterest();
        return "Interest added SavingsAccount " + this._number + ":" + " balance: " + this._balance + " interest: " + this.getInterest();
    }
}

// exports.SavingsAccount = SavingsAccount;
