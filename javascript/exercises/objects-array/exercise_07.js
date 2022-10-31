function mult(x, y) {
    if (Math.abs(y) > Math.abs(x))
        [x, y] = [y, x];
    let result = 0;
    let sign = (y < 0 && y % 2 == -1) ? true : false;

    y = Math.abs(y);
    for (let i = 0; i < y; i++)
        result += x;
    return sign ? -result : result;
}

console.log(mult(5, 5));
console.log(mult(5, -5));
console.log(mult(-5, -5));
console.log(mult(-5, 5));
console.log(mult(5, -2));
console.log(mult(0, 7));
console.log(mult(7, 1));
