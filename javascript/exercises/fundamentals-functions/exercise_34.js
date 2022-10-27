function calcVectorAverage(vector) {
    let sum = 0;

    for (let i in vector) {
        sum += vector[i];
    }
    return sum / vector.length;
}

let arr = [];
for (let i = 0; i < 100; i++)
    arr.push(Math.floor(Math.random() * i));

console.log(arr.sort());
console.log(calcVectorAverage(arr));
