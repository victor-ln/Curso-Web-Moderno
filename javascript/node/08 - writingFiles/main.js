const fs = require('fs');

const product = {
    name: 'Notebook',
    price: 1599.99,
    discount: 0.1
}

fs.writeFile(__dirname + '/generatedFile.json', JSON.stringify(product), err => {
    console.log(err || "File saved");
});
