/** using promises */

const http = require('http')

const getClass = letter => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letter}.json`
    return new Promise((resolve, reject) => {
        
        http.get(url, res => {
            let result = ''
            
            res.on('data', data => { result += data })
            res.on('end', _ => {
                try {
                    resolve(JSON.parse(result))
                } catch (error) {
                    reject(error)
                }
            })
        })
    })
}

/**
 * An async function is a function declared with the async keyword, and the 
 * await keyword is permitted within it. 
 * The async and await keywords enable asynchronous, promise-based behavior to 
 * be written in a cleaner style, avoiding the need 
 * to explicitly configure promise chains.
 * 
 * It returns a Promise, which will be resolved with the value returned by the 
 * async function, or rejected with an exception thrown from, 
 * or uncaught within, the async function.
 */

const groupClasses = classes => [].concat(...classes)
const getStudentsNames = students => students.map(s => s.nome)

async function getStudents() {
    const classA = await getClass('A');
    const classB = await getClass('B');
    const classC = await getClass('C');

    return groupClasses(classA, classB, classC)
}

getStudents()
    .then(getStudentsNames)
    .then(console.log)
    .catch(e => console.error(e.message))
