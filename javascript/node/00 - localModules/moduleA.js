this.message = 'Hello World!';
exports.welcome = 'Welcome to node!';
module.exports.seeya = 'See ya in the next example';

/**
 * 'this' and 'exports' are references to 'module.exports'.
 * 
 * Example:
 */

exports = { a: 1 }

console.log(this);
console.log(exports);
console.log(module.exports);
