Array.prototype.myMap = function(callback) {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this));
    }
    return newArray;
}

const shoppingCart = [
    '{"name": "apple", "price": 1.19}',
    '{"name": "eggs", "price": 3.99}',
    '{"name": "butter", "price": 2.49}',
    '{"name": "bread", "price": 1.99}'
];

let prices = shoppingCart.myMap(item => JSON.parse(item).price);
console.log(prices);
