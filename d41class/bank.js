"use strict";

// const acc = require("./account.js");//with node need the name of your file with your functions here
// const Account = acc.Account;  //do this for all of the functions used in the Mocha tests
// const chk = require("./checkingaccount.js");
// const CheckingAccount = chk.CheckingAccount;
// const sav = require("./savingsaccount.js");
// const SavingsAccount = sav.SavingsAccount;

class Bank {
    static nextNumber = 1;

    constructor() {
        this._accounts = [];
    }

    addAccount() {
        let accNum = Bank.nextNumber;
        let newAccount = new Account(accNum);
        this._accounts.push(newAccount);
        Bank.nextNumber++;

        return accNum;
    }

    addSavingsAccount(interest) {
        let accNum = Bank.nextNumber;
        let newSavings = new SavingsAccount(accNum, interest);
        this._accounts.push(newSavings);
        Bank.nextNumber++;
        return accNum;

    }

    addCheckingAccount(overdraft) {
        let accNum = Bank.nextNumber;
        let newChecking = new CheckingAccount(accNum, overdraft);
        this._accounts.push(newChecking);
        Bank.nextNumber++;
        return accNum;
    }

    closeAccount(number) {
        const remAccount = this._accounts.find(account => account.getNumber() === number)
        const accountIndex = this._accounts.indexOf(remAccount);
        this._accounts.splice(accountIndex, 1);
        return `Account ${number} has been closed`
    }

    accountReport() {
        let report = "";
        for (let i = 0; i < this._accounts.length; i++) {
            report += this._accounts[i].toString() + "\n"
        }
        return report;
    }
    endOfMonth() {
        let monthlyReport = "";
        for (let i = 0; i < this._accounts.length; i++) {
            if (i == this._accounts.length - 1) {
                monthlyReport += `${this._accounts[i].endOfMonth()}`
            } else {
                monthlyReport += `${this._accounts[i].endOfMonth()}\n`
            }
        }
        return monthlyReport;
    }

}

// exports.Bank = Bank;
