Array.prototype.myFilter = function(callback) {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i]);
        }
    }
    return newArray;
}

const products = [
    { name: 'Notebook', price: 2499, fragile: true },
    { name: 'iPad Pro', price: 1499, fragile: true },
    { name: 'Glass', price: 12.49, fragile: true },
    { name: 'Bookcase', price: 129.99, fragile: false }
]

const expensiveAndFragile = products.myFilter(p => p.fragile && p.price >= 500);
console.log(expensiveAndFragile);
