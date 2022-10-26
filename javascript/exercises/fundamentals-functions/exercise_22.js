function countBanknotes(value) {
    let bankNotes = [100, 50, 10, 5, 1];
    let banknotesCount;

    for (let i = 0; i < 5; i++) {
        banknotesCount = Math.floor(value / bankNotes[i]);
        if (banknotesCount) {
            console.log(`${banknotesCount} banknote(s) of ${bankNotes[i]}`);
            value %= bankNotes[i];
        }
    }
}

countBanknotes(546);
