function countNegatives(vector) {
    let counter = 0;

    for (let i in vector) {
        if (vector[i] < 0)
            counter++;
    }
    console.log(`Negative numbers in the vector: ${counter}`);
}

let arr = [];
let min = Math.random() * 50;
for (let i = -min; i < min; i++)
    arr.push(Math.floor(Math.random() * i));

console.log(arr.sort());
countNegatives(arr);
