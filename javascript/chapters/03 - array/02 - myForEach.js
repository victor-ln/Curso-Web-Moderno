const shoppingList = ['apple', 'eggs', 'butter', 'bread'];

Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}

shoppingList.myForEach(item => console.log(item));

shoppingList.myForEach((item, idx) => console.log(`${idx}) ${item}`));

shoppingList.myForEach((item, idx, list) => {
    console.log(`${idx + 1}) ${item}`); 
    console.log(list);
});
