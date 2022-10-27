{
    const a = 1;
    const b = 2;
    const c = 3;

    const obj1 = {a: a, b: b, c: c};
    const obj2 = {a, b, c};

    console.log(obj1, obj2);
}
{
    const attrName = 'grade';
    const attrValue = 7.8;

    const obj3 = {};

    obj3[attrName] = attrValue;
    console.log(obj3);

    const obj4 = {[attrName]: attrValue};
    console.log(obj4);
}
{
    const obj5 = {
        func1: function() {
            console.log('func1');
        },
        func2() {
            console.log('func2');
        }
    }
    console.log(obj5);
}
