function removeVowels(string) {
    return string.replace(/[aeiou]+/gi, '');
}

console.log(removeVowels('FundamentAls'));
console.log(removeVowels('code'));
console.log(removeVowels('make'));
