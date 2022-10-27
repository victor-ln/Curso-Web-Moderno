/**
 * The indexOf() method, given one argument: a substring to search for, 
 * searches the entire calling string, and returns the index of the first 
 * occurrence of the specified substring or -1 if not found.
 */

function cmpStrings(str1, str2) {
    if (str1.lenght < str2.lenght)
        [str1, str2] = [str2, str1];
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    for (let i in str1) {
        if (str2.indexOf(str1[i]) == -1)
            return false;
    }
    return true;
}

console.log(cmpStrings('linux', 'Linux'));
console.log(cmpStrings('linux', 'LInUx'));
console.log(cmpStrings('linux', 'xunli'));
console.log(cmpStrings('abcdf', 'dcba'))
