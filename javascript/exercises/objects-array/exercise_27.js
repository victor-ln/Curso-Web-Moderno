function findSecondHighest(array) {
    return array.sort((x, y) => y - x)[1];
}

console.log(findSecondHighest([12, 16, 1, 5]));
console.log(findSecondHighest([8, 4, 5, 6]));
