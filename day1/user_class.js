const prompt = require("prompt-sync")({sigint:true});

class Bank
{
    constructor(bank_name,bank_code)
    {
        this.bank_name = bank_name;
        this.bank_code = bank_code;
    }
    add_account(number)
    {
        return `${number}`;
    }
    transaction_id(id)
    {
        return `${id}`;
    }
}

class Customer extends Bank
{
    constructor(bank_name,bank_code,cust_name,cust_num,account_num)
    {
        super(bank_name,bank_code);
        this.cust_name = cust_name;
        this.cust_num = cust_num;
        this.account_num= account_num;
    }
    print()
    {
    console.log(`mr.${this.cust_name} your account number is ${super.add_account(account_num)} in our ${this.bank_name} bank`);
    }
    ekyc(aadhar_num)
    {
        console.log(`mr.${this.cust_name} your account number is ${super.add_account(account_num)} is linked with aahar number ${aadhar_num}`);
    }
}

class Transactions extends Customer
{
    constructor(bank_name,bank_code,cust_name,cust_num,account_num,funds)
    {
        super(bank_name,bank_code,cust_name,cust_num,account_num);
        this.funds = funds;
    }
    deposite(money)
    {
        let balance = this.funds + money;
        console.log(`hai ${this.cust_name}. 
        amount ${money} is deposited to your account number ${this.account_num}`);
        console.log("balance amount: ",balance);
        return balance;
    }
    withdraw(amount,remaining)
    {
        remaining = remaining -amount;
        console.log(`hai ${this.cust_name}. 
        amount ${amount} is debited from your account number ${this.account_num}`);
        console.log("balance amount: ",remaining);
     }
}

let bank_name = String(prompt("enter bank name: "));
let bank_code = parseInt(prompt("enter bank code: "));
let bank1 = new Bank(bank_name,bank_code);
//console.log(bank1);

let cust_name = String(prompt("enter account holder name: "));
let cust_num = parseInt(prompt("enter account holder phone number: "));
let account_num = parseInt(prompt("enter account number: "));
let customer1 = new Customer(bank_name,bank_code,cust_name,cust_num,account_num);
//console.log(customer1);
customer1.add_account(account_num);
customer1.print();


let funds= parseInt(prompt("enter amount in the account: "));
let transaction1 = new Transactions(bank_name,bank_code,cust_name,cust_num,account_num,funds);
let money= parseInt(prompt("enter amount to deposite: "));
let remaining= transaction1.deposite(money);
let id = parseInt(prompt("enetr transaction id: "));
console.log("transaction id is", transaction1.transaction_id(id));

let amount = parseInt(prompt("enter amount to withdraw"))
transaction1.withdraw(amount,remaining);
let with_id = parseInt(prompt("enetr transaction id: "));
console.log("transaction id is", transaction1.transaction_id(with_id));

let aadhar = parseInt(prompt("enter aadhar number: "));
customer1.ekyc(aadhar);

