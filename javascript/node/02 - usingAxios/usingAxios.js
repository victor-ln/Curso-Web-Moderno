const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

const countryAndGender = e => e.pais == 'China' && e.genero == 'F';
const lowerSalary = (prev, curr) => prev.salario < curr.salario ? prev : curr
const higherSalary = (prev, curr) => prev.salario > curr.salario ? prev : curr

axios.get(url).then(response => {
    const employees = response.data
    console.log(employees.filter(countryAndGender).reduce(lowerSalary));
})
