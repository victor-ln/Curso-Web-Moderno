/**
 * Filter the array to only include even values at even indices.
 * @param array - an array of numbers
 */
function filterEvenIdxAndValues(array) {
    return array.filter((value, idx) => (value % 2 == 0 && idx % 2 == 0));
}

console.log(filterEvenIdxAndValues([1, 2, 3, 4]));
console.log(filterEvenIdxAndValues([10, 70, 22, 43]));
