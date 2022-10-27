let stringV = ['A', 'B', 'C', 'D'];
let integerV = [1, 2, 3, 4];
let doubleV = [1.1, 2.2, 3.3, 4.4];

/**
 * It takes any number of arrays as arguments, and returns a single array
 * containing all the elements of the original arrays.
 */
function concatVectors(... args) {
    let result = [];

    for (let i in arguments) {
        result = result.concat(arguments[i]);
    }
    return (result);
}

console.log(concatVectors(stringV, integerV));
console.log(concatVectors(stringV, integerV, doubleV));
