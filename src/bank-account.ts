class BankAccount {
    balance: number

    constructor(initialAmount: number) { // not a string
       this.balance = initialAmount  // it's constructor so it's mean it should start from statement this
    }

    deposit(amount: number): number {
        this.balance += amount // to know the balance after the deposit we need to add that amount
        return this.balance
    }
}

const myAccount = new BankAccount(500)
console.log(myAccount.deposit(100)) // After fixing: will print 600
