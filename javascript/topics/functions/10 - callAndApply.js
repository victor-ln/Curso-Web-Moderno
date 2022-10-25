function getPrice(tax = 0.1, discount = 0) {
    return this.price * (1 + tax) * (1 - discount);
}

const product = {
    price: 100,
    getPrice
};

console.log(getPrice());
console.log(product.getPrice());

/**
 * With the apply() and call() methods, you can write a method that 
 * can be used on different objects.
 */

console.log(getPrice.call(product));
console.log(getPrice.apply(product));

/**
 * The difference is:
 * 
 * - The call() method takes arguments separately.
 * - The apply() method takes arguments as an array.
 */

console.log(getPrice.call(product, 0, 0.1));
console.log(getPrice.apply(product, [0.2, 0]));

/**
 * In JavaScript strict mode, if the first argument of the apply() method
 * is not an object, it becomes the owner (object) of the invoked function.
 * In "non-strict" mode, it becomes the global object.
 */
