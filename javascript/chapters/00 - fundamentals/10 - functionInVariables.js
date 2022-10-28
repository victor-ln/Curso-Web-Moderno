/**
 * Storing a function.
 */

const printSum = function (a, b) {
    console.log(a + b);
}
printSum(1, 6);

/**
 * Storing an arrow function.
 */
const sum = (a, b) => {
    return (a + b);
}
console.log(sum(1, 5));

/**
 * Implicit return.
 */
const subtract = (a, b) => (a - b);
console.log(subtract(1, 5));
