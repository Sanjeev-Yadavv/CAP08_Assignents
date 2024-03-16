function BankAccount(accountNumber,name,type,balance){
    this.accountNumber = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;

    this.deposit = function(amount){
        this.balance+=amount
        console.log(`Your deposited amount is ${amount}`)
        console.log(`Your new balance is ${this.balance}`)
    }

    this.withdraw = function(amount){
        if(this.balance>=amount){
        this.balance-=amount;
        console.log(`Your withdrawl amount is ${amount}`)
        console.log(`Your current balance is ${this.balance}`)
        }
        else{
            console.log(`Insufficient funds`)
        }
    }
    this.checkBalance = function(){
        console.log(`Balance is ${this.balance}`)
    }

    this.isActive = function(){
        if(this.balance>0){
            console.log(`Your account is active`)
        }
        else{
            console.log(`Your account is inactive`)
        }
    }
}

let ram = new BankAccount(2345,"Ram","Saving",5000)