let vectorTo = [1, 2, 3, 4, 5];
let vectorFrom = [6, 7, 8, 9, 10];

function addInVector(v1, v2) {
    for (let i in v2) {
        v1.push(v2[i]);
    }
    console.log('Source vector: ', v2);
    console.log('Dest vector: ', v1);
}

addInVector(vectorTo, vectorFrom);
