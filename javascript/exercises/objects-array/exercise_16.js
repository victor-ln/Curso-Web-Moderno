const expenses1 = [
    { name: 'Newspaper signature', category: 'Information', price: 11.99 },
    { name: 'Movie', category: 'Entertainment', price: 4.99 }
]

const expenses2 = [
    { name: 'Galaxy S22', category: 'Electronics', price: 899.99 },
    { name: 'MacBook Pro', category: 'Electronics', price: 2599.99 },
]

function calcTotalExpenses(expenses) {
    return Number(expenses.reduce((prev, curr) => prev + curr.price, 0).toFixed(2));
}

console.log(calcTotalExpenses(expenses1));
console.log(calcTotalExpenses(expenses2));
