const getTriangleType = (a, b, c) => {
    if (a == b) {
        if (a != c || b != c)
            return ('Isosceles');
        return ('Equilateral');
    } 
    if (a == c || b == c)
        return ('Isosceles');
    return ('Scalene');
}

console.log(getTriangleType(10, 5, 5));
console.log(getTriangleType(5, 10, 5));
console.log(getTriangleType(5, 5, 10));
console.log(getTriangleType(10, 10, 10));
console.log(getTriangleType(7, 8, 9));
