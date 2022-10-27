function numericGradeToAlphabetic(vector) {
    grades = [];
    for (let i in vector) {
        if (vector[i] < 0 || vector[i] > 10) {
            grades.push('Invalid grade');
        } else if (vector[i] >= 9) {
            grades.push('A');
        } else if (vector[i] >= 7) {
            grades.push('B');
        } else if (vector[i] >= 5) {
            grades.push('C');
        } else {
            grades.push('D');
        }
    }
    return grades;
}

let grades = [10, 13, 9, 8.2, 2.5, 7.7, 6.8];
let alphaGrades = numericGradeToAlphabetic(grades);

console.log(alphaGrades);
