function calculator(n1, operator, n2) {
    switch (operator) {
        case '+':
            return n1 + n2;
        case '-':
            return n1 - n2;
        case '*':
            return n1 * n2;
        case '/':
            return n1 / n2;
        default:
            return 'Invalid operation';
    }
}

console.log(calculator(12, '+', 5));
console.log(calculator(12, '-', 5));
console.log(calculator(12, '*', 5));
console.log(calculator(12, '/', 5));
console.log(calculator(12, '**', 5));
