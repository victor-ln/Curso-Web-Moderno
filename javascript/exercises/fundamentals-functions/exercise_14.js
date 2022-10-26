function factorial(nb) {
    if (nb <= 1)
        return (1);
    return (nb * factorial(nb - 1));
}

console.log(factorial(0));
console.log(factorial(3));
console.log(factorial(5));
