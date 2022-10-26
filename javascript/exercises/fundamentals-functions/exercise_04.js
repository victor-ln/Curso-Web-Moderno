/**
 * It returns 'Equilateral' if all sides are equal, 'Isosceles' if two sides are
 * equal, and 'Scalene' if no sides are equal
 * @param a - side a
 * @param b - the length of the second side of the triangle
 * @param c - the length of the side of the triangle
 * @returns The type of triangle.
 */
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
