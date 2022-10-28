const father = {
    name: 'Albert',
    eyeColor: 'Brown'
};

/** Using Object.create() to create a new object with father as its prototype */
const daughter = Object.create(father);
daughter.name = 'Anna';
console.log(daughter.eyeColor);

const son = Object.create(father, {
    name: {value: 'Edward', writable: false, enumerable: true}
});

console.log(son.name);
console.log(Object.keys(daughter));
console.log(Object.keys(son));

for (let key in daughter) {
    daughter.hasOwnProperty(key) ? 
        console.log(key) : console.log(`Inherited: ${key}`);
}
