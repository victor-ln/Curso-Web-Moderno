Array.prototype.myReduce = function(callback, initial) {
    const   initIdx = (initial !== undefined) ? 0 : 1;
    let     result = (initial !== undefined) ? initial : this[0];

    for (let i = initIdx; i < this.length; i++) {
        result = callback(result, this[i], i, this);
    }
    return result;
}

const shoppingCart = [
    { name: "apple", price: 1.19 },
    { name: "eggs", price: 3.99 },
    { name: "butter", price: 2.49 },
    { name: "bread", price: 1.99 }
];

let total = shoppingCart.reduce((prev, curr) => prev + curr.price, 0);
console.log(total);

total = shoppingCart.map(item => item.price).myReduce((prev, curr) => prev + curr);
console.log(total);

const students = [
    { name: 'Luiz', grade: 7.8, scholarship: true },
    { name: 'Mike', grade: 9.4, scholarship: false },
    { name: 'Rachel', grade: 9.1, scholarship: true },
    { name: 'Michelle', grade: 8.4, scholarship: false }
]

/* Are all students scholarship holders? */
console.log(students.myReduce((prev, curr) => prev && curr.scholarship, true));

/* Are any students on scholarships? */
console.log(students.myReduce((prev, curr) => prev || curr.scholarship, false));
