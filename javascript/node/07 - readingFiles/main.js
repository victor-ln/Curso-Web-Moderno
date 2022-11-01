const fs = require('fs');
const path = __dirname + '/env.json';

const content = fs.readFileSync(path, 'utf-8');
console.log(content);

fs.readFile(path, 'utf-8', (err, content) => {
    const config = JSON.parse(content);
    console.log(`${config.db.host}:${config.db.port}`);
})

const config = require('./env.json');
console.log(config.db);

fs.readdir(__dirname, (err, files) => {
    console.log('folder content...');
    console.log(files);
})
