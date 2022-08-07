const firstName = 'Victor';

console.log(firstName.charAt(2));
console.log(firstName.charAt(10));
console.log(firstName.charCodeAt(3));
console.log(firstName.indexOf('r'));

console.log(firstName.substring(4));
console.log(firstName.substring(2, 6));

console.log(firstName.concat(' ').concat('Nunes'));
console.log(firstName + ' ' + 'Nunes');

/**
 * Using template string.
 */
console.log(`${firstName} Nunes`);

/**
 * Replaces text in a string, using a regular expression or search string.
 */
console.log(firstName.replace('c', ''));

/**
 * Regex expressions.
 * \d --> digits
 * \w --> words
 * g --> globally
 */
console.log(`RegExp type is:    ${typeof(RegExp)}`);
console.log(("Vict0r").replace(/\d/, 'o'));
console.log(("Vict0r").replace(/\w/g, '1'));

console.log((`${firstName}, Nunes`).split(', '));
