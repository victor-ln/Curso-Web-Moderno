const person = { name : "Sebastian" };
person.name = "Peter";

console.log(person);

// person = { name : "Sebastian" };

Object.freeze(person);
person.age = 30;
delete person;

console.log(person);

/**
 * The Object.freeze() method freezes an object. 
 * Freezing an object prevents extensions and makes existing properties 
 * non-writable and non-configurable. 
 * A frozen object can no longer be changed: new properties cannot be added, 
 * existing properties cannot be removed, their enumerability, configurability, 
 * writability, or value cannot be changed, 
 * and the object's prototype cannot be re-assigned.
 */

const newPerson = Object.freeze({name: "Mark"});
