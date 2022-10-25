/**
 * undefined means a variable declared, but no value has been assigned a value.
 * null is an assignment value. It can be assigned to a variable
 * as a representation of no value.
 * 
 * undefined and null are two distinct types:
 * undefined is a type itself (undefined) while null is an object.
 */

const   product = {};
let     value;

console.log(value);
console.log(typeof(value));
/**
 * Prints undefined.
 */

value = null;
/**
 * console.log(value.isInteger); <-- It Fails!
 */
console.log(value);
console.log(typeof(value));

console.log('Empty object:', product);
console.log(`Accessing an undefined key from object: ${product.category}`);

product.price = 3.14;
console.log(product);
