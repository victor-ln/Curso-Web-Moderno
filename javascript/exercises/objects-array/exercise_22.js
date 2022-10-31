function countChInString(ch, string) {
    return string.length - string.split(ch).join('').length;
}

string = "assasassassassabuvnwvs";

console.log(countChInString('s', string));
