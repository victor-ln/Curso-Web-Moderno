function countEvenAndOddNumbers(vector) {
    let even = 0;
    let odd = 0;

    for (i in vector) {
        if (vector[i] % 2 == 0) {
            even++;
        } else {
            odd++;
        }
    }
    console.log(`Even numbers: ${even}; Odd numbers ${odd}`);
}

let arr = [];
for (let i = 0; i < 100; i++)
    arr.push(Math.floor(Math.random() * i));

console.log(arr.sort());
countEvenAndOddNumbers(arr);
