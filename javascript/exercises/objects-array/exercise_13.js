function objToArray(obj) {
    return Object.entries(obj);
}

let obj = {a: 1, b: 2, c: 3, d: 4};
console.log(objToArray(obj));
