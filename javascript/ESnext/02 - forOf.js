for (let letter of 'Word') {
    console.log(letter)
}

const ecmaScriptSubjects = ['map', 'set', 'forOf']

for (let topic of ecmaScriptSubjects) {
    console.log(topic)
}

const viewedSubjects = new Map([
    ['Map', true],
    ['Set', true],
    ['Promise', false],
])

for (let subject of viewedSubjects) {
    console.log(subject)
}

for (let key of viewedSubjects.keys()) {
    console.log(key)
}

for (let value of viewedSubjects.values()) {
    console.log(value)
}

for (let [key, value] of viewedSubjects.entries()) {
    console.log(key, value)
}

for (let [key, value] of viewedSubjects) {
    console.log(key, value)
}
