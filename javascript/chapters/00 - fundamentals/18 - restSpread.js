/** 
 * A function definition's last parameter can be prefixed with '...', 
 * which will cause all remaining (user supplied) parameters to be placed within
 * a standard JavaScript array. Only the last parameter in a function 
 * definition can be a rest parameter.
 */

function total(...numbers) {
    return numbers.reduce((prev, curr) => prev + curr)
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(total(numbers))
console.log(total(10, 20, 30))

function multiply(multiplier, ...args) {
    return args.map(nb => nb * multiplier)
}

/**
 * Spread syntax can be used when all elements from an object or array need to 
 * be included in a new array or object, or should be applied one-by-one 
 * in a function call's arguments list
*/

numbers.shift();
console.log(multiply(...numbers))
console.log(multiply(12, 1, 2, 3, 4, 5))
