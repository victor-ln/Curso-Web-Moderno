/**
 * Set objects are collections of values. A value in the Set may only 
 * occur once; it is unique in the Set's collection. 
 * You can iterate through the elements of a set in insertion order. 
 * The insertion order corresponds to the order in which each element was 
 * inserted into the set by the add() method
 */

const teams = new Set

teams.add('Brazil')
teams.add('French').add('Germany').add('England')
teams.add('Brazil')

console.log(teams, `size: ${teams.size}`)
console.log(teams.has('england'))
console.log(teams.has('England'))
teams.delete('England')
console.log(teams.has('England'))

const numbers = [1, 4, 5, 3, 4, 1, 5, 3]
const numbersSet = new Set(numbers)
console.log(numbersSet)
