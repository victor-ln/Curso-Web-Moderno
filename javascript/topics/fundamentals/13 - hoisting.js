/**
 * All variable declarations using var are lifted to the top of their 
 * functional/local scope (if declared inside a function) or to the top of 
 * their global scope (if declared outside of a function) regardless 
 * of where the actual declaration has been made. 
 */

console.log("a = ", a);
var a = 2;
console.log("a = ", a);

function test() {
    console.log("b = ", b);
    var b = 2;
    console.log("b = ", b);
}

test();
