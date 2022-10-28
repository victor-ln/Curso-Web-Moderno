const pilots = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
pilots.pop();
console.log(pilots);

pilots.push('Verstappen');

pilots.shift();
console.log(pilots);

pilots.unshift('Hamilton');
console.log(pilots);

pilots.splice(2, 0, 'Bottas', 'Massa');
console.log(pilots);

pilots.splice(3, 1);
console.log(pilots);

const podium = pilots.slice(0, 3);
const otherPilots = pilots.slice(3);

console.log(podium);
console.log(otherPilots);
