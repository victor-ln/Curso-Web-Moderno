/**
 * From MDN Web Docs
 * 
 * In JS, Function are First-Class Objects (Citizens), 
 * because they can have properties and methods just like any other object. 
 * What distinguishes them from other objects is that functions can be called. 
 * In brief, they are Function objects.
 * Higher-order function.
 */

/* Literal function */
function func1() {}

/* Store a function into a variable */
const func2 = function() {}

/* Store a function into an array */
const array = [function (a, b) { return a + b }, func1, func2];
console.log(array[0](1, 2));

/* Store a function as an object attribute */
const obj = {};
obj.greetings = function() {
    return 'Welcome!';
};

console.log(obj.greetings());

/* Function as param */
function run(func) {
    func();
};

run(function() {
    console.log('Processing...');
});

/* A function can return/have another function */
function sum(a, b) {
    return (function(c) {
        console.log(a + b + c);
    });
}

sum(1, 2)(3);
const summed = sum(1, 2);
summed(4);
