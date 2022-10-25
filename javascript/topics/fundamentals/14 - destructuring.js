// destructuring assignment is a new feature from ES2015

{
    const person = {
        name:   "Victor",
        age:    20,
        occupation: "Programmer",
        address: {
            street: "ABC",
            number: 123,
        }
    }

    const {name, age} = person;
    console.log(name, age);

    const {name: n, age: a} = person;
    console.log(n, a);

    const { address: {street, number, zipCode} , lastname = null } = person;
    console.log(street, number, zipCode, lastname);

    /** 
     * It fails
        const { account: {balance} } = person;
        console.log(balance);
    */
}

{
    const [array] = [10];
    console.log(array);

    const [n1, , n3, , n5, n6 = 0] = [1, 2, 3, 4];
    console.log(n1, n3, n5, n6);

    const [, [, grade]] = [[, 8, 8], [9, 6, 8], 10];
    console.log(grade);
}

{
    function rand({min = 0, max = 1000}) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    console.log(rand({min: 0, max: 20}));
    console.log(rand({min: 10}));
    console.log(rand({}));
    /**
     * It fails
        console.log(rand());
     */
}

{
    function rand([min = 0, max = 1000]) {
        if (min > max)
            [min, max] = [max, min];
        return Math.floor(Math.random() * (max - min) + min);
    }
    console.log(rand([0, 20]));
    console.log(rand([, 100]));
    console.log(rand([]));
    /**
     * It fails
        console.log(rand());
     */
}
