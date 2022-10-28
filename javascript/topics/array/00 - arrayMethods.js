/**
 * Arrays
 * 
 * Mozilla:
 * 
 * In JavaScript, arrays aren't primitives but are instead Array objects
 * with the following core characteristics:
 * 
 * - JavaScript arrays are resizable and can contain a mix of different data 
 * types. (When those characteristics are undesirable, use typed arrays instead.)
 * 
 * - JavaScript arrays are not associative arrays and so, array elements cannot 
 * be accessed using arbitrary strings as indexes, but must be accessed using 
 * nonnegative integers (or their respective string form) as indexes.
 * 
 * - JavaScript array-copy operations create shallow copies. 
 * (All standard built-in copy operations with any JavaScript objects 
 * create shallow copies, rather than deep copies).
 */

const pilots = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];

/**
 * The pop() method removes the last element from an array and returns 
 * that element. This method changes the length of the array.
 */
pilots.pop();
console.log(pilots);

/**
 * The push() method adds one or more elements to the end of 
 * an array and returns the new length of the array.
 */
pilots.push('Verstappen');

/**
 * The shift() method removes the first element from an array and returns that 
 * removed element. This method changes the length of the array.
 */
pilots.shift();
console.log(pilots);

/**
 * The unshift() method adds one or more elements to the beginning of 
 * an array and returns the new length of the array.
 */
pilots.unshift('Hamilton');
console.log(pilots);

/**
 * The splice() method changes the contents of an array by removing or replacing
 * existing elements and/or adding new elements in place.
 */

pilots.splice(2, 0, 'Bottas', 'Massa'); /* <-- adding */
/* pilots.splice(2, 2, 'Bottas', 'Massa'); <-- replacing */
console.log(pilots);

pilots.splice(3, 1); /** <-- removing */
console.log(pilots);

/**
 * The slice() method returns a shallow copy of a portion of an array into a 
 * new array object selected from start to end where start and end represent 
 * the index of items in that array.
 */
const podium = pilots.slice(0, 3);
const otherPilots = pilots.slice(3);

console.log(podium);
console.log(otherPilots);

/** Shallow copy example: */
{
    const myHonda = {
        color: 'red',
        wheels: 4,
        engine: { cylinders: 4, size: 2.2 }
    };
    const myCar = [myHonda, 2, 'cherry condition', 'purchased 1997'];
    const newCar = myCar.slice(0, 2);

    myHonda.color = 'purple';
    console.log('The new color of my Honda is ', myHonda.color);
    console.log('myCar[0].color = ', myCar[0].color);
    console.log('newCar[0].color = ', newCar[0].color);
}
