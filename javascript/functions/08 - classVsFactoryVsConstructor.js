/**
 * Class
 * 
 * A syntax for classes does not introduce a new object-oriented inheritance
 *  model in JavaScript.
 * It's just an abstraction! a simpler way -especially for those who
 *  came from object-oriented languages- to create objects
 *  and deal with inheritance.
 * 
 * - It's not possible to instantiate a class without 'new'
 *
*/

class ClassPerson {
    constructor(name) {
        this.name = name;
    }

    introduceMySelf() {
        console.log(`Hi, my name is ${this.name}`);
    }
}

const p1 = new ClassPerson('John');
p1.introduceMySelf();

/**
 * Factory function
 * 
 * - Facilitates the creation of new objects with reuse.
 * - Simpler and clearer than the object constructor and class.
 * - The use of closures and restricts the use of this
 *  (when defining with arrow functions).
 * 
 * - Constructors and Classes force callers to use
 *  the 'new' keyword. Factories don’t.
 * 
*/

const factoryPerson = name => {
    return {
        name,
        introduceMySelf() {
            console.log(`Hi, my name is ${this.name}`);
        }
    }
}

const p2 = factoryPerson('Amy');
p2.introduceMySelf();

/**
 * Object constructor
 *
 * It can be used as a function or used to instantiate 
 * the object using the new keyword.
 * 
 * What if I don't use new?
 * 
 * In addition to the undefined error, it doesn't use the prototype and 
 *  runs like any other function.
 * 
*/ 

function PersonConstructor(name) {
    this.name = name;

    this.introduceMySelf = _ => {
        console.log(`Hi, my name is ${this.name}`);
    }
}

const p3 = new PersonConstructor('Mary');
p3.introduceMySelf();
