function searchSubstrings(string, array) {
    return array.filter(str => str.includes(string));
}

console.log(searchSubstrings('pro', ['programming', 'mobile', 'professional']));
console.log(searchSubstrings('python', ['javascript', 'java', 'c++']));
