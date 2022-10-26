
function calcSalaryBonus(salary, occupation) {
    switch (occupation.toLowerCase()) {
        case 'a':
            return salary * 1.1;
        case 'b':
            return salary * 1.15;
        case 'c':
            return salary * 1.2;
        default:
            return 'Invalid occupation';
    }
}

console.log(calcSalaryBonus(5000, 'a'));
console.log(calcSalaryBonus(4750, 'b'));
console.log(calcSalaryBonus(4500, 'c'));
console.log(calcSalaryBonus(5000, 'd'));
