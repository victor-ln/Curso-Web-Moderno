function inRange(nb, min, max, including = false) {
    if (min > max)
        [min, max] = [max, min];
    if (including)
        return (nb >= min && nb <= max);
    return (nb > min && nb < max);
}


console.log(inRange(10, 50, 100));
console.log(inRange(16, 100, 160));
console.log(inRange(3, 3, 150));
console.log(inRange(3, 3, 150, true));
