let a, b;

a = 4;
b = Number('5.0');
console.log(`Math is an ${typeof(Math)} in Javascript`);
console.log(`Number is a ${typeof(Number)} in Javascript`);
/**
 * The Number() function converts a value to a number.
 * If the value cannot be converted, NaN is returned.
 * All JavaScript numbers are 64-bit floating-point numbers.
 */

console.log(`4 * 0.5    is Integer ?    ${Number.isInteger(a * 0.5)}`);
console.log(`4 * 0.4    is Integer ?    ${Number.isInteger(a * 0.4)}`);
console.log(`4 * 0.4    is Finite ?     ${Number.isFinite(a * 0.4)}`);
console.log(`0 / 0      is Finite ?     ${Number.isFinite(0 / 0)}\n`);

a *= 0.3514991;
console.log(`4 * 0.3514991 == ${a}`);
console.log(`a with 2 fixed-point numbers == ${a.toFixed(2)}`);
/**
 * toFixed() method returns a number in a fixed-point notation.
 */

console.log(`a represented in string${a.toString()}`);
/**
 * Converts a number into string.
 */
console.log(`a represented in binary ${a.toString(2)}`);
/**
 * Converts a number to its binary representation in string.
 */
console.log(`a represented in octal ${a.toString(8)}`);
/**
 * Converts a number to its octal representation in string.
 */
console.log(`a represented in hexadecimal ${a.toString(16)}`);
/**
 * Converts a number to its hexadecimal representation in string.
 */
