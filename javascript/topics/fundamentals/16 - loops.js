{
    /* for loop vs while loop */

    let i = 0;
    while (i < 10){
        console.log(i);
        i++;
    }

    for (let i = 0; i < 10; i++)
        console.log(i);
}

{
    /* For loop with arrays */

    let nums = [2.1, 3.51, 1.114, 4.5, 9.96];

    for (let i = 0; i < nums.length; i++)
        console.log(`nums[${i}] == ${nums[i]}`);

    for (let i in nums) {
        if (i == 2) {
            continue;
        }
        console.log(`nums[${i}] == ${nums[i]}`);
    }
    /*
        In the above example this code sentence fails
        `
        if (i === 2) {
            continue;
        }
        `
        Because typeof i is string.
    */
}

{
    /** 
     * While and for loops can have labels, and they can also have 
     * ‘continue’ or break’ statements that accept a label as the parameter. 
     * 
     * e.g.
    */
    let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    extern:
    for (x in nums) {
        for (y in nums) {
            if (x == 2 && y == 3) {
                break extern;
            }
            console.log(`${x}, ${y}`);
        }
    }
}
