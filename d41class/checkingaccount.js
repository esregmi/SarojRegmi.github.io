"use strict";

// const acc = require("./account.js");//with node need the name of your file with your functions here
// const Account = acc.Account;  //do this for all of the functions used in the Mocha tests

/**
 * Checking account class which extends the Account class
 */
class CheckingAccount extends Account {
    /**
     * 
     * @param {number} number Checking account number
     * @param {number} overdraft Overdraft amount
     */
    constructor(number, overdraft) {
        super(number);
        this._overdraft = overdraft;
    }

    /**
     * 
     * @returns {number} Overdraft amount
     */
    getOverdraft() {
        return this._overdraft;
    }

    /**
     * Sets new overdraft
     * @param {number} overdraft New overdraft amount
     * 
     * @returns {undefined}
     */
    setOverdraft(overdraft) {
        this._overdraft = overdraft;
    }

    /**
     * 
     * @param {number} amount Amount to withdraw
     * 
     * @returns {undefined} 
     */
    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > (this._balance + this._overdraft)) {
            throw Error("Insufficient funds, cannot withdraw beyond overdraft limit");
        }
        this._balance -= amount;
    }

    /**
     * 
     * @returns {string} String representation of the checking account status
     */
    toString() {
        return "CheckingAccount " + this._number + ": balance: " + this._balance + " overdraft limit: " + this.getOverdraft();
    }

    /**
     * 
     * @returns {string} End of month notification, if any
     */
    endOfMonth() {
        if (this._balance < 0) {
            return "Warning, low balance CheckingAccount " + this._number + ":" + " balance: " + this._balance + " overdraft limit: " + this.getOverdraft();
        }
        return "";
    }

}

// exports.CheckingAccount = CheckingAccount;
