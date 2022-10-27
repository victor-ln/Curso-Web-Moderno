function projectGrowth(childHeight1, annualGrowth1, childHeight2, annualGrowth2) {
    let years = 0;

    while (childHeight1 < childHeight2) {
        childHeight1 += annualGrowth1;
        childHeight2 += annualGrowth2;
        years++;
    }
    return (years);
}

function cmpChildrenGrowth(height1, annualGrowth1, height2, annualGrowth2) {
    if (height1 == height2) {
        if (annualGrowth1 > annualGrowth2) {
            return 'Child 1 will be taller than child 2 in one year';
        } else if (annualGrowth1 < annualGrowth2) {
            return 'Child 2 will be taller than child 1 in one year';
        } else {
            return 'Both children will be the same tall';
        }
    }
    if (height1 > height2) {
        if (annualGrowth1 >= annualGrowth2) {
            return 'Child 2 will be smaller than child 1';
        } else {
            years = projectGrowth(height2, annualGrowth2, height1, annualGrowth1);
            return `Child 2 will be taller than child 1 in ${years} years`;
        }
    } else if (height1 < height2) {
        if (annualGrowth2 >= annualGrowth1) {
            return 'Child 1 will be smaller than child 2';
        } else {
            years = projectGrowth(height1, annualGrowth1, height2, annualGrowth2);
            return `Child 1 will be taller than child 2 in ${years} years`;
        }
    }
}

console.log(cmpChildrenGrowth(130, 3, 120, 2));
console.log(cmpChildrenGrowth(120, 3, 110, 4));
console.log(cmpChildrenGrowth(120, 3, 110, 4));
console.log(cmpChildrenGrowth(150, 2, 130, 4));
