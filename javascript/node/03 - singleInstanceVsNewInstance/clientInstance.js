/**
 * Modules are cached after the first time they are loaded. 
 * This means (among other things) that every call to require('foo') will get 
 * exactly the same object returned, if it would resolve to the same file.
 */
const counterA = require("./singleInstance");
const counterB = require("./singleInstance");

/**
 * Using factory functions
 */
const counterC = require("./newInstance")();
const counterD = require("./newInstance")();

counterA.increment();
counterA.increment();

console.log(counterA.counter, counterB.counter);

counterC.increment();
counterC.increment();

console.log(counterC.counter, counterD.counter);
