function calcCompoundInterest(P, rate, time) {
    return P * ((1 + rate) ** time);
}

function calcSimpleInterest(P, rate, time) {
    return P * rate * time + P;
}

for (let i = 0; i < 12; i++) {
    console.log(`Compound at ${i + 1} month`, calcCompoundInterest(25000, 0.04, i + 1));
    console.log(`Simple at ${i + 1} month`, calcSimpleInterest(25000, 0.05, i + 1));
}
