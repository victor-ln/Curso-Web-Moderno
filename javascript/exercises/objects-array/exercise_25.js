function keyValueReverse(obj) {
    return Object.fromEntries(
        Object.entries(obj).map(pair => pair.reverse())
    );
}

obj = {a:1, b:2, c:3};
nObj = keyValueReverse(obj);
console.log(nObj);
