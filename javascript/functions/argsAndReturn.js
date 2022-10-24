
/* Arguments and Return in JS are optional */
function area(width, height) {
    let area = width * height;
    if (area > 20) {
        console.log("Area out of bounds");
    } else {
        return area;
    }
}

console.log(area());
console.log(area(10));
console.log(area(10, 'n'));
console.log(area(3, 5));
console.log(area(4, 2, 12, 31, 123));
console.log(area(10, 4));

/* Functions can accept variadic number of arguments */
function sum() {
    let sum = 0;
    for (let idx in arguments) {
        sum += arguments[idx];
    }
    return sum;
}

console.log(sum());
console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2, 3, 'test'));
console.log(sum('a', 'b', 'c'));

{
    /* Functions can have default argument values */

    /* Strategy 1 */
    function sum1(a, b, c) {
        a = a || 1;
        b = b || 1;
        c = c || 1;
        return a + b + c;
    }

    console.log(sum1(1, 2, 3), sum1(), sum1(3), sum1(0, 0, 0));

    /* Strategy 2, 3 and 4 */
    function sum2(a, b, c) {
        a = a !== undefined ? a : 1;
        b = 1 in arguments ? b : 1;
        c = isNaN(c) ? 1 : c;
    }

    console.log(sum1(1, 2, 3), sum1(), sum1(3), sum1(0, 0, 0));
    
    /* ES2015 */
    function sum3(a = 1, b = 1, c = 1) {
        return a + b + c;
    }

    console.log(sum1(1, 2, 3), sum1(), sum1(3), sum1(0, 0, 0));
}
