function sellFruit(fruit) {
    switch (fruit.toLowerCase()) {
        case 'apple':
            console.log('We dont sell this fruit here');
            break;
        case 'kiwi':
            console.log('We are with kiwifruit shortage');
            break;
        case 'watermelon':
            console.log('Here it is, its 3 dollars a kilo');
            break;
        default:
            console.log('We dont sell this product');
    }
}

sellFruit('Apple');
sellFruit('Kiwi');
sellFruit('watermelon');
sellFruit('strawberry');
