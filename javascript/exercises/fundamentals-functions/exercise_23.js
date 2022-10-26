function calcHealthPlan(clientAge) {
    if (clientAge >= 60)
        return 230;
    if (clientAge >= 30)
        return 195;
    if (clientAge >= 10)
        return 150;
    return 180;
}

console.log(calcHealthPlan(8));
console.log(calcHealthPlan(15));
console.log(calcHealthPlan(35));
console.log(calcHealthPlan(52));
console.log(calcHealthPlan(80));
