console.log(typeof(Object));
console.log(typeof(new Object));

const Client = function() {};
console.log(typeof(Client));
console.log(typeof(new Client));

class Product {}; /** ES 2015 (ES6) */
console.log(typeof(Product));
console.log(typeof(new Product));

console.log(typeof Function);
console.log((function () {}).constructor === Function);

class Funcionario {
    constructor (nome, cargo, salario) {
        this.nome = nome
        this.cargo = cargo
        this.salario = salario
    }
}
 
const funcionario1 = new Funcionario('Ana Silva' , 'Analista de TI', 8400)
const funcionario2 = new Funcionario('Pedro Mesquita' , 'Gerente', 15600)
const funcionario3 = new Funcionario('Rafael Souza' , 'Contador', 10512.50)

console.log(funcionario1.cargo);
