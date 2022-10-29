const shoppingList = ['apple', 'eggs', 'butter', 'bread'];

shoppingList.forEach((item, idx, list) => {
    console.log(`${idx}) ${item}`);
    console.log(list);
});

shoppingList.forEach(item => console.log(`${item}`));
