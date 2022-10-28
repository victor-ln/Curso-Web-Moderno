{
    /**
     * The Object.preventExtensions() method prevents new properties from ever 
     * being added to an object. 
     * It also prevents the object's prototype from being re-assigned.
     */
    const product = Object.preventExtensions({
        name: 'Example 1',
        price: 1.99,
        code: 1322
    });

    console.log(`Is extensible: ${Object.isExtensible(product)}`);

    product.name = 'Example 2';
    product.discount = 0.05;
    delete product.code;
    console.log(product);
}
{
    const person = { name: 'Julie', age: 22 };
    /**
     * Sealing an object prevents extensions and makes existing properties 
     * non-configurable. A sealed object has a fixed set of properties: 
     * new properties cannot be added, existing properties cannot be removed, 
     * their enumerability and configurability cannot be changed, 
     * and its prototype cannot be re-assigned.
     */
    Object.seal(person);
    console.log(`Is sealed: ${Object.isSealed(person)}`);

    person.nickname = 'ju';
    delete person.name;
    person.age++;
    console.log(person);
}
