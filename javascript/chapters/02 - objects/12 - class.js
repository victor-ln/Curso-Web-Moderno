class BankTransaction {
    constructor (name = 'Generic', value = 0) {
        this.name = name;
        this.value = value;
    }
}

class BankAccount {
    constructor () {
        this.transactions = [];
    }

    addTransactions(...transactions) {
        transactions.forEach(t => this.transactions.push(t));
    }

    balance() {
        let value = 0;
        this.transactions.forEach(t => value += t.value);
        return `balance: ${value}`;
    }
}

const account = new BankAccount;
const salary = new BankTransaction('Salary', 4500);
const rent = new BankTransaction('Rent', -1000);

account.addTransactions(salary, rent);
console.log(account.balance());
