const fs = require('fs')
const filename = __dirname + '/data.txt'

/**
 * It returns a promise that resolves to the content of the file with the given
 * filename
 * @param filename - The name of the file to read.
 * @returns A promise that will resolve to the content of the file.
 */
function getFileContent(filename) {
    const readRequest = (resolve, reject) => {
        const readResponse = (err, read) => err ? reject(err) : resolve(read)
        fs.readFile(filename, 'utf-8', readResponse)
    }
    return new Promise(readRequest)
}

getFileContent(filename)
    .then(console.log)
    .catch(console.error)
