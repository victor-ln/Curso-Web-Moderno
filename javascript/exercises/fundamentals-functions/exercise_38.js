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
    arr1.push(Math.floor(Math.random() * i));

arr1 = arr1.sort((x, y) => x - y);

console.log(arr1);
console.log(multVector(arr1, 2));
console.log(multVectorIfNbIsGreaterEqualThanFive(arr1, 5));
