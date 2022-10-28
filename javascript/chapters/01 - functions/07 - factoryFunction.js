/**
 * A factory function can be defined as a function that creates an object
 * and returns it.
 * It is similar to constructor functions/class functions.
*/

function createProduct(name, price) {
    return {
        name,
        price,
        discount: 0.1
    };
}

let product1 = createProduct('Notebook', 2199.99);
let product2 = createProduct('iPad', 1099.99);

console.log(product1);
console.log(product2);
