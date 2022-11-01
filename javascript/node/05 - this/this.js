console.log(this === globalThis);
console.log(this === module.exports);
console.log(this === exports);

function logThisFunc() {
    console.log('Inside function scope');
    console.log(this === globalThis);
    console.log(this === module.exports);
    console.log(this === exports);
}

const logThisArrowFunc = _ => {
    console.log('Inside arrow function scope');
    console.log(this === globalThis);
    console.log(this === module.exports);
    console.log(this === exports);
}

logThisFunc();
logThisArrowFunc();
