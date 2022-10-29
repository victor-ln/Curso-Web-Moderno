const products = [
    { name: 'Notebook', price: 2499, fragile: true },
    { name: 'iPad Pro', price: 1499, fragile: true },
    { name: 'Glass', price: 12.49, fragile: true },
    { name: 'Bookcase', price: 129.99, fragile: false }
]

/**
 * The filter() method creates a shallow copy of a portion of a given array, 
 * filtered down to just the elements from the given array that pass the 
 * test implemented by the provided function.
 */

const expensiveAndFragile = products.filter(p => p.fragile && p.price >= 500);
console.log(expensiveAndFragile);
