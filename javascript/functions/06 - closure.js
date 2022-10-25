
/**
 * A closure gives you access to an outer function's scope
 * from an inner function. In JavaScript, closures are created
 * every time a function is created, at function creation time.
*/

const value = 'Global';

function outside() {
    const value = 'Local';
    function inside() {
        console.log(value);
    }
    return inside;
}

const func = outside();
func();
