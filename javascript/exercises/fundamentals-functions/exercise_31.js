Number.prototype.inRange = function(x, y) {
    return (this >= x && this <= y);
}

function countNbrsInRange(vector) {
    let inside = 0;
    let outside = 0;

    for (let i in vector) {
        if (vector[i].inRange(10, 20))
            inside++;
        else
            outside++;
    }
    console.log(`Numbers in the range ${inside}; out of range ${outside}`);
}

let arr = [];
for (let i = 0; i < 100; i++)
    arr.push(Math.floor(Math.random() * i));

console.log(arr.sort((x, y) => x - y));
countNbrsInRange(arr);
