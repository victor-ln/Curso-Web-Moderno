const school = [{
    class: 'A',
    students: [{
        name: 'Luiz',
        grade: 7.8
    }, {
        name: 'Rachel',
        grade: 9.1
    }]
}, {
    class: 'B',
    students: [{
        name: 'Mike',
        grade: 9.4
    }, {
        name: 'Michelle',
        grade: 8.4
    }]
}];

const getStudentGrade = student => student.grade;
const getClassGrades = c => c.students.map(getStudentGrade);

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback));
}

const grades1 = school.map(getClassGrades);
console.log(grades1);

const grades2 = school.flatMap(getClassGrades);
console.log(grades2);
