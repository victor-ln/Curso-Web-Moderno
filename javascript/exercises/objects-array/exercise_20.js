function luckTest(guess) {
    let randNbr = Math.floor(Math.random() * 11);
    if (guess == randNbr)    
        console.log(`Congratulations! the drawn number was ${randNbr}`);
    else
        console.log(`what a pity, the number drawn was ${randNbr}`);
}

luckTest(5);
