/**
 * Print all odd numbers between min and max.
 * @param [min=0] - The minimum number to print.
 * @param [max=100] - The maximum number to print.
 */
function printOddNumbers(min = 0, max = 100) {
    if (min > max) [min, max] = [max, min];
    if (min % 2 == 0) min++;
    while (min < max) {
        console.log(min);
        min += 2;
    }
}

printOddNumbers(-12, 12);
console.log();
printOddNumbers(10, 20);
console.log();
printOddNumbers(30, 20);
