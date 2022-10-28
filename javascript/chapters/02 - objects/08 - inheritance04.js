function myObj() {}

console.log(myObj.prototype);

const obj1 = new myObj;
const obj2 = new myObj;

console.log(Object.getPrototypeOf(obj1) === Object.getPrototypeOf(obj2));
/**
 * The __proto__ property is a default property added to every object. 
 * This property points to the prototype of the object.
 */
console.log(obj1.__proto__ === obj2.__proto__);
console.log(myObj.prototype === obj2.__proto__);

myObj.prototype.name = 'Anonymous';
myObj.prototype.speak = function() { console.log(`My name is ${this.name}`); }

obj1.speak();
obj2.name = 'Rafael';
obj2.speak();

/**
 * All JavaScript objects inherit properties and methods from a prototype.
 * The Object.prototype is on the top of the prototype inheritance chain.
 */

const obj = new myObj;
console.log(obj.prototype === undefined);
console.log(obj.__proto__ === myObj.prototype);
console.log(myObj.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype); /** Go crazy! */
console.log(Object.prototype.__proto__ === null);
