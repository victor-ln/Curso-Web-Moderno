/**
 * Map objects are collections of key-value pairs. A key in the Map may only 
 * occur once; it is unique in the Map's collection. 
 * A Map object is iterated by key-value pairs — a for...of loop returns a 
 * 2-member array of [key, value] for each iteration. Iteration happens in 
 * insertion order, which corresponds to the order in which each key-value 
 * pair was first inserted into the map by the set() method
 */

const technologies = new Map

technologies.set('react', { framework: false })
technologies.set('angular', { framework: true })

console.log(technologies.get('react').framework)

const multipleKeyTypes = new Map([
    [function () {}, 'Function'],
    [{}, 'Object'],
    [123, 'Number']
])

multipleKeyTypes.forEach((value, key) => {
    console.log(key, value)
})

console.log(multipleKeyTypes.has(123))
multipleKeyTypes.delete(123)
console.log(multipleKeyTypes.has(123))
console.log(multipleKeyTypes.size)
