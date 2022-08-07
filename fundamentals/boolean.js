let isActive = false;

console.log(isActive);

isActive = 1;
console.log(!!isActive);
console.log(isActive != false);

console.log('True values...');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'text');
console.log(!![]);
console.log(!!{});
/**
 * A JavaScript object literal, that is, a comma-separated
 * list of name-value pairs wrapped in curly braces
 */

console.log(!!Infinity);
console.log(!!(isActive = true));

console.log('False values...');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isActive = false));

console.log(!!('' || 0 || null || ' '));
console.log(('' || 0 || null || 'returned value'));

let name = '';

console.log(name || 'Unknow');
