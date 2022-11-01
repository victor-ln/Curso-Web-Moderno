const moduleA = require('./moduleA');
const moduleB = require('./moduleB.js');

console.log(moduleA.message);
console.log(moduleA.welcome);
console.log(moduleA.seeya);
console.log(moduleA);

console.log(moduleB.goodMorning);
console.log(moduleB.goodNight());
console.log(moduleB);
