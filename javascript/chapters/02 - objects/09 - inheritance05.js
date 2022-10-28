console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

String.prototype.reverse = function() {
    return this.split('').reverse().join('');
}

console.log('111000'.reverse());

/**
 * Simulating 'new' operator.
 */

function myNew(func, ... args) {
    let obj = {};
    obj.__proto__ = func.prototype;
    func.apply(obj, args);
    return obj;
}

function Test(name, age) {
    this.name = name;
    this.age = age;
}

const test1 = new Test('Example', 1);
const test2 = myNew(Test, 'Example', 2);

console.log(test1);
console.log(test2);
