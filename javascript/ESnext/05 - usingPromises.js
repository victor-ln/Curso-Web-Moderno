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

/*
let names = []
getClass('A').then(students => {
    names = names.concat(students.map(s => `A: ${s.nome}`))
    getClass('B').then(students => {
        names = names.concat(students.map(s => `B: ${s.nome}`))
        getClass('C').then(students => {
            names = names.concat(students.map(s => `C: ${s.nome}`))
            console.log(names)
        })
    })
})
*/

Promise.all([getClass('A'), getClass('B'), getClass('C')])
    .then(classes => [].concat(...classes))
    .then(students => students.map(s => s.nome))
    .then(names => console.log(names))
    .catch(e => console.log(e.message))

getClass('D').catch(e => console.log(e.message))

getClass('E').then(
    classes => console.log(classes), 
    e => console.log(e.message)
)
