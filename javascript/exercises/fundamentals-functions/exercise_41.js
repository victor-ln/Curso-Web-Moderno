/**
 * The splice() method changes the contents of an array by removing or 
 * replacing existing elements and/or adding new elements in place.
 * To access part of an array without modifying it
 */

/**
 * It swaps the contents of two vectors, v1 and v2, by swapping the elements of the
 * two vectors, and then appending the remaining elements of the longer vector to
 * the shorter vector
 * @param v1 - the first vector
 * @param v2 - the second vector
 */
function swapVectors(v1, v2) {
    if (v1.length < v2.length)
        [v1, v2] = [v2, v1];

    let diff = v1.length - v2.length;
    let i;

    for (i = 0; i < v1.length && i < v2.length; i++) {
        [v1[i], v2[i]] = [v2[i], v1[i]];
    }
    if (diff > 0) {
        for (let i = 0, offset = v2.length; i < diff; i++) {
            v2.push(v1[offset + i]);
        }
        v1.splice(v1.length - diff, diff);
    }
}

let arr1 = [];
let arr2 = [];
for (let i = 0; i < 10; i++) {
    arr1.push(Math.floor(Math.random() * i));
    arr2.push(Math.floor(Math.random() * i));
    arr2.push(Math.floor(Math.random() * i));
}   

arr1 = arr1.sort((x, y) => x - y);
arr2 = arr2.sort((x, y) => x - y);

console.log('V1: ', arr1);
console.log('V1 len: ', arr1.length);
console.log();
console.log('V2: ', arr2);
console.log('V2 len: ', arr2.length);
console.log('\n');

swapVectors(arr1, arr2);
console.log('V1: ', arr1);
console.log('V1 len: ', arr1.length);
console.log();
console.log('V2: ', arr2);
console.log('V2 len: ', arr2.length);
console.log('\n');

swapVectors(arr1, arr2);
console.log('V1: ', arr1);
console.log('V1 len: ', arr1.length);
console.log();
console.log('V2: ', arr2);
console.log('V2 len: ', arr2.length);
console.log('\n');
