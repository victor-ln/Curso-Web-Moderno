const truncFixedAndConcatMonetaryUnit = price => {
    return "R$" + Number(price).toFixed(2).replace('.', ',');
}

console.log(truncFixedAndConcatMonetaryUnit(0.2 + 0.1));
console.log(truncFixedAndConcatMonetaryUnit(0.2 + 0.1 + 16168161));
