function roundGrade(grade) {
    let m = grade % 5;

    if (m > 2) {
        grade += 5 - m;
    }
    return (grade);
}

/**
 * It rounds the grade to the nearest multiple of 5, and then prints whether the
 * student was approved or not
 * @param grade - The student's grade.
 * @returns the grade rounded to the nearest multiple of 5.
 */
function studentGrade(grade) {
    if (grade < 0 || grade > 100) {
        console.log('Invalid grade, range is 0 to 100');
        return;
    }
    grade = roundGrade(grade);
    if (grade >= 40) {
        console.log('Student approved');
    } else {
        console.log('Student disapproved');
    }
}

studentGrade(38);
studentGrade(37);
studentGrade(8);
studentGrade(40);
studentGrade(39);
