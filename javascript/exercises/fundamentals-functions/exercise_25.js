function calcFinalGrade(studentCode, grade1, grade2, grade3) {
    let arr = [grade1, grade2, grade3];
    arr.sort((x, y) => x < y ? 1 : -1);
    let average = (arr[0] * 4 + arr[1] * 3 + arr[2] * 3) / 10;

    console.log(`student code: ${studentCode}`);
    console.log(`grades: ${grade1}, ${grade2}, ${grade3}`);
    console.log(`average: ${average}`);
    console.log('status: ', average >= 5 ? 'Approved' : 'Disapproved');
}

calcFinalGrade(12, 6, 7, 4);
calcFinalGrade(12, 6, 7, 5);
calcFinalGrade(12, 6, 7, 3);
