/**
 * arrays in javascript are heterogeneous, dynamic and indexed
 */

const values = [15, 3,  2.5, 391];

console.log(values[0], values[3]);
console.log(values[4]);

values[4] = 10;
console.log(values);
values[10] = 'text';

console.log(values);
console.log('pop() removes the last element of an array and returns it -->',
    values.pop());
console.log('pop() again -->', values.pop(), '\n');

delete values[1];
/**
 * delete operator removes a property of an object.
 */

console.log(values);
/**
 * Using push() to add some elements at the end of array -->
 */
values.push({id: 12}, false, null, NaN, 'test', undefined);
console.log("before", values);

while (values.length) {
    values.pop();
}

console.log("after", values);
console.log('typeOf(array) is', typeof values);
