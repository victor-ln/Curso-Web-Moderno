function filterNumbers(array) {
    return array.filter(value => typeof value == 'number');
}

console.log(filterNumbers(['Javascript', 12, 'Web', 3, 114, true, [], {a: 0}]));
console.log(filterNumbers(['Javascript', 'Web', true, [], {a: 0}]));
