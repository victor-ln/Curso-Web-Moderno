function findMaxMin(vector) {
    let max = vector[0];
    let min = vector[0];

    for (let i in vector) {
        if (vector[i] > max)
            max = vector[i];
        else if (vector[i] < min)
            min = vector[i];
    }
    return [max, min];
}

vetor =  [10, 5, 7, 3, 1, 3, 11, 20, 6, 9];

console.log(findMaxMin(vetor));
