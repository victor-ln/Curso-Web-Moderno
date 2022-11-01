console.log(this === globalThis);
console.log(this === module.exports);
console.log(this === exports);

function logThis() {
    console.log('Inside function scope');
    console.log(this === globalThis);
    console.log(this === module.exports);
    console.log(this === exports);
}

logThis();
