function invert(value) {
    if (typeof value == "number")
        return -value;
    if (typeof value == "boolean")
        return !value;
    return `Expected number or boolean, passed ${typeof value}`;
}

console.log(invert(-10));
console.log(invert(10));
console.log(invert(true));
console.log(invert(false));
console.log(invert(undefined));
console.log(invert(null));
console.log(invert(''));
console.log(invert('10'));
