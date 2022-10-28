const ferrari = {
    maxSpeed: 201.3,
    model: 'F40',
    year: 1992
};

const mcLaren = {
    maxSpeed: 200.8,
    model: 'F1',
    year: 1992
};

/**
 * Prototypes are the mechanism by which JavaScript 
 * objects inherit features from one another.
 */
console.log(ferrari.prototype);
console.log(ferrari.__proto__);
console.log(ferrari.__proto__ === Object.prototype);
console.log(mcLaren.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);

function myObj() {}
console.log(typeof Object, typeof myObj);
console.log(Object.prototype, myObj.prototype);
