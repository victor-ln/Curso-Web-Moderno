/**
 * It takes an object and a key, and returns a new object with the key removed
 * @param obj - The object you want to remove a key from
 * @param key - The key to remove from the object.
 * @returns - New object with the key removed
 */
function removeObjKey(obj, key) {
    // let newObj = JSON.parse(JSON.stringify(obj));
    // let newObj = Object.assign({}, obj);
    let newObj = {...obj};
    delete newObj[key];
    return newObj;
}

let obj = {a: 1, b: 2, c: 3, d: 4};
let newObj = removeObjKey(obj, 'a');

console.log(newObj);
console.log(`Is the same reference: ${Object.is(obj, newObj)}`);
