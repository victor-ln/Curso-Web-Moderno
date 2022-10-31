function calcAverage(array) {
    return array.reduce((prev, curr) => prev + curr) / array.length;
}

console.log(calcAverage([0, 10]));
console.log(calcAverage([1, 2, 3, 4, 5]));
