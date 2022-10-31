function sumNbrs(array) {
    return array.reduce((prev, curr) => prev + curr);
}

console.log(sumNbrs([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(sumNbrs([12, 21, 13, 31, 14, 41, 15, 51]));
