let obj1 = {};
console.log(obj1);

let obj2 = new Object;
console.log(obj2);

class ClassPerson {
    constructor(name) {
        this.name = name;
    }

    introduceMySelf() {
        console.log(`Hi, my name is ${this.name}`);
    }
}

let obj3 = new ClassPerson('Rob');
console.log(obj3);

function PersonConstructor(name) {
    this.name = name;

    this.introduceMySelf = _ => {
        console.log(`Hi, my name is ${this.name}`);
    }
}

let obj4 = new PersonConstructor('Leo');
console.log(obj4);

const factoryPerson = name => {
    return {
        name,
        introduceMySelf() {
            console.log(`Hi, my name is ${this.name}`);
        }
    }
}

let obj5 = factoryPerson('Bob');
console.log(obj5);

let obj6 = Object.create(null);
console.log(obj6);

let obj7 = JSON.parse('{"name" : "Daniel"}');
console.log(obj7);
