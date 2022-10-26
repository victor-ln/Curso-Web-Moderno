function calcCompoundInterest(P, rate, time) {
    return P * ((1 + rate) ** time);
}

function calcBill(monthWasPaid, value) {
    if (monthWasPaid < 0 || monthWasPaid > 12)
        return ('Invalid month');
    if (monthWasPaid != 1)
        return (calcCompoundInterest(value, 0.05, Number(monthWasPaid) - 1));
    return (value);
}

console.log(calcBill(2, 100));
