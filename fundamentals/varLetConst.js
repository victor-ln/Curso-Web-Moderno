var a = 20;
let b = 40;

var a = 50;
/*
let a = 50; <--  It fails!
*/
b = 32;

console.log(a, b);

const c = 42;
/*
c += 15; <-- It fails!
*/
console.log(c);

/*
    Variables defined with the 'var' keyword has global and function scope.
*/
var numberVar = 1;
{
    var numberVar = 2;
    console.log("inside = ", numberVar);
}
console.log("outside = ", numberVar);

/*
    Variables defined with the 'let' keyword has global, block and function scope.
*/
let numberLet = 1;
{
    let numberLet = 2;
    console.log("inside = ", numberLet);
}

console.log("outside = ", numberLet);

{
    const funcsVar = [];
    for (var i = 0; i < 10; i++) {
        funcsVar.push(function() {
            console.log(i);
        });
    }
    funcsVar[0]();
    funcsVar[4]();
}

{
    const funcsLet = [];
    for (let i = 0; i < 10; i++) {
        funcsLet.push(function() {
            console.log(i);
        });
    }
    funcsLet[0]();
    funcsLet[4]();
}
