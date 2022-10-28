function printSum(a, b) {
    console.log(a + b);
}

printSum(1, 4);
printSum(1);
printSum(1, 8, 3, 5);
printSum();

function sum(a, b = 10) {
    return (a + b);
}

console.log(sum(1, 5));
console.log(sum(2));
console.log(sum());
