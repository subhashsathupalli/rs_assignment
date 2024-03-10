class Bank
{
    constructor(bank_name,code)
    {
        this.bank_name= bank_name;
        this.code = code;
    }
    add()
    {
        console.log("added");
    }
}

class Customer extends Bank
{
    constructor(bank_name,code,cust_name,phone)
        {
            super(bank_name,code);
            this.cust_name = cust_name;
            this.phone = phone; 
        }
        
        add_account(number)
        {
           let  value=number;
           console.log(`user name${this.cust_name} having account num ${value}
        in ${this.bank_name}`);
        return value;
        }
}

class Transaction extends Customer
{
    constructor(bank_name,code,cust_name,phone,transaction_id)
    {
        super(bank_name,code,cust_name,phone);
        this.transaction_id= transaction_id;
    }
    deposite(money){
        console.log(`mr.${this.cust_name} you are deposited amount of
        ${money} to d acc_num ${super.add_account(1234)} having transaction
        id is ${this.transaction_id}`);
    }
    
    withdraw(money){
        console.log(`withdraw amount ${money}`);
    }
    
}
let bank1 = new Bank("sbi",123);
console.log(bank1);

let customer1= new Customer("sbi",123,"subbu",937448);
console.log(customer1);
customer1.add_account(637373);
customer1.add();

let transaction1 = new Transaction("sbi",123,"subbu",937448,787878);
transaction1.deposite(1000);
transaction1.withdraw(500);
transaction1.add();



