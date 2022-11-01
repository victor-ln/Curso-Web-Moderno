const getAverages = grades => {
    return grades.reduce((prev, curr) => prev + curr) / grades.length;
}

function findHighestGradePointAverage(students) {
    let     gradesAverage = Object.values(students).map(getAverages);
    const   max = Math.max(...gradesAverage);
    let     idx = gradesAverage.findIndex(item => item == max);

    return { 
        name: Object.keys(students)[idx], 
        average: gradesAverage[idx]
    }
}

const students = {
    Peter: [8, 7.6, 8.9, 6],
    Anna: [9, 6.6, 7.9, 8],
    Richard: [7, 7, 8, 9]
}

let bestAverage = findHighestGradePointAverage(students);
console.log(bestAverage);
