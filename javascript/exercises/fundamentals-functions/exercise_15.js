function dayOfWeek(day) {
    if (day > 7) day = Math.floor(day % 7);
    switch (day) {
        case 1:
            console.log('Sunday');
            break;
        case 2: case 3: case 4: case 5: case 6:
            console.log('Business day');
            break;
        case 7:
            console.log('Saturday');
            break;
        default:
            console.log('Invalid day');
    }
}

dayOfWeek(1);
dayOfWeek(10);
dayOfWeek(7);
