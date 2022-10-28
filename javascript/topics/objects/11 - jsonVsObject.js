const obj = {a: 1, b: 2, c: 3, sum: (a, b, c) => a + b + c };
console.log(obj);
console.log(JSON.stringify(obj));
// console.log(JSON.parse('{a:1,b:2,c:3}'));
// console.log(JSON.parse("{'a':1,'b':2,'c':3}"));
console.log(JSON.parse('{"a":1,"b":2,"c":3, "d": {}, "e": []}'));
