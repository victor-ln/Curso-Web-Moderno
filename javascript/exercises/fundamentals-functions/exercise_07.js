/**
 * It takes a number, truncates it to two decimal places, replaces the decimal
 * point with a comma, and concatenates the monetary unit to the beginning of the
 * string.
 * @returns A string with the monetary unit and the price with two decimal places.
 */
const truncFixedAndConcatMonetaryUnit = price => {
    return "R$" + Number(price).toFixed(2).replace('.', ',');
}

console.log(truncFixedAndConcatMonetaryUnit(0.2 + 0.1));
console.log(truncFixedAndConcatMonetaryUnit(0.2 + 0.1 + 16168161));
