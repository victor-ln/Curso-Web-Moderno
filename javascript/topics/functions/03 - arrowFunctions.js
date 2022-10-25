/* Arrow functions were introduced in ES6 or ES2015 */

let square = function(a) {
    return a * a;
};

square = (a) => {
    return a * a;
};

/**
 * If the function has only one parameter, 
 * it is possible to omit the parentheses in the arguments
*/
square = a => a * a; /* Implicit return */

/**
 * Arrow Functions have no arguments object.

    let test = () => {
        for (i in arguments)
            console.log(arguments[i]);
    }
*/

let hello = () => 'hello';
hello = _ => 'hello'; /* Any param */

/** 
 * Arrow functions don't provide their own 'this' binding
 * (it retains the 'this' value of the enclosing lexical context).
*/

function counter() {
    this.sec = 0;
    this.printTime = () => {
        this.sec++;
        console.log(this.sec);
        if (this.sec == 2)
            clearInterval(this.intervalID);
    };
    this.intervalID = setInterval(this.printTime, 1000);
}

new counter

let cmpThis = function(param) {
    console.log(this === param);
};

cmpThis(global);
cmpThis(this); /* 'this' is not 'this' hahahaha */

const obj = {};
cmpThis = cmpThis.bind(obj);

cmpThis(global);
cmpThis(obj);

let cmpThisArrow = param => console.log(this === param);

cmpThisArrow(global);
cmpThisArrow(module.exports);
cmpThisArrow(this);

/**
 * You cannot rebind this in an arrow function. 
 * It will always be defined as the context in which it was defined.
*/
cmpThisArrow = cmpThisArrow.bind(obj);
cmpThisArrow(obj);
