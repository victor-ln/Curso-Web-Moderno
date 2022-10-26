function isLeapYear(year) {
    if (year <= 0)
        return false;
    if (year % 4)
        return false;
    if (year % 100)
        return true;
    return year % 400 ? false : true;
}

console.log(isLeapYear(2013));
console.log(isLeapYear(2014));
console.log(isLeapYear(2012));
console.log(isLeapYear(1900));
console.log(isLeapYear(2000));
