function multVector(vector, nb) {
    let arr = [];

    vector.forEach(element => arr.push(element * nb));
    return arr;
}

function multVectorIfNbIsGreaterEqualThanFive(vector, nb) {
    let arr = [];

    if (nb < 5) return arr;
    vector.forEach(element => arr.push(element * nb));
    return arr;
}

let arr = [];
for (let i = 0; i < 100; i++)
    arr.push(Math.floor(Math.random() * i));

arr = arr.sort((x, y) => x - y);

console.log(arr);
console.log(multVector(arr, 2));
console.log(multVectorIfNbIsGreaterEqualThanFive(arr, 5));
