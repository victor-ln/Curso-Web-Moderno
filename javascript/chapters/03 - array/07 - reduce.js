const shoppingCart = [
    { name: "apple", price: 1.19 },
    { name: "eggs", price: 3.99 },
    { name: "butter", price: 2.49 },
    { name: "bread", price: 1.99 }
];

/**
 * The reduce() method executes a user-supplied "reducer" callback function 
 * on each element of the array, in order, passing in the return value from 
 * the calculation on the preceding element. The final result of running the 
 * reducer across all elements of the array is a single value.
 */

let total = shoppingCart.reduce((prev, curr) => prev + curr.price, 0);
console.log(total);

const students = [
    { name: 'Luiz', grade: 7.8, scholarship: true },
    { name: 'Mike', grade: 9.4, scholarship: false },
    { name: 'Rachel', grade: 9.1, scholarship: true },
    { name: 'Michelle', grade: 8.4, scholarship: false }
]

/* Are all students scholarship holders? */
console.log(students.reduce((prev, curr) => prev && curr.scholarship, true));

/* Are any students on scholarships? */
console.log(students.reduce((prev, curr) => prev || curr.scholarship, false));
