function filterByDigitsQntd(array, digits) {
    return array.filter(nb => nb.toString().length == digits);
}

a = [14, 42, 51, 75, 4, 7, 9, 0];
b = filterByDigitsQntd(a, 2);
console.log(a);
console.log(b);
