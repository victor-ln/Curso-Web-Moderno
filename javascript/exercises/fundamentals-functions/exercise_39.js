/**
 * It takes in three arguments, n, a1 and r, and prints an array of n elements,
 * where the first element is a1 and the common difference is r, 
 * and the sum of all the elements
 * 
 * @param n - number of elements in the series
 * @param a1 - first element of the series
 * @param r - the common difference
 */
function arithmeticProgression(n, a1, r) {
    let arr = [];
    for (let counter = 0; counter < n; counter++) {
        arr.push(a1 + (counter * r));
    }
    console.log('Elements of A.P: ', arr);
    let sum = ((a1 + arr[n - 1]) * n) / 2;
    console.log('Sum of all elements: ', sum);
}

/**
 * It takes in three arguments, n, a1 and r, and prints an array of n elements of
 * a geometric progression, and the sum of all the elements
 * 
 * @param n - number of elements in the series
 * @param a1 - first term of the series
 * @param r - common ratio
 */
function geometricProgression(n, a1, r) {
    let arr = [];
    for (let counter = 0; counter < n; counter++) {
        arr.push(a1 * (r ** counter));
    }
    console.log('Elements of G.P: ', arr);
    let sum = (a1 * (r ** n - 1)) / (r - 1);
    console.log('Sum of all elements: ', sum);
}

arithmeticProgression(10, 1, 2);
geometricProgression(10, 1, 2);
