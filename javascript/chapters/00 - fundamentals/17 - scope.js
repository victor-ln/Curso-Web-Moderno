let a = 10;

/** Global variable */
b = 123;

this.c = 456;

console.log(a);
console.log(global.b);
console.log(this.c);

/**
 * Each file is a module.
 */
console.log(module.exports.c);
console.log(module.exports === this);
this.d = "Test";
this.e = false;
console.log(module.exports);
