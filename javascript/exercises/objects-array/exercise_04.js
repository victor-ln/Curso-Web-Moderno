function greaterEqual(x, y) {
    if (typeof x != 'number' || typeof y != 'number') return false;
    return x >= y;
}

console.log(greaterEqual(10, 15));
console.log(greaterEqual(15, 10));
console.log(greaterEqual(15, '10'));
