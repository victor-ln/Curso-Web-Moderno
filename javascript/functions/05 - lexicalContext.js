/**
 * A lexical scope in JavaScript means that a variable defined outside a
 * function can be accessible inside another function defined after the
 * variable declaration.
 * But the opposite is not true; the variables defined inside a function
 * will not be accessible outside that function.
 * 
 * This concept is heavily used in closures in JavaScript.
*/

const value = 'Global';

function f () {
    console.log(value);
}

function test() {
    const value = 'Local';
    f();
}

test();
