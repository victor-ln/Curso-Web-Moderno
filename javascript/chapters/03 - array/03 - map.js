let nbrs = [1, 2, 3, 4, 5];

/**
 * The map() method creates a new array populated with the results of 
 * calling a provided function on every element in the calling array.
 */

let squared = nbrs.map(nbr => nbr ** 2);
console.log(squared);

const shoppingCart = [
    '{"name": "apple", "price": 1.19}',
    '{"name": "eggs", "price": 3.99}',
    '{"name": "butter", "price": 2.49}',
    '{"name": "bread", "price": 1.99}'
];

let prices = shoppingCart.map(item => JSON.parse(item).price);
console.log(prices);
