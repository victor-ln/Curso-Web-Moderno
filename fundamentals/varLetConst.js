var a = 20;
let b = 40;

var a = 50;
/*
let a = 50; <--  It fails!
*/
b = 32;

console.log(a, b);

const c = 42;
/*
c += 15; <-- It fails!
*/
console.log(c);
