const car = {};

car.price = 20000;
car.brand = 'Ford';

console.log(Object.keys(car));
console.log(Object.values(car));
console.log(Object.entries(car));

Object.entries(car).forEach(([key, value]) => {
    console.log(`${key} : ${value}`);
});

Object.defineProperty(car, 'year', {
    enumerable: true,
    writable: false,
    value: 2010
});

car.year = 2020;
console.log(car);

/* Object.assign ES15 */
const dest = {a: 1};
const o1 = {b: 12};
const o2 = {c: 131, a: 11};
Object.assign(dest, o1, o2);

console.log(dest);
